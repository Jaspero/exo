function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{YXEz:function(e,t,n){"use strict";n.r(t),n.d(t,"NewsModule",(function(){return J}));var i=n("sbAP"),a=n("d2mR"),o=n("tyNb"),c=n("n7Ds"),r=n("3TKP"),s=n("titR"),l=n("lJxs"),u=n("fXoL"),b=n("aZ8m"),d=n("HfZk"),p=n("ofXK"),f=n("aF9I");function m(e,t){if(1&e&&(u.Kb(0,"div",5),u.Kb(1,"div",6),u.Ib(2,"img",7),u.Jb(),u.Kb(3,"div",8),u.Kb(4,"h1"),u.nc(5),u.Jb(),u.Kb(6,"div",9),u.Kb(7,"span",10),u.nc(8),u.Jb(),u.Kb(9,"span",10),u.nc(10),u.Jb(),u.Jb(),u.Kb(11,"p",11),u.nc(12),u.Jb(),u.Kb(13,"a",12),u.nc(14,"Read More"),u.Jb(),u.Jb(),u.Jb()),2&e){var n=t.$implicit;u.xb(2),u.bc("src",n.image,u.jc),u.xb(3),u.oc(n.title),u.xb(3),u.oc(n.date),u.xb(2),u.pc("Category:",n.category,""),u.xb(2),u.oc(n.description),u.xb(1),u.ac("routerLink",n.route)}}var h,g,v,y=function(){return{}},w=((h=function(){function e(t,n){_classCallCheck(this,e),this.scully=t,this.activatedRoute=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.page=this.activatedRoute.snapshot.data.page,this.news$=this.scully.available$.pipe(Object(l.a)((function(e){return e.filter((function(e){return e.route.includes("/news/")}))})))}}]),e}()).\u0275fac=function(e){return new(e||h)(u.Hb(i.c),u.Hb(o.a))},h.\u0275cmp=u.Bb({type:h,selectors:[["exo-news-list"]],decls:10,vars:5,consts:[[3,"data"],[1,"grid","m-y-l"],[1,"col-6","col-s-12","ta-center"],[1,"m-y-l"],["class","grid jc-between ai-center b-b p-y-m",4,"ngFor","ngForOf"],[1,"grid","jc-between","ai-center","b-b","p-y-m"],[1,"col-5","col-s-6","col-xs-12","ta-left"],[3,"src"],[1,"col-4","col-s-6","col-xs-12","c-dark"],[1,"flex","ai-center","jc-between","w-full","m-t-s"],[1,"category"],[1,"m-t-s","m-b-l"],[1,"btn-primary","m-t-l",3,"routerLink"]],template:function(e,t){1&e&&(u.Ib(0,"exo-header"),u.Ib(1,"exo-intro",0),u.Kb(2,"div",1),u.Kb(3,"div",2),u.Kb(4,"p"),u.nc(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.Jb(),u.Jb(),u.Jb(),u.Kb(6,"section",3),u.lc(7,m,15,6,"div",4),u.Wb(8,"async"),u.Jb(),u.Ib(9,"exo-footer")),2&e&&(u.xb(1),u.ac("data",t.page.showcase||u.dc(4,y)),u.xb(6),u.ac("ngForOf",u.Xb(8,2,t.news$)))},directives:[b.a,d.a,p.i,f.a,o.f],pipes:[p.b],styles:['.main[_ngcontent-%COMP%]{background:url(news-main.81204e200fff6fb681f4.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.category[_ngcontent-%COMP%]{color:#707070}']}),h),k=n("jmfH"),x=[{path:"",component:w,data:{id:"news"},resolve:{page:s.a}},{path:":id",component:k.a,data:{collection:"news"},resolve:{meta:r.b,delay:c.a}},{path:"**",component:k.a}],C=((v=function e(){_classCallCheck(this,e)}).\u0275mod=u.Fb({type:v}),v.\u0275inj=u.Eb({factory:function(e){return new(e||v)},imports:[[o.g.forChild(x)],o.g]}),v),J=((g=function e(){_classCallCheck(this,e)}).\u0275mod=u.Fb({type:g}),g.\u0275inj=u.Eb({factory:function(e){return new(e||g)},imports:[[a.a,C,i.b]]}),g)},titR:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("vkgz"),a=n("3TKP"),o=n("fXoL"),c=n("tk/3"),r=n("jhN1"),s=function(){var e=function(){function e(t,n,i,a){_classCallCheck(this,e),this.http=t,this.title=n,this.meta=i,this.baseTitle=a}return _createClass(e,[{key:"resolve",value:function(e){var t=this,n=e.data.id;return this.http.get("/collections/pages/".concat(n,".json")).pipe(Object(i.a)((function(e){if(e.meta){var n=Object.assign({},e.meta);for(var i in t.title.setTitle(n.title?"".concat(n.title," | ").concat(t.baseTitle):t.baseTitle),delete n.title,n)n.hasOwnProperty(i)&&t.meta.updateTag({name:i,content:n[i]})}})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(c.a),o.Nb(r.c),o.Nb(r.b),o.Nb(a.a))},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);