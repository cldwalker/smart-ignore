if(!lt.util.load.provided_QMARK_('lt.plugins.smart-ignore')) {
goog.provide('lt.plugins.smart_ignore');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('clojure.set');
lt.plugins.smart_ignore.file__GT_ignore_regexs = (function file__GT_ignore_regexs(file){var parent = lt.objs.files.parent.call(null,file);var G__8247 = lt.objs.files.open_sync.call(null,file);var G__8247__$1 = (((G__8247 == null))?null:new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(G__8247));var G__8247__$2 = (((G__8247__$1 == null))?null:((function (G__8247,G__8247__$1){
return (function (p1__8245_SHARP_){return clojure.string.split.call(null,p1__8245_SHARP_,/\n/);
});})(G__8247,G__8247__$1))
.call(null,G__8247__$1));var G__8247__$3 = (((G__8247__$2 == null))?null:cljs.core.map.call(null,((function (G__8247,G__8247__$1,G__8247__$2){
return (function (relative){if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,lt.objs.files.join.call(null,parent,relative))))
{return [cljs.core.str(relative),cljs.core.str("/")].join('');
} else
{return relative;
}
});})(G__8247,G__8247__$1,G__8247__$2))
,G__8247__$2));var G__8247__$4 = (((G__8247__$3 == null))?null:cljs.core.map.call(null,goog.string.regExpEscape,G__8247__$3));return G__8247__$4;
});
lt.plugins.smart_ignore.update_ignore_pattern = (function update_ignore_pattern(dir){var gitignore = lt.objs.files.join.call(null,dir,".gitignore");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,gitignore)))
{var existing = clojure.string.split.call(null,lt.objs.files.ignore_pattern.source,/\|/);var new$ = lt.plugins.smart_ignore.file__GT_ignore_regexs.call(null,gitignore);var new_pattern = clojure.string.join.call(null,"|",cljs.core.sort.call(null,clojure.set.union.call(null,cljs.core.set.call(null,new$),cljs.core.set.call(null,existing))));lt.objs.files.ignore_pattern = (new RegExp(new_pattern));
return lt.objs.notifos.set_msg_BANG_.call(null,"Updated ignore-pattern.");
} else
{return null;
}
});
lt.plugins.smart_ignore.__BEH__watch_add_folder = (function __BEH__watch_add_folder(this$,path){return lt.plugins.smart_ignore.update_ignore_pattern.call(null,path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","watch-add-folder","lt.plugins.smart-ignore/watch-add-folder",3036159218),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.__BEH__watch_add_folder,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),null], null), null));
}

//# sourceMappingURL=smart_ignore_compiled.js.map