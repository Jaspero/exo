(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{YXEz:function(e,t,i){"use strict";i.r(t),i.d(t,"NewsModule",(function(){return h}));var n=i("ofXK"),o=i("sbAP"),c=i("tyNb"),a=i("3TKP"),r=i("titR"),b=i("lJxs"),s=i("fXoL"),l=i("fECr"),d=i("fp1T");function u(e,t){if(1&e&&(s.Kb(0,"div",9),s.Kb(1,"div",10),s.Ib(2,"img",11),s.Jb(),s.Kb(3,"div",12),s.Kb(4,"h1"),s.fc(5),s.Jb(),s.Kb(6,"div",13),s.Kb(7,"span",14),s.fc(8),s.Jb(),s.Kb(9,"span",14),s.fc(10),s.Jb(),s.Jb(),s.Kb(11,"p",15),s.fc(12),s.Jb(),s.Kb(13,"a",16),s.fc(14,"Read More"),s.Jb(),s.Jb(),s.Jb()),2&e){const e=t.$implicit;s.wb(2),s.Yb("src",e.image,s.cc),s.wb(3),s.gc(e.title),s.wb(3),s.gc(e.date),s.wb(2),s.hc("Category:",e.category,""),s.wb(2),s.gc(e.description),s.wb(1),s.Xb("routerLink",e.route)}}let p=(()=>{class e{constructor(e,t){this.scully=e,this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page,this.news$=this.scully.available$.pipe(Object(b.a)(e=>e.filter(e=>e.route.includes("/news/"))))}}return e.\u0275fac=function(t){return new(t||e)(s.Hb(o.c),s.Hb(c.a))},e.\u0275cmp=s.Bb({type:e,selectors:[["exo-news-list"]],decls:21,vars:3,consts:[[1,"main","relative"],[1,"grid","h-full","jc-start","ai-end","c-light"],[1,"col-6","col-s-12","z-index"],[1,"ta-left","exo-headline"],[1,"col-12","ta-left","z-index"],[1,"grid","m-y-l"],[1,"col-6","col-s-12","ta-center"],[1,"m-y-l"],["class","grid jc-between ai-center b-b p-y-m",4,"ngFor","ngForOf"],[1,"grid","jc-between","ai-center","b-b","p-y-m"],[1,"col-5","col-s-6","col-xs-12","ta-left"],[3,"src"],[1,"col-4","col-s-6","col-xs-12","c-dark"],[1,"flex","ai-center","jc-between","w-full","m-t-s"],[1,"category"],[1,"m-t-s","m-b-l"],[1,"btn-primary","m-t-l",3,"routerLink"]],template:function(e,t){1&e&&(s.Ib(0,"exo-header"),s.Kb(1,"section",0),s.Kb(2,"div",1),s.Kb(3,"div",2),s.Kb(4,"h1",3),s.fc(5,"Quite Simply, "),s.Ib(6,"br"),s.fc(7," EXtraOrdinary"),s.Jb(),s.Jb(),s.Kb(8,"div",4),s.Kb(9,"h4"),s.fc(10,"A journey of the senses"),s.Jb(),s.Kb(11,"p"),s.fc(12,"Scroll down"),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Kb(13,"div",5),s.Kb(14,"div",6),s.Kb(15,"p"),s.fc(16,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),s.Jb(),s.Jb(),s.Jb(),s.Kb(17,"section",7),s.ec(18,u,15,6,"div",8),s.Tb(19,"async"),s.Jb(),s.Ib(20,"exo-footer")),2&e&&(s.wb(18),s.Xb("ngForOf",s.Ub(19,1,t.news$)))},directives:[l.a,n.i,d.a,c.f],pipes:[n.b],styles:['.main[_ngcontent-%COMP%]{background:url(news-main.81204e200fff6fb681f4.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.category[_ngcontent-%COMP%]{color:#707070}']}),e})();var f=i("jmfH");const m=[{path:"",component:p,data:{id:"news"},resolve:{page:r.a}},{path:":id",component:f.a,resolve:{meta:a.b}},{path:"**",component:f.a}];let g=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},imports:[[c.g.forChild(m)],c.g]}),e})();var w=i("d2mR");let h=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(t){return new(t||e)},imports:[[n.c,g,o.b,w.a]]}),e})()}}]);