(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomeModule",(function(){return x}));var o=t("d2mR"),a=t("yREb"),c=t("tyNb"),r=t("titR"),i=t("fXoL"),s=t("aZ8m"),g=t("HfZk"),p=t("ofXK"),b=t("aF9I"),h=t("THYZ");function d(e,n){if(1&e&&i.Kb(0,"exo-block-renderer",4),2&e){const e=i.ac();i.fc("blocks",e.page.blocks)}}const l=function(e){return{"background-image":e}};function u(e,n){if(1&e&&(i.Ob(0,"a",5),i.Ob(1,"div",6),i.Ob(2,"h1",7),i.tc(3),i.Nb(),i.Kb(4,"img",8),i.Nb(),i.Nb()),2&e){const e=n.$implicit;i.fc("routerLink",e.path)("ngStyle",i.ic(3,l,"url("+e.background+")")),i.zb(3),i.uc(e.name)}}const f=function(){return{}},m=[{path:"",component:(()=>{class e{constructor(e){this.activatedRoute=e,this.links={backgrounds:[{name:"Events",background:"assets/images/home/home-3.png",path:"/exo-events"},{name:"Blog",background:"assets/images/home/home-4.png",path:"/blog"},{name:"News & Press",background:"assets/images/home/home-5.png",path:"/news"}]}}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page}}return e.\u0275fac=function(n){return new(n||e)(i.Jb(c.a))},e.\u0275cmp=i.Db({type:e,selectors:[["exo-home"]],decls:6,vars:4,consts:[[3,"data"],[3,"blocks",4,"ngIf"],[1,"flex","fw-wrap","w-full"],["routerLinkActive","active","class","col-4 col-xs-12 events flex jc-center ai-end",3,"routerLink","ngStyle",4,"ngFor","ngForOf"],[3,"blocks"],["routerLinkActive","active",1,"col-4","col-xs-12","events","flex","jc-center","ai-end",3,"routerLink","ngStyle"],[1,"bg-wrapper","relative","p-a-s","flex","fd-col","ai-center"],[1,"c-light","z-index"],["src","assets/icons/right.svg","alt","link",1,"z-index","arrow"]],template:function(e,n){1&e&&(i.Kb(0,"exo-header"),i.Kb(1,"exo-intro",0),i.rc(2,d,1,1,"exo-block-renderer",1),i.Ob(3,"div",2),i.rc(4,u,5,5,"a",3),i.Nb(),i.Kb(5,"exo-footer")),2&e&&(i.zb(1),i.fc("data",n.page.showcase||i.hc(3,f)),i.zb(1),i.fc("ngIf",n.page.blocks),i.zb(2),i.fc("ngForOf",n.links.backgrounds))},directives:[s.a,g.a,p.k,p.j,b.a,h.a,c.g,c.f,p.l],styles:['.events[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:550px}.bg-wrapper[_ngcontent-%COMP%]{background:transparent;min-width:80%}.bg-wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.8}.events[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{opacity:1}.arrow[_ngcontent-%COMP%]{transition:.4s ease-in;opacity:.4}@media (max-width:1100px){.bg-wrapper[_ngcontent-%COMP%]{min-height:250px;min-width:100%;text-align:center;justify-content:space-between}h1[_ngcontent-%COMP%]{font-size:40px}}@media (max-width:900px){.bg-wrapper[_ngcontent-%COMP%]{min-height:170px}h1[_ngcontent-%COMP%]{font-size:30px}.events[_ngcontent-%COMP%]{height:300px}.arrow[_ngcontent-%COMP%]{height:30px}}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:20px}.bg-wrapper[_ngcontent-%COMP%]{text-align:center;min-width:100%;min-height:136px;display:flex;flex-direction:row;justify-content:space-around}}'],changeDetection:0}),e})(),data:{id:"home"},resolve:{page:r.a}}];let w=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(n){return new(n||e)},imports:[[c.h.forChild(m)],c.h]}),e})(),x=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(n){return new(n||e)},imports:[[w,o.a,a.a]]}),e})()}}]);