function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{k3wr:function(e,t,i){"use strict";i.r(t),i.d(t,"NailBarMenuModule",(function(){return x}));var n=i("tyNb"),c=i("d2mR"),a=i("titR"),r=i("fXoL"),o=i("aZ8m"),b=i("HfZk"),s=i("ofXK"),f=i("aF9I");function l(e,t){if(1&e&&(r.Ob(0,"span",17),r.tc(1),r.Nb()),2&e){var i=r.ac().$implicit;r.zb(1),r.uc(i.price)}}function p(e,t){if(1&e&&(r.Ob(0,"p",18),r.tc(1),r.Nb()),2&e){var i=r.ac().$implicit;r.zb(1),r.uc(i.subTitle)}}function u(e,t){if(1&e&&(r.Ob(0,"span",25),r.tc(1),r.Nb()),2&e){var i=r.ac().$implicit;r.zb(1),r.uc(i.price)}}function g(e,t){if(1&e&&(r.Ob(0,"p",26),r.tc(1),r.Nb()),2&e){var i=r.ac().$implicit;r.zb(1),r.uc(i.subTitle)}}var d=function(e){return{"background-image":e}};function m(e,t){if(1&e&&r.Kb(0,"div",27),2&e){var i=r.ac().$implicit;r.fc("ngStyle",r.ic(1,d,"url("+i.image+")"))}}function v(e,t){if(1&e&&(r.Ob(0,"div"),r.Ob(1,"div",19),r.Ob(2,"div",20),r.Ob(3,"h4",21),r.tc(4),r.Nb(),r.rc(5,u,2,1,"span",22),r.Nb(),r.rc(6,g,2,1,"p",23),r.Nb(),r.rc(7,m,1,3,"div",24),r.Nb()),2&e){var i=t.$implicit;r.zb(4),r.uc(i.title),r.zb(1),r.fc("ngIf",i.price),r.zb(1),r.fc("ngIf",i.subTitle),r.zb(1),r.fc("ngIf",i.image)}}function h(e,t){if(1&e&&(r.Ob(0,"div",5),r.Ob(1,"div",6),r.Ob(2,"div",7),r.Kb(3,"div",8),r.Ob(4,"div",9),r.Ob(5,"h1",10),r.tc(6),r.Nb(),r.Nb(),r.Ob(7,"div",11),r.rc(8,l,2,1,"span",12),r.Nb(),r.Ob(9,"div",13),r.Ob(10,"div",14),r.rc(11,p,2,1,"p",15),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.rc(12,v,8,4,"div",16),r.Nb()),2&e){var i=t.$implicit;r.zb(6),r.uc(i.title),r.zb(2),r.fc("ngIf",i.price),r.zb(3),r.fc("ngIf",i.subTitle),r.zb(1),r.fc("ngForOf",i.items)}}var w,O,y=function(){return{}},N=[{path:"",component:(w=function(){function e(t){_classCallCheck(this,e),this.activatedRoute=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.page=this.activatedRoute.snapshot.data.page}}]),e}(),w.\u0275fac=function(e){return new(e||w)(r.Jb(n.a))},w.\u0275cmp=r.Db({type:w,selectors:[["exo-nail-bar-menu"]],decls:7,vars:3,consts:[[3,"data"],[1,"bg-light","c-dark"],[1,"col-12","ta-center","p-y-l"],["src","assets/images/exo.svg","alt","",2,"height","200px"],["class","m-t-l p-x-s",4,"ngFor","ngForOf"],[1,"m-t-l","p-x-s"],[1,"container"],[1,"category-wrapper","flex","ai-center","fw-wrap","jc-between","p-b-m","b-b"],[1,"col-2"],[1,"col-8","ta-center","no-padding"],[1,"category-title"],[1,"col-2","no-padding","flex","jc-end"],["class","category-price",4,"ngIf"],[1,"flex","jc-center","w-full","ta-center"],[1,"col-8","no-padding"],["class","category-subtitle",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"category-price"],[1,"category-subtitle"],[1,"container","flex","fw-wrap","b-b","p-y-s"],[1,"wrapper","flex","jc-between","ai-center","w-full"],[1,"item-title","fw-normal"],["class","item-price",4,"ngIf"],["class","item-subtitle",4,"ngIf"],["class","item-img",3,"ngStyle",4,"ngIf"],[1,"item-price"],[1,"item-subtitle"],[1,"item-img",3,"ngStyle"]],template:function(e,t){1&e&&(r.Kb(0,"exo-header"),r.Kb(1,"exo-intro",0),r.Ob(2,"section",1),r.Ob(3,"div",2),r.Kb(4,"img",3),r.Nb(),r.rc(5,h,13,4,"div",4),r.Nb(),r.Kb(6,"exo-footer")),2&e&&(r.zb(1),r.fc("data",t.page.showcase||r.hc(2,y)),r.zb(4),r.fc("ngForOf",t.page.categories))},directives:[o.a,b.a,s.j,f.a,s.k,s.l],styles:[".container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.item-price[_ngcontent-%COMP%]{font-size:20px;font-weight:800}.item-img[_ngcontent-%COMP%]{height:100vh;background-size:cover;background-position:50%;background-repeat:no-repeat;width:100vw}.category-price[_ngcontent-%COMP%]{font-size:20px;font-weight:700}"],changeDetection:0}),w),data:{id:"nail-bar-menu"},resolve:{page:a.a}}],x=((O=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:O}),O.\u0275inj=r.Gb({factory:function(e){return new(e||O)},imports:[[c.a,n.h.forChild(N)]]}),O)}}]);