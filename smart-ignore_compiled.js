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
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.settings');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('lt.objs.command');
goog.require('clojure.set');
lt.plugins.smart_ignore.file__GT_ignore_regexs = (function file__GT_ignore_regexs(file){var parent = lt.objs.files.parent.call(null,file);var G__8090 = lt.objs.files.open_sync.call(null,file);var G__8090__$1 = (((G__8090 == null))?null:new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(G__8090));var G__8090__$2 = (((G__8090__$1 == null))?null:((function (G__8090,G__8090__$1,parent){
return (function (p1__8085_SHARP_){return clojure.string.split.call(null,p1__8085_SHARP_,/\n/);
});})(G__8090,G__8090__$1,parent))
.call(null,G__8090__$1));var G__8090__$3 = (((G__8090__$2 == null))?null:cljs.core.remove.call(null,((function (G__8090,G__8090__$1,G__8090__$2,parent){
return (function (p1__8086_SHARP_){return cljs.core.re_find.call(null,/^\s*#|^\s*$/,p1__8086_SHARP_);
});})(G__8090,G__8090__$1,G__8090__$2,parent))
,G__8090__$2));var G__8090__$4 = (((G__8090__$3 == null))?null:cljs.core.map.call(null,((function (G__8090,G__8090__$1,G__8090__$2,G__8090__$3,parent){
return (function (p1__8087_SHARP_){return clojure.string.replace_first.call(null,p1__8087_SHARP_,/^\//,"");
});})(G__8090,G__8090__$1,G__8090__$2,G__8090__$3,parent))
,G__8090__$3));var G__8090__$5 = (((G__8090__$4 == null))?null:cljs.core.map.call(null,((function (G__8090,G__8090__$1,G__8090__$2,G__8090__$3,G__8090__$4,parent){
return (function (relative){if(cljs.core.truth_((function (){var and__6352__auto__ = lt.objs.files.dir_QMARK_.call(null,lt.objs.files.join.call(null,parent,relative));if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.not.call(null,relative.endsWith("/"));
} else
{return and__6352__auto__;
}
})()))
{return [cljs.core.str(relative),cljs.core.str("/")].join('');
} else
{return relative;
}
});})(G__8090,G__8090__$1,G__8090__$2,G__8090__$3,G__8090__$4,parent))
,G__8090__$4));var G__8090__$6 = (((G__8090__$5 == null))?null:cljs.core.map.call(null,((function (G__8090,G__8090__$1,G__8090__$2,G__8090__$3,G__8090__$4,G__8090__$5,parent){
return (function (p1__8088_SHARP_){return [cljs.core.str("^"),cljs.core.str(goog.string.regExpEscape(p1__8088_SHARP_)),cljs.core.str("$")].join('');
});})(G__8090,G__8090__$1,G__8090__$2,G__8090__$3,G__8090__$4,G__8090__$5,parent))
,G__8090__$5));return G__8090__$6;
});
lt.plugins.smart_ignore.update_ignore_pattern = (function update_ignore_pattern(dir){var gitignore = lt.objs.files.join.call(null,dir,".gitignore");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,gitignore)))
{var existing = clojure.string.split.call(null,lt.objs.files.ignore_pattern.source,/\|/);var new$ = lt.plugins.smart_ignore.file__GT_ignore_regexs.call(null,gitignore);var new_pattern = clojure.string.join.call(null,"|",cljs.core.sort.call(null,clojure.set.union.call(null,cljs.core.set.call(null,new$),cljs.core.set.call(null,existing))));return lt.objs.files.ignore_pattern = (new RegExp(new_pattern));
} else
{return null;
}
});
lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace = (function reset_ignore_pattern_for_current_workspace(){if(typeof lt.plugins.smart_ignore.default_ignore_pattern !== 'undefined')
{} else
{lt.plugins.smart_ignore.default_ignore_pattern = lt.objs.files.ignore_pattern;
}
var dirs = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));console.log([cljs.core.str("Setting ignore-pattern for "),cljs.core.str(clojure.string.join.call(null,", ",dirs))].join(''));
lt.objs.files.ignore_pattern = lt.plugins.smart_ignore.default_ignore_pattern;
var seq__8095_8099 = cljs.core.seq.call(null,dirs);var chunk__8096_8100 = null;var count__8097_8101 = 0;var i__8098_8102 = 0;while(true){
if((i__8098_8102 < count__8097_8101))
{var dir_8103 = cljs.core._nth.call(null,chunk__8096_8100,i__8098_8102);lt.plugins.smart_ignore.update_ignore_pattern.call(null,dir_8103);
{
var G__8104 = seq__8095_8099;
var G__8105 = chunk__8096_8100;
var G__8106 = count__8097_8101;
var G__8107 = (i__8098_8102 + 1);
seq__8095_8099 = G__8104;
chunk__8096_8100 = G__8105;
count__8097_8101 = G__8106;
i__8098_8102 = G__8107;
continue;
}
} else
{var temp__4092__auto___8108 = cljs.core.seq.call(null,seq__8095_8099);if(temp__4092__auto___8108)
{var seq__8095_8109__$1 = temp__4092__auto___8108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8095_8109__$1))
{var c__7112__auto___8110 = cljs.core.chunk_first.call(null,seq__8095_8109__$1);{
var G__8111 = cljs.core.chunk_rest.call(null,seq__8095_8109__$1);
var G__8112 = c__7112__auto___8110;
var G__8113 = cljs.core.count.call(null,c__7112__auto___8110);
var G__8114 = 0;
seq__8095_8099 = G__8111;
chunk__8096_8100 = G__8112;
count__8097_8101 = G__8113;
i__8098_8102 = G__8114;
continue;
}
} else
{var dir_8115 = cljs.core.first.call(null,seq__8095_8109__$1);lt.plugins.smart_ignore.update_ignore_pattern.call(null,dir_8115);
{
var G__8116 = cljs.core.next.call(null,seq__8095_8109__$1);
var G__8117 = null;
var G__8118 = 0;
var G__8119 = 0;
seq__8095_8099 = G__8116;
chunk__8096_8100 = G__8117;
count__8097_8101 = G__8118;
i__8098_8102 = G__8119;
continue;
}
}
} else
{}
}
break;
}
return lt.objs.notifos.set_msg_BANG_.call(null,"Updated ignore-pattern.");
});
lt.plugins.smart_ignore.__BEH__watch_add_folder = (function __BEH__watch_add_folder(this$,path){lt.plugins.smart_ignore.update_ignore_pattern.call(null,path);
return lt.objs.notifos.set_msg_BANG_.call(null,"Updated ignore-pattern.");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","watch-add-folder","lt.plugins.smart-ignore/watch-add-folder",3036159218),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.__BEH__watch_add_folder,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),null], null), null));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","behaviors-refreshed","lt.plugins.smart-ignore/behaviors-refreshed",2084405596),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behaviors.refreshed","behaviors.refreshed",1338765023),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.reset-workspace-ignore-pattern","ltfiles.reset-workspace-ignore-pattern",1477279964),new cljs.core.Keyword(null,"desc","desc",1016984067),"smart-ignore: Resets ignore-pattern for workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace], null));
}

//# sourceMappingURL=smart-ignore_compiled.js.map