function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lounge-lounge-module"], {
  /***/
  "./src/app/lounge/lounge-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/lounge/lounge-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LoungeRoutingModule */

  /***/
  function srcAppLoungeLoungeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoungeRoutingModule", function () {
      return LoungeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _lounge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lounge.component */
    "./src/app/lounge/lounge.component.ts");

    var routes = [{
      path: '',
      component: _lounge_component__WEBPACK_IMPORTED_MODULE_2__["LoungeComponent"]
    }];

    var LoungeRoutingModule = function LoungeRoutingModule() {
      _classCallCheck(this, LoungeRoutingModule);
    };

    LoungeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoungeRoutingModule
    });
    LoungeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoungeRoutingModule_Factory(t) {
        return new (t || LoungeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoungeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoungeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lounge/lounge.component.ts":
  /*!********************************************!*\
    !*** ./src/app/lounge/lounge.component.ts ***!
    \********************************************/

  /*! exports provided: LoungeComponent */

  /***/
  function srcAppLoungeLoungeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoungeComponent", function () {
      return LoungeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts"); // import {aboutAnimate} from '../animations';


    var LoungeComponent = /*#__PURE__*/function () {
      // animate = 'inactive';
      // toggleMove() {
      //   this.animate = (this.animate === 'inactive' ? 'active' : 'inactive');
      // }
      function LoungeComponent() {
        _classCallCheck(this, LoungeComponent);
      }

      _createClass(LoungeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoungeComponent;
    }();

    LoungeComponent.ɵfac = function LoungeComponent_Factory(t) {
      return new (t || LoungeComponent)();
    };

    LoungeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoungeComponent,
      selectors: [["exo-about"]],
      decls: 57,
      vars: 0,
      consts: [[1, "main", "relative"], [1, "main-wrapper", "flex", "fw-wrap", "jc-start", "ai-end", "p-x-xl", "p-s-0"], [1, "col-6", "z-index", "m-l-l", "col-s-12", "m-s-0"], [1, "c-light", "ta-left", "exo-lounge-header"], [1, "col-12", "flex", "jc-start", "ai-center", "c-light", "z-index"], [1, "col-4", "m-l-m", "m-s-0"], [1, "grid", "m-y-l"], [1, "col-6", "ta-center", "p-a-l", "p-s-0"], ["src", "assets/images/lounge/logo.png", "alt", ""], [1, "col-7", "col-s-12", "ta-center"], [1, "m-y-l"], [1, "grid", "jc-between", "ai-center"], [1, "col-5", "col-s-6", "col-xs-12", "c-dark", "flex", "fd-col", "jc-center", "ai-start", "p-a-l", "welcome"], [1, "m-t-s"], [1, "btn-primary", "m-t-l"], [1, "col-7", "col-s-6", "col-xs-12", "ta-center"], ["src", "assets/images/lounge/lounge-2.png", 1, "shadow"], [1, "explore", "m-y-xl"], [1, "custom-bg"], [1, "patio", "m-y-l"], ["src", "assets/images/lounge/lounge-5.png"], [1, "col-5", "col-s-12", "c-dark", "flex", "fd-col", "ai-start", "jc-center", "p-a-l", "welcome"], [1, "m-t-m"], [1, "img-wrapper", "w-full"], ["src", "assets/images/lounge/lounge-4.png", "alt", "", 1, "m-t-xxl", "m-s-0"], [1, "col-12", "ta-center"], [1, "col-5", "col-s-12", "ta-center"], [1, "exo-lounge", "m-y-l", "flex", "jc-center", "ai-center"], [1, "col-6", "wrapper", "relative", "c-light", "z-index", "ta-center", "flex", "fd-col", "ai-center", "jc-center"], [1, "z-index", "m-y-m"], [1, "btn-secondary", "z-index"]],
      template: function LoungeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Exo Patio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "We Do Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Exo Lounge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".main[_ngcontent-%COMP%] {\n  background: url('home-main.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\n.main[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.3;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  height: 90%;\n}\n\n.custom-bg[_ngcontent-%COMP%] {\n  background-image: url('lounge-3.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 600px;\n}\n\n.exo-lounge[_ngcontent-%COMP%] {\n  background-image: url('lounge.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 600px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  height: 300px;\n  width: 40%;\n}\n\n.wrapper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: black;\n  opacity: 0.3;\n}\n\n\n\n@media (max-width: 600px) {\n  .exo-lounge-header[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .bg-wrapper[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .full-bg[_ngcontent-%COMP%], .lights[_ngcontent-%COMP%] {\n    height: 370px;\n  }\n\n  .welcome[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .img-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 20px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .btn-primary[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n\n  .shadow[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2V4by9leG8vYXBwL3NyYy9hcHAvbG91bmdlL2xvdW5nZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG91bmdlL2xvdW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURNQTsrRUFBQTs7QUFHQTtFQUVFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VDTEY7O0VEUUE7SUFDRSxlQUFBO0VDTEY7O0VEUUE7SUFDRSxlQUFBO0VDTEY7O0VEUUE7SUFDRSxhQUFBO0VDTEY7O0VET0E7SUFDRSxlQUFBO0VDSkY7O0VETUE7SUFDRSxhQUFBO0VDSEY7O0VES0E7SUFDRSxhQUFBO0VDRkY7O0VESUE7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VDREY7O0VER0E7SUFDRSxXQUFBO0VDQUY7O0VERUE7SUFDRSxnQkFBQTtFQ0NGOztFRENBO0lBQ0UsZ0JBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG91bmdlL2xvdW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtbWFpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IC4zO1xufVxuXG5cbi5tYWluLXdyYXBwZXIge1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmN1c3RvbS1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG91bmdlL2xvdW5nZS0zLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4uZXhvLWxvdW5nZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG91bmdlL2xvdW5nZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLndyYXBwZXI6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogLjM7XG59XG5cblxuXG5cblxuLyogTW9iaWxlIHN0eWxlc1xuICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLmV4by1sb3VuZ2UtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJnLXdyYXBwZXIge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAubWFpbiB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5mdWxsLWJnLCAubGlnaHRzIHtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICB9XG4gIC53ZWxjb21lIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5pbWctd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYnRuLXByaW1hcnkge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUvaG9tZS1tYWluLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIGhlaWdodDogOTAlO1xufVxuXG4uY3VzdG9tLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sb3VuZ2UvbG91bmdlLTMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNjAwcHg7XG59XG5cbi5leG8tbG91bmdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sb3VuZ2UvbG91bmdlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4ud3JhcHBlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLyogTW9iaWxlIHN0eWxlc1xuICo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZXhvLWxvdW5nZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYmctd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5mdWxsLWJnLCAubGlnaHRzIHtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICB9XG5cbiAgLndlbGNvbWUge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuaW1nLXdyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIC5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoungeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'exo-about',
          templateUrl: './lounge.component.html',
          styleUrls: ['./lounge.component.scss'] // animations: [aboutAnimate]

        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lounge/lounge.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/lounge/lounge.module.ts ***!
    \*****************************************/

  /*! exports provided: LoungeModule */

  /***/
  function srcAppLoungeLoungeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoungeModule", function () {
      return LoungeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _lounge_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lounge-routing.module */
    "./src/app/lounge/lounge-routing.module.ts");
    /* harmony import */


    var _lounge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lounge.component */
    "./src/app/lounge/lounge.component.ts");

    var LoungeModule = function LoungeModule() {
      _classCallCheck(this, LoungeModule);
    };

    LoungeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoungeModule
    });
    LoungeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoungeModule_Factory(t) {
        return new (t || LoungeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lounge_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoungeRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoungeModule, {
        declarations: [_lounge_component__WEBPACK_IMPORTED_MODULE_4__["LoungeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lounge_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoungeRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoungeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_lounge_component__WEBPACK_IMPORTED_MODULE_4__["LoungeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lounge_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoungeRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=lounge-lounge-module-es5.js.map