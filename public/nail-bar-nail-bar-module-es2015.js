(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nail-bar-nail-bar-module"],{

/***/ "./src/app/nail-bar/nail-bar-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/nail-bar/nail-bar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NailBarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NailBarRoutingModule", function() { return NailBarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nail_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nail-bar.component */ "./src/app/nail-bar/nail-bar.component.ts");





const routes = [{ path: '', component: _nail_bar_component__WEBPACK_IMPORTED_MODULE_2__["NailBarComponent"] }];
class NailBarRoutingModule {
}
NailBarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NailBarRoutingModule });
NailBarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NailBarRoutingModule_Factory(t) { return new (t || NailBarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NailBarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NailBarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nail-bar/nail-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/nail-bar/nail-bar.component.ts ***!
  \************************************************/
/*! exports provided: NailBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NailBarComponent", function() { return NailBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");




class NailBarComponent {
    constructor() {
    }
    ngOnInit() { }
}
NailBarComponent.ɵfac = function NailBarComponent_Factory(t) { return new (t || NailBarComponent)(); };
NailBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NailBarComponent, selectors: [["exo-nail-bar"]], decls: 60, vars: 0, consts: [[1, "main", "relative"], [1, "main-wrapper", "flex", "fw-wrap", "jc-start", "ai-end", "p-x-xl", "p-s-0"], [1, "col-6", "col-s-12", "z-index", "m-l-l", "m-s-0"], [1, "c-light", "ta-left", "nail-headline"], [1, "col-12", "flex", "jc-between", "ai-center", "c-light", "z-index"], [1, "col-4", "m-l-m", "m-s-0"], [1, "grid", "m-y-l"], [1, "col-6", "ta-center", "p-a-l"], ["src", "assets/images/lounge/logo.png", "alt", ""], [1, "col-7", "col-s-12", "ta-center"], [1, "m-y-l"], [1, "grid", "jc-between", "ai-center"], [1, "col-5", "col-s-6", "col-xs-12", "c-dark", "flex", "fd-col", "jc-center", "ai-start", "p-a-l", "welcome"], [1, "m-t-s"], [1, "btn-primary", "m-t-l"], [1, "col-6", "col-s-6", "col-xs-12", "ta-center"], ["src", "assets/images/nail/nail-2.png", 1, "shadow"], [1, "explore", "m-y-xl"], [1, "custom-bg"], [1, "exo-patio", "m-y-l"], [1, "grid", "ai-start"], [1, "col-6", "col-s-12"], ["src", "assets/images/nail/nail-5.png", "alt", ""], [1, "col-6", "col-s-12", "flex", "jc-end", "ai-start", "fd-col"], [1, "m-t-l"], [1, "col-8", "col-s-12", "ta-left", "m-y-l", "no-padding"], [1, "btn-primary"], ["src", "assets/images/nail/nail-4.png", "alt", "", 1, "m-t-l"], [1, "col-12", "ta-center"], [1, "col-5", "col-s-12", "ta-center"], [1, "exo-nail", "m-t-l", "flex", "jc-center", "ai-center"], [1, "col-6", "wrapper", "relative", "c-light", "z-index", "ta-center", "flex", "fd-col", "ai-center", "jc-center"], [1, "z-index", "m-y-m"], [1, "btn-secondary", "z-index"]], template: function NailBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "exo-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quite Simply, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " EXtraOrdinary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Scroll down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Exo Lounge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Exo Patio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "We Do Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Exo Nail Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "exo-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  background: url('nail-main.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\n.main[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.3;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  height: 90%;\n}\n\n.custom-bg[_ngcontent-%COMP%] {\n  background-image: url('nail-3.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 600px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  height: 300px;\n  width: 40%;\n}\n\n.wrapper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: black;\n  opacity: 0.2;\n}\n\n.exo-nail[_ngcontent-%COMP%] {\n  background-image: url('nail-1.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 600px;\n}\n\n\n\n@media (max-width: 600px) {\n  .nail-headline[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .bg-wrapper[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .full-bg[_ngcontent-%COMP%], .lights[_ngcontent-%COMP%] {\n    height: 370px;\n  }\n\n  .welcome[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .img-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 20px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .btn-primary[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n\n  .shadow[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2V4by9leG8vYXBwL3NyYy9hcHAvbmFpbC1iYXIvbmFpbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25haWwtYmFyL25haWwtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBOytFQUFBOztBQUdBO0VBRUU7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUNBRjs7RURHQTtJQUNFLGVBQUE7RUNBRjs7RURHQTtJQUNFLGVBQUE7RUNBRjs7RURHQTtJQUNFLGFBQUE7RUNBRjs7RURFQTtJQUNFLGVBQUE7RUNDRjs7RURDQTtJQUNFLGFBQUE7RUNFRjs7RURBQTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7RUNJRjs7RURGQTtJQUNFLFdBQUE7RUNLRjs7RURIQTtJQUNFLGdCQUFBO0VDTUY7O0VESkE7SUFDRSxnQkFBQTtFQ09GOztFRExBO0lBQ0UsV0FBQTtFQ1FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYWlsLWJhci9uYWlsLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uYWlsL25haWwtbWFpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IC4zO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5jdXN0b20tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL25haWwvbmFpbC0zLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4ud3JhcHBlcjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAuMjtcbn1cblxuLmV4by1uYWlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uYWlsL25haWwtMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLyogTW9iaWxlIHN0eWxlc1xuICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLm5haWwtaGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYmctd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmZ1bGwtYmcsIC5saWdodHMge1xuICAgIGhlaWdodDogMzcwcHg7XG4gIH1cbiAgLndlbGNvbWUge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmltZy13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4iLCIubWFpbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbmFpbC9uYWlsLW1haW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5jdXN0b20tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL25haWwvbmFpbC0zLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4ud3JhcHBlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmV4by1uYWlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uYWlsL25haWwtMS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLyogTW9iaWxlIHN0eWxlc1xuICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmFpbC1oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5iZy13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmZ1bGwtYmcsIC5saWdodHMge1xuICAgIGhlaWdodDogMzcwcHg7XG4gIH1cblxuICAud2VsY29tZSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5pbWctd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NailBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'exo-nail-bar',
                templateUrl: './nail-bar.component.html',
                styleUrls: ['./nail-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nail-bar/nail-bar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/nail-bar/nail-bar.module.ts ***!
  \*********************************************/
/*! exports provided: NailBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NailBarModule", function() { return NailBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _nail_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nail-bar.component */ "./src/app/nail-bar/nail-bar.component.ts");
/* harmony import */ var _nail_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nail-bar-routing.module */ "./src/app/nail-bar/nail-bar-routing.module.ts");






class NailBarModule {
}
NailBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NailBarModule });
NailBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NailBarModule_Factory(t) { return new (t || NailBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _nail_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["NailBarRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NailBarModule, { declarations: [_nail_bar_component__WEBPACK_IMPORTED_MODULE_3__["NailBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _nail_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["NailBarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NailBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_nail_bar_component__WEBPACK_IMPORTED_MODULE_3__["NailBarComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _nail_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["NailBarRoutingModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=nail-bar-nail-bar-module-es2015.js.map