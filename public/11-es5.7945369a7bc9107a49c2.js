function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{F2UI:function(e,n,t){"use strict";t.r(n),t.d(n,"ExperiencesModule",(function(){return I}));var i,a=t("d2mR"),c=t("tyNb"),o=t("titR"),r=t("fXoL"),s=t("aZ8m"),l=t("sbAP"),b=t("aF9I"),d=((i=function(){function e(n){_classCallCheck(this,e),this.route=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.item=this.route.snapshot.data.meta}}]),e}()).\u0275fac=function(e){return new(e||i)(r.Gb(c.a))},i.\u0275cmp=r.Ab({type:i,selectors:[["exo-experiences"]],decls:32,vars:0,consts:[[1,"main","relative"],[1,"main-wrapper","flex","fw-wrap","jc-start","ai-end","p-x-xl","p-s-0"],[1,"col-6","col-s-12","z-index","m-l-l","m-s-0"],[1,"c-light","ta-left","exo-headline"],[1,"col-12","flex","jc-between","ai-center","c-light","z-index"],[1,"col-6","m-l-m","m-s-0"]],template:function(e,n){1&e&&(r.Hb(0,"exo-header"),r.nc(1,"\n"),r.Jb(2,"section",0),r.nc(3,"\n  "),r.Jb(4,"div",1),r.nc(5,"\n    "),r.Jb(6,"div",2),r.nc(7,"\n      "),r.Jb(8,"h1",3),r.nc(9,"Quite Simply, "),r.Hb(10,"br"),r.nc(11," EXtraOrdinary"),r.Ib(),r.nc(12,"\n    "),r.Ib(),r.nc(13,"\n    "),r.Jb(14,"div",4),r.nc(15,"\n      "),r.Jb(16,"div",5),r.nc(17,"\n        "),r.Jb(18,"h4"),r.nc(19,"A journey of the senses"),r.Ib(),r.nc(20,"\n        "),r.Jb(21,"p"),r.nc(22,"Scroll down"),r.Ib(),r.nc(23,"\n      "),r.Ib(),r.nc(24,"\n    "),r.Ib(),r.nc(25,"\n  "),r.Ib(),r.nc(26,"\n"),r.Ib(),r.nc(27,"\n"),r.Hb(28,"scully-content"),r.nc(29,"\n"),r.Hb(30,"exo-footer"),r.nc(31,"\n"))},directives:[s.a,l.a,b.a],styles:[""],changeDetection:0}),i),u=t("3TKP"),g=t("n7Ds"),p=t("lJxs"),f=t("HfZk"),m=t("LPTz"),h=t("ofXK"),x=function(e){return{"background-image":e}};function v(e,n){if(1&e&&(r.Jb(0,"section",15),r.Jb(1,"div",16),r.Jb(2,"div",17),r.Jb(3,"div",18),r.Jb(4,"h3"),r.nc(5),r.Ib(),r.Jb(6,"p",19),r.nc(7),r.Ib(),r.Jb(8,"a",20),r.nc(9,"Read More"),r.Ib(),r.Ib(),r.Ib(),r.Ib(),r.Ib()),2&e){var t=n.$implicit,i=n.odd;r.wb(1),r.yb("even",i),r.wb(1),r.Zb("ngStyle",r.cc(8,x,"url("+t.image+")")),r.wb(1),r.yb("left",i),r.wb(2),r.oc(t.title),r.wb(2),r.oc(t.description),r.wb(1),r.Zb("routerLink",t.route)}}var y,C,w,_=function(){return{}},k=[{path:"",component:(y=function(){function e(n,t){_classCallCheck(this,e),this.scully=n,this.activatedRoute=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.page=this.activatedRoute.snapshot.data.page,this.experiences$=this.scully.available$.pipe(Object(p.a)((function(e){return e.filter((function(e){return e.route.includes("/experiences/")}))})))}}]),e}(),y.\u0275fac=function(e){return new(e||y)(r.Gb(l.c),r.Gb(c.a))},y.\u0275cmp=r.Ab({type:y,selectors:[["exo-experiences-list"]],decls:27,vars:5,consts:[[3,"data"],[1,"grid","m-y-l"],["intersecting","","data-animation","fade-in",1,"col-6","col-s-12","ta-center","text-wrapper"],[1,"m-y-l"],[1,"grid","jc-around","ai-center","m-y-m"],["intersecting","","data-animation","fade-in",1,"col-4","col-s-6","col-xs-12","c-dark","ta-left"],[1,"m-t-s"],["intersecting","","data-animation","fade-in-from-bottom",1,"col-5","col-s-6","col-xs-12","ta-right"],["src","assets/images/events/events-lounge.png"],["intersecting","","data-animation","fade-in-from-bottom",1,"m-y-l","bg-full"],["class","relative flex bg-container m-y-l","intersecting","","data-animation","fade-in-from-bottom",4,"ngFor","ngForOf"],["intersecting","","data-animation","fade-in-from-left",1,"exo-events","m-t-l","flex","jc-center","ai-center"],[1,"col-6","wrapper","relative","c-light","z-index","ta-center","flex","fd-col","ai-center","jc-center"],[1,"z-index","m-y-m"],[1,"btn-secondary","z-index"],["intersecting","","data-animation","fade-in-from-bottom",1,"relative","flex","bg-container","m-y-l"],[1,"custom-bg-r"],[1,"experiences-container","relative",3,"ngStyle"],[1,"card-right","bg-light","p-a-l","flex","fd-col","ai-start","jc-center"],[1,"m-y-m"],[1,"btn-primary","m-t-s",3,"routerLink"]],template:function(e,n){1&e&&(r.Hb(0,"exo-header"),r.Hb(1,"exo-intro",0),r.Jb(2,"div",1),r.Jb(3,"div",2),r.Jb(4,"p"),r.nc(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.Ib(),r.Ib(),r.Ib(),r.Jb(6,"section",3),r.Jb(7,"div",4),r.Jb(8,"div",5),r.Jb(9,"h1"),r.nc(10,"EXO Lounge "),r.Hb(11,"br"),r.nc(12," Menu"),r.Ib(),r.Jb(13,"p",6),r.nc(14,"EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses."),r.Ib(),r.Ib(),r.Jb(15,"div",7),r.Hb(16,"img",8),r.Ib(),r.Ib(),r.Ib(),r.Hb(17,"section",9),r.lc(18,v,10,10,"section",10),r.Vb(19,"async"),r.Jb(20,"section",11),r.Jb(21,"div",12),r.Jb(22,"h1",13),r.nc(23,"Exo Lounge"),r.Ib(),r.Jb(24,"button",14),r.nc(25,"Contact us"),r.Ib(),r.Ib(),r.Ib(),r.Hb(26,"exo-footer")),2&e&&(r.wb(1),r.Zb("data",n.page.showcase||r.bc(4,_)),r.wb(17),r.Zb("ngForOf",r.Wb(19,2,n.experiences$)))},directives:[s.a,f.a,m.a,h.i,b.a,h.k,c.g],pipes:[h.b],styles:['.bg-full[_ngcontent-%COMP%]{background:url(events-bg-full.200394de848a0fff20dd.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:700px}.experiences-container[_ngcontent-%COMP%]{max-width:900px;height:500px;margin:0 auto;background-position:50%;background-size:cover}.custom-bg-r[_ngcontent-%COMP%], .experiences-container[_ngcontent-%COMP%]{width:100%;background-repeat:no-repeat}.custom-bg-r[_ngcontent-%COMP%]{background-image:url(custom-bg.06f6a4a8bddaabf15fdd.svg);background-size:calc((100vw - 900px)/2 + 800px) auto;background-position:100%;height:700px;display:flex;align-items:center;position:absolute}.bg-container[_ngcontent-%COMP%]{height:700px}.card-right[_ngcontent-%COMP%]{position:absolute;width:500px;top:10%;right:-15%}.exo-events[_ngcontent-%COMP%]{background-image:url(exo-events.41609b598b26685ef8dc.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:600px}.wrapper[_ngcontent-%COMP%]{background:transparent;height:300px;width:40%}.wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.3}.even[_ngcontent-%COMP%]{background-position:0}.left[_ngcontent-%COMP%]{left:-15%}@media (max-width:1180px){.card-right[_ngcontent-%COMP%]{right:-5%}.custom-bg-r[_ngcontent-%COMP%]{overflow:hidden}.left[_ngcontent-%COMP%]{left:-5%}}@media (max-width:1000px){.card-right[_ngcontent-%COMP%]{right:0}.left[_ngcontent-%COMP%]{left:0}}@media (max-width:900px){.custom-bg-r[_ngcontent-%COMP%]{background-size:calc(100vw - 100px) auto}.card-right[_ngcontent-%COMP%], .left[_ngcontent-%COMP%]{position:unset;margin:10px}.experiences-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.btn-primary[_ngcontent-%COMP%]{font-size:16px}}@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.text-wrapper[_ngcontent-%COMP%]{text-align:justify}.bg-container[_ngcontent-%COMP%], .custom-bg-r[_ngcontent-%COMP%]{height:500px}.card-right[_ngcontent-%COMP%], .left[_ngcontent-%COMP%]{width:90%}img[_ngcontent-%COMP%]{width:100%}}']}),y),data:{id:"experiences"},resolve:{page:o.a}},{path:":id",component:d,data:{collection:"experiences"},resolve:{meta:u.b,delay:g.a}}],O=((C=function e(){_classCallCheck(this,e)}).\u0275mod=r.Eb({type:C}),C.\u0275inj=r.Db({factory:function(e){return new(e||C)},imports:[[c.h.forChild(k)],c.h]}),C),P=t("vP0e"),I=((w=function e(){_classCallCheck(this,e)}).\u0275mod=r.Eb({type:w}),w.\u0275inj=r.Db({factory:function(e){return new(e||w)},imports:[[h.c,a.a,O,l.b,P.a]]}),w)},LPTz:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var i=t("fXoL"),a=t("6jo/"),c=function(){var e=function(){function e(n,t,i){_classCallCheck(this,e),this.el=n,this.intersectionService=t,this.renderer=i,this.intersecting=.75}return _createClass(e,[{key:"ngAfterViewInit",value:function(){var e=this;setTimeout((function(){e.intersectionService.add({element:e.el.nativeElement,callback:function(){e.render()},intersectionRatio:e.intersecting||0})}),100)}},{key:"render",value:function(){this.renderer.addClass(this.el.nativeElement,"animated")}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.Gb(i.l),i.Gb(a.a),i.Gb(i.D))},e.\u0275dir=i.Bb({type:e,selectors:[["","intersecting",""]],inputs:{intersecting:"intersecting"}}),e}()}}]);