(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{YXEz:function(t,e,n){"use strict";n.r(e),n.d(e,"NewsModule",(function(){return x}));var i=n("sbAP"),o=n("d2mR"),a=n("tyNb"),c=n("n7Ds"),s=n("3TKP"),r=n("titR"),b=n("lJxs"),l=n("fXoL"),u=n("aZ8m"),d=n("HfZk"),p=n("ofXK"),m=n("aF9I");function f(t,e){if(1&t&&(l.Kb(0,"div",5),l.Kb(1,"div",6),l.Ib(2,"img",7),l.Jb(),l.Kb(3,"div",8),l.Kb(4,"h1"),l.nc(5),l.Jb(),l.Kb(6,"div",9),l.Kb(7,"span",10),l.nc(8),l.Jb(),l.Kb(9,"span",10),l.nc(10),l.Jb(),l.Jb(),l.Kb(11,"p",11),l.nc(12),l.Jb(),l.Kb(13,"a",12),l.nc(14,"Read More"),l.Jb(),l.Jb(),l.Jb()),2&t){const t=e.$implicit;l.xb(2),l.bc("src",t.image,l.jc),l.xb(3),l.oc(t.title),l.xb(3),l.oc(t.date),l.xb(2),l.pc("Category:",t.category,""),l.xb(2),l.oc(t.description),l.xb(1),l.ac("routerLink",t.route)}}const g=function(){return{}};let h=(()=>{class t{constructor(t,e){this.scully=t,this.activatedRoute=e}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page,this.news$=this.scully.available$.pipe(Object(b.a)(t=>t.filter(t=>t.route.includes("/news/"))))}}return t.\u0275fac=function(e){return new(e||t)(l.Hb(i.c),l.Hb(a.a))},t.\u0275cmp=l.Bb({type:t,selectors:[["exo-news-list"]],decls:10,vars:5,consts:[[3,"data"],[1,"grid","m-y-l"],[1,"col-6","col-s-12","ta-center"],[1,"m-y-l"],["class","grid jc-between ai-center b-b p-y-m",4,"ngFor","ngForOf"],[1,"grid","jc-between","ai-center","b-b","p-y-m"],[1,"col-5","col-s-6","col-xs-12","ta-left"],[3,"src"],[1,"col-4","col-s-6","col-xs-12","c-dark"],[1,"flex","ai-center","jc-between","w-full","m-t-s"],[1,"category"],[1,"m-t-s","m-b-l"],[1,"btn-primary","m-t-l",3,"routerLink"]],template:function(t,e){1&t&&(l.Ib(0,"exo-header"),l.Ib(1,"exo-intro",0),l.Kb(2,"div",1),l.Kb(3,"div",2),l.Kb(4,"p"),l.nc(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"section",3),l.lc(7,f,15,6,"div",4),l.Wb(8,"async"),l.Jb(),l.Ib(9,"exo-footer")),2&t&&(l.xb(1),l.ac("data",e.page.showcase||l.dc(4,g)),l.xb(6),l.ac("ngForOf",l.Xb(8,2,e.news$)))},directives:[u.a,d.a,p.i,m.a,a.f],pipes:[p.b],styles:['.main[_ngcontent-%COMP%]{background:url(news-main.81204e200fff6fb681f4.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.category[_ngcontent-%COMP%]{color:#707070}']}),t})();var v=n("jmfH");const w=[{path:"",component:h,data:{id:"news"},resolve:{page:r.a}},{path:":id",component:v.a,data:{collection:"news"},resolve:{meta:s.b,delay:c.a}},{path:"**",component:v.a}];let y=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(w)],a.g]}),t})(),x=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(e){return new(e||t)},imports:[[o.a,y,i.b]]}),t})()},titR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("vkgz"),o=n("3TKP"),a=n("fXoL"),c=n("tk/3"),s=n("jhN1");let r=(()=>{class t{constructor(t,e,n,i){this.http=t,this.title=e,this.meta=n,this.baseTitle=i}resolve(t){const{id:e}=t.data;return this.http.get(`/collections/pages/${e}.json`).pipe(Object(i.a)(t=>{if(t.meta){const e=Object.assign({},t.meta);this.title.setTitle(e.title?`${e.title} | ${this.baseTitle}`:this.baseTitle),delete e.title;for(const t in e)e.hasOwnProperty(t)&&this.meta.updateTag({name:t,content:e[t]})}}))}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(c.a),a.Nb(s.c),a.Nb(s.b),a.Nb(o.a))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);