(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomeModule",(function(){return y}));var o=t("d2mR"),a=t("yREb"),c=t("tyNb"),r=t("titR"),i=t("3oDN"),s=t("rPmz"),g=t("jmfH"),p=t("fXoL"),b=t("aZ8m"),d=t("HfZk"),h=t("ofXK"),m=t("aF9I"),u=t("THYZ");function l(e,n){if(1&e&&p.Hb(0,"exo-block-renderer",4),2&e){const e=p.Ub();p.Zb("blocks",e.page.blocks)}}const f=function(e){return{"background-image":e}};function w(e,n){if(1&e&&(p.Jb(0,"a",5),p.Jb(1,"div",6),p.Jb(2,"h1",7),p.mc(3),p.Ib(),p.Hb(4,"img",8),p.Ib(),p.Ib()),2&e){const e=n.$implicit;p.Zb("routerLink",e.path)("ngStyle",p.cc(3,f,"url("+e.background+")")),p.wb(3),p.nc(e.name)}}const k=function(){return{}},x=[{path:"",component:(()=>{class e{constructor(e){this.activatedRoute=e,this.links={backgrounds:[{name:"Events",background:"assets/images/home/home-3.png",path:"/events",component:s.a},{name:"Blog",background:"assets/images/home/home-4.png",path:"/blog",component:i.a},{name:"News & Press",background:"assets/images/home/home-5.png",path:"/news",component:g.a}]}}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return e.\u0275fac=function(n){return new(n||e)(p.Gb(c.a))},e.\u0275cmp=p.Ab({type:e,selectors:[["exo-home"]],decls:6,vars:4,consts:[[3,"data"],[3,"blocks",4,"ngIf"],[1,"flex","w-full"],["routerLinkActive","active","class","col-4 events flex jc-center ai-end",3,"routerLink","ngStyle",4,"ngFor","ngForOf"],[3,"blocks"],["routerLinkActive","active",1,"col-4","events","flex","jc-center","ai-end",3,"routerLink","ngStyle"],[1,"bg-wrapper","relative","p-a-s","flex","fd-col","ai-center","m-b-m"],[1,"c-light","z-index"],["src","assets/icons/right.svg","alt","link",1,"z-index","m-t-m","arrow"]],template:function(e,n){1&e&&(p.Hb(0,"exo-header"),p.Hb(1,"exo-intro",0),p.kc(2,l,1,1,"exo-block-renderer",1),p.Jb(3,"div",2),p.kc(4,w,5,5,"a",3),p.Ib(),p.Hb(5,"exo-footer")),2&e&&(p.wb(1),p.Zb("data",n.page.showcase||p.bc(3,k)),p.wb(1),p.Zb("ngIf",n.page.blocks),p.wb(2),p.Zb("ngForOf",n.links.backgrounds))},directives:[b.a,d.a,h.j,h.i,m.a,u.a,c.g,c.f,h.k],styles:['.events[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:550px}.bg-wrapper[_ngcontent-%COMP%]{background:transparent;min-width:80%}.bg-wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.4}.events[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{opacity:1}.arrow[_ngcontent-%COMP%]{transition:.4s ease-in;opacity:.4}@media (max-width:1100px){.bg-wrapper[_ngcontent-%COMP%]{min-height:250px;min-width:100%;text-align:center;justify-content:space-between}h1[_ngcontent-%COMP%]{font-size:40px}}@media (max-width:600px){.bg-wrapper[_ngcontent-%COMP%]{text-align:center;min-width:100%;min-height:176px;justify-content:space-between}h1[_ngcontent-%COMP%]{font-size:30px}.wrapper[_ngcontent-%COMP%]{width:100%}.arrow[_ngcontent-%COMP%]{height:30px}}'],changeDetection:0}),e})(),data:{id:"home"},resolve:{page:r.a}}];let v=(()=>{class e{}return e.\u0275mod=p.Eb({type:e}),e.\u0275inj=p.Db({factory:function(n){return new(n||e)},imports:[[c.h.forChild(x)],c.h]}),e})(),y=(()=>{class e{}return e.\u0275mod=p.Eb({type:e}),e.\u0275inj=p.Db({factory:function(n){return new(n||e)},imports:[[v,o.a,a.a]]}),e})()}}]);