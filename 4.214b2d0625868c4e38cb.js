(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GFCI:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),i=function(){return function(){}}(),o=u("pMnS"),e=u("ZYCi"),r=u("Ip0R"),c=function(){function n(){this.movie=null}return n.prototype.ngOnInit=function(){},n}(),s=t.mb({encapsulation:0,styles:[[""]],data:{}});function a(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,9,"div",[["class","card"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,0,"img",[["class","card-img-top"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),t.ob(2,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),t.Ab(4,null,["",""])),(n()(),t.ob(5,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),t.Ab(6,null,["",""])),(n()(),t.ob(7,0,null,null,2,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var i=!0;return"click"===l&&(i=!1!==t.wb(n,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i},null,null)),t.nb(8,671744,null,0,e.m,[e.k,e.a,r.g],{routerLink:[0,"routerLink"]},null),(n()(),t.Ab(-1,null,["Details"]))],function(n,l){n(l,8,0,"/movies/"+l.component.movie.id)},function(n,l){var u=l.component;n(l,1,0,u.movie.imageUrl,t.qb(1,"",u.movie.title,"")),n(l,4,0,u.movie.title),n(l,6,0,u.movie.description),n(l,7,0,t.wb(l,8).target,t.wb(l,8).href)})}var b=u("mrSG"),v=u("AytR"),f=u("t/Na"),m=function(){function n(n){this.http=n}return n.prototype.fetchMovies=function(){return this.http.get(v.a.moviesUrl).toPromise()},n.prototype.fetchMovieById=function(n){return b.b(this,void 0,void 0,function(){var l;return b.e(this,function(u){switch(u.label){case 0:return[4,this.fetchMovies()];case 1:return l=u.sent(),console.log(l),[2,l.find(function(l){return l.id===n})]}})})},n.ngInjectableDef=t.S({factory:function(){return new n(t.V(f.c))},token:n,providedIn:"root"}),n}(),p=function(){function n(n){this.moviesProvider=n,this.movies=null}return n.prototype.ngOnInit=function(){var n=this;this.moviesProvider.fetchMovies().then(function(l){n.movies=l})},n}(),d=t.mb({encapsulation:0,styles:[[""]],data:{}});function h(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,1,"app-movie-list-item",[["class","d-inline-block align-top"],["style","width: 200px;"]],null,null,null,a,s)),t.nb(1,114688,null,0,c,[],{movie:[0,"movie"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function g(n){return t.Bb(0,[(n()(),t.fb(16777216,null,null,1,null,h)),t.nb(1,278528,null,0,r.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,1,0,l.component.movies)},null)}function y(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,1,"app-movie-list",[],null,null,null,g,d)),t.nb(1,114688,null,0,p,[m],null,null)],function(n,l){n(l,1,0)},null)}var k=t.kb("app-movie-list",p,y,{},{},[]),w=function(){function n(n,l){this.route=n,this.moviesProvider=l,this.movie=null}return n.prototype.ngOnInit=function(){return b.b(this,void 0,void 0,function(){var n,l;return b.e(this,function(u){switch(u.label){case 0:return n=this.route.snapshot.paramMap.get("id"),console.log({id:n}),[4,this.moviesProvider.fetchMovieById(n)];case 1:return l=u.sent(),console.log({movie:l}),this.movie=l,[2]}})})},n}(),I=t.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:700px}"]],data:{}});function M(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,5,"div",[["class","media"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,0,"img",[["class","mr-3"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),t.ob(2,0,null,null,3,"div",[["class","media-body"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,null,1,"h5",[["class","mt-0"]],null,null,null,null,null)),(n()(),t.Ab(4,null,["",""])),(n()(),t.Ab(5,null,[" "," "]))],null,function(n,l){var u=l.component;n(l,1,0,u.movie.imageUrl,t.qb(1,"",u.movie.title,"")),n(l,4,0,u.movie.title),n(l,5,0,u.movie.description)})}function B(n){return t.Bb(0,[(n()(),t.fb(16777216,null,null,1,null,M)),t.nb(1,16384,null,0,r.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.movie)},null)}function O(n){return t.Bb(0,[(n()(),t.ob(0,0,null,null,1,"app-movie-profile",[],null,null,null,B,I)),t.nb(1,114688,null,0,w,[e.a,m],null,null)],function(n,l){n(l,1,0)},null)}var A=t.kb("app-movie-profile",w,O,{},{},[]),P=function(){return function(){}}();u.d(l,"MovieModuleNgFactory",function(){return x});var x=t.lb(i,[],function(n){return t.ub([t.vb(512,t.j,t.ab,[[8,[o.a,k,A]],[3,t.j],t.x]),t.vb(4608,r.k,r.j,[t.u,[2,r.q]]),t.vb(4608,m,m,[f.c]),t.vb(1073742336,r.b,r.b,[]),t.vb(1073742336,e.n,e.n,[[2,e.t],[2,e.k]]),t.vb(1073742336,P,P,[]),t.vb(1073742336,i,i,[]),t.vb(1024,e.i,function(){return[[{path:"",component:p},{path:":id",component:w}]]},[])])})}}]);