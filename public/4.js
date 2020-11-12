(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_Canva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Classes/Canva */ "./resources/js/Classes/Canva.js");
/* harmony import */ var _Classes_Canva__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Classes_Canva__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {},
  mounted: function mounted() {
    this.$eventBus.$emit('set-title', 'Создание скрипта');
    var canva = new _Classes_Canva__WEBPACK_IMPORTED_MODULE_0__["Canva"]({
      container: 'canva'
    });
    var path = new _Classes_Canva__WEBPACK_IMPORTED_MODULE_0__["Path"]({
      start: [300, 300, 90],
      end: [300, 500, 90]
    });
    canva.addElem(path);
    document.getElementsByClassName('canva')[0].addEventListener('mousemove', function (e) {
      path.fresh([300, 300, 90], [e.offsetX, e.offsetY, 90]);
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Scripture.vue?vue&type=template&id=07d150c1&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Scripture.vue?vue&type=template&id=07d150c1& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-page canva" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Classes/Canva.js":
/*!***************************************!*\
  !*** ./resources/js/Classes/Canva.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PI = 3.14159;

var Canva = /*#__PURE__*/function () {
  function Canva(options) {
    _classCallCheck(this, Canva);

    this.canv = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    this.canv.style.height = '100%';
    this.canv.style.width = '100%';
    console.log(options.container);
    this.container = document.getElementsByClassName(options.container)[0];
    this.container.appendChild(this.canv);
    this.elems = 0;
    this.debug = true;
  }

  _createClass(Canva, [{
    key: "addElem",
    value: function addElem(model) {
      this.canv.appendChild(model.tag);
      model.setId('part' + this.elems);
      this.elems++;
    }
  }]);

  return Canva;
}();

var Path = /*#__PURE__*/function () {
  function Path(options) {
    _classCallCheck(this, Path);

    this.start = options.start;
    this.end = options.end;
    this.orientation_scalar = 0;
    this.tag = null;
    this.init();
  }

  _createClass(Path, [{
    key: "init",
    value: function init() {
      var startOrientation = this.getStartOrientation();
      var endOrientation = this.getEndOrientation();
      this.calculateScalar();
      this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      this.tag.setAttribute('d', 'M' + this.start[0] + ' ' + this.start[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end[0] + ' ' + this.end[1]);
      this.tag.setAttribute('stroke', 'rgb(111 212 0)');
      this.tag.setAttribute('stroke-width', '2');
      this.tag.setAttribute('fill', 'transparent');
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.tag.setAttribute('id', id);
    }
  }, {
    key: "calculateScalar",
    value: function calculateScalar() {
      this.orientation_scalar = Math.sqrt(Math.pow(this.end[0] - this.start[0], 2) + Math.pow(this.end[1] - this.start[1], 2)) / 2;
    }
  }, {
    key: "fresh",
    value: function fresh(start, end) {
      this.start = start;
      this.end = end;
      var startOrientation = this.getStartOrientation();
      var endOrientation = this.getEndOrientation();
      this.calculateScalar();
      this.tag.setAttribute('d', 'M' + this.start[0] + ' ' + this.start[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end[0] + ' ' + this.end[1]);
    }
  }, {
    key: "getStartOrientation",
    value: function getStartOrientation() {
      var orientation = [0, 0];
      orientation[0] = Math.sin(this.start[2] * PI / 180) * this.orientation_scalar + this.start[0];
      orientation[1] = Math.cos(this.start[2] * PI / 180) * this.orientation_scalar + this.start[1];
      return orientation;
    }
  }, {
    key: "getEndOrientation",
    value: function getEndOrientation() {
      var orientation = [0, 0];
      orientation[0] = Math.sin(this.end[2] * PI / 180) * this.orientation_scalar + this.end[0];
      orientation[1] = Math.cos(this.end[2] * PI / 180) * this.orientation_scalar + this.end[1];
      return orientation;
    }
  }]);

  return Path;
}();

module.exports = {
  Canva: Canva,
  Path: Path
};

/***/ }),

/***/ "./resources/js/components/views/Scripture.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/views/Scripture.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scripture_vue_vue_type_template_id_07d150c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scripture.vue?vue&type=template&id=07d150c1& */ "./resources/js/components/views/Scripture.vue?vue&type=template&id=07d150c1&");
/* harmony import */ var _Scripture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scripture.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Scripture.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scripture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scripture_vue_vue_type_template_id_07d150c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scripture_vue_vue_type_template_id_07d150c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Scripture.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Scripture.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/views/Scripture.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scripture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Scripture.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scripture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Scripture.vue?vue&type=template&id=07d150c1&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/views/Scripture.vue?vue&type=template&id=07d150c1& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scripture_vue_vue_type_template_id_07d150c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Scripture.vue?vue&type=template&id=07d150c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Scripture.vue?vue&type=template&id=07d150c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scripture_vue_vue_type_template_id_07d150c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scripture_vue_vue_type_template_id_07d150c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzc3YmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NsYXNzZXMvQ2FudmEuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzRiZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZT84YzcxIl0sIm5hbWVzIjpbIlBJIiwiQ2FudmEiLCJvcHRpb25zIiwiY2FudiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJlbGVtcyIsImRlYnVnIiwibW9kZWwiLCJ0YWciLCJzZXRJZCIsIlBhdGgiLCJzdGFydCIsImVuZCIsIm9yaWVudGF0aW9uX3NjYWxhciIsImluaXQiLCJzdGFydE9yaWVudGF0aW9uIiwiZ2V0U3RhcnRPcmllbnRhdGlvbiIsImVuZE9yaWVudGF0aW9uIiwiZ2V0RW5kT3JpZW50YXRpb24iLCJjYWxjdWxhdGVTY2FsYXIiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsIk1hdGgiLCJzcXJ0IiwicG93Iiwib3JpZW50YXRpb24iLCJzaW4iLCJjb3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0EsU0FEQSxxQkFDQSxDQUVBLENBSEE7QUFJQSxTQUpBLHFCQUlBO0FBQ0E7QUFF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RUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQStMLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhcHAtcGFnZSBjYW52YVwiPlxuPCEtLSAgICAgICAgPHN2ZyBpZD1cImNhbnZhc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCVcIj4tLT5cbjwhLS0gICAgICAgICAgICA8cGF0aCBkPVwiTTMwMCAzMDAgQyAzMDAgMzAwLCAzMDAgNTAwLCAzMDAgNTAwXCIgc3Ryb2tlPVwicmdiKDExMSAyMTIgMClcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cInRyYW5zcGFyZW50XCIgaWQ9XCIxXCI+PC9wYXRoPi0tPlxuPCEtLSAgICAgICAgPC9zdmc+LS0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7Q2FudmEsIFBhdGh9IGZyb20gXCIuLi8uLi9DbGFzc2VzL0NhbnZhXCJcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKXtcblxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kZXZlbnRCdXMuJGVtaXQoJ3NldC10aXRsZScsICfQodC+0LfQtNCw0L3QuNC1INGB0LrRgNC40L/RgtCwJyk7XG5cbiAgICAgICAgICAgIGxldCBjYW52YSA9IG5ldyBDYW52YSh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnY2FudmEnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgoe1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMzAwLDMwMCwgOTBdLFxuICAgICAgICAgICAgICAgIGVuZDogWzMwMCw1MDAsIDkwXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FudmEuYWRkRWxlbShwYXRoKTtcblxuXG5cblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmEnKVswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBhdGguZnJlc2goWzMwMCwzMDAsIDkwXSwgW2Uub2Zmc2V0WCwgZS5vZmZzZXRZLCA5MF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcHAtcGFnZSBjYW52YVwiIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY29uc3QgUEkgPSAzLjE0MTU5O1xuY2xhc3MgQ2FudmF7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMuY2FudiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBcInN2Z1wiKTtcbiAgICAgICAgdGhpcy5jYW52LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5jYW52LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5jb250YWluZXIpWzBdO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnYpO1xuICAgICAgICB0aGlzLmVsZW1zID0gMDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuXG4gICAgYWRkRWxlbShtb2RlbCl7XG4gICAgICAgIHRoaXMuY2Fudi5hcHBlbmRDaGlsZChtb2RlbC50YWcpO1xuICAgICAgICBtb2RlbC5zZXRJZCgncGFydCcgKyB0aGlzLmVsZW1zKTtcbiAgICAgICAgdGhpcy5lbGVtcysrO1xuICAgIH1cblxufVxuY2xhc3MgUGF0aHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICAgICAgdGhpcy5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gb3B0aW9ucy5lbmQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25fc2NhbGFyID0gMDtcbiAgICAgICAgdGhpcy50YWcgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpe1xuICAgICAgICBsZXQgc3RhcnRPcmllbnRhdGlvbiA9IHRoaXMuZ2V0U3RhcnRPcmllbnRhdGlvbigpO1xuICAgICAgICBsZXQgZW5kT3JpZW50YXRpb24gPSB0aGlzLmdldEVuZE9yaWVudGF0aW9uKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2NhbGFyKCk7XG4gICAgICAgIHRoaXMudGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdkJywgJ00nICsgdGhpcy5zdGFydFswXSArICcgJyArIHRoaXMuc3RhcnRbMV0gKyAnIEMgJyArIHN0YXJ0T3JpZW50YXRpb25bMF0gKyAnICcgKyBzdGFydE9yaWVudGF0aW9uWzFdICsgJywgJyArIGVuZE9yaWVudGF0aW9uWzBdICsgJyAnICsgZW5kT3JpZW50YXRpb25bMV0gKyAnLCAnICsgdGhpcy5lbmRbMF0gKyAnICcgKyB0aGlzLmVuZFsxXSk7XG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYigxMTEgMjEyIDApJyk7XG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzInKTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3RyYW5zcGFyZW50Jyk7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpe1xuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNjYWxhcigpe1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uX3NjYWxhciA9IE1hdGguc3FydChNYXRoLnBvdyggKHRoaXMuZW5kWzBdIC0gdGhpcy5zdGFydFswXSkgLCAyKSArIE1hdGgucG93KCAodGhpcy5lbmRbMV0gLSB0aGlzLnN0YXJ0WzFdKSAsIDIpKSAvIDI7XG4gICAgfVxuXG5cbiAgICBmcmVzaChzdGFydCwgZW5kKXtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgbGV0IHN0YXJ0T3JpZW50YXRpb24gPSB0aGlzLmdldFN0YXJ0T3JpZW50YXRpb24oKTtcbiAgICAgICAgbGV0IGVuZE9yaWVudGF0aW9uID0gdGhpcy5nZXRFbmRPcmllbnRhdGlvbigpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNjYWxhcigpO1xuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2QnLCAnTScgKyB0aGlzLnN0YXJ0WzBdICsgJyAnICsgdGhpcy5zdGFydFsxXSArICcgQyAnICsgc3RhcnRPcmllbnRhdGlvblswXSArICcgJyArIHN0YXJ0T3JpZW50YXRpb25bMV0gKyAnLCAnICsgZW5kT3JpZW50YXRpb25bMF0gKyAnICcgKyBlbmRPcmllbnRhdGlvblsxXSArICcsICcgKyB0aGlzLmVuZFswXSArICcgJyArIHRoaXMuZW5kWzFdKTtcbiAgICB9XG5cbiAgICBnZXRTdGFydE9yaWVudGF0aW9uKCl7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IFswLDBdO1xuICAgICAgICBvcmllbnRhdGlvblswXSA9IE1hdGguc2luKHRoaXMuc3RhcnRbMl0gKiBQSSAvIDE4MCkgKiB0aGlzLm9yaWVudGF0aW9uX3NjYWxhciArIHRoaXMuc3RhcnRbMF07XG4gICAgICAgIG9yaWVudGF0aW9uWzFdID0gTWF0aC5jb3ModGhpcy5zdGFydFsyXSAqIFBJIC8gMTgwKSAqIHRoaXMub3JpZW50YXRpb25fc2NhbGFyICsgdGhpcy5zdGFydFsxXTtcblxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb247XG4gICAgfVxuICAgIGdldEVuZE9yaWVudGF0aW9uKCl7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IFswLDBdO1xuICAgICAgICBvcmllbnRhdGlvblswXSA9IE1hdGguc2luKHRoaXMuZW5kWzJdICogUEkgLyAxODApICogdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgKyB0aGlzLmVuZFswXTtcbiAgICAgICAgb3JpZW50YXRpb25bMV0gPSBNYXRoLmNvcyh0aGlzLmVuZFsyXSAqIFBJIC8gMTgwKSAqIHRoaXMub3JpZW50YXRpb25fc2NhbGFyICsgdGhpcy5lbmRbMV07XG5cbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENhbnZhIDogQ2FudmEsXG4gICAgUGF0aCA6IFBhdGhcbn07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdkMTUwYzEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT1NQYW5lbFxcXFxkb21haW5zXFxcXG1hbmFnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdkMTUwYzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdkMTUwYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdkMTUwYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdkMTUwYzEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdkMTUwYzEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3ZpZXdzL1NjcmlwdHVyZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY3JpcHR1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZDE1MGMxJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==