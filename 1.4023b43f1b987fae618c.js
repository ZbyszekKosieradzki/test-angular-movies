(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3JDX":function(n,e,t){n.exports=function(n){function e(n){let e=0;for(let t=0;t<n.length;t++)e=(e<<5)-e+n.charCodeAt(t),e|=0;return l.colors[Math.abs(e)%l.colors.length]}function l(n){let t;function u(...n){if(!u.enabled)return;const e=u,o=Number(new Date);e.diff=o-(t||o),e.prev=t,e.curr=o,t=o,n[0]=l.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");let r=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,(t,o)=>{if("%%"===t)return t;r++;const u=l.formatters[o];return"function"==typeof u&&(t=u.call(e,n[r]),n.splice(r,1),r--),t}),l.formatArgs.call(e,n),(e.log||l.log).apply(e,n)}return u.namespace=n,u.enabled=l.enabled(n),u.useColors=l.useColors(),u.color=e(n),u.destroy=o,u.extend=r,"function"==typeof l.init&&l.init(u),l.instances.push(u),u}function o(){const n=l.instances.indexOf(this);return-1!==n&&(l.instances.splice(n,1),!0)}function r(n,e){const t=l(this.namespace+(void 0===e?":":e)+n);return t.log=this.log,t}function u(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}return l.debug=l,l.default=l,l.coerce=function(n){return n instanceof Error?n.stack||n.message:n},l.disable=function(){const n=[...l.names.map(u),...l.skips.map(u).map(n=>"-"+n)].join(",");return l.enable(""),n},l.enable=function(n){let e;l.save(n),l.names=[],l.skips=[];const t=("string"==typeof n?n:"").split(/[\s,]+/),o=t.length;for(e=0;e<o;e++)t[e]&&("-"===(n=t[e].replace(/\*/g,".*?"))[0]?l.skips.push(new RegExp("^"+n.substr(1)+"$")):l.names.push(new RegExp("^"+n+"$")));for(e=0;e<l.instances.length;e++){const n=l.instances[e];n.enabled=l.enabled(n.namespace)}},l.enabled=function(n){if("*"===n[n.length-1])return!0;let e,t;for(e=0,t=l.skips.length;e<t;e++)if(l.skips[e].test(n))return!1;for(e=0,t=l.names.length;e<t;e++)if(l.names[e].test(n))return!0;return!1},l.humanize=t("k2N2"),Object.keys(n).forEach(e=>{l[e]=n[e]}),l.instances=[],l.names=[],l.skips=[],l.formatters={},l.selectColor=e,l.enable(l.load()),l}},AOUG:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){function n(){this.movies=null}return n.prototype.ngOnInit=function(){},n}()},BNdY:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("mrSG"),o=(t("pzTV"),function(){function n(n,e){this.route=n,this.moviesProvider=e,this.movie=null}return n.prototype.ngOnInit=function(){return l.b(this,void 0,void 0,function(){var n,e;return l.e(this,function(t){switch(t.label){case 0:return n=this.route.snapshot.paramMap.get("id"),console.log({id:n}),[4,this.moviesProvider.fetchMovieById(n)];case 1:return e=t.sent(),console.log({movie:e}),this.movie=e,[2]}})})},n}())},NOtv:function(n,e,t){e.log=function(...n){return"object"==typeof console&&console.log&&console.log(...n)},e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;e.splice(1,0,t,"color: inherit");let l=0,o=0;e[0].replace(/%[a-zA-Z%]/g,n=>{"%%"!==n&&(l++,"%c"===n&&(o=l))}),e.splice(o,0,t)},e.save=function(n){try{n?e.storage.setItem("debug",n):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let n;try{n=e.storage.getItem("debug")}catch(t){}return!n&&"undefined"!=typeof process&&"env"in process&&(n=process.env.DEBUG),n},e.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},e.storage=function(){try{return localStorage}catch(n){}}(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.exports=t("3JDX")(e);const{formatters:l}=n.exports;l.j=function(n){try{return JSON.stringify(n)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},QmcW:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t("hbFO"),t("BNdY");var l=function(){return function(){}}()},WHy5:function(n,e,t){"use strict";var l=t("CcnG"),o=t("ta4g"),r=t("AOUG"),u=t("hbFO"),i=t("pzTV");t.d(e,"a",function(){return f});var s=l.nb({encapsulation:0,styles:[[""]],data:{}});function c(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,1,"app-movie-list",[],null,null,null,o.b,o.a)),l.ob(1,114688,null,0,r.a,[],{movies:[0,"movies"]},null)],function(n,e){n(e,1,0,e.component.movies)},null)}function a(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,1,"app-page-movie-list",[],null,null,null,c,s)),l.ob(1,114688,null,0,u.a,[i.a],null,null)],function(n,e){n(e,1,0)},null)}var f=l.lb("app-page-movie-list",u.a,a,{},{},[])},"efI+":function(n,e,t){"use strict";var l=t("CcnG"),o=t("Ip0R"),r=function(){function n(){this.movie=null}return n.prototype.ngOnInit=function(){},n}(),u=l.nb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:700px}"]],data:{}});function i(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,5,"div",[["class","media"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,0,"img",[["class","mr-3"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),l.pb(2,0,null,null,3,"div",[["class","media-body"]],null,null,null,null,null)),(n()(),l.pb(3,0,null,null,1,"h5",[["class","mt-0"]],null,null,null,null,null)),(n()(),l.Db(4,null,["",""])),(n()(),l.Db(5,null,[" "," "]))],null,function(n,e){var t=e.component;n(e,1,0,t.movie.imageUrl,l.rb(1,"",t.movie.title,"")),n(e,4,0,t.movie.title),n(e,5,0,t.movie.description)})}function s(n){return l.Eb(0,[(n()(),l.gb(16777216,null,null,1,null,i)),l.ob(1,16384,null,0,o.i,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,1,0,e.component.movie)},null)}var c=t("BNdY"),a=t("ZYCi"),f=t("pzTV");t.d(e,"a",function(){return C});var p=l.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,1,"app-movie-profile",[],null,null,null,s,u)),l.ob(1,114688,null,0,r,[],{movie:[0,"movie"]},null)],function(n,e){n(e,1,0,e.component.movie)},null)}function m(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,1,"app-page-movie-profile",[],null,null,null,d,p)),l.ob(1,114688,null,0,c.a,[a.a,f.a],null,null)],function(n,e){n(e,1,0)},null)}var C=l.lb("app-page-movie-profile",c.a,m,{},{},[])},hbFO:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("mrSG"),o=(t("pzTV"),function(){function n(n){this.moviesProvider=n,this.movies=null}return n.prototype.ngOnInit=function(){return l.b(this,void 0,void 0,function(){var n;return l.e(this,function(e){switch(e.label){case 0:return n=this,[4,this.moviesProvider.fetchMovies()];case 1:return n.movies=e.sent(),[2]}})})},n}())},k2N2:function(n,e){var t=1e3,l=6e4,o=36e5,r=24*o;function u(n,e,t,l){var o=e>=1.5*t;return Math.round(n/t)+" "+l+(o?"s":"")}n.exports=function(n,e){e=e||{};var i,s,c=typeof n;if("string"===c&&n.length>0)return function(n){if(!((n=String(n)).length>100)){var e=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(e){var u=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*u;case"weeks":case"week":case"w":return 6048e5*u;case"days":case"day":case"d":return u*r;case"hours":case"hour":case"hrs":case"hr":case"h":return u*o;case"minutes":case"minute":case"mins":case"min":case"m":return u*l;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}(n);if("number"===c&&!1===isNaN(n))return e.long?(i=n,(s=Math.abs(i))>=r?u(i,s,r,"day"):s>=o?u(i,s,o,"hour"):s>=l?u(i,s,l,"minute"):s>=t?u(i,s,t,"second"):i+" ms"):function(n){var e=Math.abs(n);return e>=r?Math.round(n/r)+"d":e>=o?Math.round(n/o)+"h":e>=l?Math.round(n/l)+"m":e>=t?Math.round(n/t)+"s":n+"ms"}(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))}},pzTV:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var l=t("mrSG"),o=t("AytR"),r=t("CcnG"),u=t("t/Na"),i=function(){function n(n){this.http=n}return n.prototype.search=function(n){return l.b(this,void 0,void 0,function(){return l.e(this,function(e){switch(e.label){case 0:return[4,this.fetchMovies()];case 1:return[2,e.sent().filter(function(e){var t=new RegExp(n,"i").test(e.title),l=new RegExp(n,"i").test(e.description);return t||l})]}})})},n.prototype.fetchMovies=function(){return this.http.get(o.a.moviesUrl).toPromise()},n.prototype.fetchMovieById=function(n){return l.b(this,void 0,void 0,function(){var e;return l.e(this,function(t){switch(t.label){case 0:return[4,this.fetchMovies()];case 1:return e=t.sent(),console.log(e),[2,e.find(function(e){return e.id===n})]}})})},n.ngInjectableDef=r.S({factory:function(){return new n(r.W(u.c))},token:n,providedIn:"root"}),n}()},ta4g:function(n,e,t){"use strict";var l=t("CcnG"),o={log:t("NOtv")("vavatech:image:log")},r=function(){function n(n){this.$el=n,this.src=null,this.originalSrc=null}return n.prototype.ngOnInit=function(){this.updateSource()},n.prototype.updateSource=function(){var n=this,e=this.$el.nativeElement.querySelector("img"),t=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(o.log("img vievport"),e.target.setAttribute("src",n.src),t.disconnect())},{threshold:.9})});t.observe(e)},n}(),u=l.nb({encapsulation:0,styles:[[""]],data:{}});function i(n){return l.Eb(2,[(n()(),l.pb(0,0,null,null,0,"img",[],null,null,null,null,null))],null,null)}var s=t("ZYCi"),c=t("Ip0R"),a=function(){function n(){this.movie=null}return n.prototype.ngOnInit=function(){},n}(),f=l.nb({encapsulation:0,styles:[[""]],data:{}});function p(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,10,"div",[["class","card"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,1,"app-image",[],null,null,null,i,u)),l.ob(2,114688,null,0,r,[l.k],{src:[0,"src"]},null),(n()(),l.pb(3,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),l.pb(4,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),l.Db(5,null,["",""])),(n()(),l.pb(6,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),l.Db(7,null,["",""])),(n()(),l.pb(8,0,null,null,2,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==l.yb(n,9).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),l.ob(9,671744,null,0,s.n,[s.l,s.a,c.g],{routerLink:[0,"routerLink"]},null),(n()(),l.Db(-1,null,["Details"]))],function(n,e){var t=e.component;n(e,2,0,t.movie.imageUrl),n(e,9,0,"/movies/"+t.movie.id)},function(n,e){var t=e.component;n(e,5,0,t.movie.title),n(e,7,0,t.movie.description),n(e,8,0,l.yb(e,9).target,l.yb(e,9).href)})}t("AOUG"),t.d(e,"a",function(){return d}),t.d(e,"b",function(){return C});var d=l.nb({encapsulation:0,styles:[[""]],data:{}});function m(n){return l.Eb(0,[(n()(),l.pb(0,0,null,null,1,"app-movie-list-item",[["class","d-inline-block align-top"],["style","width: 200px;"]],null,null,null,p,f)),l.ob(1,114688,null,0,a,[],{movie:[0,"movie"]},null)],function(n,e){n(e,1,0,e.context.$implicit)},null)}function C(n){return l.Eb(0,[(n()(),l.gb(16777216,null,null,1,null,m)),l.ob(1,278528,null,0,c.h,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,1,0,e.component.movies)},null)}},ubTF:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()}}]);