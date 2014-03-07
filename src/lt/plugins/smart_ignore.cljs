(ns lt.plugins.smart-ignore
  (:require [lt.object :as object]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(behavior ::watch-add-folder
          :triggers #{:add.folder!}
          :reaction (fn [this path]
                      (prn "ADD!")
                      (.log js/console this path)))


(comment
  (lt.objs.sidebar.workspace/open-folder))
