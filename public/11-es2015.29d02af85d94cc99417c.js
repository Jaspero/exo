(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{HfZk:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),o=n("ofXK");function c(e,t){if(1&e&&(i.Jb(0,"div",4),i.Jb(1,"h1",5),i.kc(2),i.Ib(),i.Ib()),2&e){const e=i.Sb();i.wb(2),i.lc(e.data.showcaseTitle)}}function a(e,t){if(1&e&&(i.Jb(0,"div",6),i.Jb(1,"div",7),i.Jb(2,"h4"),i.kc(3),i.Ib(),i.Ib(),i.Ib()),2&e){const e=i.Sb();i.wb(3),i.lc(e.data.showcaseSubTitle)}}let r=(()=>{class e{constructor(){}get bg(){return{"background-image":`url(${this.data.showcaseBackground})`}}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ab({type:e,selectors:[["exo-intro"]],inputs:{data:"data"},decls:4,vars:3,consts:[[1,"main","relative",3,"ngStyle"],[1,"h-full","grid","jc-start","ai-end","c-light"],["class","col-6 col-s-12 z-index",4,"ngIf"],["class","col-12 flex  jc-between ai-center z-index",4,"ngIf"],[1,"col-6","col-s-12","z-index"],[1,"exo-headline"],[1,"col-12","flex","jc-between","ai-center","z-index"],[1,"col-6"]],template:function(e,t){1&e&&(i.Jb(0,"section",0),i.Jb(1,"div",1),i.ic(2,c,3,1,"div",2),i.ic(3,a,4,1,"div",3),i.Ib(),i.Ib()),2&e&&(i.Xb("ngStyle",t.bg),i.wb(2),i.Xb("ngIf",t.data.showcaseTitle),i.wb(1),i.Xb("ngIf",t.data.showcaseSubTitle))},directives:[o.k,o.j],styles:['.main[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}'],changeDetection:0}),e})()},"U4+L":function(e,t,n){"use strict";n.r(t),n.d(t,"BlogModule",(function(){return h}));var i=n("sbAP"),o=n("d2mR"),c=n("tyNb"),a=n("n7Ds"),r=n("3TKP"),b=n("lJxs"),s=n("fXoL"),l=n("aZ8m"),u=n("HfZk"),d=n("ofXK"),m=n("aF9I");function g(e,t){if(1&e&&(s.Jb(0,"div",5),s.Jb(1,"div",6),s.Jb(2,"h1"),s.kc(3),s.Ib(),s.Jb(4,"div",7),s.Jb(5,"span",8),s.kc(6),s.Ib(),s.Jb(7,"span",8),s.kc(8),s.Ib(),s.Ib(),s.Jb(9,"p",9),s.kc(10),s.Ib(),s.Jb(11,"a",10),s.kc(12,"Read More"),s.Ib(),s.Ib(),s.Jb(13,"div",11),s.Hb(14,"img",12),s.Ib(),s.Ib()),2&e){const e=t.$implicit,n=t.even;s.yb("even",n),s.wb(3),s.lc(e.title),s.wb(3),s.lc(e.date),s.wb(2),s.mc("Category: ",e.category,""),s.wb(2),s.lc(e.description),s.wb(1),s.Xb("routerLink",e.route),s.wb(2),s.yb("text-align",n),s.wb(1),s.Xb("src",e.image,s.gc),s.xb("alt",e.alt||"")}}let f=(()=>{class e{constructor(e,t){this.scully=e,this.activatedRoute=t}ngOnInit(){this.page=this.activatedRoute.snapshot.data.page,this.blogs$=this.scully.available$.pipe(Object(b.a)(e=>e.filter(e=>e.route.includes("/blog/"))))}}return e.\u0275fac=function(t){return new(t||e)(s.Gb(i.c),s.Gb(c.a))},e.\u0275cmp=s.Ab({type:e,selectors:[["exo-blog-list"]],decls:10,vars:4,consts:[[3,"data"],[1,"grid","m-y-l"],[1,"col-6","col-s-12","ta-center"],[1,"m-y-l"],["class","grid jc-between ai-center b-b p-y-m",3,"even",4,"ngFor","ngForOf"],[1,"grid","jc-between","ai-center","b-b","p-y-m"],[1,"col-4","col-s-6","col-xs-12","c-dark","ta-justify"],[1,"flex","ai-center","jc-between","w-full","m-t-s"],[1,"category"],[1,"m-t-s","m-b-l"],[1,"btn-primary",3,"routerLink"],[1,"col-5","col-s-6","col-xs-12","ta-right"],[3,"src"]],template:function(e,t){1&e&&(s.Hb(0,"exo-header"),s.Hb(1,"exo-intro",0),s.Jb(2,"div",1),s.Jb(3,"div",2),s.Jb(4,"p"),s.kc(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),s.Ib(),s.Ib(),s.Ib(),s.Jb(6,"section",3),s.ic(7,g,15,11,"div",4),s.Tb(8,"async"),s.Ib(),s.Hb(9,"exo-footer")),2&e&&(s.wb(1),s.Xb("data",t.page),s.wb(6),s.Xb("ngForOf",s.Ub(8,2,t.blogs$)))},directives:[l.a,u.a,d.i,m.a,c.f],pipes:[d.b],styles:[".header[_ngcontent-%COMP%]{top:0}.category[_ngcontent-%COMP%]{color:#707070}.even[_ngcontent-%COMP%]{flex-direction:row-reverse}.text-align[_ngcontent-%COMP%]{text-align:left}"]}),e})();var k=n("3oDN");const v=[{path:"",component:f},{path:":id",component:k.a,data:{collection:"blog"},resolve:{meta:r.b,delay:a.a}},{path:"**",component:k.a}];let p=(()=>{class e{}return e.\u0275mod=s.Eb({type:e}),e.\u0275inj=s.Db({factory:function(t){return new(t||e)},imports:[[c.g.forChild(v)],c.g]}),e})(),h=(()=>{class e{}return e.\u0275mod=s.Eb({type:e}),e.\u0275inj=s.Db({factory:function(t){return new(t||e)},imports:[[o.a,p,i.b]]}),e})()},aF9I:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("fXoL"),o=n("tyNb");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ab({type:e,selectors:[["exo-footer"]],decls:65,vars:0,consts:[[1,"bg-dark","flex","fw-wrap","p-a-l","footer"],[1,"col-3","hide-s"],["src","assets/images/footer-logo.png","alt","logo"],[1,"col-3","col-s-4","col-xs-6","contact","p-s-0"],[1,"m-t-s"],[1,"m-t-m"],[1,"contact-heading"],["href","mailto:lounge@visitexo.com"],[1,"m-y-s"],["href","mailto:nailbar@visitexo.com"],["href","mailto:events@visitexo.com"],["href","mailto: marketing@visitexo.com"],[1,"col-3","col-xs-6","col-s-4","learn","p-s-0","flex","fd-col"],["href","",1,"m-t-s"],["href","",1,"contact-heading","m-t-m"],["routerLink","/lounge","routerLinkActive","active",1,"contact-heading","m-y-xs"],["routerLink","/nail","routerLinkActive","active",1,"contact-heading"],[1,"contact-heading","m-y-xs"],["routerLink","/events","routerLinkActive","active",1,"contact-heading"],["href","",1,"contact-heading","m-y-xs"],["href","",1,"contact-heading"],[1,"col-3","col-xs-12","col-s-4","adress","p-s-0"],["href","https://goo.gl/maps/kL7L8N6Ks3ZscL6c8","target","_blank"],[1,"m-y-m","fw-light"],[1,"flex","m-t-m","ai-center","social-icons-wrapper"],["href","",1,"social-icon"],["src","assets/icons/facebook-white.svg","alt","social-link"],["src","assets/icons/instagram-white.svg","alt","social-link",1,"m-x-m"],["src","assets/icons/twitter-white.svg","alt","social-link"]],template:function(e,t){1&e&&(i.Jb(0,"div",0),i.Jb(1,"div",1),i.Hb(2,"img",2),i.Ib(),i.Jb(3,"div",3),i.Jb(4,"div",4),i.Jb(5,"p"),i.kc(6,"Contac us"),i.Ib(),i.Ib(),i.Jb(7,"div",5),i.Jb(8,"p",6),i.kc(9,"Exo Lounge"),i.Ib(),i.Jb(10,"a",7),i.kc(11,"lounge@visitexo.com"),i.Ib(),i.Ib(),i.Jb(12,"div",8),i.Jb(13,"p",6),i.kc(14,"EXO Nail Bar"),i.Ib(),i.Jb(15,"a",9),i.kc(16,"nailbar@visitexo.com"),i.Ib(),i.Ib(),i.Jb(17,"div",8),i.Jb(18,"p",6),i.kc(19,"Events"),i.Ib(),i.Jb(20,"a",10),i.kc(21,"events@visitexo.com"),i.Ib(),i.Ib(),i.Jb(22,"div",8),i.Jb(23,"p",6),i.kc(24,"Press"),i.Ib(),i.Jb(25,"a",11),i.kc(26,"marketing@visitexo.com"),i.Ib(),i.Ib(),i.Ib(),i.Jb(27,"div",12),i.Jb(28,"a",13),i.kc(29,"Learn More"),i.Ib(),i.Jb(30,"a",14),i.kc(31,"About us"),i.Ib(),i.Jb(32,"a",15),i.kc(33,"Exo Lounge"),i.Ib(),i.Jb(34,"a",16),i.kc(35,"Exo Nail Bar"),i.Ib(),i.Jb(36,"a",17),i.kc(37,"Exo Med Spa"),i.Ib(),i.Jb(38,"a",18),i.kc(39,"Events"),i.Ib(),i.Jb(40,"a",19),i.kc(41,"Reviews"),i.Ib(),i.Jb(42,"a",20),i.kc(43,"Careers"),i.Ib(),i.Jb(44,"a",19),i.kc(45,"Reach Out"),i.Ib(),i.Ib(),i.Jb(46,"div",21),i.Jb(47,"p",4),i.kc(48,"Our Adress"),i.Ib(),i.Jb(49,"a",22),i.Jb(50,"h5",23),i.kc(51,"2 157 Center, "),i.Hb(52,"br"),i.kc(53," Edwardsville IL 62025 "),i.Hb(54,"br"),i.kc(55," 618-692-xoxo"),i.Ib(),i.Ib(),i.Jb(56,"h2"),i.kc(57,"Keep in touch"),i.Ib(),i.Jb(58,"div",24),i.Jb(59,"a",25),i.Hb(60,"img",26),i.Ib(),i.Jb(61,"a",25),i.Hb(62,"img",27),i.Ib(),i.Jb(63,"a",25),i.Hb(64,"img",28),i.Ib(),i.Ib(),i.Ib(),i.Ib())},directives:[o.f,o.e],styles:[".contact-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:300}a[_ngcontent-%COMP%]{color:#e0e0e0}a[_ngcontent-%COMP%]:hover{color:#fff}.social-icon[_ngcontent-%COMP%]{opacity:.6}.social-icon[_ngcontent-%COMP%]:hover{opacity:1}@media (max-width:600px){.social-icons-wrapper[_ngcontent-%COMP%]{justify-content:center}.adress[_ngcontent-%COMP%]{text-align:center}.footer[_ngcontent-%COMP%]{padding:10px}.learn[_ngcontent-%COMP%]{text-align:right}}"]}),e})()},aZ8m:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),o=n("tyNb");const c=function(){return{exact:!0}};let a=(()=>{class e{constructor(){this.menu=!1}toggleMenu(){this.menu=!this.menu}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ab({type:e,selectors:[["exo-header"]],decls:41,vars:6,consts:[[1,"header","c-light"],[1,"flex","jc-between","ai-center"],[1,"col-4","z-index"],["routerLink","/","routerLinkActive","active"],[1,"col-8","flex","jc-end","z-index","m-r-l","hide-s"],["routerLink","/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"],["routerLink","/lounge","routerLinkActive","active",1,"m-x-s","link"],["routerLink","/nail","routerLinkActive","active",1,"m-x-s","link"],["routerLink","/experiences","routerLinkActive","active",1,"m-x-s","link"],["routerLink","/about","routerLinkActive","active",1,"m-x-s","link"],["routerLink","/shop","routerLinkActive","active",1,"m-x-s","link"],["routerLink","/contact","routerLinkActive","active",1,"m-x-s","link"],[1,"z-index","show-s"],[1,"mobile-menu","m-r-m","z-index",3,"click"],[1,"line-1"],[1,"line-2"],[1,"line-3"],[1,"col-10","flex","fw-wrap","jc-center","ai-center","bg-light","c-dark","fd-col","z-index","mobile-links"],["routerLink","/","routerLinkActive","active-mobile"],["routerLink","/lounge","routerLinkActive","active-mobile",1,"m-x-s","mobile-link"],["routerLink","/nail","routerLinkActive","active-mobile",1,"m-x-s","mobile-link"],["routerLink","/experiences","routerLinkActive","active-mobile",1,"m-x-s","mobile-link"],["routerLink","/about","routerLinkActive","active-mobile",1,"m-x-s","mobile-link"],["routerLink","/shop","routerLinkActive","active-mobile",1,"m-x-s","mobile-link"],["routerLink","/contact","routerLinkActive","active-mobile",1,"m-x-s","mobile-link"]],template:function(e,t){1&e&&(i.Jb(0,"div",0),i.Jb(1,"div",1),i.Jb(2,"div",2),i.Jb(3,"a",3),i.Jb(4,"h3"),i.kc(5,"Logo"),i.Ib(),i.Ib(),i.Ib(),i.Jb(6,"div",4),i.Jb(7,"a",5),i.kc(8,"HOME"),i.Ib(),i.Jb(9,"a",6),i.kc(10,"LOUNGE"),i.Ib(),i.Jb(11,"a",7),i.kc(12,"NAIL BAR"),i.Ib(),i.Jb(13,"a",8),i.kc(14,"EXPERIENCES"),i.Ib(),i.Jb(15,"a",9),i.kc(16,"LOCATION"),i.Ib(),i.Jb(17,"a",10),i.kc(18,"SHOP"),i.Ib(),i.Jb(19,"a",11),i.kc(20,"CONTACT US"),i.Ib(),i.Ib(),i.Jb(21,"div",12),i.Jb(22,"div",13),i.Qb("click",(function(){return t.toggleMenu()})),i.Hb(23,"span",14),i.Hb(24,"span",15),i.Hb(25,"span",16),i.Ib(),i.Ib(),i.Jb(26,"div",17),i.Jb(27,"a",18),i.kc(28,"HOME"),i.Ib(),i.Jb(29,"a",19),i.kc(30,"LOUNGE"),i.Ib(),i.Jb(31,"a",20),i.kc(32,"NAIL BAR"),i.Ib(),i.Jb(33,"a",21),i.kc(34,"EXPERIENCES"),i.Ib(),i.Jb(35,"a",22),i.kc(36,"LOCATION"),i.Ib(),i.Jb(37,"a",23),i.kc(38,"SHOP"),i.Ib(),i.Jb(39,"a",24),i.kc(40,"CONTACT US"),i.Ib(),i.Ib(),i.Ib(),i.Ib()),2&e&&(i.wb(7),i.Xb("routerLinkActiveOptions",i.ac(5,c)),i.wb(15),i.yb("active",t.menu),i.wb(4),i.yb("active",t.menu))},directives:[o.f,o.e],styles:['.header[_ngcontent-%COMP%]{position:absolute;width:100%}.active[_ngcontent-%COMP%]{font-weight:800;color:#fff!important;border-bottom:1px solid #fff}.link[_ngcontent-%COMP%]{position:relative;text-decoration:none;color:#e0e0e0;text-transform:uppercase;margin:0 10px}.link[_ngcontent-%COMP%]:hover{color:#fff}.link[_ngcontent-%COMP%]:before{position:absolute;bottom:0;left:0;top:105%;right:0;margin:auto;width:0;content:"";color:#fff;background:#fff;height:1px;transition:all .5s}.link[_ngcontent-%COMP%]:hover:before{width:100%}.mobile-menu[_ngcontent-%COMP%]{transition:.4s ease-in-out}.mobile-menu[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{border-top:3px solid #fff;display:block;transition:all .4s ease-in-out;width:50px}.mobile-menu[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%]{margin:10px 0}.mobile-menu.active[_ngcontent-%COMP%]{padding:25px 0}.mobile-menu.active[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .mobile-menu.active[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%], .mobile-menu.active[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{transform:rotate(45deg)}.mobile-menu.active[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%]{margin:-3px 0;opacity:0}.mobile-menu.active[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{transform:rotate(-45deg)}.mobile-links[_ngcontent-%COMP%]{position:fixed;z-index:24;top:55px;right:0;display:flex;flex-direction:column;background:#fff;width:100%;transform:translateX(-100%);transition:.4s ease-in-out;height:auto}.mobile-links.active[_ngcontent-%COMP%]{transform:translateX(0)}.mobile-links[_ngcontent-%COMP%]   .mobile-link[_ngcontent-%COMP%]{color:#000;width:100%;text-align:center;border-bottom:1px solid #313131}@media (max-width:600px){.header[_ngcontent-%COMP%]{padding:0}}']}),e})()},d2mR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("ofXK"),o=n("tyNb"),c=(n("aF9I"),n("aZ8m"),n("HfZk"),n("fXoL"));const a=[i.c,o.g];let r=(()=>{class e{}return e.\u0275mod=c.Eb({type:e}),e.\u0275inj=c.Db({factory:function(t){return new(t||e)},imports:[[...a],i.c,o.g]}),e})()}}]);