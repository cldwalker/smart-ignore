(ns lt.plugins.smart-ignore
  (:require [lt.objs.settings :as settings]
            [lt.objs.workspace :as workspace]
            [lt.objs.files :as files]
            [clojure.set :as cset]
            [clojure.string :as s]
            [lt.objs.notifos :as notifos]
            [goog.string :as gs])
  (:require-macros [lt.macros :refer [defui behavior]]))


;; TODO: Ensure this saves a user-configured pattern
(def default-ignore-pattern  (js/RegExp. "(^\\..*)|\\.class$|target/|svn|cvs|\\.git|\\.pyc|~|\\.swp|\\.jar|.DS_Store|\\.nrepl-port")  #_files/ignore-pattern)

(defn file->ignore-regexs [file]
  (let [parent (files/parent file)]
    (some->> (files/open-sync file)
             :content
             (#(s/split % #"\n"))
             (map (fn [relative]
                    (if (files/dir? (files/join parent relative))
                      (str relative "/") relative)))
             (map gs/regExpEscape))))

(defn update-ignore-pattern [dir]
  (let [gitignore (files/join dir ".gitignore")]
    (when (files/exists? gitignore)
      (let [existing (s/split (.-source files/ignore-pattern) #"\|")
            new (file->ignore-regexs gitignore)
            new-pattern (->> (cset/union (set new) (set existing))
                             sort
                             (s/join "|"))]
        (set! files/ignore-pattern (js/RegExp. new-pattern))
        (notifos/set-msg! "Updated ignore-pattern.")))))

(defn multi-update-ignore-pattern [dirs]
  (set! files/ignore-pattern default-ignore-pattern)
  (doseq [dir dirs]
    (update-ignore-pattern dir)))

(behavior ::watch-add-folder
          :triggers #{:add.folder!}
          :reaction (fn [this path] (update-ignore-pattern path)))

;; Reset and update ignore pattern when we switch workspaces.
;; I'm doing this instead of hooking into workspace.behaviors which proved cumbersome
;; to work with when updating the same behavior multiple times i.e. juggling diffs and
;; behaviors not consistently reloading.
(behavior ::watch-workspace-select
          :triggers #{:select!}
          :reaction (fn [this]
                      (multi-update-ignore-pattern (:folders @workspace/current-ws))))


(comment
  (def path "/Users/me/code/repo/bolt")
  (file->ignore-regexs path)
  (lt.object/raise workspace/current-ws :add.folder! path)
  (lt.object/raise workspace/current-ws :remove.folder! path)
  (prn files/ignore-pattern))
