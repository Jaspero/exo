(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Cy45:function(t,n,e){"use strict";e.r(n),e.d(n,"LoungeMenuModule",(function(){return z}));var i=e("tyNb"),c=e("d2mR"),o=e("titR"),a=e("fXoL"),r=e("aZ8m"),b=e("HfZk"),s=e("ofXK"),g=e("aF9I");function p(t,n){if(1&t&&(a.Ob(0,"p",10),a.tc(1),a.Nb()),2&t){const t=a.ac().$implicit;a.zb(1),a.uc(t.subTitle)}}function f(t,n){if(1&t&&(a.Ob(0,"span"),a.tc(1),a.Nb()),2&t){const t=a.ac().$implicit;a.zb(1),a.uc(t.price)}}function u(t,n){if(1&t&&(a.Ob(0,"p",17),a.tc(1),a.Nb()),2&t){const t=a.ac().$implicit;a.zb(1),a.uc(t.subTitle)}}function l(t,n){if(1&t&&(a.Ob(0,"span",18),a.tc(1),a.Nb()),2&t){const t=a.ac().$implicit;a.zb(1),a.uc(t.price)}}const m=function(t){return{"background-image":t}};function d(t,n){if(1&t&&a.Kb(0,"div",19),2&t){const t=a.ac().$implicit;a.fc("ngStyle",a.ic(1,m,"url("+t.image+")"))}}function h(t,n){if(1&t&&(a.Ob(0,"div"),a.Ob(1,"div",11),a.Ob(2,"div",12),a.Ob(3,"h4",13),a.tc(4),a.Nb(),a.rc(5,u,2,1,"p",14),a.Nb(),a.rc(6,l,2,1,"span",15),a.Nb(),a.rc(7,d,1,3,"div",16),a.Nb()),2&t){const t=n.$implicit;a.zb(4),a.uc(t.title),a.zb(1),a.fc("ngIf",t.subTitle),a.zb(1),a.fc("ngIf",t.price),a.zb(1),a.fc("ngIf",t.image)}}function O(t,n){if(1&t&&(a.Ob(0,"div"),a.Ob(1,"div",5),a.Ob(2,"div",6),a.Ob(3,"h1",7),a.tc(4),a.Nb(),a.rc(5,p,2,1,"p",8),a.rc(6,f,2,1,"span",9),a.Nb(),a.Nb(),a.rc(7,h,8,4,"div",4),a.Nb()),2&t){const t=n.$implicit;a.zb(4),a.uc(t.title),a.zb(1),a.fc("ngIf",t.subTitle),a.zb(1),a.fc("ngIf",t.price),a.zb(1),a.fc("ngForOf",t.items)}}const v=function(){return{}},w=[{path:"",component:(()=>{class t{constructor(t){this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(i.a))},t.\u0275cmp=a.Db({type:t,selectors:[["exo-lounge-menu"]],decls:7,vars:3,consts:[[3,"data"],[1,"bg-dark","c-light"],[1,"col-12","ta-center","p-y-l"],["src","assets/images/exo.svg","alt","",2,"height","200px"],[4,"ngFor","ngForOf"],[1,"lounge-container"],[1,"category-wrapper","ta-center","m-t-l","p-b-m","b-b"],[1,"category-title"],["class","category-subtitle",4,"ngIf"],[4,"ngIf"],[1,"category-subtitle"],[1,"lounge-container","flex","jc-between","ai-center","b-b","p-y-s"],[1,"wrapper"],[1,"item-title","fw-normal"],["class","item-subtitle",4,"ngIf"],["class","item-price",4,"ngIf"],["class","item-img",3,"ngStyle",4,"ngIf"],[1,"item-subtitle"],[1,"item-price"],[1,"item-img",3,"ngStyle"]],template:function(t,n){1&t&&(a.Kb(0,"exo-header"),a.Kb(1,"exo-intro",0),a.Ob(2,"section",1),a.Ob(3,"div",2),a.Kb(4,"img",3),a.Nb(),a.rc(5,O,8,4,"div",4),a.Nb(),a.Kb(6,"exo-footer")),2&t&&(a.zb(1),a.fc("data",n.page.showcase||a.hc(2,v)),a.zb(4),a.fc("ngForOf",n.page.categories))},directives:[r.a,b.a,s.j,g.a,s.k,s.l],styles:[".lounge-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.item-price[_ngcontent-%COMP%]{font-size:20px;font-weight:800}.item-img[_ngcontent-%COMP%]{height:100vh;background-size:cover;background-position:50%;background-repeat:no-repeat;width:100vw}@media (max-width:900px){.lounge-container[_ngcontent-%COMP%]{padding:10px}h1[_ngcontent-%COMP%]{font-size:30px}h4[_ngcontent-%COMP%]{font-size:20px}.item-price[_ngcontent-%COMP%]{font-size:18px}.item-img[_ngcontent-%COMP%]{height:400px}.category-wrapper[_ngcontent-%COMP%]{margin:0;padding:20px 0}}"],changeDetection:0}),t})(),data:{id:"lounge-menu"},resolve:{page:o.a}}];let z=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(n){return new(n||t)},imports:[[c.a,i.h.forChild(w)]]}),t})()}}]);