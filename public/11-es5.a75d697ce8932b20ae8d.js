function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{k3wr:function(t,e,n){"use strict";n.r(e),n.d(e,"NailBarMenuModule",(function(){return k}));var i=n("tyNb"),a=n("d2mR"),c=n("titR"),o=n("fXoL"),r=n("aZ8m"),s=n("HfZk"),b=n("ofXK"),l=n("aF9I");function f(t,e){if(1&t&&(o.Jb(0,"h2"),o.nc(1),o.Ib()),2&t){var n=o.Ub().$implicit;o.wb(1),o.oc(n.subTitle)}}function u(t,e){if(1&t&&(o.Jb(0,"span"),o.nc(1),o.Ib()),2&t){var n=o.Ub().$implicit;o.wb(1),o.oc(n.price)}}function p(t,e){if(1&t&&(o.Jb(0,"h4"),o.nc(1),o.Ib()),2&t){var n=o.Ub().$implicit;o.wb(1),o.oc(n.subTitle)}}function h(t,e){if(1&t&&(o.Jb(0,"span"),o.nc(1),o.Ib()),2&t){var n=o.Ub().$implicit;o.wb(1),o.oc(n.price)}}function d(t,e){if(1&t&&(o.Jb(0,"div"),o.Jb(1,"h3"),o.nc(2),o.Ib(),o.lc(3,p,2,1,"h4",2),o.lc(4,h,2,1,"span",2),o.Ib()),2&t){var n=e.$implicit;o.wb(2),o.oc(n.title),o.wb(1),o.Zb("ngIf",n.subTitle),o.wb(1),o.Zb("ngIf",n.price)}}function v(t,e){if(1&t&&(o.Jb(0,"div"),o.Jb(1,"h1"),o.nc(2),o.Ib(),o.lc(3,f,2,1,"h2",2),o.lc(4,u,2,1,"span",2),o.lc(5,d,5,3,"div",1),o.Ib()),2&t){var n=e.$implicit;o.wb(2),o.oc(n.title),o.wb(1),o.Zb("ngIf",n.subTitle),o.wb(1),o.Zb("ngIf",n.price),o.wb(1),o.Zb("ngForOf",n.items)}}var w,g,m=function(){return{}},I=[{path:"",component:(w=function(){function t(e){_classCallCheck(this,t),this.activatedRoute=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.page=this.activatedRoute.snapshot.data.page}}]),t}(),w.\u0275fac=function(t){return new(t||w)(o.Gb(i.a))},w.\u0275cmp=o.Ab({type:w,selectors:[["exo-nail-bar-menu"]],decls:4,vars:3,consts:[[3,"data"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(t,e){1&t&&(o.Hb(0,"exo-header"),o.Hb(1,"exo-intro",0),o.lc(2,v,6,4,"div",1),o.Hb(3,"exo-footer")),2&t&&(o.wb(1),o.Zb("data",e.page.showcase||o.cc(2,m)),o.wb(1),o.Zb("ngForOf",e.page.categories))},directives:[r.a,s.a,b.i,l.a,b.j],styles:[""],changeDetection:0}),w),data:{id:"nail-bar-menu"},resolve:{page:c.a}}],k=((g=function t(){_classCallCheck(this,t)}).\u0275mod=o.Eb({type:g}),g.\u0275inj=o.Db({factory:function(t){return new(t||g)},imports:[[a.a,i.h.forChild(I)]]}),g)},titR:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("vkgz"),a=n("3TKP"),c=n("fXoL"),o=n("tk/3"),r=n("jhN1"),s=function(){var t=function(){function t(e,n,i,a){_classCallCheck(this,t),this.http=e,this.title=n,this.meta=i,this.baseTitle=a}return _createClass(t,[{key:"resolve",value:function(t){var e=this,n=t.data.id;return this.http.get("/collections/pages/".concat(n,".json")).pipe(Object(i.a)((function(t){if(t.meta){var n=Object.assign({},t.meta);for(var i in e.title.setTitle(n.title?"".concat(n.title," | ").concat(e.baseTitle):e.baseTitle),delete n.title,n)n.hasOwnProperty(i)&&e.meta.updateTag({name:i,content:n[i]})}})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Mb(o.a),c.Mb(r.d),c.Mb(r.c),c.Mb(a.a))},t.\u0275prov=c.Cb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);