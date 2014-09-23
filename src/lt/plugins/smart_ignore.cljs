(ns lt.plugins.smart-ignore
  (:require [lt.objs.settings :as settings]
            [lt.objs.workspace :as workspace]
            [lt.objs.files :as files]
            [clojure.set :as cset]
            [clojure.string :as s]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd]
            [goog.string :as gs])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn file->ignore-regexs [file]
  (let [parent (files/parent file)]
    (some->> (files/open-sync file)
             :content
             (#(s/split % #"\n"))
             (remove #(re-find #"^\s*#|^\s*$" %)) ;;ignore comments and whitespace
             (map #(s/replace-first % #"^/" ""))
             (map (fn [relative]
                    (if (and (files/dir? (files/join parent relative))
                             (not (.endsWith relative "/")))
                      (str relative "/") relative)))
             ;; This can return non-basenames e.g. dir/file1 which isn't compatible with walkdir2.js.
             ;; However, only returning basenames is too agressive to apply across multiple workspaces.
             ;; Per-workspace ignores would resolve this.
             (map #(str "^" (gs/regExpEscape %) "$")))))

(defn update-ignore-pattern [dir]
  (let [gitignore (files/join dir ".gitignore")]
    (when (files/exists? gitignore)
      (let [existing (s/split (.-source files/ignore-pattern) #"\|")
            new (file->ignore-regexs gitignore)
            new-pattern (->> (cset/union (set new) (set existing))
                             sort
                             (s/join "|"))]
        (set! files/ignore-pattern (js/RegExp. new-pattern))))))

(defn reset-ignore-pattern-for-current-workspace []
  (defonce default-ignore-pattern files/ignore-pattern)

  (let [dirs (:folders @workspace/current-ws)]
    (.log js/console (str "Setting ignore-pattern for " (s/join ", " dirs)))
    (set! files/ignore-pattern default-ignore-pattern)
    (doseq [dir dirs]
      (update-ignore-pattern dir))
    (notifos/set-msg! "Updated ignore-pattern.")))

(behavior ::watch-add-folder
          :triggers #{:add.folder!}
          :reaction (fn [this path]
                      (update-ignore-pattern path)
                      (notifos/set-msg! "Updated ignore-pattern.")))

;; I'm doing this instead of hooking into workspace.behaviors which proved cumbersome
;; to work with when updating the same behavior multiple times i.e. juggling diffs and
;; behaviors not consistently reloading.
;;
;; This behavior handles at least three important cases:
;; 1. When LightTable first starts, set the ignore-pattern.
;; 2. Whenever anything updates user.behaviors, ensure that our ignore-pattern is not overridden.
;; 3. Whenever we switch workspaces, ensure ignore-pattern is for the current folders.
;;    I was hooking into :recent.workspace/select! before but no need with this hook.
;;
;; Note: Updating user.behaviors to have a new default ignore-pattern will not take effect here.
;; This is on purpose, as resetting default-ignore-pattern here is incorrect behavior for case 2.
(behavior ::behaviors-refreshed
          :triggers #{:behaviors.refreshed}
          :reaction reset-ignore-pattern-for-current-workspace)

(cmd/command {:command :ltfiles.reset-workspace-ignore-pattern
              :desc "smart-ignore: Resets ignore-pattern for workspace"
              :exec reset-ignore-pattern-for-current-workspace})

(comment
  (update-ignore-pattern path)
  (lt.object/raise workspace/current-ws :add.folder! path)
  (lt.object/raise workspace/current-ws :remove.folder! path)
  (sort (clojure.string/split (.-source files/ignore-pattern) #"\|")))
