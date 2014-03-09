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
lt.plugins.smart_ignore.default_ignore_pattern = (new RegExp("(^\\..*)|\\.class$|target/|svn|cvs|\\.git|\\.pyc|~|\\.swp|\\.jar|.DS_Store|\\.nrepl-port"));
lt.plugins.smart_ignore.file__GT_ignore_regexs = (function file__GT_ignore_regexs(file){var parent = lt.objs.files.parent.call(null,file);var G__8698 = lt.objs.files.open_sync.call(null,file);var G__8698__$1 = (((G__8698 == null))?null:new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(G__8698));var G__8698__$2 = (((G__8698__$1 == null))?null:((function (G__8698,G__8698__$1){
return (function (p1__8696_SHARP_){return clojure.string.split.call(null,p1__8696_SHARP_,/\n/);
});})(G__8698,G__8698__$1))
.call(null,G__8698__$1));var G__8698__$3 = (((G__8698__$2 == null))?null:cljs.core.map.call(null,((function (G__8698,G__8698__$1,G__8698__$2){
return (function (relative){if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,lt.objs.files.join.call(null,parent,relative))))
{return [cljs.core.str(relative),cljs.core.str("/")].join('');
} else
{return relative;
}
});})(G__8698,G__8698__$1,G__8698__$2))
,G__8698__$2));var G__8698__$4 = (((G__8698__$3 == null))?null:cljs.core.map.call(null,goog.string.regExpEscape,G__8698__$3));return G__8698__$4;
});
lt.plugins.smart_ignore.update_ignore_pattern = (function update_ignore_pattern(dir){var gitignore = lt.objs.files.join.call(null,dir,".gitignore");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,gitignore)))
{var existing = clojure.string.split.call(null,lt.objs.files.ignore_pattern.source,/\|/);var new$ = lt.plugins.smart_ignore.file__GT_ignore_regexs.call(null,gitignore);var new_pattern = clojure.string.join.call(null,"|",cljs.core.sort.call(null,clojure.set.union.call(null,cljs.core.set.call(null,new$),cljs.core.set.call(null,existing))));lt.objs.files.ignore_pattern = (new RegExp(new_pattern));
return lt.objs.notifos.set_msg_BANG_.call(null,"Updated ignore-pattern.");
} else
{return null;
}
});
lt.plugins.smart_ignore.multi_update_ignore_pattern = (function multi_update_ignore_pattern(dirs){lt.objs.files.ignore_pattern = lt.plugins.smart_ignore.default_ignore_pattern;
var seq__8703 = cljs.core.seq.call(null,dirs);var chunk__8704 = null;var count__8705 = 0;var i__8706 = 0;while(true){
if((i__8706 < count__8705))
{var dir = cljs.core._nth.call(null,chunk__8704,i__8706);lt.plugins.smart_ignore.update_ignore_pattern.call(null,dir);
{
var G__8707 = seq__8703;
var G__8708 = chunk__8704;
var G__8709 = count__8705;
var G__8710 = (i__8706 + 1);
seq__8703 = G__8707;
chunk__8704 = G__8708;
count__8705 = G__8709;
i__8706 = G__8710;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8703);if(temp__4092__auto__)
{var seq__8703__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8703__$1))
{var c__7497__auto__ = cljs.core.chunk_first.call(null,seq__8703__$1);{
var G__8711 = cljs.core.chunk_rest.call(null,seq__8703__$1);
var G__8712 = c__7497__auto__;
var G__8713 = cljs.core.count.call(null,c__7497__auto__);
var G__8714 = 0;
seq__8703 = G__8711;
chunk__8704 = G__8712;
count__8705 = G__8713;
i__8706 = G__8714;
continue;
}
} else
{var dir = cljs.core.first.call(null,seq__8703__$1);lt.plugins.smart_ignore.update_ignore_pattern.call(null,dir);
{
var G__8715 = cljs.core.next.call(null,seq__8703__$1);
var G__8716 = null;
var G__8717 = 0;
var G__8718 = 0;
seq__8703 = G__8715;
chunk__8704 = G__8716;
count__8705 = G__8717;
i__8706 = G__8718;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.smart_ignore.__BEH__watch_add_folder = (function __BEH__watch_add_folder(this$,path){return lt.plugins.smart_ignore.update_ignore_pattern.call(null,path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","watch-add-folder","lt.plugins.smart-ignore/watch-add-folder",3036159218),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.__BEH__watch_add_folder,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),null], null), null));
lt.plugins.smart_ignore.__BEH__watch_workspace_select = (function __BEH__watch_workspace_select(this$){return lt.plugins.smart_ignore.multi_update_ignore_pattern.call(null,new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","watch-workspace-select","lt.plugins.smart-ignore/watch-workspace-select",4538786176),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.__BEH__watch_workspace_select,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select!","select!",2992004631),null], null), null));
}

//# sourceMappingURL=smart_ignore_compiled.js.map