(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomeModule",(function(){return v}));var o=t("d2mR"),a=t("yREb"),i=t("tyNb"),c=t("titR"),r=t("3oDN"),s=t("rPmz"),g=t("jmfH"),b=t("fXoL"),p=t("aZ8m"),d=t("HfZk"),l=t("ofXK"),h=t("aF9I"),m=t("THYZ");function u(e,n){if(1&e&&b.Hb(0,"exo-block-renderer",4),2&e){const e=b.Sb();b.Xb("blocks",e.page.blocks)}}const f=function(e){return{"background-image":e}};function w(e,n){if(1&e&&(b.Jb(0,"div",5),b.Jb(1,"div",6),b.Jb(2,"h1",7),b.kc(3),b.Ib(),b.Jb(4,"a",8),b.Hb(5,"img",9),b.Ib(),b.Ib(),b.Ib()),2&e){const e=n.$implicit;b.Xb("ngStyle",b.bc(3,f,"url("+e.background+")")),b.wb(3),b.lc(e.name),b.wb(1),b.Zb("routerLink","/",e.path,"")}}const k=[{path:"",component:(()=>{class e{constructor(e){this.activatedRoute=e,this.links={backgrounds:[{name:"Events",background:"assets/images/home/home-3.png",path:"events",component:s.a},{name:"Blog",background:"assets/images/home/home-4.png",path:"blog",component:r.a},{name:"News & Press",background:"assets/images/home/home-5.png",path:"news",component:g.a}]}}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return e.\u0275fac=function(n){return new(n||e)(b.Gb(i.a))},e.\u0275cmp=b.Ab({type:e,selectors:[["exo-home"]],decls:6,vars:3,consts:[[3,"data"],[3,"blocks",4,"ngIf"],[1,"flex","w-full"],["class","col-4 events flex jc-center ai-end",3,"ngStyle",4,"ngFor","ngForOf"],[3,"blocks"],[1,"col-4","events","flex","jc-center","ai-end",3,"ngStyle"],[1,"bg-wrapper","relative","p-a-s","flex","fd-col","ai-center","m-b-m"],[1,"c-light","z-index"],["routerLinkActive","active",1,"z-index",3,"routerLink"],["src","assets/icons/right.svg","alt","link",1,"z-index","m-t-m","arrow"]],template:function(e,n){1&e&&(b.Hb(0,"exo-header"),b.Hb(1,"exo-intro",0),b.ic(2,u,1,1,"exo-block-renderer",1),b.Jb(3,"div",2),b.ic(4,w,6,5,"div",3),b.Ib(),b.Hb(5,"exo-footer")),2&e&&(b.wb(1),b.Xb("data",n.page),b.wb(1),b.Xb("ngIf",n.page.blocks),b.wb(2),b.Xb("ngForOf",n.links.backgrounds))},directives:[p.a,d.a,l.j,l.i,h.a,m.a,l.k,i.f,i.e],styles:['.events[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:550px}.bg-wrapper[_ngcontent-%COMP%]{background:transparent;min-width:80%}.bg-wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.4}.bg-wrapper[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{opacity:1}.arrow[_ngcontent-%COMP%]{opacity:.4}@media (max-width:1100px){.bg-wrapper[_ngcontent-%COMP%]{min-height:250px;min-width:100%;text-align:center;justify-content:space-between}h1[_ngcontent-%COMP%]{font-size:40px}}@media (max-width:600px){.exo-headline[_ngcontent-%COMP%]{font-size:30px;text-align:center}.bg-wrapper[_ngcontent-%COMP%]{text-align:center;min-width:100%;min-height:176px;justify-content:space-between}.main[_ngcontent-%COMP%]{height:500px}h1[_ngcontent-%COMP%]{font-size:30px}.wrapper[_ngcontent-%COMP%]{width:100%}.arrow[_ngcontent-%COMP%]{height:30px}}']}),e})(),data:{id:"home"},resolve:{page:c.a}}];let x=(()=>{class e{}return e.\u0275mod=b.Eb({type:e}),e.\u0275inj=b.Db({factory:function(n){return new(n||e)},imports:[[i.g.forChild(k)],i.g]}),e})(),v=(()=>{class e{}return e.\u0275mod=b.Eb({type:e}),e.\u0275inj=b.Db({factory:function(n){return new(n||e)},imports:[[x,o.a,a.a]]}),e})()}}]);