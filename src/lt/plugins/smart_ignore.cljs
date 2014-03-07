(ns lt.plugins.smart-ignore
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from smart-ignore"])

(object/object* ::smart-ignore.hello
                :tags [:smart-ignore.hello]
                :name "smart-ignore"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::smart-ignore.hello))

(cmd/command {:command ::say-hello
              :desc "smart-ignore: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})
