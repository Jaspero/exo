(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Cy45:function(t,e,n){"use strict";n.r(e),n.d(e,"LoungeMenuModule",(function(){return v}));var i=n("tyNb"),c=n("d2mR"),o=n("titR"),a=n("fXoL"),s=n("aZ8m"),b=n("HfZk"),r=n("ofXK"),l=n("aF9I");function u(t,e){if(1&t&&(a.Kb(0,"h2"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.subTitle)}}function f(t,e){if(1&t&&(a.Kb(0,"span"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.price)}}function p(t,e){if(1&t&&(a.Kb(0,"h4"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.subTitle)}}function d(t,e){if(1&t&&(a.Kb(0,"span"),a.nc(1),a.Jb()),2&t){const t=a.Vb().$implicit;a.xb(1),a.oc(t.price)}}function h(t,e){if(1&t&&(a.Kb(0,"div"),a.Kb(1,"h3"),a.nc(2),a.Jb(),a.lc(3,p,2,1,"h4",2),a.lc(4,d,2,1,"span",2),a.Jb()),2&t){const t=e.$implicit;a.xb(2),a.oc(t.title),a.xb(1),a.ac("ngIf",t.subTitle),a.xb(1),a.ac("ngIf",t.price)}}function g(t,e){if(1&t&&(a.Kb(0,"div"),a.Kb(1,"h1"),a.nc(2),a.Jb(),a.lc(3,u,2,1,"h2",2),a.lc(4,f,2,1,"span",2),a.lc(5,h,5,3,"div",1),a.Jb()),2&t){const t=e.$implicit;a.xb(2),a.oc(t.title),a.xb(1),a.ac("ngIf",t.subTitle),a.xb(1),a.ac("ngIf",t.price),a.xb(1),a.ac("ngForOf",t.items)}}const m=function(){return{}},x=[{path:"",component:(()=>{class t{constructor(t){this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return t.\u0275fac=function(e){return new(e||t)(a.Hb(i.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["exo-lounge-menu"]],decls:4,vars:3,consts:[[3,"data"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(t,e){1&t&&(a.Ib(0,"exo-header"),a.Ib(1,"exo-intro",0),a.lc(2,g,6,4,"div",1),a.Ib(3,"exo-footer")),2&t&&(a.xb(1),a.ac("data",e.page.showcase||a.dc(2,m)),a.xb(1),a.ac("ngForOf",e.page.categories))},directives:[s.a,b.a,r.i,l.a,r.j],styles:[""],changeDetection:0}),t})(),data:{id:"lounge-menu"},resolve:{page:o.a}}];let v=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(e){return new(e||t)},imports:[[c.a,i.g.forChild(x)]]}),t})()},titR:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n("vkgz"),c=n("3TKP"),o=n("fXoL"),a=n("tk/3"),s=n("jhN1");let b=(()=>{class t{constructor(t,e,n,i){this.http=t,this.title=e,this.meta=n,this.baseTitle=i}resolve(t){const{id:e}=t.data;return this.http.get(`/collections/pages/${e}.json`).pipe(Object(i.a)(t=>{if(t.meta){const e=Object.assign({},t.meta);this.title.setTitle(e.title?`${e.title} | ${this.baseTitle}`:this.baseTitle),delete e.title;for(const t in e)e.hasOwnProperty(t)&&this.meta.updateTag({name:t,content:e[t]})}}))}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(a.a),o.Nb(s.c),o.Nb(s.b),o.Nb(c.a))},t.\u0275prov=o.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);