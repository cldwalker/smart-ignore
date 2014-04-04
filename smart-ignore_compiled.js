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
lt.plugins.smart_ignore.file__GT_ignore_regexs = (function file__GT_ignore_regexs(file){var parent = lt.objs.files.parent.call(null,file);var G__8341 = lt.objs.files.open_sync.call(null,file);var G__8341__$1 = (((G__8341 == null))?null:new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(G__8341));var G__8341__$2 = (((G__8341__$1 == null))?null:((function (G__8341,G__8341__$1){
return (function (p1__8338_SHARP_){return clojure.string.split.call(null,p1__8338_SHARP_,/\n/);
});})(G__8341,G__8341__$1))
.call(null,G__8341__$1));var G__8341__$3 = (((G__8341__$2 == null))?null:cljs.core.map.call(null,((function (G__8341,G__8341__$1,G__8341__$2){
return (function (relative){if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,lt.objs.files.join.call(null,parent,relative))))
{return [cljs.core.str(relative),cljs.core.str("/")].join('');
} else
{return relative;
}
});})(G__8341,G__8341__$1,G__8341__$2))
,G__8341__$2));var G__8341__$4 = (((G__8341__$3 == null))?null:cljs.core.map.call(null,((function (G__8341,G__8341__$1,G__8341__$2,G__8341__$3){
return (function (p1__8339_SHARP_){return [cljs.core.str("^"),cljs.core.str(goog.string.regExpEscape(p1__8339_SHARP_)),cljs.core.str("$")].join('');
});})(G__8341,G__8341__$1,G__8341__$2,G__8341__$3))
,G__8341__$3));return G__8341__$4;
});
lt.plugins.smart_ignore.update_ignore_pattern = (function update_ignore_pattern(dir){var gitignore = lt.objs.files.join.call(null,dir,".gitignore");if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,gitignore)))
{var existing = clojure.string.split.call(null,lt.objs.files.ignore_pattern.source,/\|/);var new$ = lt.plugins.smart_ignore.file__GT_ignore_regexs.call(null,gitignore);var new_pattern = clojure.string.join.call(null,"|",cljs.core.sort.call(null,clojure.set.union.call(null,cljs.core.set.call(null,new$),cljs.core.set.call(null,existing))));return lt.objs.files.ignore_pattern = (new RegExp(new_pattern));
} else
{return null;
}
});
lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace = (function reset_ignore_pattern_for_current_workspace(){var dirs = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws));console.log([cljs.core.str("Setting ignore-pattern for "),cljs.core.str(clojure.string.join.call(null,", ",dirs))].join(''));
lt.objs.files.ignore_pattern = lt.plugins.smart_ignore.default_ignore_pattern;
var seq__8346_8350 = cljs.core.seq.call(null,dirs);var chunk__8347_8351 = null;var count__8348_8352 = 0;var i__8349_8353 = 0;while(true){
if((i__8349_8353 < count__8348_8352))
{var dir_8354 = cljs.core._nth.call(null,chunk__8347_8351,i__8349_8353);lt.plugins.smart_ignore.update_ignore_pattern.call(null,dir_8354);
{
var G__8355 = seq__8346_8350;
var G__8356 = chunk__8347_8351;
var G__8357 = count__8348_8352;
var G__8358 = (i__8349_8353 + 1);
seq__8346_8350 = G__8355;
chunk__8347_8351 = G__8356;
count__8348_8352 = G__8357;
i__8349_8353 = G__8358;
continue;
}
} else
{var temp__4092__auto___8359 = cljs.core.seq.call(null,seq__8346_8350);if(temp__4092__auto___8359)
{var seq__8346_8360__$1 = temp__4092__auto___8359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8346_8360__$1))
{var c__7561__auto___8361 = cljs.core.chunk_first.call(null,seq__8346_8360__$1);{
var G__8362 = cljs.core.chunk_rest.call(null,seq__8346_8360__$1);
var G__8363 = c__7561__auto___8361;
var G__8364 = cljs.core.count.call(null,c__7561__auto___8361);
var G__8365 = 0;
seq__8346_8350 = G__8362;
chunk__8347_8351 = G__8363;
count__8348_8352 = G__8364;
i__8349_8353 = G__8365;
continue;
}
} else
{var dir_8366 = cljs.core.first.call(null,seq__8346_8360__$1);lt.plugins.smart_ignore.update_ignore_pattern.call(null,dir_8366);
{
var G__8367 = cljs.core.next.call(null,seq__8346_8360__$1);
var G__8368 = null;
var G__8369 = 0;
var G__8370 = 0;
seq__8346_8350 = G__8367;
chunk__8347_8351 = G__8368;
count__8348_8352 = G__8369;
i__8349_8353 = G__8370;
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
lt.plugins.smart_ignore.default_ignore_pattern = lt.objs.files.ignore_pattern;
lt.plugins.smart_ignore.__BEH__post_init = (function __BEH__post_init(){lt.plugins.smart_ignore.default_ignore_pattern = lt.objs.files.ignore_pattern;
return lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","post-init","lt.plugins.smart-ignore/post-init",4458543147),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.__BEH__post_init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.smart-ignore","behaviors-refreshed","lt.plugins.smart-ignore/behaviors-refreshed",2084405596),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behaviors.refreshed","behaviors.refreshed",1338765023),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"ltfiles.reset-workspace-ignore-pattern","ltfiles.reset-workspace-ignore-pattern",1477279964),new cljs.core.Keyword(null,"desc","desc",1016984067),"smart-ignore: Resets ignore-pattern for workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.smart_ignore.reset_ignore_pattern_for_current_workspace], null));
}

//# sourceMappingURL=smart-ignore_compiled.js.map