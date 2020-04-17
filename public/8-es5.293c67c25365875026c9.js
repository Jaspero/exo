function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+/fp":function(e,t){e.exports=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"html",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,t,n){return""+n}},{key:"image",value:function(e,t,n){return""+n}},{key:"br",value:function(){return""}}]),e}()},"4MG8":function(e,t,n){var i=n("T9Ld"),r=n("66f7"),s=n("SbYC"),a=n("+/fp"),l=n("hyX7"),o=n("J7Ao"),c=n("rUJ1"),u=c.merge,h=c.checkSanitizeDeprecation,p=c.escape,g=n("vbtb"),d=g.getDefaults,f=g.changeDefaults,b=g.defaults;function m(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){var s=function(){n||(n=t,t=null),t=u({},m.defaults,t||{}),h(t);var s,a,l=t.highlight,o=0;try{s=i.lex(e,t)}catch(p){return{v:n(p)}}a=s.length;var c=function(e){if(e)return t.highlight=l,n(e);var i;try{i=r.parse(s,t)}catch(p){e=p}return t.highlight=l,e?n(e):n(null,i)};if(!l||l.length<3)return{v:c()};if(delete t.highlight,!a)return{v:c()};for(;o<s.length;o++)!function(e){"code"!==e.type?--a||c():l(e.text,e.lang,(function(t,n){return t?c(t):null==n||n===e.text?--a||c():(e.text=n,e.escaped=!0,void(--a||c()))}))}(s[o])}();if("object"==typeof s)return s.v}else try{return t=u({},m.defaults,t||{}),h(t),r.parse(i.lex(e,t),t)}catch(a){if(a.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||m.defaults).silent)return"<p>An error occurred:</p><pre>"+p(a.message+"",!0)+"</pre>";throw a}}m.options=m.setOptions=function(e){return u(m.defaults,e),f(m.defaults),m},m.getDefaults=d,m.defaults=b,m.Parser=r,m.parser=r.parse,m.Renderer=s,m.TextRenderer=a,m.Lexer=i,m.lexer=i.lex,m.InlineLexer=l,m.inlineLexer=l.output,m.Slugger=o,m.parse=m,e.exports=m},"66f7":function(e,t,n){var i=n("SbYC"),r=n("J7Ao"),s=n("hyX7"),a=n("+/fp"),l=n("vbtb").defaults,o=n("rUJ1"),c=o.merge,u=o.unescape;e.exports=function(){function e(t){_classCallCheck(this,e),this.tokens=[],this.token=null,this.options=t||l,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new r}return _createClass(e,[{key:"parse",value:function(e){this.inline=new s(e.links,this.options),this.inlineText=new s(e.links,c({},this.options,{renderer:new a})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t}},{key:"next",value:function(){return this.token=this.tokens.pop(),this.token}},{key:"peek",value:function(){return this.tokens[this.tokens.length-1]||0}},{key:"parseText",value:function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}},{key:"tok",value:function(){var e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,n,i,r,s="";for(i="",t=0;t<this.token.header.length;t++)i+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(s+=this.renderer.tablerow(i),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],i="",r=0;r<n.length;r++)i+=this.renderer.tablecell(this.inline.output(n[r]),{header:!1,align:this.token.align[r]});e+=this.renderer.tablerow(i)}return this.renderer.table(s,e);case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":e="";for(var a=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,a,l);case"list_item_start":e="";var o=this.token.loose,c=this.token.checked,h=this.token.task;if(this.token.task)if(o)if("text"===this.peek().type){var p=this.peek();p.text=this.renderer.checkbox(c)+" "+p.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(c)});else e+=this.renderer.checkbox(c);for(;"list_item_end"!==this.next().type;)e+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,h,c);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var g='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(g);console.log(g)}}}],[{key:"parse",value:function(t,n){return new e(n).parse(t)}}]),e}()},"6ANv":function(e,t,n){"use strict";n.r(t),n.d(t,"ShopModule",(function(){return L}));var i,r=n("sbAP"),s=n("d2mR"),a=n("ofXK"),l=n("fXoL"),o=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Eb({type:i}),i.\u0275inj=l.Db({factory:function(e){return new(e||i)},imports:[[a.c]]}),i),c=n("tyNb"),u=n("n7Ds"),h=n("3TKP"),p=n("titR"),g=n("vkgz"),d=n("lJxs"),f=n("aZ8m"),b=n("HfZk"),m=n("aF9I"),k=function(e){return{"background-image":e}};function y(e,t){if(1&e&&(l.Jb(0,"div",7),l.Hb(1,"div",8),l.Jb(2,"h3",9),l.mc(3),l.Ib(),l.Jb(4,"p",10),l.mc(5),l.Ib(),l.Jb(6,"a",11),l.mc(7,"Read More"),l.Ib(),l.Ib()),2&e){var n=t.$implicit;l.wb(1),l.Zb("ngStyle",l.dc(4,k,"url("+n.image+")")),l.wb(2),l.nc(n.title),l.wb(2),l.nc(n.description),l.wb(1),l.Zb("routerLink",n.route)}}var x,v,w=function(){return{}},_=((x=function(){function e(t,n){_classCallCheck(this,e),this.scully=t,this.activatedRoute=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.page=this.activatedRoute.snapshot.data.page,this.product$=this.scully.available$.pipe(Object(g.a)((function(e){return console.log(e)})),Object(d.a)((function(e){return e.filter((function(e){return e.route.includes("/shop/")}))})))}}]),e}()).\u0275fac=function(e){return new(e||x)(l.Gb(r.c),l.Gb(c.a))},x.\u0275cmp=l.Ab({type:x,selectors:[["exo-shop-list"]],decls:11,vars:5,consts:[[3,"data"],[1,"grid","m-y-l"],[1,"col-8","col-s-12","ta-center","text-wrapper"],[1,"fw-normal"],[1,"m-y-l"],[1,"grid","jc-start"],["class","col-6 col-s-12 m-y-m relative",4,"ngFor","ngForOf"],[1,"col-6","col-s-12","m-y-m","relative"],[1,"product-wrapper",3,"ngStyle"],[1,"m-t-l"],[1,"m-t-s","m-b-l"],[1,"btn-primary",3,"routerLink"]],template:function(e,t){1&e&&(l.Hb(0,"exo-header"),l.Hb(1,"exo-intro",0),l.Jb(2,"div",1),l.Jb(3,"div",2),l.Jb(4,"h5",3),l.mc(5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.Ib(),l.Ib(),l.Ib(),l.Jb(6,"section",4),l.Jb(7,"div",5),l.kc(8,y,8,6,"div",6),l.Vb(9,"async"),l.Ib(),l.Ib(),l.Hb(10,"exo-footer")),2&e&&(l.wb(1),l.Zb("data",t.page.showcase||l.cc(4,w)),l.wb(7),l.Zb("ngForOf",l.Wb(9,2,t.product$)))},directives:[f.a,b.a,a.i,m.a,a.k,c.f],pipes:[a.b],styles:[".product-wrapper[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:400px}@media (max-width:600px){.text-wrapper[_ngcontent-%COMP%]{text-align:justify}h1[_ngcontent-%COMP%]{font-size:30px}.btn-primary[_ngcontent-%COMP%]{font-size:16px}}"]}),x),C=n("AytR"),S=n("4MG8"),$=((v=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){return S(e)}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275pipe=l.Fb({name:"MTH",type:v,pure:!0}),v);function I(e,t){if(1&e){var n=l.Kb();l.Jb(0,"div",20),l.Qb("click",(function(){l.gc(n);var e=t.$implicit;return l.Ub().activeImage=e.image})),l.mc(1,"\n        "),l.Hb(2,"img",21),l.mc(3,"\n      "),l.Ib()}if(2&e){var i=t.$implicit;l.wb(2),l.Zb("src",i.image,l.ic)}}function A(e,t){if(1&e&&(l.Jb(0,"div",22),l.mc(1,"\n      "),l.Hb(2,"div",23),l.Vb(3,"MTH"),l.mc(4,"\n    "),l.Ib()),2&e){var n=l.Ub();l.wb(2),l.Zb("innerHTML",l.Wb(3,1,n.item.productDescription),l.hc)}}function z(e,t){if(1&e&&(l.Jb(0,"div",22),l.mc(1,"\n      "),l.Hb(2,"div",23),l.Vb(3,"MTH"),l.mc(4,"\n    "),l.Ib()),2&e){var n=l.Ub();l.wb(2),l.Zb("innerHTML",l.Wb(3,1,n.item.additionalInfo),l.hc)}}var R,O,J,Z=((R=function(){function e(t){_classCallCheck(this,e),this.route=t,this.viewMode="tab1"}return _createClass(e,[{key:"ngOnInit",value:function(){this.item=this.route.snapshot.data.meta,this.activeImage=this.item.galleryImages[0]?this.item.galleryImages[0].image:""}},{key:"ngAfterViewInit",value:function(){this.loadShopify()}},{key:"loadShopify",value:function(){var e,t=this.item.productId,n=C.a.shopify;function i(){var e=window.ShopifyBuy.buildClient(n);window.ShopifyBuy.UI.onReady(e).then((function(e){e.createComponent("product",{id:t,node:document.getElementById("product-component"),moneyFormat:"%24%7B%7Bamount%7D%7D",options:{product:{styles:{product:{"@media (min-width: 601px)":{"max-width":"calc(25% - 20px)","margin-left":"20px","margin-bottom":"50px"}}},contents:{img:!1,title:!1,price:!1},text:{button:"Add to cart"}},productSet:{styles:{products:{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},modalProduct:{contents:{img:!1,imgWithCarousel:!0,button:!1,buttonWithQuantity:!0},styles:{product:{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}},text:{button:"Add to cart"}},cart:{text:{total:"Subtotal",button:"Checkout"}}}})}))}window.ShopifyBuy&&window.ShopifyBuy.UI?i():((e=document.createElement("script")).async=!0,e.src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e),e.onload=i)}},{key:"bg",get:function(){return{"background-image":"url(".concat(this.item.displayImage,")")}}}]),e}()).\u0275fac=function(e){return new(e||R)(l.Gb(c.a))},R.\u0275cmp=l.Ab({type:R,selectors:[["exo-shop"]],decls:66,vars:13,consts:[[1,"main","relative",3,"ngStyle"],[1,"grid","h-full","ai-center"],[1,"col-6","col-s-12","z-index","m-l-l","m-s-0"],[1,"c-light","ta-center","exo-headline"],[1,"grid","jc-between","m-y-xl"],[1,"col-4","col-s-6","col-xs-12"],[1,"img-wrapper","ta-center","b-a"],["alt","Product Image",3,"src"],[1,"flex","ai-center","jc-between","w-full","m-t-s"],["class","ta-center",3,"click",4,"ngFor","ngForOf"],[1,"col-6","col-xs-12"],[1,"title"],[1,"price","b-b","m-y-m","p-b-s"],["id","product-component",1,"btn-primary","m-t-m"],[1,"grid","m-y-l"],[1,"col-12","flex","b-b"],["rel","tab1",1,"tab-header",3,"click"],["rel","tab2",1,"m-x-s","tab-header",3,"click"],[1,"tab-container","w-full",3,"ngSwitch"],["class","col-12 tab-content",4,"ngSwitchCase"],[1,"ta-center",3,"click"],["alt","Product image gallery item",1,"product","b-a",3,"src"],[1,"col-12","tab-content"],[1,"m-y-s",3,"innerHTML"]],template:function(e,t){1&e&&(l.Hb(0,"exo-header"),l.mc(1,"\n"),l.Jb(2,"section",0),l.mc(3,"\n  "),l.Jb(4,"div",1),l.mc(5,"\n    "),l.Jb(6,"div",2),l.mc(7,"\n      "),l.Jb(8,"h1",3),l.mc(9),l.Ib(),l.mc(10,"\n    "),l.Ib(),l.mc(11,"\n  "),l.Ib(),l.mc(12,"\n"),l.Ib(),l.mc(13,"\n"),l.Jb(14,"div",4),l.mc(15,"\n  "),l.Jb(16,"div",5),l.mc(17,"\n    "),l.Jb(18,"div",6),l.mc(19,"\n      "),l.Hb(20,"img",7),l.mc(21,"\n    "),l.Ib(),l.mc(22,"\n    "),l.Jb(23,"div",8),l.mc(24,"\n      "),l.kc(25,I,4,1,"div",9),l.mc(26,"\n    "),l.Ib(),l.mc(27,"\n  "),l.Ib(),l.mc(28,"\n  "),l.Jb(29,"div",10),l.mc(30,"\n    "),l.Jb(31,"h4",11),l.mc(32),l.Ib(),l.mc(33,"\n    "),l.Jb(34,"p",12),l.Jb(35,"b"),l.mc(36),l.Ib(),l.Ib(),l.mc(37,"\n    "),l.Hb(38,"scully-content"),l.mc(39,"\n    "),l.Jb(40,"button",13),l.mc(41,"Add to Cart"),l.Ib(),l.mc(42,"\n  "),l.Ib(),l.mc(43,"\n"),l.Ib(),l.mc(44,"\n"),l.Jb(45,"div",14),l.mc(46,"\n  "),l.Jb(47,"div",15),l.mc(48,"\n    "),l.Jb(49,"h4",16),l.Qb("click",(function(){return t.viewMode="tab1"})),l.mc(50,"PRODUCT DESCRIPTION"),l.Ib(),l.mc(51,"\n    "),l.Jb(52,"h4",17),l.Qb("click",(function(){return t.viewMode="tab2"})),l.mc(53,"ADDITIONAL INFORMATION"),l.Ib(),l.mc(54,"\n  "),l.Ib(),l.mc(55,"\n  "),l.Jb(56,"div",18),l.mc(57,"\n    "),l.kc(58,A,5,3,"div",19),l.mc(59,"\n    "),l.kc(60,z,5,3,"div",19),l.mc(61,"\n  "),l.Ib(),l.mc(62,"\n"),l.Ib(),l.mc(63,"\n"),l.Hb(64,"exo-footer"),l.mc(65,"\n")),2&e&&(l.wb(2),l.Zb("ngStyle",t.bg),l.wb(7),l.nc(t.item.title),l.wb(11),l.Zb("src",t.activeImage,l.ic),l.wb(5),l.Zb("ngForOf",t.item.galleryImages),l.wb(7),l.nc(t.item.title),l.wb(4),l.nc(t.item.price),l.wb(13),l.yb("active","tab1"==t.viewMode),l.wb(3),l.yb("active","tab2"==t.viewMode),l.wb(4),l.Zb("ngSwitch",t.viewMode),l.wb(2),l.Zb("ngSwitchCase","tab1"),l.wb(2),l.Zb("ngSwitchCase","tab2"))},directives:[f.a,a.k,a.i,r.a,a.l,a.m,m.a],pipes:[$],styles:['.main[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:100vh}.main[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.3}.main-wrapper[_ngcontent-%COMP%]{height:100%}.product[_ngcontent-%COMP%], .tab-header[_ngcontent-%COMP%]{cursor:pointer}.tab-header[_ngcontent-%COMP%]{position:relative}.tab-header[_ngcontent-%COMP%]:before{content:"";top:12px;left:0;width:100%;height:100%;position:absolute;border-bottom:5px solid #000;opacity:0}.tab-header.active[_ngcontent-%COMP%]:before{opacity:1;transition:all .3s ease-in-out}.tab-content[_ngcontent-%COMP%]{-webkit-animation:fadeInAnimation 3s ease;animation:fadeInAnimation 3s ease;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes fadeInAnimation{0%{opacity:0}to{opacity:1}}']}),R),P=[{path:"",component:_,data:{id:"shop"},resolve:{page:p.a}},{path:":id",component:Z,data:{collection:"shop"},resolve:{meta:h.b,delay:u.a}},{path:"**",component:Z}],M=((J=function e(){_classCallCheck(this,e)}).\u0275mod=l.Eb({type:J}),J.\u0275inj=l.Db({factory:function(e){return new(e||J)},imports:[[c.g.forChild(P)],c.g]}),J),L=((O=function e(){_classCallCheck(this,e)}).\u0275mod=l.Eb({type:O}),O.\u0275inj=l.Db({factory:function(e){return new(e||O)},imports:[[s.a,M,r.b,o]]}),O)},J7Ao:function(e,t){e.exports=function(){function e(){_classCallCheck(this,e),this.seen={}}return _createClass(e,[{key:"slug",value:function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}]),e}()},SbYC:function(e,t,n){var i=n("vbtb").defaults,r=n("rUJ1"),s=r.cleanUrl,a=r.escape;e.exports=function(){function e(t){_classCallCheck(this,e),this.options=t||i}return _createClass(e,[{key:"code",value:function(e,t,n){var i=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,i);null!=r&&r!==e&&(n=!0,e=r)}return i?'<pre><code class="'+this.options.langPrefix+a(i,!0)+'">'+(n?e:a(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:a(e,!0))+"</code></pre>"}},{key:"blockquote",value:function(e){return"<blockquote>\n"+e+"</blockquote>\n"}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,t,n,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}},{key:"hr",value:function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}},{key:"list",value:function(e,t,n){var i=t?"ol":"ul";return"<"+i+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+i+">\n"}},{key:"listitem",value:function(e){return"<li>"+e+"</li>\n"}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+"</p>\n"}},{key:"table",value:function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}},{key:"tablerow",value:function(e){return"<tr>\n"+e+"</tr>\n"}},{key:"tablecell",value:function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,t,n){if(null===(e=s(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<a href="'+a(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"}},{key:"image",value:function(e,t,n){if(null===(e=s(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),e}()},T9Ld:function(e,t,n){var i=n("vbtb").defaults,r=n("e56X").block,s=n("rUJ1"),a=s.rtrim,l=s.splitCells,o=s.escape;e.exports=function(){function e(t){_classCallCheck(this,e),this.tokens=[],this.tokens.links=Object.create(null),this.options=t||i,this.rules=r.normal,this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.rules=r.gfm)}return _createClass(e,[{key:"lex",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}},{key:"token",value:function(e,t){var n,i,s,c,u,h,p,g,d,f,b,m,k,y,x,v;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){var w=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),w&&"paragraph"===w.type?w.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:a(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(h={type:"table",header:l(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===h.align.length){for(e=e.substring(s[0].length),b=0;b<h.align.length;b++)h.align[b]=/^ *-+: *$/.test(h.align[b])?"right":/^ *:-+: *$/.test(h.align[b])?"center":/^ *:-+ *$/.test(h.align[b])?"left":null;for(b=0;b<h.cells.length;b++)h.cells[b]=l(h.cells[b],h.header.length);this.tokens.push(h)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),p={type:"list_start",ordered:y=(c=s[2]).length>1,start:y?+c:"",loose:!1},this.tokens.push(p),g=[],n=!1,k=(s=s[0].match(this.rules.item)).length,b=0;b<k;b++)f=(h=s[b]).length,~(h=h.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(f-=h.length,h=h.replace(this.options.pedantic?/^ {1,4}/gm:new RegExp("^ {1,"+f+"}","gm"),"")),b!==k-1&&(u=r.bullet.exec(s[b+1])[0],(c.length>1?1===u.length:u.length>1||this.options.smartLists&&u!==c)&&(e=s.slice(b+1).join("\n")+e,b=k-1)),i=n||/\n\n(?!\s*$)/.test(h),b!==k-1&&(n="\n"===h.charAt(h.length-1),i||(i=n)),i&&(p.loose=!0),v=void 0,(x=/^\[[ xX]\] /.test(h))&&(v=" "!==h[1],h=h.replace(/^\[[ xX]\] +/,"")),d={type:"list_item_start",task:x,checked:v,loose:i},g.push(d),this.tokens.push(d),this.token(h,!1),this.tokens.push({type:"list_item_end"});if(p.loose)for(k=g.length,b=0;b<k;b++)g[b].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):o(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),m=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[m]||(this.tokens.links[m]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(h={type:"table",header:l(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===h.align.length){for(e=e.substring(s[0].length),b=0;b<h.align.length;b++)h.align[b]=/^ *-+: *$/.test(h.align[b])?"right":/^ *:-+: *$/.test(h.align[b])?"center":/^ *:-+ *$/.test(h.align[b])?"left":null;for(b=0;b<h.cells.length;b++)h.cells[b]=l(h.cells[b].replace(/^ *\| *| *\| *$/g,""),h.header.length);this.tokens.push(h)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}],[{key:"lex",value:function(t,n){return new e(n).lex(t)}},{key:"rules",get:function(){return r}}]),e}()},e56X:function(e,t,n){var i=n("rUJ1"),r=i.noopTest,s=i.edit,a=i.merge,l={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:r,table:r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};l.def=s(l.def).replace("label",l._label).replace("title",l._title).getRegex(),l.bullet=/(?:[*+-]|\d{1,9}\.)/,l.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,l.item=s(l.item,"gm").replace(/bull/g,l.bullet).getRegex(),l.list=s(l.list).replace(/bull/g,l.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+l.def.source+")").getRegex(),l._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l._comment=/<!--(?!-?>)[\s\S]*?-->/,l.html=s(l.html,"i").replace("comment",l._comment).replace("tag",l._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),l.paragraph=s(l._paragraph).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.blockquote=s(l.blockquote).replace("paragraph",l.paragraph).getRegex(),l.normal=a({},l),l.gfm=a({},l.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),l.gfm.nptable=s(l.gfm.nptable).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.gfm.table=s(l.gfm.table).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.pedantic=a({},l.normal,{html:s("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",l._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:r,paragraph:s(l.normal._paragraph).replace("hr",l.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",l.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:r,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};o.em=s(o.em).replace(/punctuation/g,o._punctuation).getRegex(),o._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,o.autolink=s(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex(),o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,o.tag=s(o.tag).replace("comment",l._comment).replace("attribute",o._attribute).getRegex(),o._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,o._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,o.link=s(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex(),o.reflink=s(o.reflink).replace("label",o._label).getRegex(),o.normal=a({},o),o.pedantic=a({},o.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:s(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:s(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()}),o.gfm=a({},o.normal,{escape:s(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),o.gfm.url=s(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex(),o.breaks=a({},o.gfm,{br:s(o.br).replace("{2,}","*").getRegex(),text:s(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:l,inline:o}},hyX7:function(e,t,n){var i=n("SbYC"),r=n("vbtb").defaults,s=n("e56X").inline,a=n("rUJ1"),l=a.findClosingBracket,o=a.escape;e.exports=function(){function e(t,n){if(_classCallCheck(this,e),this.options=n||r,this.links=t,this.rules=s.normal,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.rules=this.options.breaks?s.breaks:s.gfm)}return _createClass(e,[{key:"output",value:function(t){for(var n,i,r,s,a,c,u="";t;)if(a=this.rules.escape.exec(t))t=t.substring(a[0].length),u+=o(a[1]);else if(a=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),t=t.substring(a[0].length),u+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]);else if(a=this.rules.link.exec(t)){var h=l(a[2],"()");if(h>-1){var p=(0===a[0].indexOf("!")?5:4)+a[1].length+h;a[2]=a[2].substring(0,h),a[0]=a[0].substring(0,p).trim(),a[3]=""}t=t.substring(a[0].length),this.inLink=!0,r=a[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=n[1],s=n[3]):s="":s=a[3]?a[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),u+=this.outputLink(a,{href:e.escapes(r),title:e.escapes(s)}),this.inLink=!1}else if((a=this.rules.reflink.exec(t))||(a=this.rules.nolink.exec(t))){if(t=t.substring(a[0].length),n=(a[2]||a[1]).replace(/\s+/g," "),!(n=this.links[n.toLowerCase()])||!n.href){u+=a[0].charAt(0),t=a[0].substring(1)+t;continue}this.inLink=!0,u+=this.outputLink(a,n),this.inLink=!1}else if(a=this.rules.strong.exec(t))t=t.substring(a[0].length),u+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(t))t=t.substring(a[0].length),u+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(t))t=t.substring(a[0].length),u+=this.renderer.codespan(o(a[2].trim(),!0));else if(a=this.rules.br.exec(t))t=t.substring(a[0].length),u+=this.renderer.br();else if(a=this.rules.del.exec(t))t=t.substring(a[0].length),u+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(t))t=t.substring(a[0].length),"@"===a[2]?r="mailto:"+(i=o(this.mangle(a[1]))):r=i=o(a[1]),u+=this.renderer.link(r,null,i);else if(this.inLink||!(a=this.rules.url.exec(t))){if(a=this.rules.text.exec(t))t=t.substring(a[0].length),u+=this.renderer.text(this.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0]:o(this.smartypants(a[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===a[2])r="mailto:"+(i=o(a[0]));else{do{c=a[0],a[0]=this.rules._backpedal.exec(a[0])[0]}while(c!==a[0]);i=o(a[0]),r="www."===a[1]?"http://"+i:i}t=t.substring(a[0].length),u+=this.renderer.link(r,null,i)}return u}},{key:"outputLink",value:function(e,t){var n=t.href,i=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,i,this.output(e[1])):this.renderer.image(n,i,o(e[1]))}},{key:"smartypants",value:function(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e}},{key:"mangle",value:function(e){if(!this.options.mangle)return e;for(var t,n=e.length,i="",r=0;r<n;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),i+="&#"+t+";";return i}}],[{key:"output",value:function(t,n,i){return new e(n,i).output(t)}},{key:"escapes",value:function(t){return t?t.replace(e.rules._escapes,"$1"):t}},{key:"rules",get:function(){return s}}]),e}()},rUJ1:function(e,t){var n=/[&<>"']/,i=/[&<>"']/g,r=/[<>"']|&(?!#?\w+;)/,s=/[<>"']|&(?!#?\w+;)/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},l=function(e){return a[e]},o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(o,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var u=/(^|[^\[])\^/g,h=/[^\w:]/g,p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,g={},d=/^[^:]+:\/*[^/]*$/,f=/^([^:]+:)[\s\S]*$/,b=/^([^:]+:\/*[^/]*)[\s\S]*$/;function m(e,t){g[" "+e]||(g[" "+e]=d.test(e)?e+"/":k(e,"/",!0));var n=-1===(e=g[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(f,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(b,"$1")+t:e+t}function k(e,t,n){var i=e.length;if(0===i)return"";for(var r=0;r<i;){var s=e.charAt(i-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,i-r)}e.exports={escape:function(e,t){if(t){if(n.test(e))return e.replace(i,l)}else if(r.test(e))return e.replace(s,l);return e},unescape:c,edit:function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,i){return i=(i=i.source||i).replace(u,"$1"),e=e.replace(t,i),n},getRegex:function(){return new RegExp(e,t)}};return n},cleanUrl:function(e,t,n){if(e){var i;try{i=decodeURIComponent(c(n)).replace(h,"").toLowerCase()}catch(r){return null}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return null}t&&!p.test(n)&&(n=m(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n},resolveUrl:m,noopTest:{exec:function(){}},merge:function(e){for(var t,n,i=1;i<arguments.length;i++)for(n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var i=!1,r=t;--r>=0&&"\\"===n[r];)i=!i;return i?"|":" |"})).split(/ \|/),i=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n},rtrim:k,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,i=0,r=0;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&--i<0)return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},titR:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("vkgz"),r=n("3TKP"),s=n("fXoL"),a=n("tk/3"),l=n("jhN1"),o=function(){var e=function(){function e(t,n,i,r){_classCallCheck(this,e),this.http=t,this.title=n,this.meta=i,this.baseTitle=r}return _createClass(e,[{key:"resolve",value:function(e){var t=this,n=e.data.id;return this.http.get("/collections/pages/".concat(n,".json")).pipe(Object(i.a)((function(e){if(e.meta){var n=Object.assign({},e.meta);for(var i in t.title.setTitle(n.title?"".concat(n.title," | ").concat(t.baseTitle):t.baseTitle),delete n.title,n)n.hasOwnProperty(i)&&t.meta.updateTag({name:i,content:n[i]})}})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Mb(a.a),s.Mb(l.c),s.Mb(l.b),s.Mb(r.a))},e.\u0275prov=s.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},vbtb:function(e,t){e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},changeDefaults:function(t){e.exports.defaults=t}}}}]);