(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{k3wr:function(t,i,n){"use strict";n.r(i),n.d(i,"NailBarMenuModule",(function(){return v}));var e=n("tyNb"),c=n("d2mR"),o=n("titR"),a=n("fXoL"),s=n("aZ8m"),b=n("HfZk"),r=n("ofXK"),l=n("aF9I");function f(t,i){if(1&t&&(a.Kb(0,"h2"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.subTitle)}}function p(t,i){if(1&t&&(a.Kb(0,"span"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.price)}}function u(t,i){if(1&t&&(a.Kb(0,"h4"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.subTitle)}}function d(t,i){if(1&t&&(a.Kb(0,"span"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.price)}}function h(t,i){if(1&t&&(a.Kb(0,"div"),a.Kb(1,"h3"),a.nc(2),a.Jb(),a.lc(3,u,2,1,"h4",2),a.lc(4,d,2,1,"span",2),a.Jb()),2&t){const t=i.$implicit;a.xb(2),a.oc(t.title),a.xb(1),a.ac("ngIf",t.subTitle),a.xb(1),a.ac("ngIf",t.price)}}function g(t,i){if(1&t&&(a.Kb(0,"div"),a.Kb(1,"h1"),a.nc(2),a.Jb(),a.lc(3,f,2,1,"h2",2),a.lc(4,p,2,1,"span",2),a.lc(5,h,5,3,"div",1),a.Jb()),2&t){const t=i.$implicit;a.xb(2),a.oc(t.title),a.xb(1),a.ac("ngIf",t.subTitle),a.xb(1),a.ac("ngIf",t.price),a.xb(1),a.ac("ngForOf",t.items)}}const m=function(){return{}},x=[{path:"",component:(()=>{class t{constructor(t){this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return t.\u0275fac=function(i){return new(i||t)(a.Hb(e.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["exo-nail-bar-menu"]],decls:4,vars:3,consts:[[3,"data"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(t,i){1&t&&(a.Ib(0,"exo-header"),a.Ib(1,"exo-intro",0),a.lc(2,g,6,4,"div",1),a.Ib(3,"exo-footer")),2&t&&(a.xb(1),a.ac("data",i.page.showcase||a.dc(2,m)),a.xb(1),a.ac("ngForOf",i.page.categories))},directives:[s.a,b.a,r.i,l.a,r.j],styles:[""],changeDetection:0}),t})(),data:{id:"nail-bar-menu"},resolve:{page:o.a}}];let v=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(i){return new(i||t)},imports:[[c.a,e.g.forChild(x)]]}),t})()},titR:function(t,i,n){"use strict";n.d(i,"a",(function(){return b}));var e=n("vkgz"),c=n("3TKP"),o=n("fXoL"),a=n("tk/3"),s=n("jhN1");let b=(()=>{class t{constructor(t,i,n,e){this.http=t,this.title=i,this.meta=n,this.baseTitle=e}resolve(t){const{id:i}=t.data;return this.http.get(`/collections/pages/${i}.json`).pipe(Object(e.a)(t=>{if(t.meta){const i=Object.assign({},t.meta);this.title.setTitle(i.title?`${i.title} | ${this.baseTitle}`:this.baseTitle),delete i.title;for(const t in i)i.hasOwnProperty(t)&&this.meta.updateTag({name:t,content:i[t]})}}))}}return t.\u0275fac=function(i){return new(i||t)(o.Nb(a.a),o.Nb(s.c),o.Nb(s.b),o.Nb(c.a))},t.\u0275prov=o.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);