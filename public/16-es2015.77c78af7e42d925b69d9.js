(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Cy45:function(t,e,i){"use strict";i.r(e),i.d(e,"LoungeMenuModule",(function(){return k}));var n=i("tyNb"),c=i("d2mR"),b=i("titR"),o=i("fXoL"),a=i("aZ8m"),s=i("HfZk"),r=i("ofXK"),g=i("aF9I");function p(t,e){if(1&t&&(o.Jb(0,"p",10),o.mc(1),o.Ib()),2&t){const t=o.Ub().$implicit;o.wb(1),o.nc(t.subTitle)}}function u(t,e){if(1&t&&(o.Jb(0,"span"),o.mc(1),o.Ib()),2&t){const t=o.Ub().$implicit;o.wb(1),o.nc(t.price)}}function l(t,e){if(1&t&&(o.Jb(0,"p",17),o.mc(1),o.Ib()),2&t){const t=o.Ub().$implicit;o.wb(1),o.nc(t.subTitle)}}function f(t,e){if(1&t&&(o.Jb(0,"span",18),o.mc(1),o.Ib()),2&t){const t=o.Ub().$implicit;o.wb(1),o.nc(t.price)}}const m=function(t){return{"background-image":t}};function d(t,e){if(1&t&&o.Hb(0,"div",19),2&t){const t=o.Ub().$implicit;o.Zb("ngStyle",o.cc(1,m,"url("+t.image+")"))}}function w(t,e){if(1&t&&(o.Jb(0,"div"),o.Jb(1,"div",11),o.Jb(2,"div",12),o.Jb(3,"h4",13),o.mc(4),o.Ib(),o.kc(5,l,2,1,"p",14),o.Ib(),o.kc(6,f,2,1,"span",15),o.Ib(),o.kc(7,d,1,3,"div",16),o.Ib()),2&t){const t=e.$implicit;o.wb(4),o.nc(t.title),o.wb(1),o.Zb("ngIf",t.subTitle),o.wb(1),o.Zb("ngIf",t.price),o.wb(1),o.Zb("ngIf",t.image)}}function I(t,e){if(1&t&&(o.Jb(0,"div"),o.Jb(1,"div",5),o.Jb(2,"div",6),o.Jb(3,"h1",7),o.mc(4),o.Ib(),o.kc(5,p,2,1,"p",8),o.kc(6,u,2,1,"span",9),o.Ib(),o.Ib(),o.kc(7,w,8,4,"div",4),o.Ib()),2&t){const t=e.$implicit;o.wb(4),o.nc(t.title),o.wb(1),o.Zb("ngIf",t.subTitle),o.wb(1),o.Zb("ngIf",t.price),o.wb(1),o.Zb("ngForOf",t.items)}}const h=function(){return{}},v=[{path:"",component:(()=>{class t{constructor(t){this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(n.a))},t.\u0275cmp=o.Ab({type:t,selectors:[["exo-lounge-menu"]],decls:7,vars:3,consts:[[3,"data"],[1,"bg-dark","c-light"],[1,"col-12","ta-center","p-y-l"],["src","assets/images/exo.svg","alt","",2,"height","200px"],[4,"ngFor","ngForOf"],[1,"container"],[1,"category-wrapper","ta-center","m-t-l","p-b-m","b-b"],[1,"category-title"],["class","category-subtitle",4,"ngIf"],[4,"ngIf"],[1,"category-subtitle"],[1,"container","flex","jc-between","ai-center","b-b","p-y-s"],[1,"wrapper"],[1,"item-title","fw-normal"],["class","item-subtitle",4,"ngIf"],["class","item-price",4,"ngIf"],["class","item-img",3,"ngStyle",4,"ngIf"],[1,"item-subtitle"],[1,"item-price"],[1,"item-img",3,"ngStyle"]],template:function(t,e){1&t&&(o.Hb(0,"exo-header"),o.Hb(1,"exo-intro",0),o.Jb(2,"section",1),o.Jb(3,"div",2),o.Hb(4,"img",3),o.Ib(),o.kc(5,I,8,4,"div",4),o.Ib(),o.Hb(6,"exo-footer")),2&t&&(o.wb(1),o.Zb("data",e.page.showcase||o.bc(2,h)),o.wb(4),o.Zb("ngForOf",e.page.categories))},directives:[a.a,s.a,r.i,g.a,r.j,r.k],styles:[".container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.item-price[_ngcontent-%COMP%]{font-size:20px;font-weight:800}.item-img[_ngcontent-%COMP%]{height:100vh;background-size:cover;background-position:50%;background-repeat:no-repeat;width:100vw}"],changeDetection:0}),t})(),data:{id:"lounge-menu"},resolve:{page:b.a}}];let k=(()=>{class t{}return t.\u0275mod=o.Eb({type:t}),t.\u0275inj=o.Db({factory:function(e){return new(e||t)},imports:[[c.a,n.h.forChild(v)]]}),t})()}}]);