(ns lt.plugins.smart-ignore
  (:require [lt.objs.settings :as settings]
            [lt.objs.workspace :as workspace]
            [lt.objs.files :as files]
            [clojure.set :as cset]
            [clojure.string :as s]
            [lt.objs.notifos :as notifos]
            [goog.string :as gs])
  (:require-macros [lt.macros :refer [defui behavior]]))


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

(behavior ::watch-add-folder
          :triggers #{:add.folder!}
          :reaction (fn [this path] (update-ignore-pattern path)))


(comment
  (def path "/Users/me/code/repo/bolt")
  (lt.object/raise workspace/current-ws :add.folder! path)
  (settings/safe-read (:ws-behaviors @workspace/current-ws) "workspace.behaviors")
  (prn files/ignore-pattern)
  (lt.objs.sidebar.workspace/open-folder))
