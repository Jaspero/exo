(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3oDN":function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var c=t("fXoL"),o=t("sbAP"),i=t("aZ8m"),r=t("aF9I");let a=(()=>{class n{constructor(n){this.scully=n}ngOnInit(){this.scully.getCurrent().subscribe(n=>{this.item=n})}}return n.\u0275fac=function(e){return new(e||n)(c.Hb(o.c))},n.\u0275cmp=c.Bb({type:n,selectors:[["exo-blog"]],decls:18,vars:1,consts:[[1,"main","relative"],[1,"grid","h-full","ai-center"],[1,"col-6","col-s-12","z-index","m-l-l","m-s-0"],[1,"c-light","ta-center","exo-headline"]],template:function(n,e){1&n&&(c.Ib(0,"exo-header"),c.gc(1,"\n"),c.Kb(2,"section",0),c.gc(3,"\n  "),c.Kb(4,"div",1),c.gc(5,"\n    "),c.Kb(6,"div",2),c.gc(7,"\n      "),c.Kb(8,"h1",3),c.gc(9),c.Jb(),c.gc(10,"\n    "),c.Jb(),c.gc(11,"\n  "),c.Jb(),c.gc(12,"\n"),c.Jb(),c.gc(13,"\n\n"),c.Ib(14,"scully-content"),c.gc(15,"\n\n"),c.Ib(16,"exo-footer"),c.gc(17,"\n")),2&n&&(c.wb(9),c.hc(null==e.item?null:e.item.title))},directives:[i.a,o.a,r.a],styles:['.header[_ngcontent-%COMP%]{top:0}.main[_ngcontent-%COMP%]{background:url(blog-single-main.46e2fa028233ffdf55bc.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.main-wrapper[_ngcontent-%COMP%]{height:100%}.category[_ngcontent-%COMP%]{font-size:14px;color:#707070}.blog-img[_ngcontent-%COMP%]{background:url(blog-single.29bacce8e3cce927d268.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:500px}.featured-img[_ngcontent-%COMP%]{background:url(blog-single-2.ba072cfd699e2c97fe25.png);background-position:50%;background-repeat:no-repeat;background-size:contain;height:600px}.single-img[_ngcontent-%COMP%]{background:url(blog-single-1.7dee30d376331a98d1f5.png);background-position:50%;background-repeat:no-repeat;background-size:contain;height:600px}[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}']}),n})()},THYZ:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var c=function(n){return n.ImageR="imageR",n.ImageL="imageL",n.ImageLarge="imageLarge",n}({}),o=t("fXoL");let i=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Bb({type:n,selectors:[["exo-image-l-block"]],decls:8,vars:3,consts:[[1,"m-y-l"],[1,"grid","jc-around","ai-center"],[1,"col-5","col-s-6","col-xs-12","ta-right"],[3,"src"],[1,"col-4","col-s-6","col-xs-12","c-dark","ta-left"],[1,"m-t-s",3,"innerHTML"]],template:function(n,e){1&n&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Ib(3,"img",3),o.Jb(),o.Kb(4,"div",4),o.Kb(5,"h1"),o.gc(6),o.Jb(),o.Ib(7,"div",5),o.Jb(),o.Jb(),o.Jb()),2&n&&(o.wb(3),o.Xb("src",e.data.image,o.dc),o.wb(3),o.hc(e.data.title),o.wb(1),o.Xb("innerHTML",e.data.content,o.cc))},styles:[""]}),n})(),r=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Bb({type:n,selectors:[["exo-image-large-block"]],decls:2,vars:0,template:function(n,e){1&n&&(o.Kb(0,"p"),o.gc(1,"image-large-block works!"),o.Jb())},styles:[""]}),n})();const a={[c.ImageR]:(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Bb({type:n,selectors:[["exo-image-r-block"]],decls:8,vars:3,consts:[[1,"m-y-l"],[1,"grid","jc-around","ai-center"],[1,"col-4","col-s-6","col-xs-12","c-dark","ta-left"],[1,"m-t-s",3,"innerHTML"],[1,"col-5","col-s-6","col-xs-12","ta-right"],[3,"src"]],template:function(n,e){1&n&&(o.Kb(0,"section",0),o.Kb(1,"div",1),o.Kb(2,"div",2),o.Kb(3,"h1"),o.gc(4),o.Jb(),o.Ib(5,"div",3),o.Jb(),o.Kb(6,"div",4),o.Ib(7,"img",5),o.Jb(),o.Jb(),o.Jb()),2&n&&(o.wb(4),o.hc(e.data.title),o.wb(1),o.Xb("innerHTML",e.data.content,o.cc),o.wb(2),o.Xb("src",e.data.image,o.dc))},styles:[""]}),n})(),[c.ImageL]:i,[c.ImageLarge]:r};let s=(()=>{class n{constructor(n,e){this.componentFactoryResolver=n,this.vcr=e}ngOnInit(){for(const n of this.blocks)if(a[n.type]){const e=this.componentFactoryResolver.resolveComponentFactory(a[n.type]);this.vcr.createComponent(e).instance.data=n}}}return n.\u0275fac=function(e){return new(e||n)(o.Hb(o.j),o.Hb(o.N))},n.\u0275cmp=o.Bb({type:n,selectors:[["exo-block-renderer"]],inputs:{blocks:"blocks"},decls:0,vars:0,template:function(n,e){},styles:[""]}),n})()},aF9I:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var c=t("fXoL");let o=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Bb({type:n,selectors:[["exo-footer"]],decls:64,vars:0,consts:[[1,"bg-dark","flex","fw-wrap","p-a-l","footer"],[1,"col-3","hide-s"],["src","assets/images/footer-logo.png","alt","logo"],[1,"col-3","col-s-4","col-xs-6","contact","p-s-0"],[1,"m-t-s"],[1,"m-t-m"],[1,"contact-heading"],["href",""],[1,"m-y-s"],[1,"col-3","col-xs-6","col-s-4","learn","p-s-0"],[1,"contact-heading","m-t-m"],[1,"contact-heading","m-y-xs"],[1,"col-3","col-xs-12","col-s-4","adress","p-s-0"],[1,"m-y-m","fw-light"],[1,"flex","m-t-m","ai-center","social-icons-wrapper"],["src","assets/icons/facebook-white.svg","alt","social-link"],["src","assets/icons/instagram-white.svg","alt","social-link",1,"m-x-m"],["src","assets/icons/twitter-white.svg","alt","social-link"]],template:function(n,e){1&n&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Ib(2,"img",2),c.Jb(),c.Kb(3,"div",3),c.Kb(4,"div",4),c.Kb(5,"p"),c.gc(6,"Contac us"),c.Jb(),c.Jb(),c.Kb(7,"div",5),c.Kb(8,"p",6),c.gc(9,"Exo Lounge"),c.Jb(),c.Kb(10,"a",7),c.gc(11,"lounge@visitexo.com"),c.Jb(),c.Jb(),c.Kb(12,"div",8),c.Kb(13,"p",6),c.gc(14,"EXO Nail Bar"),c.Jb(),c.Kb(15,"a",7),c.gc(16,"nailbar@visitexo.com"),c.Jb(),c.Jb(),c.Kb(17,"div",8),c.Kb(18,"p",6),c.gc(19,"Events"),c.Jb(),c.Kb(20,"a",7),c.gc(21,"events@visitexo.com"),c.Jb(),c.Jb(),c.Kb(22,"div",8),c.Kb(23,"p",6),c.gc(24,"Press"),c.Jb(),c.Kb(25,"a",7),c.gc(26,"marketing@visitexo.com"),c.Jb(),c.Jb(),c.Jb(),c.Kb(27,"div",9),c.Kb(28,"p",4),c.gc(29,"Learn More"),c.Jb(),c.Kb(30,"p",10),c.gc(31,"About us"),c.Jb(),c.Kb(32,"p",11),c.gc(33,"Exo Lounge"),c.Jb(),c.Kb(34,"p",6),c.gc(35,"Exo Nail Bar"),c.Jb(),c.Kb(36,"p",11),c.gc(37,"Exo Med Spa"),c.Jb(),c.Kb(38,"p",6),c.gc(39,"Events"),c.Jb(),c.Kb(40,"p",11),c.gc(41,"Reviews"),c.Jb(),c.Kb(42,"p",6),c.gc(43,"Careers"),c.Jb(),c.Kb(44,"p",11),c.gc(45,"Reach Out"),c.Jb(),c.Jb(),c.Kb(46,"div",12),c.Kb(47,"p",4),c.gc(48,"Our Adress"),c.Jb(),c.Kb(49,"h5",13),c.gc(50,"2 157 Center, "),c.Ib(51,"br"),c.gc(52," Edwardsville IL 62025 "),c.Ib(53,"br"),c.gc(54," 618-692-xoxo"),c.Jb(),c.Kb(55,"h2"),c.gc(56,"Keep in touch"),c.Jb(),c.Kb(57,"div",14),c.Kb(58,"a",7),c.Ib(59,"img",15),c.Jb(),c.Kb(60,"a",7),c.Ib(61,"img",16),c.Jb(),c.Kb(62,"a",7),c.Ib(63,"img",17),c.Jb(),c.Jb(),c.Jb(),c.Jb())},styles:[".contact-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:300}@media (max-width:600px){.social-icons-wrapper[_ngcontent-%COMP%]{justify-content:center}.adress[_ngcontent-%COMP%]{text-align:center}.footer[_ngcontent-%COMP%]{padding:10px}.learn[_ngcontent-%COMP%]{text-align:right}}"]}),n})()},aZ8m:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var c=t("fXoL"),o=t("tyNb");let i=(()=>{class n{constructor(){this.menu=!1}toggleMenu(){this.menu=!this.menu}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Bb({type:n,selectors:[["exo-header"]],decls:41,vars:4,consts:[[1,"header","c-light"],[1,"flex","jc-between","ai-center"],[1,"col-4","z-index"],["routerLink","/","routerLinkActive","active"],[1,"col-8","flex","jc-end","z-index","m-r-l","hide-s"],["routerLink","/lounge","routerLinkActive","active",1,"m-x-s"],["routerLink","/nail","routerLinkActive","active",1,"m-x-s"],["routerLink","/experiences","routerLinkActive","active",1,"m-x-s"],["routerLink","/about","routerLinkActive","active",1,"m-x-s"],["routerLink","/shop","routerLinkActive","active",1,"m-x-s"],["routerLink","/contact","routerLinkActive","active",1,"m-x-s"],[1,"z-index","show-s"],[1,"mobile-menu","m-r-m","z-index",3,"click"],[1,"line-1"],[1,"line-2"],[1,"line-3"],[1,"col-10","flex","fw-wrap","jc-center","ai-center","bg-light","c-dark","fd-col","z-index","mobile-links"]],template:function(n,e){1&n&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"a",3),c.Kb(4,"h3"),c.gc(5,"Logo"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"div",4),c.Kb(7,"a",3),c.gc(8,"HOME"),c.Jb(),c.Kb(9,"a",5),c.gc(10,"LOUNGE"),c.Jb(),c.Kb(11,"a",6),c.gc(12,"NAIL BAR"),c.Jb(),c.Kb(13,"a",7),c.gc(14,"EXPERIENCES"),c.Jb(),c.Kb(15,"a",8),c.gc(16,"LOCATION"),c.Jb(),c.Kb(17,"a",9),c.gc(18,"SHOP"),c.Jb(),c.Kb(19,"a",10),c.gc(20,"CONTACT US"),c.Jb(),c.Jb(),c.Kb(21,"div",11),c.Kb(22,"div",12),c.Qb("click",(function(){return e.toggleMenu()})),c.Ib(23,"span",13),c.Ib(24,"span",14),c.Ib(25,"span",15),c.Jb(),c.Jb(),c.Kb(26,"div",16),c.Kb(27,"a",3),c.gc(28,"HOME"),c.Jb(),c.Kb(29,"a",5),c.gc(30,"LOUNGE"),c.Jb(),c.Kb(31,"a",6),c.gc(32,"NAIL BAR"),c.Jb(),c.Kb(33,"a",7),c.gc(34,"EXPERIENCES"),c.Jb(),c.Kb(35,"a",8),c.gc(36,"LOCATION"),c.Jb(),c.Kb(37,"a",9),c.gc(38,"SHOP"),c.Jb(),c.Kb(39,"a",10),c.gc(40,"CONTACT US"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&n&&(c.wb(22),c.zb("active",e.menu),c.wb(4),c.zb("active",e.menu))},directives:[o.f,o.e],styles:[".header[_ngcontent-%COMP%]{position:absolute;width:100%}.mobile-menu[_ngcontent-%COMP%]{transition:.4s ease-in-out}.mobile-menu[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{border-top:3px solid #fff;display:block;transition:all .4s ease-in-out;width:50px}.mobile-menu[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%]{margin:10px 0}.mobile-menu.active[_ngcontent-%COMP%]{padding:25px 0}.mobile-menu.active[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .mobile-menu.active[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%], .mobile-menu.active[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{transform:rotate(45deg)}.mobile-menu.active[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%]{margin:-3px 0;opacity:0}.mobile-menu.active[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{transform:rotate(-45deg)}.mobile-links[_ngcontent-%COMP%]{position:fixed;z-index:24;top:55px;right:0;display:flex;flex-direction:column;background:#fff;width:100%;transform:translateX(-100%);transition:.4s ease-in-out;height:auto}.mobile-links.active[_ngcontent-%COMP%]{transform:translateX(0)}.mobile-links[_ngcontent-%COMP%]   .mobile-link[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #313131}@media (max-width:600px){.header[_ngcontent-%COMP%]{padding:0}}"]}),n})()},d2mR:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var c=t("ofXK"),o=t("tyNb"),i=(t("aZ8m"),t("aF9I"),t("fXoL"));const r=[c.c];let a=(()=>{class n{}return n.\u0275mod=i.Fb({type:n}),n.\u0275inj=i.Eb({factory:function(e){return new(e||n)},imports:[[...r,o.g],c.c]}),n})()},jmfH:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var c=t("fXoL"),o=t("tyNb"),i=t("aZ8m"),r=t("sbAP");let a=(()=>{class n{constructor(n,e){this.router=n,this.route=e}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(c.Hb(o.d),c.Hb(o.a))},n.\u0275cmp=c.Bb({type:n,selectors:[["exo-news"]],decls:52,vars:0,consts:[[1,"main","relative"],[1,"main-wrapper","flex","fw-wrap","jc-start","ai-end","p-x-xl","p-s-0"],[1,"col-6","col-s-12","z-index","m-l-l","m-s-0"],[1,"c-light","ta-left","exo-headline"],[1,"col-12","flex","jc-between","ai-center","c-light","z-index"],[1,"col-6","m-l-m","m-s-0"]],template:function(n,e){1&n&&(c.Ib(0,"exo-header"),c.gc(1,"\n"),c.Kb(2,"section",0),c.gc(3,"\n  "),c.Kb(4,"div",1),c.gc(5,"\n    "),c.Kb(6,"div",2),c.gc(7,"\n      "),c.Kb(8,"h1",3),c.gc(9,"Quite Simply, "),c.Ib(10,"br"),c.gc(11," EXtraOrdinary"),c.Jb(),c.gc(12,"\n    "),c.Jb(),c.gc(13,"\n    "),c.Kb(14,"div",4),c.gc(15,"\n      "),c.Kb(16,"div",5),c.gc(17,"\n        "),c.Kb(18,"h4"),c.gc(19,"A journey of the senses"),c.Jb(),c.gc(20,"\n        "),c.Kb(21,"p"),c.gc(22,"Scroll down"),c.Jb(),c.gc(23,"\n      "),c.Jb(),c.gc(24,"\n    "),c.Jb(),c.gc(25,"\n  "),c.Jb(),c.gc(26,"\n"),c.Jb(),c.gc(27,"\n"),c.Ib(28,"scully-content"),c.gc(29,"\n"),c.gc(30,"\n"),c.gc(31,"\n"),c.gc(32,"\n"),c.gc(33,"\n"),c.gc(34,"\n"),c.gc(35,"\n"),c.gc(36,"\n"),c.gc(37,"\n"),c.gc(38,"\n"),c.gc(39,"\n"),c.gc(40,"\n"),c.gc(41,"\n"),c.gc(42,"\n"),c.gc(43,"\n"),c.gc(44,"\n"),c.gc(45,"\n"),c.gc(46,"\n"),c.gc(47,"\n"),c.gc(48,"\n"),c.gc(49,"\n"),c.gc(50,"\n"),c.gc(51,"\n"))},directives:[i.a,r.a],styles:['.main[_ngcontent-%COMP%]{background:url(news-signle-main.4839ef45287c7393be2d.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.main-wrapper[_ngcontent-%COMP%]{height:100%}.news-img[_ngcontent-%COMP%]{background:url(news-single.fedbde86be6c21a7dbcc.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:500px}.category[_ngcontent-%COMP%]{font-size:14px;color:#707070}']}),n})()},rPmz:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var c=t("fXoL"),o=t("tyNb"),i=t("aZ8m"),r=t("sbAP"),a=t("aF9I");let s=(()=>{class n{constructor(n,e){this.router=n,this.route=e}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(c.Hb(o.d),c.Hb(o.a))},n.\u0275cmp=c.Bb({type:n,selectors:[["exo-events"]],decls:66,vars:0,consts:[[1,"main","relative"],[1,"main-wrapper","flex","fw-wrap","jc-start","ai-end","p-x-xl","p-s-0"],[1,"col-6","col-s-12","z-index","m-l-l","m-s-0"],[1,"c-light","ta-left","exo-headline"],[1,"col-12","flex","jc-between","ai-center","c-light","z-index"],[1,"col-6","m-l-m","m-s-0"]],template:function(n,e){1&n&&(c.Ib(0,"exo-header"),c.gc(1,"\n"),c.Kb(2,"section",0),c.gc(3,"\n  "),c.Kb(4,"div",1),c.gc(5,"\n    "),c.Kb(6,"div",2),c.gc(7,"\n      "),c.Kb(8,"h1",3),c.gc(9,"Quite Simply, "),c.Ib(10,"br"),c.gc(11," EXtraOrdinary"),c.Jb(),c.gc(12,"\n    "),c.Jb(),c.gc(13,"\n    "),c.Kb(14,"div",4),c.gc(15,"\n      "),c.Kb(16,"div",5),c.gc(17,"\n        "),c.Kb(18,"h4"),c.gc(19,"A journey of the senses"),c.Jb(),c.gc(20,"\n        "),c.Kb(21,"p"),c.gc(22,"Scroll down"),c.Jb(),c.gc(23,"\n      "),c.Jb(),c.gc(24,"\n    "),c.Jb(),c.gc(25,"\n  "),c.Jb(),c.gc(26,"\n"),c.Jb(),c.gc(27,"\n"),c.Ib(28,"scully-content"),c.gc(29,"\n"),c.gc(30,"\n"),c.gc(31,"\n"),c.gc(32,"\n"),c.gc(33,"\n"),c.gc(34,"\n"),c.gc(35,"\n"),c.gc(36,"\n"),c.gc(37,"\n"),c.gc(38,"\n"),c.gc(39,"\n"),c.gc(40,"\n"),c.gc(41,"\n"),c.gc(42,"\n"),c.gc(43,"\n"),c.gc(44,"\n"),c.gc(45,"\n"),c.gc(46,"\n"),c.gc(47,"\n"),c.gc(48,"\n"),c.gc(49,"\n"),c.gc(50,"\n"),c.gc(51,"\n"),c.gc(52,"\n"),c.gc(53,"\n"),c.gc(54,"\n"),c.gc(55,"\n"),c.gc(56,"\n"),c.gc(57,"\n"),c.gc(58,"\n"),c.gc(59,"\n"),c.gc(60,"\n"),c.gc(61,"\n"),c.gc(62,"\n"),c.gc(63,"\n"),c.Ib(64,"exo-footer"),c.gc(65,"\n"))},directives:[i.a,r.a,a.a],styles:['.main[_ngcontent-%COMP%]{background:url(events-single-main.702bade0ed9a81cc4271.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.main-wrapper[_ngcontent-%COMP%]{height:100%}.exo-events[_ngcontent-%COMP%]{background-image:url(events-single-2.7ebe64c2fc7c236bcad4.png);background-position:50%;background-repeat:no-repeat;background-size:cover;height:600px}.wrapper[_ngcontent-%COMP%]{background:transparent;height:300px;width:40%}.wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.3}']}),n})()},titR:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var c=t("vkgz"),o=t("3TKP"),i=t("fXoL"),r=t("tk/3"),a=t("jhN1");let s=(()=>{class n{constructor(n,e,t,c){this.http=n,this.title=e,this.meta=t,this.baseTitle=c}resolve(n){const{id:e}=n.data;return this.http.get(`/collections/pages/${e}.json`).pipe(Object(c.a)(n=>{if(n.meta){const e=Object.assign({},n.meta);this.title.setTitle(e.title?`${e.title} | ${this.baseTitle}`:this.baseTitle),delete e.title;for(const n in e)e.hasOwnProperty(n)&&this.meta.updateTag({name:n,content:e[n]})}}))}}return n.\u0275fac=function(e){return new(e||n)(i.Mb(r.a),i.Mb(a.c),i.Mb(a.b),i.Mb(o.a))},n.\u0275prov=i.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},yREb:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var c=t("ofXK"),o=t("fXoL");let i=(()=>{class n{}return n.\u0275mod=o.Fb({type:n}),n.\u0275inj=o.Eb({factory:function(e){return new(e||n)},imports:[[c.c]]}),n})()}}]);