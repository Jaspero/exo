(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{LPTz:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("fXoL"),a=e("6jo/");let c=(()=>{class t{constructor(t,n,e){this.el=t,this.intersectionService=n,this.renderer=e,this.intersecting=.75}ngAfterViewInit(){setTimeout(()=>{this.intersectionService.add({element:this.el.nativeElement,callback:()=>{this.render()},intersectionRatio:this.intersecting||0})},100)}render(){this.renderer.addClass(this.el.nativeElement,"animated")}}return t.\u0275fac=function(n){return new(n||t)(i.Jb(i.l),i.Jb(a.a),i.Jb(i.D))},t.\u0275dir=i.Eb({type:t,selectors:[["","intersecting",""]],inputs:{intersecting:"intersecting"}}),t})()},THYZ:function(t,n,e){"use strict";e.d(n,"a",(function(){return T}));var i=function(t){return t.ImageR="imageR",t.ImageL="imageL",t.ImageLarge="imageLarge",t.TextImgBlock="textImgBlock",t.ImgShadowR="imageShadowR",t.ImageFull="imageFull",t.ImageFullButton="imageFullButton",t.TextBlock="textBlock",t.EventImageBlock="eventImageBlock",t.ImageRightButton="imageRightButton",t.ImageLeftButton="imageLeftButton",t.EventsBlock="eventsBlock",t.GalleryBlock="galleryImages",t}({}),a=e("fXoL"),c=e("LPTz"),o=e("ofXK");function r(t,n){if(1&t&&(a.Ob(0,"div"),a.Ob(1,"h3",8),a.tc(2),a.Nb(),a.Kb(3,"div",9),a.Nb()),2&t){const t=a.ac();a.zb(1),a.Ab("data-animation",t.data.animation||"none"),a.zb(1),a.uc(t.data.title),a.zb(1),a.fc("innerHTML",t.data.content,a.nc),a.Ab("data-animation",t.data.animation||"none")}}function b(t,n){if(1&t&&(a.Ob(0,"div",10),a.Ob(1,"h3",11),a.tc(2),a.Nb(),a.Kb(3,"div",12),a.Kb(4,"img",13),a.Nb()),2&t){const t=a.ac();a.zb(1),a.Ab("data-animation",t.data.animation||"none"),a.zb(1),a.uc(t.data.title),a.zb(1),a.fc("innerHTML",t.data.content,a.nc),a.Ab("data-animation",t.data.animation||"none"),a.zb(1),a.fc("src",t.data.belowImg,a.pc),a.Ab("data-animation",t.data.animation||"none")}}let l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-l-block"]],decls:9,vars:4,consts:[[1,"m-y-xl"],[1,"container","ai-center"],[1,"col-11","flex","jc-between","ai-center"],["intersecting","",1,"col-5","col-xs-12","ta-left","image-container"],[1,"w-full",3,"src"],[1,"col-5","col-s-6","col-xs-12","c-dark","ta-left","content-wrapper"],[4,"ngIf","ngIfElse"],["belowImg",""],["intersecting","",1,"m-y-s","title"],["intersecting","",1,"font-primary",3,"innerHTML"],[1,"ta-left","mobile-wrapper"],["intersecting","",1,"m-y-s","title","mobile-wrapper-title"],["intersecting","",1,"font-primary","mobile-wrapper-content",3,"innerHTML"],["alt","","intersecting","",1,"m-t-xxl","w-full","img-wrapper","mobile-wrapper-image",3,"src"]],template:function(t,n){if(1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Kb(4,"img",4),a.Nb(),a.Ob(5,"div",5),a.rc(6,r,4,4,"div",6),a.rc(7,b,5,6,"ng-template",null,7,a.sc),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t){const t=a.kc(8);a.zb(3),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("src",n.data.image,a.pc),a.zb(2),a.fc("ngIf",!n.data.belowImg)("ngIfElse",t)}},directives:[c.a,o.k],styles:["@media (max-width:600px){section[_ngcontent-%COMP%]{padding:0}.title[_ngcontent-%COMP%]{margin:10px 0}h1[_ngcontent-%COMP%]{font-size:30px}.img-wrapper[_ngcontent-%COMP%]{text-align:left;margin-top:20px}img[_ngcontent-%COMP%]{width:100%}.content-wrapper[_ngcontent-%COMP%]{order:2}.image-container[_ngcontent-%COMP%]{order:3}.mobile-wrapper[_ngcontent-%COMP%]{order:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;flex-wrap:wrap}.mobile-wrapper-content[_ngcontent-%COMP%]{order:3}.mobile-wrapper-title[_ngcontent-%COMP%]{order:2}.mobile-wrapper-image[_ngcontent-%COMP%]{order:1}}"]}),t})();const s=function(t){return{"background-image":t}};let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-large-block"]],decls:3,vars:4,consts:[["intersecting","",1,"m-y-xl","hide-xs"],[1,"grid"],[1,"col-12","custom-bg",3,"ngStyle"]],template:function(t,n){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Kb(2,"div",2),a.Nb(),a.Nb()),2&t&&(a.Ab("data-animation",n.data.animation||"none"),a.zb(2),a.fc("ngStyle",a.ic(2,s,"url("+n.data.image+")")))},directives:[c.a,o.l],styles:[".custom-bg[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:600px}"]}),t})();function d(t,n){if(1&t&&(a.Ob(0,"div"),a.Ob(1,"h3",8),a.tc(2),a.Nb(),a.Kb(3,"div",9),a.Nb()),2&t){const t=a.ac();a.zb(1),a.Ab("data-animation",t.data.animation||"none"),a.zb(1),a.uc(t.data.title),a.zb(1),a.fc("innerHTML",t.data.content,a.nc),a.Ab("data-animation",t.data.animation||"none")}}function m(t,n){if(1&t&&(a.Ob(0,"div",10),a.Ob(1,"h3",11),a.tc(2),a.Nb(),a.Kb(3,"div",12),a.Kb(4,"img",13),a.Nb()),2&t){const t=a.ac();a.zb(1),a.Ab("data-animation",t.data.animation||"none"),a.zb(1),a.uc(t.data.title),a.zb(1),a.fc("innerHTML",t.data.content,a.nc),a.Ab("data-animation",t.data.animation||"none"),a.zb(1),a.fc("src",t.data.belowImg,a.pc),a.Ab("data-animation",t.data.animation||"none")}}let p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-r-block"]],decls:9,vars:4,consts:[[1,"m-y-xl"],[1,"container","ai-center"],[1,"col-11","flex","jc-between","ai-center"],[1,"col-5","col-s-6","col-xs-12","c-dark","ta-left","content-wrapper"],[4,"ngIf","ngIfElse"],["belowImg",""],["intersecting","",1,"col-5","col-xs-12","ta-right","image-container"],[1,"w-full",3,"src"],["intersecting","",1,"m-y-s","title"],["intersecting","",1,"font-primary",3,"innerHTML"],[1,"ta-left","mobile-wrapper"],["intersecting","",1,"m-y-s","title","mobile-wrapper-title"],["intersecting","",1,"font-primary","mobile-wrapper-content",3,"innerHTML"],["alt","","intersecting","",1,"m-t-xxl","w-full","img-wrapper","mobile-wrapper-image",3,"src"]],template:function(t,n){if(1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.rc(4,d,4,4,"div",4),a.rc(5,m,5,6,"ng-template",null,5,a.sc),a.Nb(),a.Ob(7,"div",6),a.Kb(8,"img",7),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t){const t=a.kc(6);a.zb(4),a.fc("ngIf",!n.data.belowImg)("ngIfElse",t),a.zb(3),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("src",n.data.image,a.pc)}},directives:[o.k,c.a],styles:["@media (max-width:600px){section[_ngcontent-%COMP%]{padding:0}h1[_ngcontent-%COMP%]{font-size:30px}.title[_ngcontent-%COMP%]{margin:10px 0}.img-wrapper[_ngcontent-%COMP%]{text-align:left;margin-top:20px}img[_ngcontent-%COMP%]{width:100%}.content-wrapper[_ngcontent-%COMP%]{order:1}.image-container[_ngcontent-%COMP%]{order:3}.mobile-wrapper[_ngcontent-%COMP%]{order:2;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;flex-wrap:wrap}.mobile-wrapper-content[_ngcontent-%COMP%]{order:3}.mobile-wrapper-title[_ngcontent-%COMP%]{order:2}.mobile-wrapper-image[_ngcontent-%COMP%]{order:1}}"]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-text-img-block"]],decls:6,vars:4,consts:[[1,"grid","m-y-xl"],[1,"col-6","ta-center","m-b-l"],["alt","","intersecting","",3,"src"],["intersecting","",1,"col-8","col-s-12","ta-center","text-wrapper"],[1,"font-tertiary"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"div",1),a.Kb(2,"img",2),a.Nb(),a.Ob(3,"div",3),a.Ob(4,"p",4),a.tc(5),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.fc("src",n.data.image,a.pc),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(2),a.uc(n.data.content))},directives:[c.a],styles:[".text-wrapper[_ngcontent-%COMP%]{font-size:20px}@media (max-width:600px){.text-wrapper[_ngcontent-%COMP%]{text-align:justify;font-size:16px}.grid[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{height:100px}}"]}),t})();var u=e("tyNb");const x=function(t){return[t]},w=function(t){return{"background-image":t}},O=function(t){return{"background-image":t}},h=function(t){return[t]};function v(t,n){if(1&t&&(a.Ob(0,"div",4),a.Ob(1,"h3"),a.tc(2),a.Nb(),a.Nb()),2&t){const t=a.ac();a.Ab("data-animation",t.data.animation||"none"),a.zb(2),a.uc(t.data.title)}}function M(t,n){if(1&t&&(a.Ob(0,"div",5),a.Ob(1,"p",6),a.tc(2),a.Nb(),a.Nb()),2&t){const t=a.ac();a.Ab("data-animation",t.data.animation||"none"),a.zb(2),a.uc(t.data.content)}}const y=function(t){return{"background-image":t}};function z(t,n){if(1&t&&a.Kb(0,"div",8),2&t){const t=a.ac(2).$implicit;a.fc("ngStyle",a.ic(1,y,"url("+t.image+")"))}}function C(t,n){if(1&t&&(a.Mb(0),a.Ob(1,"div",6),a.rc(2,z,1,3,"div",7),a.Nb(),a.Lb()),2&t){const t=a.ac().$implicit,n=a.ac();a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("ngIf",t.image)}}function N(t,n){if(1&t&&a.Kb(0,"div",8),2&t){const t=a.ac(2).$implicit;a.fc("ngStyle",a.ic(1,y,"url("+t.image+")"))}}function k(t,n){if(1&t&&(a.Mb(0),a.Ob(1,"div",9),a.rc(2,N,1,3,"div",10),a.Ob(3,"div",11),a.Ob(4,"div",12),a.Ob(5,"h3",13),a.tc(6),a.Nb(),a.Ob(7,"p",14),a.tc(8),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Lb()),2&t){const t=a.ac().$implicit,n=a.ac();a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("ngIf",t.image),a.zb(4),a.uc(t.title),a.zb(2),a.uc(t.content)}}function P(t,n){if(1&t&&a.Kb(0,"div",8),2&t){const t=a.ac(2).$implicit;a.fc("ngStyle",a.ic(1,y,"url("+t.image+")"))}}function _(t,n){if(1&t&&(a.Mb(0),a.Ob(1,"div",9),a.rc(2,P,1,3,"div",7),a.Ob(3,"div",15),a.Ob(4,"div",12),a.Ob(5,"h3",13),a.tc(6),a.Nb(),a.Ob(7,"p",14),a.tc(8),a.Nb(),a.Ob(9,"div",16),a.Ob(10,"h4",17),a.tc(11,"Done"),a.Nb(),a.Kb(12,"img",18),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Lb()),2&t){const t=a.ac().$implicit,n=a.ac();a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("ngIf",t.image),a.zb(4),a.uc(t.title),a.zb(2),a.uc(t.content)}}function I(t,n){if(1&t&&a.Kb(0,"div",8),2&t){const t=a.ac(2).$implicit;a.fc("ngStyle",a.ic(1,y,"url("+t.image+")"))}}function L(t,n){if(1&t&&(a.Mb(0,19),a.Ob(1,"div",20),a.rc(2,I,1,3,"div",7),a.Ob(3,"div",21),a.Ob(4,"div",12),a.Ob(5,"h3",13),a.tc(6),a.Nb(),a.Ob(7,"p",14),a.tc(8),a.Nb(),a.Ob(9,"h4"),a.tc(10,"Canceled"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Lb()),2&t){const t=a.ac().$implicit,n=a.ac();a.Ab("data-animation",n.data.animation||"none"),a.zb(2),a.fc("ngIf",t.image),a.zb(4),a.uc(t.title),a.zb(2),a.uc(t.content)}}function A(t,n){if(1&t&&(a.Mb(0),a.Mb(1,3),a.rc(2,C,3,2,"ng-container",4),a.rc(3,k,9,4,"ng-container",4),a.rc(4,_,13,4,"ng-container",4),a.rc(5,L,11,4,"ng-container",5),a.Lb(),a.Lb()),2&t){const t=n.$implicit;a.zb(1),a.fc("ngSwitch",t.type),a.zb(1),a.fc("ngSwitchCase","image"),a.zb(1),a.fc("ngSwitchCase","active"),a.zb(1),a.fc("ngSwitchCase","done"),a.zb(1),a.fc("ngSwitchCase","canceled")}}const j=["widgetsContent"],K={[i.ImageR]:p,[i.ImageL]:l,[i.ImageLarge]:g,[i.TextImgBlock]:f,[i.ImgShadowR]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-img-shadow-r-block"]],decls:11,vars:11,consts:[[1,"m-y-xl"],[1,"container","ai-center"],[1,"col-11","flex","ai-center","jc-between"],[1,"col-5","col-s-6","col-xs-12","c-dark","ta-left","container-content"],["intersecting",""],["intersecting","",1,"m-t-s","m-b-m","text-wrapper","font-primary",3,"innerHTML"],["routerLinkActive","active","intersecting","",1,"btn-primary","z-index","flex","ai-center","jc-center",3,"routerLink"],["intersecting","",1,"col-6","col-xs-12","ta-right","container-image"],[1,"shadow","w-full",3,"src"]],template:function(t,n){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Ob(4,"h3",4),a.tc(5),a.Nb(),a.Kb(6,"div",5),a.Ob(7,"a",6),a.tc(8),a.Nb(),a.Nb(),a.Ob(9,"div",7),a.Kb(10,"img",8),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(4),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.uc(n.data.title),a.zb(1),a.fc("innerHTML",n.data.content,a.nc),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("routerLink",a.ic(9,x,n.data.link)),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.uc(n.data.buttonTitle),a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("src",n.data.image,a.pc))},directives:[c.a,u.g,u.f],styles:["@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.shadow[_ngcontent-%COMP%]{box-shadow:none;width:100%}section[_ngcontent-%COMP%]{margin:0}.text-wrapper[_ngcontent-%COMP%]{text-align:justify}.container-content[_ngcontent-%COMP%]{order:2}}"]}),t})(),[i.ImageFull]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-full"]],decls:1,vars:4,consts:[["intersecting","",1,"full-bg","m-y-m",3,"ngStyle"]],template:function(t,n){1&t&&a.Kb(0,"section",0),2&t&&(a.fc("ngStyle",a.ic(2,w,"url("+n.data.image+")")),a.Ab("data-animation",n.data.animation||"none"))},directives:[c.a,o.l],styles:[".full-bg[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:700px}@media (max-width:600px){.full-bg[_ngcontent-%COMP%]{margin:20px 0;height:350px}}"]}),t})(),[i.ImageFullButton]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-full-button-block"]],decls:6,vars:9,consts:[["intersecting","",1,"main","flex","jc-center","ai-center",3,"ngStyle"],[1,"col-6","wrapper","relative","c-light","z-index","ta-center","flex","fd-col","ai-center","jc-center"],[1,"m-y-s","z-index"],["routerLinkActive","active",1,"btn-secondary","z-index",3,"routerLink"]],template:function(t,n){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"h1",2),a.tc(3),a.Nb(),a.Ob(4,"a",3),a.tc(5),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.fc("ngStyle",a.ic(5,O,"url("+n.data.image+")")),a.Ab("data-animation",n.data.animation||"none"),a.zb(3),a.uc(n.data.title),a.zb(1),a.fc("routerLink",a.ic(7,h,n.data.link)),a.zb(1),a.uc(n.data.buttonTitle))},directives:[c.a,o.l,u.g,u.f],styles:['.wrapper[_ngcontent-%COMP%]{background:transparent;height:300px}.wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:#000;opacity:.7}.main[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:600px}@media (max-width:900px){h1[_ngcontent-%COMP%]{font-size:30px}}@media (max-width:600px){.wrapper[_ngcontent-%COMP%]{text-align:center;min-width:80%;height:200px}h1[_ngcontent-%COMP%]{font-size:20px}.main[_ngcontent-%COMP%]{margin-top:20px;height:400px}}']}),t})(),[i.TextBlock]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-text-block"]],decls:4,vars:2,consts:[[1,"grid","m-y-xl"],[1,"col-12","flex","fw-wrap","jc-center","ai-center"],["class","w-full ta-center m-b-m m-s-0","intersecting","",4,"ngIf"],["class","col-6 col-s-12 no-padding ta-center text-wrapper","intersecting","",4,"ngIf"],["intersecting","",1,"w-full","ta-center","m-b-m","m-s-0"],["intersecting","",1,"col-6","col-s-12","no-padding","ta-center","text-wrapper"],[1,"font-tertiary"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"div",1),a.rc(2,v,3,2,"div",2),a.rc(3,M,3,2,"div",3),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.fc("ngIf",n.data.title),a.zb(1),a.fc("ngIf",n.data.content))},directives:[o.k,c.a],styles:[".text-wrapper[_ngcontent-%COMP%]{font-size:20px}@media (max-width:600px){.text-wrapper[_ngcontent-%COMP%]{text-align:justify;font-size:16px}h1[_ngcontent-%COMP%]{font-size:30px}.col-12[_ngcontent-%COMP%], .w-full[_ngcontent-%COMP%]{text-align:left}}"]}),t})(),[i.EventImageBlock]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-event-image-block"]],decls:2,vars:0,template:function(t,n){1&t&&(a.Ob(0,"p"),a.tc(1,"event-image-block works!"),a.Nb())},styles:[""]}),t})(),[i.ImageRightButton]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-r-button"]],decls:12,vars:10,consts:[[1,"m-y-xl"],[1,"container","ai-center"],[1,"col-11","flex","jc-between"],[1,"col-5","col-s-12","ta-left"],["intersecting","",1,"m-t-l"],["intersecting","",1,"m-y-l","no-padding",3,"innerHTML"],["intersecting","",1,"btn-primary",3,"innerHTML"],["alt","","intersecting","",1,"m-t-l","w-full",3,"src"],["intersecting","",1,"col-5","col-s-12","ta-right"],["alt","",3,"src"]],template:function(t,n){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"div",3),a.Ob(4,"h1",4),a.tc(5),a.Nb(),a.Kb(6,"div",5),a.Ob(7,"button",6),a.tc(8,"Contact us"),a.Nb(),a.Kb(9,"img",7),a.Nb(),a.Ob(10,"div",8),a.Kb(11,"img",9),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(4),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.uc(n.data.title),a.zb(1),a.fc("innerHTML",n.data.content,a.nc),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("innerHTML",n.data.content,a.nc),a.Ab("data-animation",n.data.animation||"none"),a.zb(2),a.fc("src",n.data.belowImg,a.pc),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("src",n.data.image,a.pc))},directives:[c.a],styles:[""]}),t})(),[i.ImageLeftButton]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-image-l-button"]],decls:11,vars:9,consts:[[1,"m-y-xl"],[1,"container","jc-around"],["intersecting","",1,"col-5","col-s-12","ta-left"],["alt","",3,"src"],[1,"col-4","col-s-12","ta-left"],["intersecting","",1,"m-t-m","title"],["intersecting","",1,"m-y-m","text-wrapper",3,"innerHTML"],["intersecting","",1,"btn-primary"],["alt","","intersecting","",1,"m-t-m","w-full","below-img",3,"src"]],template:function(t,n){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Kb(3,"img",3),a.Nb(),a.Ob(4,"div",4),a.Ob(5,"h3",5),a.tc(6),a.Nb(),a.Kb(7,"div",6),a.Ob(8,"button",7),a.tc(9,"Contact us"),a.Nb(),a.Kb(10,"img",8),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.fc("src",n.data.image,a.pc),a.zb(2),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.uc(n.data.title),a.zb(1),a.fc("innerHTML",n.data.content,a.nc),a.Ab("data-animation",n.data.animation||"none"),a.zb(1),a.Ab("data-animation",n.data.animation||"none"),a.zb(2),a.fc("src",n.data.belowImg,a.pc),a.Ab("data-animation",n.data.animation||"none"))},directives:[c.a],styles:["@media (max-width:600px){h1[_ngcontent-%COMP%]{font-size:30px}.img-wrapper[_ngcontent-%COMP%]{text-align:left;margin-top:10px}img[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{margin:0}.text-wrapper[_ngcontent-%COMP%]{margin:10px 0;text-align:justify}.below-img[_ngcontent-%COMP%]{margin-top:10px!important}}"]}),t})(),[i.EventsBlock]:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-events-block"]],decls:4,vars:2,consts:[[1,"ta-center"],[1,"container","m-y-l","jc-start"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["intersecting","",4,"ngSwitchCase"],["intersecting","",1,"col-4","col-s-12","events-container","flex","jc-center","ai-center"],["class","box image",3,"ngStyle",4,"ngIf"],[1,"box","image",3,"ngStyle"],["intersecting","",1,"col-4","col-s-12","events-container","flex","jc-center","ai-center","ta-center"],["class","box  image",3,"ngStyle",4,"ngIf"],[1,"box","flex","fw-wrap","ai-center","jc-center","active-container"],[1,"box-wrapper"],[1,"title"],[1,"m-y-xs"],[1,"box","flex","ai-center","fw-wrap","jc-center","done"],[1,"flex","ai-center"],[1,"m-r-s","done-content"],["src","assets/icons/checked.svg","alt",""],["intersecting",""],[1,"col-4","col-s-12","events-container","flex","jc-center","ai-center"],[1,"box","flex","fw-wrap","ai-center","jc-center","canceled"]],template:function(t,n){1&t&&(a.Ob(0,"h1",0),a.tc(1),a.Nb(),a.Ob(2,"div",1),a.rc(3,A,6,5,"ng-container",2),a.Nb()),2&t&&(a.zb(1),a.uc(n.data.title),a.zb(2),a.fc("ngForOf",n.data.blocks))},directives:[o.j,o.m,o.n,c.a,o.k,o.l],styles:[".image[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-position:50%}.events-container[_ngcontent-%COMP%]{height:400px}.active-container[_ngcontent-%COMP%]:hover{background:#000;color:#fff}.canceled[_ngcontent-%COMP%]{background:#ececec;color:#959595;border:1px solid #959595!important}.done[_ngcontent-%COMP%]{border:1px solid #07b500!important}.done-content[_ngcontent-%COMP%]{color:#07b500}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:400}.box[_ngcontent-%COMP%]{cursor:pointer;width:330px;height:330px;border:1px solid #000;transition:.4s}.box-wrapper[_ngcontent-%COMP%]{width:215px;text-align:left}@media (max-width:900px){.events-container[_ngcontent-%COMP%]{margin:0}.events-container[_ngcontent-%COMP%]:nth-child(2)   .box[_ngcontent-%COMP%]{margin-top:0}.box[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),t})(),[i.GalleryBlock]:(()=>{class t{scrollLeft(){this.widgetsContent.nativeElement.scrollLeft-=1410}scrollRight(){this.widgetsContent.nativeElement.scrollLeft+=1410}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["exo-gallery-block"]],viewQuery:function(t,n){var e;1&t&&a.wc(j,!0),2&t&&a.jc(e=a.Xb())&&(n.widgetsContent=e.first)},decls:24,vars:2,consts:[[1,"m-y-xl"],[1,"grid"],[1,"col-10","ta-left"],[1,"flex","fw-wrap","ai-end","jc-end","m-y-m","relative",2,"height","600px","width","100%"],[1,"gallery-wrapper","jc-between","images"],[1,"current-img","slides","flex","ai-end","jc-start","c-light"],["widgetsContent",""],[1,"col-4","next-image","slides","flex","ai-end","jc-start","c-light","relative"],[1,"z-index"],[1,"flex","ai-center","arrows-container","w-full","m-y-m"],[3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","height","30","width","30",1,"previous-arrow"],["d","M501.333 245.333H36.417l141.792-141.792c4.167-4.167 4.167-10.917 0-15.083-4.167-4.167-10.917-4.167-15.083 0l-160 160c-4.167 4.167-4.167 10.917 0 15.083l160 160a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.167-4.167 4.167-10.917 0-15.083L36.417 266.667h464.917c5.896 0 10.667-4.771 10.667-10.667s-4.772-10.667-10.668-10.667z"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512","height","30","width","30",1,"next-arrow","m-x-s"],["d","M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z"],[1,"progress-bar"]],template:function(t,n){1&t&&(a.Ob(0,"section",0),a.Ob(1,"div",1),a.Ob(2,"div",2),a.Ob(3,"h3"),a.tc(4),a.Nb(),a.Ob(5,"p"),a.tc(6),a.Nb(),a.Nb(),a.Nb(),a.Ob(7,"div",3),a.Ob(8,"div",4),a.Ob(9,"div",5,6),a.Ob(11,"h1"),a.tc(12,"slider"),a.Nb(),a.Nb(),a.Ob(13,"div",7),a.Ob(14,"h2",8),a.tc(15,"slider"),a.Nb(),a.Nb(),a.Nb(),a.Ob(16,"div",9),a.Ob(17,"button",10),a.Wb("click",(function(){return n.scrollLeft()})),a.Zb(),a.Ob(18,"svg",11),a.Kb(19,"path",12),a.Nb(),a.Nb(),a.Yb(),a.Ob(20,"button",10),a.Wb("click",(function(){return n.scrollRight()})),a.Zb(),a.Ob(21,"svg",13),a.Kb(22,"path",14),a.Nb(),a.Nb(),a.Yb(),a.Kb(23,"div",15),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.zb(4),a.uc(n.data.title),a.zb(2),a.uc(n.data.subTitle))},styles:['.gallery-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;flex-wrap:wrap;max-height:1400px;top:0;left:20%;width:471px;margin:0;padding-top:1px;overflow-y:auto;overflow-x:hidden;transform:rotate(-90deg) translateY(-470px);transform-origin:right top}.images[_ngcontent-%COMP%]{padding:1400px 0 0}.current-img[_ngcontent-%COMP%]{background-image:url(home-11.bb0f7f4975b97db3c226.png)}.current-img[_ngcontent-%COMP%], .next-image[_ngcontent-%COMP%]{padding:5px;transform:rotate(90deg);transform-origin:right top;width:470px;height:470px;margin:10px 0;background-repeat:no-repeat;background-size:cover;background-position:50%}.next-image[_ngcontent-%COMP%]{background-image:url(home-12.212b15eae4a4ea70812c.png)}.next-image[_ngcontent-%COMP%]:before{position:absolute;content:"";top:0;left:0;height:100%;width:100%;background:#000;opacity:.3}.progress-bar[_ngcontent-%COMP%]{height:1px;background:#c9c9c9;width:80%}[_ngcontent-%COMP%]::-webkit-scrollbar, [_ngcontent-%COMP%]::-webkit-scrollbar-button{width:1px;height:1px}body[_ngcontent-%COMP%]{background:#111}div[_ngcontent-%COMP%]{box-sizing:border-box}.horizontal-scroll-wrapper[_ngcontent-%COMP%]{position:absolute;display:block;top:0;left:0;width:251px;max-height:750px;margin:0;padding-top:1px;background:#abc;overflow-y:auto;overflow-x:hidden;transform:rotate(-90deg) translateY(-250px);transform-origin:right top}.horizontal-scroll-wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:block;padding:5px;background:#cab;transform:rotate(90deg);transform-origin:right top}.squares[_ngcontent-%COMP%]{padding:250px 0 0}.squares[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:250px;height:250px;margin:10px 0}']}),t})()};let T=(()=>{class t{constructor(t,n){this.componentFactoryResolver=t,this.vcr=n}ngOnInit(){for(const t of this.blocks)if(K[t.type]){const n=this.componentFactoryResolver.resolveComponentFactory(K[t.type]);this.vcr.createComponent(n).instance.data=t}}}return t.\u0275fac=function(n){return new(n||t)(a.Jb(a.j),a.Jb(a.N))},t.\u0275cmp=a.Db({type:t,selectors:[["exo-block-renderer"]],inputs:{blocks:"blocks"},decls:0,vars:0,template:function(t,n){},styles:[""]}),t})()},yREb:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("ofXK"),a=e("tyNb"),c=e("vP0e"),o=e("fXoL");let r=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(n){return new(n||t)},imports:[[i.c,a.h,c.a]]}),t})()}}]);