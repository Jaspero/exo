function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
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
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function HomeComponent_div_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var background_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + background_r1.background + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](background_r1.name);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.links = {
          backgrounds: [{
            name: 'Events',
            background: 'assets/images/home/home-3.png'
          }, {
            name: 'Blog',
            background: 'assets/images/home/home-4.png'
          }, {
            name: 'News & Press',
            background: 'assets/images/home/home-5.png'
          }]
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["exo-home"]],
      decls: 83,
      vars: 1,
      consts: [[1, "main", "relative"], [1, "main-wrapper", "flex", "fw-wrap", "jc-start", "ai-end", "p-x-xl", "p-s-0"], [1, "col-6", "col-s-12", "z-index", "m-l-l", "m-s-0"], [1, "c-light", "ta-left", "exo-headline"], [1, "col-12", "flex", "jc-between", "ai-center", "c-light", "z-index"], [1, "col-6", "m-l-m", "m-s-0"], [1, "col-6", "flex", "ai-center", "jc-center"], [1, "line", "bg-light", "col-s-4", "no-padding", "m-x-s"], [1, "circle", "bg-light", "br-circle"], [1, "circle", "bg-light", "br-circle", "m-x-s"], [1, "grid", "m-y-l"], [1, "col-6", "col-s-12", "ta-center"], [1, "m-y-l"], [1, "grid", "jc-between", "ai-center"], [1, "col-5", "col-s-12", "c-dark", "flex", "fd-col", "jc-center", "ai-start", "p-a-l", "welcome"], [1, "m-t-s"], [1, "col-7", "col-xs-12", "ta-center"], ["src", "assets/images/home/home-2.png"], [1, "explore", "m-y-l"], [1, "grid"], [1, "col-12", "custom-bg"], [1, "brands", "m-y-l"], [1, "grid", "jc-end"], [1, "col-12", "ta-left", "m-y-l"], [1, "col-6", "col-s-12"], [1, "lounge"], [1, "col-4", "col-s-12"], [1, "nails"], [1, "full-bg", "m-y-l"], ["src", "assets/images/home/home.png"], [1, "col-5", "col-xs-12", "c-dark", "flex", "fd-col", "ai-start", "jc-center", "p-a-l", "welcome"], [1, "m-t-m"], [1, "img-wrapper", "w-full"], ["src", "assets/images/home/home-9.png", "alt", "", 1, "m-t-xxl", "m-s-0"], [1, "lights"], [1, "m-t-l"], ["src", "assets/images/home/home-10.png", "alt", "", 1, "m-t-xxl", "m-s-0"], ["src", "assets/images/home/home-logo.png"], [1, "flex", "w-full"], ["class", "col-4 events flex jc-center ai-end", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "col-4", "events", "flex", "jc-center", "ai-end", 3, "ngStyle"], [1, "bg-wrapper", "relative", "ta-center", "p-a-s", "flex", "fd-col", "ai-center", "m-b-m"], [1, "c-light", "z-index"], ["href", "", 1, "z-index"], ["src", "assets/icons/right.svg", "alt", "link", 1, "z-index", "m-t-m"]],
      template: function HomeComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A journey of the senses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Scroll down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Welcome to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Exo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Explore Our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Brands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "From. Exquisite night life experiences, to elegant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " nails, and aesthetics.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Welcome to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Exo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "section", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Welcome to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Exo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality organic products and furnishing an enjoyable atmosphere that appeals to the senses.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, HomeComponent_div_81_Template, 6, 4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "exo-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links.backgrounds);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".main[_ngcontent-%COMP%] {\n  background: url('home-main.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\n.main[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.3;\n}\n\n.custom-bg[_ngcontent-%COMP%] {\n  background-image: url('home-6.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 600px;\n}\n\n.lounge[_ngcontent-%COMP%] {\n  background-image: url('home-11.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 500px;\n}\n\n.nails[_ngcontent-%COMP%] {\n  background-image: url('home-12.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 500px;\n}\n\n.full-bg[_ngcontent-%COMP%] {\n  background-image: url('home-7.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\n.lights[_ngcontent-%COMP%] {\n  background-image: url('home-8.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  height: 90%;\n}\n\n.line[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 300px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n\n.events[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 550px;\n}\n\n.bg-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  min-width: 200px;\n}\n\n.bg-wrapper[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #000000;\n  opacity: 0.4;\n}\n\n\n\n@media (max-width: 600px) {\n  .exo-headline[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .bg-wrapper[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .full-bg[_ngcontent-%COMP%], .lights[_ngcontent-%COMP%] {\n    height: 370px;\n  }\n\n  .welcome[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .img-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 20px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2V4by9leG8vYXBwL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNHRjs7QURBQTtFQUNFLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDSUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNHRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHRjs7QURJQTsrRUFBQTs7QUFHQTtFQUVFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VDSEY7O0VETUE7SUFDRSxlQUFBO0VDSEY7O0VETUE7SUFDRSxlQUFBO0VDSEY7O0VETUE7SUFDRSxhQUFBO0VDSEY7O0VES0E7SUFDRSxlQUFBO0VDRkY7O0VESUE7SUFDRSxhQUFBO0VDREY7O0VER0E7SUFDRSxhQUFBO0VDQUY7O0VERUE7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxXQUFBO0VDRUY7O0VEQUE7SUFDRSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtbWFpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IC4zO1xufVxuXG4uY3VzdG9tLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtNi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLmxvdW5nZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS9ob21lLTExLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuLm5haWxzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtMTIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5mdWxsLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtNy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5saWdodHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUvaG9tZS04LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5cblxuLm1haW4td3JhcHBlciB7XG4gIGhlaWdodDogOTAlO1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMzAwcHg7XG59XG4uY2lyY2xlIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmV2ZW50cyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLmJnLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmJnLXdyYXBwZXI6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAuNDtcbn1cblxuXG5cblxuXG4vKiBNb2JpbGUgc3R5bGVzXG4gKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAuZXhvLWhlYWRsaW5lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJnLXdyYXBwZXIge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAubWFpbiB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5mdWxsLWJnLCAubGlnaHRzIHtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICB9XG4gIC53ZWxjb21lIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5pbWctd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi5tYWluIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtbWFpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1haW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5jdXN0b20tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUvaG9tZS02LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4ubG91bmdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2hvbWUtMTEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5uYWlscyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS9ob21lLTEyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uZnVsbC1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS9ob21lLTcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5saWdodHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUvaG9tZS04LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5ldmVudHMge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5iZy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5iZy13cmFwcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi8qIE1vYmlsZSBzdHlsZXNcbiAqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmV4by1oZWFkbGluZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5iZy13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLmZ1bGwtYmcsIC5saWdodHMge1xuICAgIGhlaWdodDogMzcwcHg7XG4gIH1cblxuICAud2VsY29tZSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5pbWctd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'exo-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map