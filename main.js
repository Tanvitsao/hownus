(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kevin\Documents\GitHub\hownusng\hownus\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5917":
/*!************************************************!*\
  !*** ./src/app/core/mercue-request.service.ts ***!
  \************************************************/
/*! exports provided: MercueRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercueRequestService", function() { return MercueRequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class MercueRequestService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        /**
         * 是否已顯示無效訊息
         * - 用於判斷僅需彈跳一次
         */
        this.isPopupInvalidMsg = false;
        /**
         * for Status Code 200的情況 (response error) && backend throw exception
         * @param response : MercueResponse
         */
        this.handleResponse = (response) => {
            let hasResult = true;
            return hasResult;
        };
        /**
         * for Status Code 200的情況 (response error) && backend throw exception
         * @param response : MercueResponse
         */
        this.handleQueryProgressResponse = (response) => {
            let hasResult = true;
            if (!response) {
                hasResult = false;
            }
            return hasResult;
        };
        this.handleError = (error) => {
            console.log('handleError');
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
            }
            // return an observable with a user-facing error message
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
        };
    }
    /**
     * call HTTP 主要方法
     * @param method http method
     * @param requestParams request body
     * @param url api url
     */
    request(method, requestParams, url) {
        const httpHeaders = this.getHTTPHeaders();
        if ("post" /* POST */ === method) {
            return this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_IP + url, requestParams, { headers: httpHeaders })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
        else {
            return this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_IP + "/MliOffice" /* HREF */ + url, { headers: httpHeaders, params: requestParams })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.handleResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    }
    /**
     * 繞過 spring security 直接回驗
     * @param url api url
     */
    requestSsoServer(url) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem("ssoToken" /* SSO_TOKEN */)
        });
        return this.http
            .get(sessionStorage.getItem('ssoServerUrl') + url, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.handleQueryProgressResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    /**
     * 取得json file
     * @param url file 路徑
     */
    getJSONfile(url) {
        return this.http.get(url);
    }
    getHTTPHeaders() {
        const result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem("token" /* TOKEN */)
        });
        return result;
    }
    getQueryProgressHTTPHeaders() {
        const result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        });
        return result;
    }
}
MercueRequestService.ɵfac = function MercueRequestService_Factory(t) { return new (t || MercueRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MercueRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MercueRequestService, factory: MercueRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    DEFAULT_IP: 'https://hownus.com',
    MEDIA_IP: 'https://d2qsy0gfkzz89z.cloudfront.net/u/'
};


/***/ }),

/***/ "D0pF":
/*!*******************************************************!*\
  !*** ./src/app/cat-view/ranking/ranking.component.ts ***!
  \*******************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RankingComponent {
    constructor() { }
    ngOnInit() {
    }
}
RankingComponent.ɵfac = function RankingComponent_Factory(t) { return new (t || RankingComponent)(); };
RankingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RankingComponent, selectors: [["app-ranking"]], decls: 94, vars: 0, consts: [[1, "main-view"], ["src", "./assets/image/leaderboard.png", "width", "200", "alt", "", 1, "leaderboard"], [1, "ranking-images"], [1, "ranking-wrap", 2, "margin-right", "-35px"], [1, "text-center"], [1, "ranking-number"], ["src", "./assets/image/icon/arrow.png", "width", "10", "alt", ""], ["src", "./assets/image/userphoto.png", "width", "120", "alt", ""], [1, "username"], [1, "ranking-wrap", 2, "z-index", "10"], ["src", "./assets/image/crown.png", "width", "100", "alt", "", 1, "d-block", "mx-auto"], ["src", "./assets/image/userphoto.png", "width", "150", "alt", "", 1, "d-block"], [1, "username-top"], [1, "ranking-wrap", 2, "margin-left", "-35px"], [1, "ranking-list-zone"], [1, "ranking-list"], [1, "ranking-tag", "self", "mb-3"], [1, "d-flex", "align-items-center"], [1, "ranking-number", "me-2"], [1, "ranking-text"], [1, "d-flex", "align-items-center", "ms-auto"], ["src", "./assets/image/catcoin.png", "width", "40", "alt", "", 1, "me-2"], [1, "ranking-tag", "top", "mb-3"], ["src", "./assets/image/crown.png", "width", "40", "alt", "", 1, "d-block", "me-2"], [1, "ranking-tag", "mb-3"], [1, "ranking-tag"], [1, "gift-list-zone"], ["src", "./assets/image/prize.png", "width", "150", "alt", "", 1, "mb-2"], [1, "gift-item", "mb-3"], ["src", "./assets/image/prize_list.png", "alt", "", 1, "gift-bg"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-2"], ["src", "./assets/image/crown.png", "width", "70", "alt", "", 1, "me-2"], [1, "gift-ranking-number"], [1, "gift-text"]], template: function RankingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "YOU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "1500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "6600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "6600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "6600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u7B2C\u4E00\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u734E\u54C1\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u7B2C\u4E8C\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u734E\u54C1\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u7B2C\u4E09\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u734E\u54C1\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.main-view[_ngcontent-%COMP%] {\n  background-image: url('cat_bg.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  position: relative;\n}\n.main-view[_ngcontent-%COMP%]   .leaderboard[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 0;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-images[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  display: flex;\n  align-items: end;\n  justify-content: center;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-images[_ngcontent-%COMP%]   .ranking-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-images[_ngcontent-%COMP%]   .ranking-number[_ngcontent-%COMP%] {\n  color: #f3202e;\n  margin-bottom: 0;\n  font-size: 26px;\n  font-weight: 900;\n  line-height: 18px;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-images[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ff7c02;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-images[_ngcontent-%COMP%]   .username-top[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #f3202e;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%] {\n  background: linear-gradient(225.93deg, #faea75 32.73%, #ffbd1a 40.03%, #ffc128 61.32%, #ffbb23 63.11%, #ffaa16 65.5%, #ff9203 67.9%);\n  border: 6px solid #ffffff;\n  padding: 8px;\n  border-radius: 20px;\n  margin: 20px;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%]   .ranking-list[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.77);\n  padding: 20px;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%]   .ranking-list[_ngcontent-%COMP%]   .ranking-tag[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  max-width: 320px;\n  margin: auto;\n  padding: 6px;\n  background-color: #ff7c02;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 0 4px;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%]   .ranking-list[_ngcontent-%COMP%]   .ranking-tag.self[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #f3202e;\n  box-shadow: #f3202e 0 0 8px;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%]   .ranking-list[_ngcontent-%COMP%]   .ranking-tag.top[_ngcontent-%COMP%] {\n  background-color: #f3202e;\n  color: white;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%]   .ranking-list[_ngcontent-%COMP%]   .ranking-tag[_ngcontent-%COMP%]   .ranking-number[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 22px;\n  font-weight: 900;\n}\n.main-view[_ngcontent-%COMP%]   .ranking-list-zone[_ngcontent-%COMP%]   .ranking-list[_ngcontent-%COMP%]   .ranking-tag[_ngcontent-%COMP%]   .ranking-text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 22px;\n  font-weight: 600;\n}\n.main-view[_ngcontent-%COMP%]   .gift-list-zone[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n  padding-bottom: 30px;\n}\n.main-view[_ngcontent-%COMP%]   .gift-list-zone[_ngcontent-%COMP%]   .gift-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}\n.main-view[_ngcontent-%COMP%]   .gift-list-zone[_ngcontent-%COMP%]   .gift-item[_ngcontent-%COMP%] {\n  height: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.main-view[_ngcontent-%COMP%]   .gift-list-zone[_ngcontent-%COMP%]   .gift-ranking-number[_ngcontent-%COMP%] {\n  color: #f3202e;\n  font-size: 30px;\n  font-weight: bold;\n}\n.main-view[_ngcontent-%COMP%]   .gift-list-zone[_ngcontent-%COMP%]   .gift-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYW5raW5nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGN1c3RvbS1zZXR0aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUFxQkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQUVBLHNCQUFBO0FBS0Esb0JBQUE7QURsSEE7RUFDSSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBWUo7QUFWSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsTUFBQTtBQVlSO0FBVEk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBV1I7QUFUUTtFQUNJLGtCQUFBO0FBV1o7QUFSUTtFQUNJLGNDWkU7RURhRixnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVVo7QUFQUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBU1o7QUFQUTtFQUNJLGVBQUE7RUFDQSxjQ3pCRTtBRGtDZDtBQUxJO0VBQ0ksb0lBQUE7RUFTQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0ksMkNBQUE7RUFDQSxhQUFBO0FBRFo7QUFHWTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBRGhCO0FBR2dCO0VBQ0ksdUJBQUE7RUFDQSxjQzdETjtFRDhETSwyQkFBQTtBQURwQjtBQUdnQjtFQUNJLHlCQ2pFTjtFRGtFTSxZQUFBO0FBRHBCO0FBSWdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGcEI7QUFLZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhwQjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFQUjtBQVNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUFo7QUFVUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBUlo7QUFXUTtFQUNJLGNDMUdFO0VEMkdGLGVBQUE7RUFDQSxpQkFBQTtBQVRaO0FBWVE7RUFDSSxlQUFBO0FBVloiLCJmaWxlIjoicmFua2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cbi8qIGJhc2UgYnRuIHN0YXJ0ICovXG4vKiBiYXNlIGJ0biBlbmQgKi9cbi8qKiBiYXNlIGNhcmQgc3RhcnQqL1xuLyoqIGJhc2UgY2FyZCBlbmQqL1xuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xuLyogYmFzZSB0YWIgc3RhcnQgKi9cbi8qIGJhc2UgdGFiIGVuZCAqL1xuLyogc2xpZGUgaW1hZ2Ugc3RhcnQgKi9cbi8qIHNsaWRlIGltYWdlIGVuZCAqL1xuLm1haW4tdmlldyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9jYXRfYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLXZpZXcgLmxlYWRlcmJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdG9wOiAwO1xufVxuLm1haW4tdmlldyAucmFua2luZy1pbWFnZXMge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbi12aWV3IC5yYW5raW5nLWltYWdlcyAucmFua2luZy13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tdmlldyAucmFua2luZy1pbWFnZXMgLnJhbmtpbmctbnVtYmVyIHtcbiAgY29sb3I6ICNmMzIwMmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4ubWFpbi12aWV3IC5yYW5raW5nLWltYWdlcyAudXNlcm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmY3YzAyO1xufVxuLm1haW4tdmlldyAucmFua2luZy1pbWFnZXMgLnVzZXJuYW1lLXRvcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmMzIwMmU7XG59XG4ubWFpbi12aWV3IC5yYW5raW5nLWxpc3Qtem9uZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjUuOTNkZWcsICNmYWVhNzUgMzIuNzMlLCAjZmZiZDFhIDQwLjAzJSwgI2ZmYzEyOCA2MS4zMiUsICNmZmJiMjMgNjMuMTElLCAjZmZhYTE2IDY1LjUlLCAjZmY5MjAzIDY3LjklKTtcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG4ubWFpbi12aWV3IC5yYW5raW5nLWxpc3Qtem9uZSAucmFua2luZy1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3KTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluLXZpZXcgLnJhbmtpbmctbGlzdC16b25lIC5yYW5raW5nLWxpc3QgLnJhbmtpbmctdGFnIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdjMDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDAgNHB4O1xufVxuLm1haW4tdmlldyAucmFua2luZy1saXN0LXpvbmUgLnJhbmtpbmctbGlzdCAucmFua2luZy10YWcuc2VsZiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI2YzMjAyZTtcbiAgYm94LXNoYWRvdzogI2YzMjAyZSAwIDAgOHB4O1xufVxuLm1haW4tdmlldyAucmFua2luZy1saXN0LXpvbmUgLnJhbmtpbmctbGlzdCAucmFua2luZy10YWcudG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzMjAyZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW4tdmlldyAucmFua2luZy1saXN0LXpvbmUgLnJhbmtpbmctbGlzdCAucmFua2luZy10YWcgLnJhbmtpbmctbnVtYmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLm1haW4tdmlldyAucmFua2luZy1saXN0LXpvbmUgLnJhbmtpbmctbGlzdCAucmFua2luZy10YWcgLnJhbmtpbmctdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluLXZpZXcgLmdpZnQtbGlzdC16b25lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLm1haW4tdmlldyAuZ2lmdC1saXN0LXpvbmUgLmdpZnQtYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbi12aWV3IC5naWZ0LWxpc3Qtem9uZSAuZ2lmdC1pdGVtIHtcbiAgaGVpZ2h0OiAxNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLXZpZXcgLmdpZnQtbGlzdC16b25lIC5naWZ0LXJhbmtpbmctbnVtYmVyIHtcbiAgY29sb3I6ICNmMzIwMmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi12aWV3IC5naWZ0LWxpc3Qtem9uZSAuZ2lmdC10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufSIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4vLyDmt7rngbBcclxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNCREJEQkQ7XHJcblxyXG4vLyDkuLvopoHoibJcclxuJHByaW1hcnktY29sb3I6ICNGRjdDMDI7XHJcbi8vIOS4u+imgeiJsuiuiuW9olxyXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjRkZGOEYyO1xyXG4vLyDmrKHopoHoibJcclxuJHNlY29uZGFyeS1jb2xvcjogI0MxNkUwMDtcclxuLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2U2ZjNmNztcclxuLy8g56ys5LiJ6ImyXHJcbiR0aGlyZC1jb2xvcjogI2YzMjAyZTtcclxuLy8g56ys5LiJ6Imy6K6K5b2iXHJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xyXG4vLyBkYW5nZXJcclxuJGRhbmdlci1jb2xvcjogI0U3M0Q0QTtcclxuXHJcbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cclxuJGZvbnQtc3o6IChcclxuICB4bDogMzBweCxcclxuICBsZzogMThweCxcclxuICBtZDogMTZweCxcclxuICBzbTogMTRweCxcclxuICB4czogMTJweCxcclxuKTtcclxuXHJcbiRmb250LXdlaWdodDogKFxyXG4gIGZhdHR5OiA2MDAsXHJcbiAgbm9ybWFsOiBub3JtYWwsXHJcbik7XHJcblxyXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXHJcbi8qIGJhc2UgYnRuIHN0YXJ0ICovXHJcbiRidG46IChcclxuICBib3JkZXItcmFkaXVzOiA3cHgsXHJcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXHJcbik7XHJcbiRidG4taGVpZ2h0OiAoXHJcbiAgbGc6IDQwcHgsXHJcbiAgbWQ6IDM1cHgsXHJcbiAgc206IDMwcHgsXHJcbik7XHJcbiRidG4td2lkdGg6IChcclxuICB4bDogMjAwcHgsXHJcbiAgbGc6IDE1MHB4LFxyXG4gIG1kOiAxMjBweCxcclxuICBzbTogOTBweCxcclxuICB4czogNjBweCxcclxuKTtcclxuLyogYmFzZSBidG4gZW5kICovXHJcblxyXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cclxuJGJhc2UtY2FyZDogKFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcclxuICBib3gtc2hhZG93OiBub25lLFxyXG4gIHBhZGRpbmc6IDAsXHJcbiAgYm9yZGVyOiAwLFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcclxuKTtcclxuXHJcbiRiYXNlLWNhcmQtaGVhZGVyOiAoXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxyXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpLFxyXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxyXG4gIHBhZGRpbmc6IDAgMTVweCxcclxuKTtcclxuXHJcbiRiYXNlLWNhcmQtY29udGVudDogKFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweCxcclxuKTtcclxuLyoqIGJhc2UgY2FyZCBlbmQqL1xyXG5cclxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xyXG4kYmFzZS10YWJsZTogKFxyXG4gIC8vIGhvdmVyIOmhj+iJslxyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcclxuICAvLyDplpPpmpToibJcclxuICBldmVuLWNvbC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXHJcbiAgLy8g5ZyT6KeSXHJcbiAgcmFkaXVzOiA3cHgsXHJcbiAgLy8g6Zmw5b2xXHJcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxyXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXHJcbiAgcGFkZGluZzogNHB4IDhweCxcclxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXHJcbiAgbW8tcGFkZGluZzogMTBweCA4cHgsXHJcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxyXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcclxuICAvLyDmrITkvY3kuIvmlrnnmoRib3JkZXItYm90dG9t77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcclxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcclxuKTtcclxuXHJcbi8qIGJhc2UgdGFiIHN0YXJ0ICovXHJcbiRiYXNlLXRhYjogKFxyXG4gIC8vIOmhj+iJsihtZXJjLXRhYiDmnKrlgrPlhaUgbWVyY1R5cGUg5pmC5pyJ5pWIKVxyXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXHJcbiAgLy8gdGFiIOe3qOahhlxyXG4gIHRhYi1ib3JkZXItd2lkdGg6IDFweCxcclxuICAvLyBjb250ZW50IOe3qOahhlxyXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxyXG4gIC8vIOWck+inklxyXG4gIHJhZGl1czogN3B4LFxyXG4gIC8vIOWtl+mrlOWkp+Wwj1xyXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpXHJcbik7XHJcbi8qIGJhc2UgdGFiIGVuZCAqL1xyXG5cclxuLyogc2xpZGUgaW1hZ2Ugc3RhcnQgKi9cclxuJHNsaWRlLWltYWdlOiAoXHJcbiAgaW1hZ2UtYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXHJcbiAgZm9jdXMtYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3JcclxuKTtcclxuLyogc2xpZGUgaW1hZ2UgZW5kICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Pl3e":
/*!**********************************************************!*\
  !*** ./src/app/bonus/bonus-info/bonus-info.component.ts ***!
  \**********************************************************/
/*! exports provided: BonusInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoComponent", function() { return BonusInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BonusInfoComponent {
    constructor() {
        this.project = [
            {
                img: 'assets/image/icon/score1.png',
                type: '首次加入',
                content: '內容內容內容內容內容',
                score: '+30'
            },
            {
                img: 'assets/image/icon/score2.png',
                type: '日常上傳',
                content: '內容內容',
                score: '+1'
            },
            {
                img: 'assets/image/icon/score2.png',
                type: '日常上傳',
                content: `內容內容內容內容`,
                score: '+2'
            }
        ];
    }
    ngOnInit() {
    }
}
BonusInfoComponent.ɵfac = function BonusInfoComponent_Factory(t) { return new (t || BonusInfoComponent)(); };
BonusInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusInfoComponent, selectors: [["app-bonus-info"]], decls: 1, vars: 0, consts: [["src", "./assets/image/bonusRule.png", "width", "100%"]], template: function BonusInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  font-size: 30px;\n  text-align: center;\n  font-weight: bold;\n  color: #FF7C02;\n}\n.table-zone[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 600px;\n  padding-bottom: 10px;\n  padding: 18px;\n}\n.table-zone[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%] {\n  background: linear-gradient(93deg, #FF7C02, #f3202e);\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 4px 0;\n}\n.table-zone[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  right: 0;\n  background-color: #fff;\n}\n.content-box[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 10px;\n  background-color: #f7f7f7;\n}\n.content-box[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%] {\n  padding: 20px 4px;\n}\n.content-box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.content-box[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.content-box[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib251cy1pbmZvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGN1c3RvbS1zZXR0aW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUFxQkEsWUFBQTtBQWNBLFlBQUE7QUFDQSxtQkFBQTtBQWlCQSxpQkFBQTtBQUVBLG9CQUFBO0FBbUJBLGtCQUFBO0FBRUEscUJBQUE7QUFvQkEsbUJBQUE7QUFhQSxpQkFBQTtBQUVBLHNCQUFBO0FBS0Esb0JBQUE7QURsSEE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWUo7QUFUQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQVlKO0FBWEk7RUFDSSxvREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWFSO0FBWlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQWNaO0FBVEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVlKO0FBVkk7RUFDSSxpQkFBQTtBQVlSO0FBTEk7RUFDSSxrQkFBQTtBQU9SO0FBTlE7RUFDSSxhQUFBO0FBUVo7QUFMSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQU9SIiwiZmlsZSI6ImJvbnVzLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xuLyogYmFzZSBidG4gZW5kICovXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbi8qKiBiYXNlIGNhcmQgZW5kKi9cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4vKiBiYXNlIHRhYiBlbmQgKi9cbi8qIHNsaWRlIGltYWdlIHN0YXJ0ICovXG4vKiBzbGlkZSBpbWFnZSBlbmQgKi9cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRjdDMDI7XG59XG5cbi50YWJsZS16b25lIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4O1xufVxuLnRhYmxlLXpvbmUgLnRpdGxlLWJveCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5M2RlZywgI0ZGN0MwMiwgI2YzMjAyZSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNHB4IDA7XG59XG4udGFibGUtem9uZSAudGl0bGUtYm94ID4gZGl2Om5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVudC1ib3gge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG4uY29udGVudC1ib3ggLmNvbnRlbnQtaXRlbSB7XG4gIHBhZGRpbmc6IDIwcHggNHB4O1xufVxuLmNvbnRlbnQtYm94IC5uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtYm94IC5uYW1lIGltZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGVudC1ib3ggLnNjb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59IiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xyXG4kY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbi8vIOa3uueBsFxyXG4kY29sb3ItbGlnaHQtZ3JheTogI0JEQkRCRDtcclxuXHJcbi8vIOS4u+imgeiJslxyXG4kcHJpbWFyeS1jb2xvcjogI0ZGN0MwMjtcclxuLy8g5Li76KaB6Imy6K6K5b2iXHJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICNGRkY4RjI7XHJcbi8vIOasoeimgeiJslxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzE2RTAwO1xyXG4vLyDmrKHopoHoibLororlvaJcclxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZTZmM2Y3O1xyXG4vLyDnrKzkuInoibJcclxuJHRoaXJkLWNvbG9yOiAjZjMyMDJlO1xyXG4vLyDnrKzkuInoibLororlvaJcclxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNlZWQ3ZWQ7XHJcbi8vIGRhbmdlclxyXG4kZGFuZ2VyLWNvbG9yOiAjRTczRDRBO1xyXG5cclxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xyXG4kZm9udC1zejogKFxyXG4gIHhsOiAzMHB4LFxyXG4gIGxnOiAxOHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIHhzOiAxMnB4LFxyXG4pO1xyXG5cclxuJGZvbnQtd2VpZ2h0OiAoXHJcbiAgZmF0dHk6IDYwMCxcclxuICBub3JtYWw6IG5vcm1hbCxcclxuKTtcclxuXHJcbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cclxuLyogYmFzZSBidG4gc3RhcnQgKi9cclxuJGJ0bjogKFxyXG4gIGJvcmRlci1yYWRpdXM6IDdweCxcclxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcclxuKTtcclxuJGJ0bi1oZWlnaHQ6IChcclxuICBsZzogNDBweCxcclxuICBtZDogMzVweCxcclxuICBzbTogMzBweCxcclxuKTtcclxuJGJ0bi13aWR0aDogKFxyXG4gIHhsOiAyMDBweCxcclxuICBsZzogMTUwcHgsXHJcbiAgbWQ6IDEyMHB4LFxyXG4gIHNtOiA5MHB4LFxyXG4gIHhzOiA2MHB4LFxyXG4pO1xyXG4vKiBiYXNlIGJ0biBlbmQgKi9cclxuXHJcbi8qKiBiYXNlIGNhcmQgc3RhcnQqL1xyXG4kYmFzZS1jYXJkOiAoXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxyXG4gIGJveC1zaGFkb3c6IG5vbmUsXHJcbiAgcGFkZGluZzogMCxcclxuICBib3JkZXI6IDAsXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4LFxyXG4pO1xyXG5cclxuJGJhc2UtY2FyZC1oZWFkZXI6IChcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIsXHJcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZyksXHJcbiAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCBmYXR0eSksXHJcbiAgcGFkZGluZzogMCAxNXB4LFxyXG4pO1xyXG5cclxuJGJhc2UtY2FyZC1jb250ZW50OiAoXHJcbiAgcGFkZGluZzogMTBweCAxNXB4LFxyXG4pO1xyXG4vKiogYmFzZSBjYXJkIGVuZCovXHJcblxyXG4vKiBiYXNlIHRhYmxlIHN0YXJ0ICovXHJcbiRiYXNlLXRhYmxlOiAoXHJcbiAgLy8gaG92ZXIg6aGP6ImyXHJcbiAgaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1saWdodC1ncmF5LCAxNSUpLFxyXG4gIC8vIOmWk+malOiJslxyXG4gIGV2ZW4tY29sLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcclxuICAvLyDlnJPop5JcclxuICByYWRpdXM6IDdweCxcclxuICAvLyDpmbDlvbFcclxuICBzaGFkb3c6IDFweCAycHggNHB4ICNkNWQ1ZDUsXHJcbiAgLy8g6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpRcclxuICBwYWRkaW5nOiA0cHggOHB4LFxyXG4gIC8vIOaJi+apn+eJiOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqU77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcclxuICBtby1wYWRkaW5nOiAxMHB4IDhweCxcclxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXHJcbiAgYnJlYWstcG9pbnQ6IDk5MXB4LFxyXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxyXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDFweFxyXG4pO1xyXG5cclxuLyogYmFzZSB0YWIgc3RhcnQgKi9cclxuJGJhc2UtdGFiOiAoXHJcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXHJcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcclxuICAvLyB0YWIg57eo5qGGXHJcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxyXG4gIC8vIGNvbnRlbnQg57eo5qGGXHJcbiAgY29udGVudC1ib3JkZXItd2lkdGg6IDEwcHgsXHJcbiAgLy8g5ZyT6KeSXHJcbiAgcmFkaXVzOiA3cHgsXHJcbiAgLy8g5a2X6auU5aSn5bCPXHJcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZylcclxuKTtcclxuLyogYmFzZSB0YWIgZW5kICovXHJcblxyXG4vKiBzbGlkZSBpbWFnZSBzdGFydCAqL1xyXG4kc2xpZGUtaW1hZ2U6IChcclxuICBpbWFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcclxuICBmb2N1cy1ib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvclxyXG4pO1xyXG4vKiBzbGlkZSBpbWFnZSBlbmQgKi9cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'hownus';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UcG3":
/*!************************************************!*\
  !*** ./src/app/cat-view/cat-view.component.ts ***!
  \************************************************/
/*! exports provided: CatViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatViewComponent", function() { return CatViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lottie */ "DPnb");





class CatViewComponent {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.defaultOptions = {
            path: './assets/image/defaultCat.json',
        };
        this.happyOtions = {
            path: './assets/image/FeedCatHappyEat.json',
        };
        this.styles = {
            maxWidth: '500px',
            margin: '0 auto',
        };
        /** 貓幣 */
        this.coin = 50;
    }
    ngOnInit() {
    }
    defaultAnimationCreated(animationItem) {
        animationItem.autoplay = false;
        this.defaultAnimationItem = animationItem;
    }
    happyAnimationCreated(animationItem) {
        animationItem.autoplay = false;
        this.happyAnimationItem = animationItem;
    }
    onDefaultLoopComplete() {
        console.log('default ok');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertNotInAngularZone();
        this.defaultAnimationItem.stop();
    }
    onHappyLoopComplete() {
        console.log('happy ok');
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertNotInAngularZone();
        this.happyAnimationItem.stop();
        jquery__WEBPACK_IMPORTED_MODULE_1__('.cat-feed').fadeIn('3000');
    }
    // updateAnimation(): void {
    //   // ⚠️⚠️ Don't do this!
    //   this.options.assetsPath = 'https://assets5.lottiefiles.com/packages/lf20_zzytykf2.json';
    //   // ✔️✔️ Update `options` in this way
    //   this.options = {
    //     ...this.options, // In case you have other properties that you want to copy
    //     path: 'https://assets5.lottiefiles.com/packages/lf20_zzytykf2.json',
    //   };
    // }
    onFeedClick() {
        // $('#feedModal').show();
    }
    play() {
        // $('#feedModal').hide();
        //  有錢餵貓貓
        if (this.coin > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.cat-feed').fadeOut('3000');
            this.happyAnimationItem.play();
            setTimeout(() => {
                this.coin -= 50;
            }, 3200);
        }
        else {
            // 沒錢餵貓，貓哭哭
            this.defaultAnimationItem.play();
            jquery__WEBPACK_IMPORTED_MODULE_1__('#content').fadeIn('3000');
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#content').fadeOut('3000');
            }, 2000);
        }
        // this.ngZone.runOutsideAngular(() => {
        // });
    }
    /**
     * 點選皇冠進入積分頁
     */
    onCrownClick() {
        this.router.navigate(['cat-ranking']);
    }
}
CatViewComponent.ɵfac = function CatViewComponent_Factory(t) { return new (t || CatViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CatViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatViewComponent, selectors: [["app-cat-view"]], decls: 23, vars: 8, consts: [[1, "main-view"], [1, "p-2", "d-flex", "align-items-center"], ["src", "./assets/image/cat_coin50.png", "width", "210", "alt", "", 3, "hidden"], ["src", "./assets/image/cat_coin0.png", "width", "210", "alt", "", 3, "hidden"], [1, "ms-auto", 3, "click"], ["src", "./assets/image/crown.png", "width", "100", "alt", ""], [1, "default-cat", 3, "hidden"], ["width", "250px", 3, "options", "styles", "loopComplete", "animationCreated"], [1, "happy-cat", 3, "hidden"], ["width", "350px", 3, "options", "styles", "loopComplete", "animationCreated"], [1, "cat-feed"], ["data-bs-toggle", "modal", "data-bs-target", "#feedModal"], ["src", "./assets/image/cat_feed.png", "width", "100", "alt", ""], ["id", "content", 1, "content", 2, "text-align", "center", "display", "none"], ["id", "feedModal", "tabindex", "-1", "aria-labelledby", "feedModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "cat-feed-modal"], ["src", "./assets/image/cat_pop.png", "width", "100%", "alt", ""], ["data-bs-dismiss", "modal", 1, "cat-cancel-btn"], ["src", "./assets/image/cat_cancel.png", "width", "100", "alt", ""], ["data-bs-dismiss", "modal", 1, "cat-feed-btn", 3, "click"], ["src", "./assets/image/cat_feed.png", "width", "105", "alt", ""]], template: function CatViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatViewComponent_Template_a_click_4_listener() { return ctx.onCrownClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-lottie", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loopComplete", function CatViewComponent_Template_ng_lottie_loopComplete_7_listener() { return ctx.onDefaultLoopComplete(); })("animationCreated", function CatViewComponent_Template_ng_lottie_animationCreated_7_listener($event) { return ctx.defaultAnimationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-lottie", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loopComplete", function CatViewComponent_Template_ng_lottie_loopComplete_9_listener() { return ctx.onHappyLoopComplete(); })("animationCreated", function CatViewComponent_Template_ng_lottie_animationCreated_9_listener($event) { return ctx.happyAnimationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u60A8\u7684\u9EDE\u6578\u4E0D\u5920 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatViewComponent_Template_a_click_21_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.defaultOptions)("styles", ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.coin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.happyOtions)("styles", ctx.styles);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_3__["LottieComponent"]], styles: [".main-view[_ngcontent-%COMP%] {\n  height: calc(100% - 40px);\n  background-image: url('cat_room.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  position: relative;\n  overflow: hidden;\n}\n\n.default-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.happy-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -91px;\n  right: -42px;\n}\n\n.cat-feed[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n\n.content[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 26px;\n  \n  z-index: 999;\n  color: #ff7c02;\n  position: absolute;\n  width: 100%;\n  background-color: white;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n}\n\n.cat-feed-modal[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cat-feed-modal[_ngcontent-%COMP%]   .cat-cancel-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 20%;\n}\n\n.cat-feed-modal[_ngcontent-%COMP%]   .cat-feed-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -6px;\n  right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUlBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoiY2F0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi12aWV3IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9jYXRfcm9vbS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRlZmF1bHQtY2F0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGFwcHktY2F0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtOTFweDtcclxuICByaWdodDogLTQycHg7XHJcbn1cclxuXHJcbi5jYXQtZmVlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgLyogb3IgMTUzJSAqL1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBjb2xvcjogI2ZmN2MwMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gdG9wOjglO1xyXG4gIC8vIGxlZnQ6IDc1JTtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmNhdC1mZWVkLW1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmNhdC1jYW5jZWwtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDIwJTtcclxuICB9XHJcblxyXG4gIC5jYXQtZmVlZC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNnB4O1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, playerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _flow_flow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flow/flow.component */ "kdT/");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cat-view/cat-view.component */ "UcG3");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bonus/bonus.component */ "yZYB");
/* harmony import */ var _bonus_bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bonus/bonus-detail/bonus-detail.component */ "xm/0");
/* harmony import */ var _cat_view_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cat-view/ranking/ranking.component */ "D0pF");
/* harmony import */ var _bonus_bonus_info_bonus_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bonus/bonus-info/bonus-info.component */ "Pl3e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");





















Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["zh_TW"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_13__["LottieModule"].forRoot({ player: playerFactory })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _flow_flow_component__WEBPACK_IMPORTED_MODULE_10__["FlowComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_12__["CatViewComponent"],
        _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_14__["BonusComponent"],
        _bonus_bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_15__["BonusDetailComponent"],
        _cat_view_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_16__["RankingComponent"],
        _bonus_bonus_info_bonus_info_component__WEBPACK_IMPORTED_MODULE_17__["BonusInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_13__["LottieModule"]] }); })();
function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(null, /*! lottie-web */ "lPHp", 7));
}


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function HeaderComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.prePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_0_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.route != "/bonus");
} }
class HeaderComponent {
    constructor(location, router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.header = "true";
        router.events.subscribe((val) => {
            if (location.path() != '') {
                console.log(location.path());
                this.route = location.path();
            }
            ;
        });
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let h = params['header'];
            if (h != null) {
                this.header = h;
            }
        });
    }
    prePage() {
        history.go(-1);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 1, consts: [["style", "height: 40px;", "class", " d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "align-items-center", 2, "height", "40px"], [4, "ngIf"], ["src", "./assets/image/weblogo.png", "width", "120px", 1, "m-auto"], [3, "click"], ["src", "./assets/image/icon/back.png", "width", "20", "alt", "", 1, "p-1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header == "true");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "kdT/":
/*!****************************************!*\
  !*** ./src/app/flow/flow.component.ts ***!
  \****************************************/
/*! exports provided: FlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowComponent", function() { return FlowComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "8OJ3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_mercue_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/mercue-request.service */ "5917");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FlowComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "button", 38);
} if (rf & 2) {
    const j_r7 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#carouselProducts" + i_r2)("data-bs-slide-to", j_r7)("aria-label", "Slide " + j_r7);
} }
function FlowComponent_div_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r11.videoPath + file_r9.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function FlowComponent_div_1_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "video", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const j_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "video" + i_r2 + j_r10);
} }
const _c0 = function (a0) { return { active: a0 }; };
function FlowComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FlowComponent_div_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FlowComponent_div_1_div_5_ng_container_2_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, j_r10 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", file_r9.type == "photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", file_r9.type == "video");
} }
function FlowComponent_div_1_section_41_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" #", tag_r17, " ");
} }
function FlowComponent_div_1_section_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FlowComponent_div_1_section_41_span_2_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", slide_r1.item == null ? null : slide_r1.item.tags);
} }
function FlowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FlowComponent_div_1_button_3_Template, 1, 3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FlowComponent_div_1_div_5_Template, 3, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u89BA\u5F97 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, FlowComponent_div_1_section_41_Template, 3, 1, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "section", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u516C\u958B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\u8490\u85CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", "carouselProducts" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", slide_r1.item == null ? null : slide_r1.item.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", slide_r1.item == null ? null : slide_r1.item.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#carouselProducts" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#carouselProducts" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.videoPath + (slide_r1.user == null ? null : slide_r1.user.photo), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.user == null ? null : slide_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.item == null ? null : slide_r1.item.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u71B1\u5EA6:", slide_r1.item == null ? null : slide_r1.item.pointHot, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.item == null ? null : slide_r1.item.countBuy, "\u4EBA\u8CB7\u904E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.item == null ? null : slide_r1.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.item == null ? null : slide_r1.item.brief);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", slide_r1.item == null ? null : slide_r1.item.tags == null ? null : slide_r1.item.tags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", slide_r1.item == null ? null : slide_r1.item.updatedAt, " \u767C\u5E03");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.item == null ? null : slide_r1.item.countAgree, "\u8B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", slide_r1.countComment, "\u5247\u7559\u8A00");
} }
class FlowComponent {
    constructor(mercueRequest, elementRef) {
        this.mercueRequest = mercueRequest;
        this.elementRef = elementRef;
        this.flowData = [];
        this.videoPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].MEDIA_IP;
        this.customOptions = {
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
        };
        this.videoJsConfigObj = {
            preload: 'metadata',
            controls: true,
            autoplay: true,
            overrideNative: true,
            techOrder: ['html5', 'flash'],
            html5: {
                nativeVideoTracks: false,
                nativeAudioTracks: false,
                nativeTextTracks: false,
                hls: {
                    withCredentials: false,
                    overrideNative: true,
                    debug: true
                }
            }
        };
        this.currentPage = 1;
        this.videos = document.getElementsByTagName('video');
    }
    onWindowScroll(event) {
        console.log('scrolling...');
        // this.scrollToPlayVideo();
        this.scrollBottomToLoadMore();
    }
    ngOnInit() {
        var id = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].MEDIA_IP;
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => {
            return this.getList(this.currentPage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(array => this.flowData = this.flowData.concat(array))).subscribe(() => {
            setTimeout(() => {
                console.log(this.flowData);
                for (let i = 0; i < this.flowData.length; i++) {
                    for (let j = 0; j < this.flowData[i].item.items.length; j++) {
                        if (this.flowData[i].item.items[j].type === 'video') {
                            this.initVideoElement(i, j);
                        }
                    }
                }
                // this.flowData.forEach((data, i) => {
                //   data.item?.items?.forEach((item, j) => {
                //     if (item.type === 'video') {
                //       const options: VideoJsPlayerOptions = {
                //         sources: [{ src: this.videoPath + item.video }],
                //         // loop: true,
                //         muted: true,
                //         controls: true,
                //         autoplay: false
                //       };
                //       const player = videojs('video' + i + j, options);
                //       player.playsinline(true);
                //       player.on('touchstart', (e) => {
                //         if (e.target.nodeName === 'VIDEO') {
                //           if (player.paused()) {
                //             player.play();
                //           } else {
                //             player.pause();
                //           }
                //         }
                //       })
                //     }
                //   })
                // })
            });
        });
    }
    getList(page) {
        const dataF = {
            '_page': page,
            '_orderby': 'new',
            'id': null,
            'userID': null,
            'categoryIDs': [],
            'collectFromArticleTypeID': null,
            'content': '',
            'hashtags': [],
            'excludeIDs': [],
        };
        return this.mercueRequest.request('post', dataF, '/api/v3/article/getListing').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.currentPage++;
            return res.data.items;
        }));
    }
    initVideoElement(i, j) {
        const options = {
            sources: [{ src: this.videoPath + this.flowData[i].item.items[j].video }],
            // loop: true,
            muted: true,
            controls: true,
            autoplay: true
        };
        const player = Object(video_js__WEBPACK_IMPORTED_MODULE_2__["default"])('video' + i + j, options);
        player.playsinline(true);
        player.on('touchstart', (e) => {
            if (e.target.nodeName === 'VIDEO') {
                if (player.paused()) {
                    player.play();
                }
                else {
                    player.pause();
                }
            }
        });
    }
    scrollToPlayVideo() {
        var fraction = 0.8; // Play when 80% of the player is visible.
        for (var i = 0; i < this.videos.length; i++) {
            const video = this.videos[i];
            // console.log(video);
            let x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;
            // console.log(x, y, w, h, r, b);
            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
            // console.log(visibleX, visibleY);
            visible = visibleX * visibleY / (w * h);
            // console.log(visible);
            if (visible > fraction) {
                video.play();
            }
            else {
                video.pause();
            }
        }
    }
    scrollBottomToLoadMore() {
        var D = document;
        const getDocHeight = Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
        if (window.scrollY + window.innerHeight === getDocHeight) {
            this.getList(this.currentPage).subscribe(array => {
                this.flowData = this.flowData.concat(array);
                const rawFlowData = this.flowData.slice(Math.max(this.flowData.length - 10, 1));
                for (let i = this.flowData.length - 10; i < this.flowData.length; i++) {
                    for (let j = 0; j < this.flowData[i].item.items.length; j++) {
                        if (this.flowData[i].item.items[j].type === 'video') {
                            setTimeout(() => {
                                this.initVideoElement(i, j);
                            }, 3000);
                        }
                    }
                }
            });
        }
    }
}
FlowComponent.ɵfac = function FlowComponent_Factory(t) { return new (t || FlowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_mercue_request_service__WEBPACK_IMPORTED_MODULE_5__["MercueRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
FlowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FlowComponent, selectors: [["app-flow"]], hostBindings: function FlowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function FlowComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 1, consts: [[1, "inner-container", "mt"], [4, "ngFor", "ngForOf"], ["data-bs-ride", "carousel", "data-bs-interval", "false", 1, "carousel", "slide", 3, "id"], [1, "carousel-indicators"], ["type", "button", "class", "active", "aria-current", "true", "class", "active", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", "style", "height: 400px;", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "p-1", 2, "display", "flex", "align-items", "center"], ["width", "32px", 1, "user-img", "m-1", 3, "src"], [1, "user-name", "ms-2"], ["src", "./assets/image/icon/start.png", "width", "18px", 1, "pb-1"], [2, "font-weight", "bold"], [1, "ms-auto", "pe-3", "text-hot"], [1, "p-2"], [1, "p-3", "d-flex", "align-items-center", 2, "background-color", "#F6F6F6", "border-radius", "5px"], [1, "text-buy"], ["src", "./assets/image/icon/start.png", "width", "12px"], [1, "text-title"], [1, "text-content", "mb-0"], ["class", "p-2", 4, "ngIf"], [1, "p-2", "text-gray"], [1, "p-1"], [1, "p-2", "text-like"], [1, "row", "g-0"], [1, "col-4"], ["src", "./assets/image/icon/like_unactive.png", "width", "24px"], ["src", "./assets/image/icon/message.png", "width", "24px"], ["src", "./assets/image/icon/bookmark_unactive.png", "width", "24px"], [1, "p-2", "mb-2"], [1, "d-flex", "align-items-center"], ["src", "./assets/image/icon/profile.png", "height", "32px", 1, "me-2"], ["src", "./assets/image/userinput.png", "height", "35px"], ["src", "./assets//image/icon/send_black.png", "height", "25px", 1, "ms-auto", "me-2"], ["type", "button", "aria-current", "true", 1, "active"], [1, "carousel-item", 2, "height", "400px", 3, "ngClass"], [4, "ngIf"], ["alt", "", 1, "d-flex", "m-auto", 2, "max-width", "100%", "max-height", "100%", 3, "src"], ["data-setup", "", 1, "video-js", "vjs-big-play-centered", 2, "width", "100%", "height", "100%", "background", "white", 3, "id"], ["src", "./assets/image/icon/hashtag.png", "width", "20px", "height", "20px"], ["class", "tag-item p-1 m-1 ", 4, "ngFor", "ngForOf"], [1, "tag-item", "p-1", "m-1"]], template: function FlowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FlowComponent_div_1_Template, 65, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.flowData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".inner-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 18px;\n  \n  letter-spacing: 0.2px;\n  \n  color: #333333;\n}\n\n.user-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.text-hot[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  \n  \n  color: #828282;\n}\n\n.text-buy[_ngcontent-%COMP%] {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-size: 17px;\n  line-height: 9px;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 26px;\n  color: #ff7c02;\n}\n\n.text-content[_ngcontent-%COMP%] {\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 26px;\n  \n  color: #333333;\n}\n\n.tag-item[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  border-radius: 6.81818px;\n  font-family: SF Pro Display;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  \n  text-align: center;\n  letter-spacing: 0.227273px;\n  text-transform: uppercase;\n  color: #060606;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.4px;\n  color: #bdbdbd;\n}\n\n.text-like[_ngcontent-%COMP%] {\n  font-family: Noto Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14.5px;\n  line-height: 24px;\n  letter-spacing: -0.263636px;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEscUJBQUE7RUFFQSxXQUFBO0VBRUEsY0FBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBRUEsY0FBQTtBQUZKOztBQUlBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFFQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBQU5KOztBQVNBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQVJKOztBQVVBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLDJCQUFBO0VBRUEsY0FBQTtBQVZBIiwiZmlsZSI6ImZsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnVzZXItbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwNiUgKi9cclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcblxyXG4gICAgLyogR3JheSAxICovXHJcblxyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLnVzZXItaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRleHQtaG90IHtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAvKiBvciAxMjklICovXHJcblxyXG4gICAgLyogR3JheSAzICovXHJcblxyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuLnRleHQtYnV5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gRGlzcGxheTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogOXB4O1xyXG59XHJcblxyXG4udGV4dC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTm90byBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgY29sb3I6ICNmZjdjMDI7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgLyogb3IgMTUzJSAqL1xyXG5cclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4udGFnLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYuODE4MThweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogU0YgUHJvIERpc3BsYXk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgLyogb3IgOTclICovXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjI3MjczcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIGNvbG9yOiAjMDYwNjA2O1xyXG59XHJcblxyXG4udGV4dC1ncmF5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAvKiBvciAxNTclICovXHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG5cclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG59XHJcbi50ZXh0LWxpa2V7XHJcblxyXG5mb250LWZhbWlseTogTm90byBTYW5zO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTQuNXB4O1xyXG5saW5lLWhlaWdodDogMjRweDtcclxuXHJcbmxldHRlci1zcGFjaW5nOiAtMC4yNjM2MzZweDtcclxuXHJcbmNvbG9yOiAjNjY2NjY2O1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-view/cat-view.component */ "UcG3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_flow_flow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/flow/flow.component */ "kdT/");
/* harmony import */ var _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonus/bonus.component */ "yZYB");
/* harmony import */ var _bonus_bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bonus/bonus-detail/bonus-detail.component */ "xm/0");
/* harmony import */ var _cat_view_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cat-view/ranking/ranking.component */ "D0pF");
/* harmony import */ var _bonus_bonus_info_bonus_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bonus/bonus-info/bonus-info.component */ "Pl3e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flow'
    },
    {
        path: 'flow',
        component: src_app_flow_flow_component__WEBPACK_IMPORTED_MODULE_2__["FlowComponent"]
    },
    {
        path: 'cat',
        component: _cat_view_cat_view_component__WEBPACK_IMPORTED_MODULE_0__["CatViewComponent"]
    },
    {
        path: 'cat-ranking',
        component: _cat_view_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_5__["RankingComponent"]
    },
    {
        path: 'bonus',
        component: _bonus_bonus_component__WEBPACK_IMPORTED_MODULE_3__["BonusComponent"]
    },
    {
        path: 'bonus-detail',
        component: _bonus_bonus_detail_bonus_detail_component__WEBPACK_IMPORTED_MODULE_4__["BonusDetailComponent"]
    },
    {
        path: 'bonus-info',
        component: _bonus_bonus_info_bonus_info_component__WEBPACK_IMPORTED_MODULE_6__["BonusInfoComponent"]
    },
    {
        path: '**',
        redirectTo: 'flow'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "xm/0":
/*!**************************************************************!*\
  !*** ./src/app/bonus/bonus-detail/bonus-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: BonusDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusDetailComponent", function() { return BonusDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class BonusDetailComponent {
    constructor(router, mLocation) {
        var _a;
        this.router = router;
        this.mLocation = mLocation;
        const state = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        this.bonusItem = state;
        if (!this.bonusItem) {
            this.mLocation.back();
        }
    }
    ngOnInit() {
        console.log(this.bonusItem);
    }
    onExchangeClick() {
    }
}
BonusDetailComponent.ɵfac = function BonusDetailComponent_Factory(t) { return new (t || BonusDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
BonusDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusDetailComponent, selectors: [["app-bonus-detail"]], decls: 27, vars: 3, consts: [["width", "100%", "alt", "", 3, "src"], [1, "bg-orange"], [1, "text-center"], [1, "text-primary", "mb-0", 2, "font-size", "20px"], [1, "text-gray", "mb-0", 2, "color", "#686868"], [1, "product-title"], [1, "px-3"], [1, "sub-title"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-outline-primary", "my-3", "w-100", 3, "click"]], template: function BonusDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uFF08\u76EE\u524D\u64C1\u6709100\u7A4D\u5206\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5546\u54C1\u4ECB\u7D39/\u7A4D\u5206\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5546\u54C1\u5361\u9762\u503C\u4E4B\u91D1\u984D\u7121\u4F7F\u7528\u671F\u9650\uFF0C\u53EF\u5206\u6B21\u4F7F\u7528\u81F3\u9762\u984D\u514C\u63DB\u5B8C\u7562\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5546\u54C1\u5361\u9650\u4F7F\u7528\u65BC\u53F0\u7063\u5730\u5340\u958B\u7ACB\u7D71\u4E00\u8D85\u5546(\u80A1)\u767C\u7968\u4E4B7-ELEVEN\u9580\u5E02\u514C\u63DB\u5546\u54C1\u53CA\u67E5\u8A62\u9918\u984D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u53EF\u652F\u4ED8\u958B\u7ACB\u7D71\u4E00\u767C\u7968\u4E4B\u5546\u54C1/\u670D\u52D9\uFF1B\u975E\u958B\u7ACB\u7D71\u4E00\u8D85\u5546(\u80A1)\u767C\u7968\u4E4B7-ELEVEN\u9580\u5E02(\u7570\u696D\u9580\u5E02\u53CA\u95DC\u4FC2\u4F01\u696D)\u6055\u7121\u6CD5\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u6CE8\u610F\u4E8B\u9805");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u53E6\u56E0\u6CD5\u4EE4\u9650\u5236\uFF0C\u5546\u54C1\u5361\u76EE\u524D\u66AB\u7121\u6CD5\u652F\u4ED8\u4EE3\u6536\u3001\u4EE3\u552E\u7B49\u975E\u958B\u7ACB\u7D71\u4E00\u8D85\u5546(\u80A1)\u767C\u7968\u4E4B\u6D88\u8CBB\u53CA\u4F9D\u64DA\u83F8\u5BB3\u9632\u5236\u6CD5\u7B2C9\u689D\u7B2C3\u6B3E\u898F\u5B9A\uFF0C\u6055\u65BC\u672C\u516C\u53F8\u9580\u5E02\u7121\u6CD5\u4F7F\u7528\u5546\u54C1\u5361\u8CFC\u8CB7\u83F8\u54C1\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BonusDetailComponent_Template_button_click_25_listener() { return ctx.onExchangeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u78BA\u5B9A\u514C\u63DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bonusItem.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u4F7F\u7528", ctx.bonusItem.score, "\u7A4D\u5206");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bonusItem.title);
    } }, styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.back[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  position: relative;\n}\n.back[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #FFF8F2;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-title[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 22px;\n  text-align: center;\n  font-weight: bold;\n}\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #C16E00;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib251cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcY3VzdG9tLXNldHRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBQXFCQSxZQUFBO0FBY0EsWUFBQTtBQUNBLG1CQUFBO0FBaUJBLGlCQUFBO0FBRUEsb0JBQUE7QUFtQkEsa0JBQUE7QUFFQSxxQkFBQTtBQW9CQSxtQkFBQTtBQWFBLGlCQUFBO0FBRUEsc0JBQUE7QUFLQSxvQkFBQTtBRGxIQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBWUo7QUFWSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQVlSO0FBUkE7RUFDSSx5QkNQb0I7RURRcEIsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBV0o7QUFSQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVdKO0FBUkE7RUFDSSxlQUFBO0VBQ0EsY0NyQmM7RURzQmQsaUJBQUE7QUFXSiIsImZpbGUiOiJib251cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xuLyogYmFzZSBidG4gZW5kICovXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbi8qKiBiYXNlIGNhcmQgZW5kKi9cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4vKiBiYXNlIHRhYiBlbmQgKi9cbi8qIHNsaWRlIGltYWdlIHN0YXJ0ICovXG4vKiBzbGlkZSBpbWFnZSBlbmQgKi9cbi5iYWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFjayAuYmFjay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOEYyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZHVjdC10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNDMTZFMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4vLyDmt7rngbBcclxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNCREJEQkQ7XHJcblxyXG4vLyDkuLvopoHoibJcclxuJHByaW1hcnktY29sb3I6ICNGRjdDMDI7XHJcbi8vIOS4u+imgeiJsuiuiuW9olxyXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjRkZGOEYyO1xyXG4vLyDmrKHopoHoibJcclxuJHNlY29uZGFyeS1jb2xvcjogI0MxNkUwMDtcclxuLy8g5qyh6KaB6Imy6K6K5b2iXHJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2U2ZjNmNztcclxuLy8g56ys5LiJ6ImyXHJcbiR0aGlyZC1jb2xvcjogI2YzMjAyZTtcclxuLy8g56ys5LiJ6Imy6K6K5b2iXHJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xyXG4vLyBkYW5nZXJcclxuJGRhbmdlci1jb2xvcjogI0U3M0Q0QTtcclxuXHJcbi8qKiDln7rnpI7lhYPku7boqK3lrpogKi9cclxuJGZvbnQtc3o6IChcclxuICB4bDogMzBweCxcclxuICBsZzogMThweCxcclxuICBtZDogMTZweCxcclxuICBzbTogMTRweCxcclxuICB4czogMTJweCxcclxuKTtcclxuXHJcbiRmb250LXdlaWdodDogKFxyXG4gIGZhdHR5OiA2MDAsXHJcbiAgbm9ybWFsOiBub3JtYWwsXHJcbik7XHJcblxyXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXHJcbi8qIGJhc2UgYnRuIHN0YXJ0ICovXHJcbiRidG46IChcclxuICBib3JkZXItcmFkaXVzOiA3cHgsXHJcbiAgc2hhZG93OiAxcHggMXB4IDJweCAwIHJnYmEoMjEsIDI4LCA0MiwgMC4xNyksXHJcbik7XHJcbiRidG4taGVpZ2h0OiAoXHJcbiAgbGc6IDQwcHgsXHJcbiAgbWQ6IDM1cHgsXHJcbiAgc206IDMwcHgsXHJcbik7XHJcbiRidG4td2lkdGg6IChcclxuICB4bDogMjAwcHgsXHJcbiAgbGc6IDE1MHB4LFxyXG4gIG1kOiAxMjBweCxcclxuICBzbTogOTBweCxcclxuICB4czogNjBweCxcclxuKTtcclxuLyogYmFzZSBidG4gZW5kICovXHJcblxyXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cclxuJGJhc2UtY2FyZDogKFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZSxcclxuICBib3gtc2hhZG93OiBub25lLFxyXG4gIHBhZGRpbmc6IDAsXHJcbiAgYm9yZGVyOiAwLFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweCxcclxuKTtcclxuXHJcbiRiYXNlLWNhcmQtaGVhZGVyOiAoXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyLFxyXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpLFxyXG4gIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgZmF0dHkpLFxyXG4gIHBhZGRpbmc6IDAgMTVweCxcclxuKTtcclxuXHJcbiRiYXNlLWNhcmQtY29udGVudDogKFxyXG4gIHBhZGRpbmc6IDEwcHggMTVweCxcclxuKTtcclxuLyoqIGJhc2UgY2FyZCBlbmQqL1xyXG5cclxuLyogYmFzZSB0YWJsZSBzdGFydCAqL1xyXG4kYmFzZS10YWJsZTogKFxyXG4gIC8vIGhvdmVyIOmhj+iJslxyXG4gIGhvdmVyLWJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3ItbGlnaHQtZ3JheSwgMTUlKSxcclxuICAvLyDplpPpmpToibJcclxuICBldmVuLWNvbC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXHJcbiAgLy8g5ZyT6KeSXHJcbiAgcmFkaXVzOiA3cHgsXHJcbiAgLy8g6Zmw5b2xXHJcbiAgc2hhZG93OiAxcHggMnB4IDRweCAjZDVkNWQ1LFxyXG4gIC8vIOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqUXHJcbiAgcGFkZGluZzogNHB4IDhweCxcclxuICAvLyDmiYvmqZ/niYjooajpoK3jgIHlhaflrrnvvIh0aOOAgXRk77yJIOmWk+malO+8iGZsZXggdGFibGUg5bCI55So77yJXHJcbiAgbW8tcGFkZGluZzogMTBweCA4cHgsXHJcbiAgLy8g5bm+cHjku6XkuIvkvb/nlKjmiYvmqZ/niYjvvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxyXG4gIGJyZWFrLXBvaW50OiA5OTFweCxcclxuICAvLyDmrITkvY3kuIvmlrnnmoRib3JkZXItYm90dG9t77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcclxuICBtby1ib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcclxuKTtcclxuXHJcbi8qIGJhc2UgdGFiIHN0YXJ0ICovXHJcbiRiYXNlLXRhYjogKFxyXG4gIC8vIOmhj+iJsihtZXJjLXRhYiDmnKrlgrPlhaUgbWVyY1R5cGUg5pmC5pyJ5pWIKVxyXG4gIHRhYi1jb2xvcjogJHByaW1hcnktY29sb3IsXHJcbiAgLy8gdGFiIOe3qOahhlxyXG4gIHRhYi1ib3JkZXItd2lkdGg6IDFweCxcclxuICAvLyBjb250ZW50IOe3qOahhlxyXG4gIGNvbnRlbnQtYm9yZGVyLXdpZHRoOiAxMHB4LFxyXG4gIC8vIOWck+inklxyXG4gIHJhZGl1czogN3B4LFxyXG4gIC8vIOWtl+mrlOWkp+Wwj1xyXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zeiwgbGcpXHJcbik7XHJcbi8qIGJhc2UgdGFiIGVuZCAqL1xyXG5cclxuLyogc2xpZGUgaW1hZ2Ugc3RhcnQgKi9cclxuJHNsaWRlLWltYWdlOiAoXHJcbiAgaW1hZ2UtYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyYXksXHJcbiAgZm9jdXMtYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3JcclxuKTtcclxuLyogc2xpZGUgaW1hZ2UgZW5kICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ "yZYB":
/*!******************************************!*\
  !*** ./src/app/bonus/bonus.component.ts ***!
  \******************************************/
/*! exports provided: BonusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusComponent", function() { return BonusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BonusComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bonusItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonusItem_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonusItem_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", bonusItem_r2.score, "");
} }
function BonusComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BonusComponent_div_24_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onExchangeClick(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u514C\u63DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u4F7F\u7528", item_r3.score, "\u7A4D\u5206");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BonusComponent {
    constructor(router) {
        this.router = router;
        this.defaultOptions = {
            path: './assets/image/defaultCat.json',
        };
        this.styles = {
            maxWidth: '500px',
            margin: '0 auto',
        };
        this.bonusHistoryList = [
            {
                title: '發佈貼文',
                date: '2021-12-31 12:12:15',
                score: 30
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            },
            {
                title: '回應貼文',
                date: '2021-12-31 12:12:15',
                score: 10
            }
        ];
        this.bonusList = [
            {
                title: '可立雅柔淨抽取式衛生紙(130抽x12包)',
                score: 50,
                imageUrl: 'https://www.pxmart.com.tw/Api/Images/Goods/76110002.png'
            },
            {
                title: '得意的一天100%純葵花油(3L)',
                score: 50,
                imageUrl: 'https://www.pxmart.com.tw/Api/Images/Goods/20120686.png'
            },
            {
                title: '桂格蟲草人蔘滋補液(60mlx12瓶)',
                score: 50,
                imageUrl: 'https://www.pxmart.com.tw/Api/Images/Goods/11530006.png'
            },
            {
                title: '桂格冬蟲夏草活靈芝珍貴滋補液(60mlx12瓶)',
                score: 50,
                imageUrl: 'https://www.pxmart.com.tw/Api/Images/Goods/11530001.png'
            },
            {
                title: '一匙靈Attack抗菌EX超濃縮洗衣粉(1.8kg)',
                score: 50,
                imageUrl: 'https://www.pxmart.com.tw/Api/Images/Goods/71018315.png'
            },
            {
                title: '一匙靈亮彩超濃縮洗衣粉(1.9kg)',
                score: 50,
                imageUrl: 'https://www.pxmart.com.tw/Api/Images/Goods/71120080.png'
            },
            {
                title: '7-11$100元禮卷',
                score: 50,
                imageUrl: './assets/image/711_bonus.jpg'
            },
        ];
    }
    ngOnInit() {
    }
    onExchangeClick(item) {
        this.router.navigate(['bonus-detail'], { state: item });
    }
    onBonusInfoClick() {
        this.router.navigate(['bonus-info']);
    }
}
BonusComponent.ɵfac = function BonusComponent_Factory(t) { return new (t || BonusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BonusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusComponent, selectors: [["app-bonus"]], decls: 25, vars: 5, consts: [[1, "bonus-history"], [1, "row", "g-0", "h-100"], [1, "col-5", "p-3", "d-flex", "justify-content-center", "align-items-center", "text-center"], ["width", "120%", 3, "options", "styles"], [3, "routerLink"], ["src", "./assets/image/cat_coin50.png", "width", "120", "alt", "", 1, "mb-2"], ["src", "./assets/image/cat_play.png", "width", "100", "alt", ""], [1, "col-7", "p-3", "h-100"], [1, "base-card", "h-100"], [1, "base-card-header"], [1, "base-card-content"], ["class", "bonus-item", 4, "ngFor", "ngForOf"], [1, "bonus-list"], [1, "bonus-list-title"], [1, "mb-0"], [1, "ms-auto"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "text-white", 3, "click"], ["class", "bonus-list-item row g-0", 4, "ngFor", "ngForOf"], [1, "bonus-item"], [1, "mb-0", "bonus-date"], [1, "bonus-count"], [1, "bonus-list-item", "row", "g-0"], [1, "col-5", "d-flex", "align-items-center", "justify-content-center"], [1, "mb-0", 2, "color", "#C16E00"], [1, "col-3"], ["width", "100%", "alt", "", 3, "src"], [1, "col-4", "d-flex", "align-items-center", "justify-content-center"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "width", "80px", 3, "click"]], template: function BonusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ng-lottie", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u7A4D\u5206\u7D00\u9304 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BonusComponent_div_15_Template, 8, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u514C\u63DB\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BonusComponent_Template_button_click_21_listener() { return ctx.onBonusInfoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u5982\u4F55\u7372\u5F97\u7A4D\u5206");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BonusComponent_div_24_Template, 12, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.defaultOptions)("styles", ctx.styles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bonusHistoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bonusList);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_2__["LottieComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n.base-card[_ngcontent-%COMP%]   .base-card-header[_ngcontent-%COMP%] {\n  background-color: #FF7C02;\n  height: 30px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 7px 7px 0 0;\n}\n.base-card[_ngcontent-%COMP%]   .base-card-content[_ngcontent-%COMP%] {\n  border-radius: 0 0 7px 7px;\n  background-color: #fff;\n  height: calc(100% - 30px);\n  overflow: auto;\n}\n.bonus-history[_ngcontent-%COMP%] {\n  background-image: url('cat_bg.png');\n  height: 50%;\n}\n.bonus-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  padding: 2px 10px;\n  margin: 0 6px;\n  position: relative;\n}\n.bonus-item[_ngcontent-%COMP%]   .bonus-date[_ngcontent-%COMP%] {\n  color: #BDBDBD;\n}\n.bonus-item[_ngcontent-%COMP%]   .bonus-count[_ngcontent-%COMP%] {\n  color: #FF7C02;\n  font-weight: bold;\n  font-size: 16px;\n  position: absolute;\n  right: 2px;\n  top: 0;\n}\n.bonus-list-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  box-shadow: 1px 1px 2px 0 rgba(21, 28, 42, 0.17);\n}\n.bonus-list-item[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.bonus-list-item[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FFF8F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvbnVzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxjdXN0b20tc2V0dGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FBcUJBLFlBQUE7QUFjQSxZQUFBO0FBQ0EsbUJBQUE7QUFpQkEsaUJBQUE7QUFFQSxvQkFBQTtBQW1CQSxrQkFBQTtBQUVBLHFCQUFBO0FBb0JBLG1CQUFBO0FBYUEsaUJBQUE7QUFFQSxzQkFBQTtBQUtBLG9CQUFBO0FEakhJO0VBQ0kseUJDR1E7RURGUixZQUFBO0VBQ0EsV0NMTTtFRE1OLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFXUjtBQVJJO0VBQ0ksMEJBQUE7RUFDQSxzQkNkTTtFRGVOLHlCQUFBO0VBQ0EsY0FBQTtBQVVSO0FBTkE7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7QUFTSjtBQU5BO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVNKO0FBUEk7RUFDSSxjQzdCVztBRHNDbkI7QUFOSTtFQUNJLGNDOUJRO0VEK0JSLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUFRUjtBQUpBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdEQUFBO0FBT0o7QUFKQTtFQUNJLGFBQUE7QUFPSjtBQUxJO0VBQ0kseUJDbkRnQjtBRDBEeEIiLCJmaWxlIjoiYm9udXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4vKiog5Z+656SO5YWD5Lu26Kit5a6aICovXG4vKiog5bi455So5YWD5Lu26Kit5a6aICovXG4vKiBiYXNlIGJ0biBzdGFydCAqL1xuLyogYmFzZSBidG4gZW5kICovXG4vKiogYmFzZSBjYXJkIHN0YXJ0Ki9cbi8qKiBiYXNlIGNhcmQgZW5kKi9cbi8qIGJhc2UgdGFibGUgc3RhcnQgKi9cbi8qIGJhc2UgdGFiIHN0YXJ0ICovXG4vKiBiYXNlIHRhYiBlbmQgKi9cbi8qIHNsaWRlIGltYWdlIHN0YXJ0ICovXG4vKiBzbGlkZSBpbWFnZSBlbmQgKi9cbi5iYXNlLWNhcmQgLmJhc2UtY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3QzAyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XG59XG4uYmFzZS1jYXJkIC5iYXNlLWNhcmQtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA3cHggN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJvbnVzLWhpc3Rvcnkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvY2F0X2JnLnBuZ1wiKTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5ib251cy1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBtYXJnaW46IDAgNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm9udXMtaXRlbSAuYm9udXMtZGF0ZSB7XG4gIGNvbG9yOiAjQkRCREJEO1xufVxuLmJvbnVzLWl0ZW0gLmJvbnVzLWNvdW50IHtcbiAgY29sb3I6ICNGRjdDMDI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJweDtcbiAgdG9wOiAwO1xufVxuXG4uYm9udXMtbGlzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KTtcbn1cblxuLmJvbnVzLWxpc3QtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uYm9udXMtbGlzdC1pdGVtOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY4RjI7XG59IiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xyXG4kY29sb3Itd2hpdGU6ICNmZmY7XHJcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbi8vIOa3uueBsFxyXG4kY29sb3ItbGlnaHQtZ3JheTogI0JEQkRCRDtcclxuXHJcbi8vIOS4u+imgeiJslxyXG4kcHJpbWFyeS1jb2xvcjogI0ZGN0MwMjtcclxuLy8g5Li76KaB6Imy6K6K5b2iXHJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICNGRkY4RjI7XHJcbi8vIOasoeimgeiJslxyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzE2RTAwO1xyXG4vLyDmrKHopoHoibLororlvaJcclxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjZTZmM2Y3O1xyXG4vLyDnrKzkuInoibJcclxuJHRoaXJkLWNvbG9yOiAjZjMyMDJlO1xyXG4vLyDnrKzkuInoibLororlvaJcclxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNlZWQ3ZWQ7XHJcbi8vIGRhbmdlclxyXG4kZGFuZ2VyLWNvbG9yOiAjRTczRDRBO1xyXG5cclxuLyoqIOWfuuekjuWFg+S7tuioreWumiAqL1xyXG4kZm9udC1zejogKFxyXG4gIHhsOiAzMHB4LFxyXG4gIGxnOiAxOHB4LFxyXG4gIG1kOiAxNnB4LFxyXG4gIHNtOiAxNHB4LFxyXG4gIHhzOiAxMnB4LFxyXG4pO1xyXG5cclxuJGZvbnQtd2VpZ2h0OiAoXHJcbiAgZmF0dHk6IDYwMCxcclxuICBub3JtYWw6IG5vcm1hbCxcclxuKTtcclxuXHJcbi8qKiDluLjnlKjlhYPku7boqK3lrpogKi9cclxuLyogYmFzZSBidG4gc3RhcnQgKi9cclxuJGJ0bjogKFxyXG4gIGJvcmRlci1yYWRpdXM6IDdweCxcclxuICBzaGFkb3c6IDFweCAxcHggMnB4IDAgcmdiYSgyMSwgMjgsIDQyLCAwLjE3KSxcclxuKTtcclxuJGJ0bi1oZWlnaHQ6IChcclxuICBsZzogNDBweCxcclxuICBtZDogMzVweCxcclxuICBzbTogMzBweCxcclxuKTtcclxuJGJ0bi13aWR0aDogKFxyXG4gIHhsOiAyMDBweCxcclxuICBsZzogMTUwcHgsXHJcbiAgbWQ6IDEyMHB4LFxyXG4gIHNtOiA5MHB4LFxyXG4gIHhzOiA2MHB4LFxyXG4pO1xyXG4vKiBiYXNlIGJ0biBlbmQgKi9cclxuXHJcbi8qKiBiYXNlIGNhcmQgc3RhcnQqL1xyXG4kYmFzZS1jYXJkOiAoXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLFxyXG4gIGJveC1zaGFkb3c6IG5vbmUsXHJcbiAgcGFkZGluZzogMCxcclxuICBib3JkZXI6IDAsXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4LFxyXG4pO1xyXG5cclxuJGJhc2UtY2FyZC1oZWFkZXI6IChcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIsXHJcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZyksXHJcbiAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCBmYXR0eSksXHJcbiAgcGFkZGluZzogMCAxNXB4LFxyXG4pO1xyXG5cclxuJGJhc2UtY2FyZC1jb250ZW50OiAoXHJcbiAgcGFkZGluZzogMTBweCAxNXB4LFxyXG4pO1xyXG4vKiogYmFzZSBjYXJkIGVuZCovXHJcblxyXG4vKiBiYXNlIHRhYmxlIHN0YXJ0ICovXHJcbiRiYXNlLXRhYmxlOiAoXHJcbiAgLy8gaG92ZXIg6aGP6ImyXHJcbiAgaG92ZXItYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1saWdodC1ncmF5LCAxNSUpLFxyXG4gIC8vIOmWk+malOiJslxyXG4gIGV2ZW4tY29sLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcclxuICAvLyDlnJPop5JcclxuICByYWRpdXM6IDdweCxcclxuICAvLyDpmbDlvbFcclxuICBzaGFkb3c6IDFweCAycHggNHB4ICNkNWQ1ZDUsXHJcbiAgLy8g6KGo6aCt44CB5YWn5a6577yIdGjjgIF0ZO+8iSDplpPpmpRcclxuICBwYWRkaW5nOiA0cHggOHB4LFxyXG4gIC8vIOaJi+apn+eJiOihqOmgreOAgeWFp+Wuue+8iHRo44CBdGTvvIkg6ZaT6ZqU77yIZmxleCB0YWJsZSDlsIjnlKjvvIlcclxuICBtby1wYWRkaW5nOiAxMHB4IDhweCxcclxuICAvLyDlub5weOS7peS4i+S9v+eUqOaJi+apn+eJiO+8iGZsZXggdGFibGUg5bCI55So77yJXHJcbiAgYnJlYWstcG9pbnQ6IDk5MXB4LFxyXG4gIC8vIOashOS9jeS4i+aWueeahGJvcmRlci1ib3R0b23vvIhmbGV4IHRhYmxlIOWwiOeUqO+8iVxyXG4gIG1vLWJvcmRlci1ib3R0b20td2lkdGg6IDFweFxyXG4pO1xyXG5cclxuLyogYmFzZSB0YWIgc3RhcnQgKi9cclxuJGJhc2UtdGFiOiAoXHJcbiAgLy8g6aGP6ImyKG1lcmMtdGFiIOacquWCs+WFpSBtZXJjVHlwZSDmmYLmnInmlYgpXHJcbiAgdGFiLWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcclxuICAvLyB0YWIg57eo5qGGXHJcbiAgdGFiLWJvcmRlci13aWR0aDogMXB4LFxyXG4gIC8vIGNvbnRlbnQg57eo5qGGXHJcbiAgY29udGVudC1ib3JkZXItd2lkdGg6IDEwcHgsXHJcbiAgLy8g5ZyT6KeSXHJcbiAgcmFkaXVzOiA3cHgsXHJcbiAgLy8g5a2X6auU5aSn5bCPXHJcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXN6LCBsZylcclxuKTtcclxuLyogYmFzZSB0YWIgZW5kICovXHJcblxyXG4vKiBzbGlkZSBpbWFnZSBzdGFydCAqL1xyXG4kc2xpZGUtaW1hZ2U6IChcclxuICBpbWFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheSxcclxuICBmb2N1cy1ib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvclxyXG4pO1xyXG4vKiBzbGlkZSBpbWFnZSBlbmQgKi9cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map