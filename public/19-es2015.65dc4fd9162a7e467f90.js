(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{YXEz:function(e,t,n){"use strict";n.r(t),n.d(t,"NewsModule",(function(){return k}));var c=n("sbAP"),o=n("d2mR"),a=n("tyNb"),i=n("n7Ds"),b=n("3TKP"),s=n("titR"),r=n("lJxs"),l=n("fXoL"),d=n("aZ8m"),p=n("HfZk"),u=n("ofXK"),f=n("aF9I"),g=n("Qke1");function m(e,t){if(1&e&&(l.Jb(0,"div",4),l.Jb(1,"div",5),l.Jb(2,"p"),l.mc(3),l.Vb(4,"text"),l.Ib(),l.Ib(),l.Ib()),2&e){const e=l.Ub();l.wb(3),l.nc(l.Wb(4,1,e.page.firstSegment))}}function w(e,t){if(1&e&&(l.Jb(0,"div",6),l.Jb(1,"div",7),l.Hb(2,"img",8),l.Ib(),l.Jb(3,"div",9),l.Jb(4,"h1"),l.mc(5),l.Ib(),l.Jb(6,"div",10),l.Jb(7,"span",11),l.mc(8),l.Ib(),l.Jb(9,"span",11),l.mc(10),l.Ib(),l.Ib(),l.Jb(11,"p",12),l.mc(12),l.Ib(),l.Jb(13,"a",13),l.mc(14,"Read More"),l.Ib(),l.Ib(),l.Ib()),2&e){const e=t.$implicit;l.wb(2),l.ac("src",e.image,l.ic),l.wb(3),l.nc(e.title),l.wb(3),l.nc(e.date),l.wb(2),l.oc("Category:",e.category,""),l.wb(2),l.nc(e.description),l.wb(1),l.Zb("routerLink",e.route)}}const h=function(){return{}};let y=(()=>{class e{constructor(e,t){this.scully=e,this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page,this.news$=this.scully.available$.pipe(Object(r.a)(e=>e.filter(e=>e.route.includes("/news/"))))}}return e.\u0275fac=function(t){return new(t||e)(l.Gb(c.c),l.Gb(a.a))},e.\u0275cmp=l.Ab({type:e,selectors:[["exo-news-list"]],decls:7,vars:6,consts:[[3,"data"],["class","grid m-y-l",4,"ngIf"],[1,"m-y-l"],["class","grid jc-between ai-center b-b p-y-m",4,"ngFor","ngForOf"],[1,"grid","m-y-l"],[1,"col-6","col-s-12","ta-center"],[1,"grid","jc-between","ai-center","b-b","p-y-m"],[1,"col-5","col-s-6","col-xs-12","ta-left"],[3,"src"],[1,"col-4","col-s-6","col-xs-12","c-dark"],[1,"flex","ai-center","jc-between","w-full","m-t-s"],[1,"category"],[1,"m-t-s","m-b-l"],[1,"btn-primary","m-t-l",3,"routerLink"]],template:function(e,t){1&e&&(l.Hb(0,"exo-header"),l.Hb(1,"exo-intro",0),l.kc(2,m,5,3,"div",1),l.Jb(3,"section",2),l.kc(4,w,15,6,"div",3),l.Vb(5,"async"),l.Ib(),l.Hb(6,"exo-footer")),2&e&&(l.wb(1),l.Zb("data",t.page.showcase||l.bc(5,h)),l.wb(1),l.Zb("ngIf",t.page.firstSegment),l.wb(2),l.Zb("ngForOf",l.Wb(5,3,t.news$)))},directives:[d.a,p.a,u.j,u.i,f.a,a.g],pipes:[u.b,g.a],styles:['.main[_ngcontent-%COMP%]{background:url(news-main.81204e200fff6fb681f4.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.category[_ngcontent-%COMP%]{color:#707070}'],changeDetection:0}),e})();var v=n("jmfH");const I=[{path:"",component:y,data:{id:"news"},resolve:{page:s.a}},{path:":id",component:v.a,data:{collection:"news"},resolve:{meta:b.b,delay:i.a}}];let J=(()=>{class e{}return e.\u0275mod=l.Eb({type:e}),e.\u0275inj=l.Db({factory:function(t){return new(t||e)},imports:[[a.h.forChild(I)],a.h]}),e})(),k=(()=>{class e{}return e.\u0275mod=l.Eb({type:e}),e.\u0275inj=l.Db({factory:function(t){return new(t||e)},imports:[[o.a,J,c.b]]}),e})()}}]);