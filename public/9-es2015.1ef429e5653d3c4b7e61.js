(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{F2UI:function(e,t,n){"use strict";n.r(t),n.d(t,"ExperiencesModule",(function(){return P}));var i=n("d2mR"),c=n("tyNb"),o=n("titR"),a=n("fXoL"),r=n("aZ8m"),s=n("sbAP"),l=n("aF9I");let d=(()=>{class e{constructor(e){this.route=e}ngOnInit(){this.item=this.route.snapshot.data.meta}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(c.a))},e.\u0275cmp=a.Db({type:e,selectors:[["exo-experiences"]],decls:32,vars:0,consts:[[1,"main","relative"],[1,"main-wrapper","flex","fw-wrap","jc-start","ai-end","p-x-xl","p-s-0"],[1,"col-6","col-s-12","z-index","m-l-l","m-s-0"],[1,"c-light","ta-left","exo-headline"],[1,"col-12","flex","jc-between","ai-center","c-light","z-index"],[1,"col-6","m-l-m","m-s-0"]],template:function(e,t){1&e&&(a.Kb(0,"exo-header"),a.tc(1,"\n"),a.Ob(2,"section",0),a.tc(3,"\n  "),a.Ob(4,"div",1),a.tc(5,"\n    "),a.Ob(6,"div",2),a.tc(7,"\n      "),a.Ob(8,"h1",3),a.tc(9,"Quite Simply, "),a.Kb(10,"br"),a.tc(11," EXtraOrdinary"),a.Nb(),a.tc(12,"\n    "),a.Nb(),a.tc(13,"\n    "),a.Ob(14,"div",4),a.tc(15,"\n      "),a.Ob(16,"div",5),a.tc(17,"\n        "),a.Ob(18,"h4"),a.tc(19,"A journey of the senses"),a.Nb(),a.tc(20,"\n        "),a.Ob(21,"p"),a.tc(22,"Scroll down"),a.Nb(),a.tc(23,"\n      "),a.Nb(),a.tc(24,"\n    "),a.Nb(),a.tc(25,"\n  "),a.Nb(),a.tc(26,"\n"),a.Nb(),a.tc(27,"\n"),a.Kb(28,"scully-content"),a.tc(29,"\n"),a.Kb(30,"exo-footer"),a.tc(31,"\n"))},directives:[r.a,s.a,l.a],styles:[""],changeDetection:0}),e})();var b=n("3TKP"),p=n("n7Ds"),g=n("lJxs"),u=n("HfZk"),m=n("LPTz"),f=n("ofXK");const x=function(e){return{"background-image":e}};function h(e,t){if(1&e&&(a.Ob(0,"section",15),a.Ob(1,"div",16),a.Ob(2,"div",17),a.Ob(3,"div",18),a.Ob(4,"h3"),a.tc(5),a.Nb(),a.Ob(6,"p",19),a.tc(7),a.Nb(),a.Ob(8,"a",20),a.tc(9,"Read More"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e){const e=t.$implicit,n=t.odd;a.zb(1),a.Bb("even",n),a.zb(1),a.fc("ngStyle",a.ic(8,x,"url("+e.image+")")),a.zb(1),a.Bb("left",n),a.zb(2),a.uc(e.title),a.zb(2),a.uc(e.description),a.zb(1),a.fc("routerLink",e.route)}}const O=function(){return{}},v=[{path:"",component:(()=>{class e{constructor(e,t){this.scully=e,this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page,this.experiences$=this.scully.available$.pipe(Object(g.a)(e=>e.filter(e=>e.route.includes("/experiences/"))))}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(s.c),a.Jb(c.a))},e.\u0275cmp=a.Db({type:e,selectors:[["exo-experiences-list"]],decls:27,vars:5,consts:[[3,"data"],[1,"grid","m-y-l"],["intersecting","","data-animation","fade-in",1,"col-6","col-s-12","ta-center","text-wrapper"],[1,"m-y-l"],[1,"grid","jc-around","ai-center","m-y-m"],["intersecting","","data-animation","fade-in",1,"col-4","col-s-6","col-xs-12","c-dark","ta-left"],[1,"m-t-s"],["intersecting","","data-animation","fade-in-from-bottom",1,"col-5","col-s-6","col-xs-12","ta-right"],["src","assets/images/events/events-lounge.png"],["intersecting","","data-animation","fade-in-from-bottom",1,"m-y-l","bg-full"],["class","experience","intersecting","","data-animation","fade-in-from-bottom",4,"ngFor","ngForOf"],["intersecting","","data-animation","fade-in-from-left",1,"exo-events","m-t-l","flex","jc-center","ai-center"],[1,"col-6","wrapper","relative","c-light","z-index","ta-center","flex","fd-col","ai-center","jc-center"],[1,"z-index","m-y-m"],[1,"btn-secondary","z-index"],["intersecting","","data-animation","fade-in-from-bottom",1,"experience"],[1,"experience-custom-bg-r"],[1,"experience-container",3,"ngStyle"],[1,"experience-card-right"],[1,"m-y-m"],[1,"btn-primary","m-t-s",3,"routerLink"]],template:function(e,t){1&e&&(a.Kb(0,"exo-header"),a.Kb(1,"exo-intro",0),a.Ob(2,"div",1),a.Ob(3,"div",2),a.Ob(4,"p"),a.tc(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.Nb(),a.Nb(),a.Nb(),a.Ob(6,"section",3),a.Ob(7,"div",4),a.Ob(8,"div",5),a.Ob(9,"h1"),a.tc(10,"EXO Lounge "),a.Kb(11,"br"),a.tc(12," Menu"),a.Nb(),a.Ob(13,"p",6),a.tc(14,"EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses."),a.Nb(),a.Nb(),a.Ob(15,"div",7),a.Kb(16,"img",8),a.Nb(),a.Nb(),a.Nb(),a.Kb(17,"section",9),a.rc(18,h,10,10,"section",10),a.bc(19,"async"),a.Ob(20,"section",11),a.Ob(21,"div",12),a.Ob(22,"h1",13),a.tc(23,"Exo Lounge"),a.Nb(),a.Ob(24,"button",14),a.tc(25,"Contact us"),a.Nb(),a.Nb(),a.Nb(),a.Kb(26,"exo-footer")),2&e&&(a.zb(1),a.fc("data",t.page.showcase||a.hc(4,O)),a.zb(17),a.fc("ngForOf",a.cc(19,2,t.experiences$)))},directives:[r.a,u.a,m.a,f.j,l.a,f.l,c.g],pipes:[f.b],styles:['.bg-full[_ngcontent-%COMP%]{background:url(events-bg-full.200394de848a0fff20dd.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:700px}.experience[_ngcontent-%COMP%]{height:700px;display:flex;position:relative;margin-top:calc(32px + 2vw);margin-bottom:calc(32px + 2vw)}.experience-custom-bg-r[_ngcontent-%COMP%]{background-image:url(custom-bg.06f6a4a8bddaabf15fdd.svg);background-size:calc((100vw - 900px)/2 + 800px) auto;background-repeat:no-repeat;background-position:100%;height:700px;display:flex;align-items:center;position:absolute;width:100%}.experience-container[_ngcontent-%COMP%]{width:100%;max-width:900px;height:500px;margin:0 auto;background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative}.experience-card-right[_ngcontent-%COMP%]{position:absolute;width:500px;top:10%;right:-15%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;background:#fff;padding:calc(32px + 2vw)}.exo-events[_ngcontent-%COMP%]{background-image:url(exo-events.41609b598b26685ef8dc.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:600px}.wrapper[_ngcontent-%COMP%]{background:transparent;height:300px;width:40%}.wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.3}.even[_ngcontent-%COMP%]{background-position:0}.left[_ngcontent-%COMP%]{left:-15%}@media (max-width:1180px){.experience-card-right[_ngcontent-%COMP%]{right:-5%}.experience-custom-bg-r[_ngcontent-%COMP%]{overflow:hidden}.left[_ngcontent-%COMP%]{left:-5%}}@media (max-width:1000px){.experience-card-right[_ngcontent-%COMP%]{right:0}.left[_ngcontent-%COMP%]{left:0}}@media (max-width:900px){.experience-custom-bg-r[_ngcontent-%COMP%]{background-size:calc(100vw - 100px) auto}.experience-card-right[_ngcontent-%COMP%], .left[_ngcontent-%COMP%]{position:unset;margin:10px}.experience-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.text-wrapper[_ngcontent-%COMP%]{margin-top:10px;text-align:justify}.experience[_ngcontent-%COMP%], .experience-custom-bg-r[_ngcontent-%COMP%]{height:500px}.experience-card-right[_ngcontent-%COMP%], .left[_ngcontent-%COMP%]{width:90%}img[_ngcontent-%COMP%]{width:100%}.col-4[_ngcontent-%COMP%]{order:1}.grid[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{margin:10px 0}.experience-container[_ngcontent-%COMP%]{margin:20px 0}.exo-events[_ngcontent-%COMP%]{margin:0}}']}),e})(),data:{id:"experiences"},resolve:{page:o.a}},{path:":id",component:d,data:{collection:"experiences"},resolve:{meta:b.b,delay:p.a}}];let y=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[c.h.forChild(v)],c.h]}),e})();var w=n("vP0e");let P=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[f.c,i.a,y,s.b,w.a]]}),e})()},LPTz:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),c=n("6jo/");let o=(()=>{class e{constructor(e,t,n){this.el=e,this.intersectionService=t,this.renderer=n,this.intersecting=.75}ngAfterViewInit(){setTimeout(()=>{this.intersectionService.add({element:this.el.nativeElement,callback:()=>{this.render()},intersectionRatio:this.intersecting||0})},100)}render(){this.renderer.addClass(this.el.nativeElement,"animated")}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(i.l),i.Jb(c.a),i.Jb(i.D))},e.\u0275dir=i.Eb({type:e,selectors:[["","intersecting",""]],inputs:{intersecting:"intersecting"}}),e})()}}]);