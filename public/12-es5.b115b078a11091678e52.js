function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{k3wr:function(t,e,n){"use strict";n.r(e),n.d(e,"NailBarMenuModule",(function(){return k}));var i=n("tyNb"),a=n("d2mR"),c=n("titR"),o=n("fXoL"),r=n("aZ8m"),s=n("HfZk"),l=n("ofXK"),b=n("aF9I");function f(t,e){if(1&t&&(o.Kb(0,"h2"),o.nc(1),o.Jb()),2&t){var n=o.Vb().$implicit;o.xb(1),o.oc(n.subTitle)}}function u(t,e){if(1&t&&(o.Kb(0,"span"),o.nc(1),o.Jb()),2&t){var n=o.Vb().$implicit;o.xb(1),o.oc(n.price)}}function p(t,e){if(1&t&&(o.Kb(0,"h4"),o.nc(1),o.Jb()),2&t){var n=o.Vb().$implicit;o.xb(1),o.oc(n.subTitle)}}function h(t,e){if(1&t&&(o.Kb(0,"span"),o.nc(1),o.Jb()),2&t){var n=o.Vb().$implicit;o.xb(1),o.oc(n.price)}}function d(t,e){if(1&t&&(o.Kb(0,"div"),o.Kb(1,"h3"),o.nc(2),o.Jb(),o.lc(3,p,2,1,"h4",2),o.lc(4,h,2,1,"span",2),o.Jb()),2&t){var n=e.$implicit;o.xb(2),o.oc(n.title),o.xb(1),o.ac("ngIf",n.subTitle),o.xb(1),o.ac("ngIf",n.price)}}function v(t,e){if(1&t&&(o.Kb(0,"div"),o.Kb(1,"h1"),o.nc(2),o.Jb(),o.lc(3,f,2,1,"h2",2),o.lc(4,u,2,1,"span",2),o.lc(5,d,5,3,"div",1),o.Jb()),2&t){var n=e.$implicit;o.xb(2),o.oc(n.title),o.xb(1),o.ac("ngIf",n.subTitle),o.xb(1),o.ac("ngIf",n.price),o.xb(1),o.ac("ngForOf",n.items)}}var g,m,x=function(){return{}},w=[{path:"",component:(g=function(){function t(e){_classCallCheck(this,t),this.activatedRoute=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.page=this.activatedRoute.snapshot.data.page}}]),t}(),g.\u0275fac=function(t){return new(t||g)(o.Hb(i.a))},g.\u0275cmp=o.Bb({type:g,selectors:[["exo-nail-bar-menu"]],decls:4,vars:3,consts:[[3,"data"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(t,e){1&t&&(o.Ib(0,"exo-header"),o.Ib(1,"exo-intro",0),o.lc(2,v,6,4,"div",1),o.Ib(3,"exo-footer")),2&t&&(o.xb(1),o.ac("data",e.page.showcase||o.dc(2,x)),o.xb(1),o.ac("ngForOf",e.page.categories))},directives:[r.a,s.a,l.i,b.a,l.j],styles:[""],changeDetection:0}),g),data:{id:"nail-bar-menu"},resolve:{page:c.a}}],k=((m=function t(){_classCallCheck(this,t)}).\u0275mod=o.Fb({type:m}),m.\u0275inj=o.Eb({factory:function(t){return new(t||m)},imports:[[a.a,i.g.forChild(w)]]}),m)},titR:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("vkgz"),a=n("3TKP"),c=n("fXoL"),o=n("tk/3"),r=n("jhN1"),s=function(){var t=function(){function t(e,n,i,a){_classCallCheck(this,t),this.http=e,this.title=n,this.meta=i,this.baseTitle=a}return _createClass(t,[{key:"resolve",value:function(t){var e=this,n=t.data.id;return this.http.get("/collections/pages/".concat(n,".json")).pipe(Object(i.a)((function(t){if(t.meta){var n=Object.assign({},t.meta);for(var i in e.title.setTitle(n.title?"".concat(n.title," | ").concat(e.baseTitle):e.baseTitle),delete n.title,n)n.hasOwnProperty(i)&&e.meta.updateTag({name:i,content:n[i]})}})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Nb(o.a),c.Nb(r.c),c.Nb(r.b),c.Nb(a.a))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);