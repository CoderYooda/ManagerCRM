(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_Path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Classes/Path */ "./resources/js/Classes/Path.js");
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
    var path = new _Classes_Path__WEBPACK_IMPORTED_MODULE_0__["default"]({
      id: 1,
      svg: 'canvas',
      start: [[300, 300], [300, 500]],
      end: [[300, 300], [300, 500]]
    });
    document.getElementById('canvas').addEventListener('mousemove', function (e) {
      path.fresh([[300, 300], [300, 500]], [[e.offsetX - 50, e.offsetY], [e.offsetX + 50, e.offsetY]]);
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
  return _c("div", { staticClass: "app-page" }, [
    _c("svg", {
      staticStyle: { width: "100%", height: "100%" },
      attrs: { id: "canvas", xmlns: "http://www.w3.org/2000/svg" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Classes/Path.js":
/*!**************************************!*\
  !*** ./resources/js/Classes/Path.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Path = /*#__PURE__*/function () {
  function Path(options) {
    _classCallCheck(this, Path);

    this.svg = options.svg;
    this.start = options.start;
    this.end = options.end;
    this.id = options.id;
    this.start_pos = [(this.start[0][0] + this.start[1][0]) / 2, (this.start[0][1] + this.start[1][1]) / 2];
    this.end_pos = [(this.end[0][0] + this.end[1][0]) / 2, (this.end[0][1] + this.end[1][1]) / 2];
    console.log(this.start);
    this.start_vector = [this.start_pos[0] + (this.start[0][0] - this.start[1][0]), this.start_pos[1] + (this.start[0][1] - this.start[1][1])];
    this.path = null;
    console.log(this.svg);
    this.container = document.getElementById(this.svg);
    this.vector = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    this.vector.setAttribute('stroke', 'red');
    this.container.appendChild(this.vector);
    console.log(document.getElementById(this.svg));
    this.init();
  }

  _createClass(Path, [{
    key: "init",
    value: function init() {
      var startOrientation = this.getStartOrientation();
      var endOrientation = this.getEndOrientation();
      this.path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      this.path.setAttribute('d', 'M' + this.start_pos[0] + ' ' + this.start_pos[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end_pos[0] + ' ' + this.end_pos[1]);
      this.path.setAttribute('stroke', 'rgb(111 212 0)');
      this.path.setAttribute('stroke-width', '2');
      this.path.setAttribute('fill', 'transparent');
      this.path.setAttribute('id', this.id);
      this.container.appendChild(this.path);
      this.drawStartVector();
    }
  }, {
    key: "drawStartVector",
    value: function drawStartVector() {
      this.vector.setAttribute('x1', this.start_pos[0]);
      this.vector.setAttribute('y1', this.start_pos[1]);
      this.vector.setAttribute('x2', this.start_vector[0]);
      this.vector.setAttribute('y2', this.start_vector[1]);
    }
  }, {
    key: "fresh",
    value: function fresh(start, end) {
      this.start = start;
      this.end = end;
      this.start_pos = [(this.start[0][0] + this.start[1][0]) / 2, (this.start[0][1] + this.start[1][1]) / 2];
      this.end_pos = [(this.end[0][0] + this.end[1][0]) / 2, (this.end[0][1] + this.end[1][1]) / 2];
      var startOrientation = this.getStartOrientation();
      var endOrientation = this.getEndOrientation();
      this.path.setAttribute('d', 'M' + this.start_pos[0] + ' ' + this.start_pos[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end_pos[0] + ' ' + this.end_pos[1]);
      this.drawStartVector();
    }
  }, {
    key: "getStartOrientation",
    value: function getStartOrientation() {
      var orientation = [0, 0];
      var diff_x, diff_y;
      return orientation;
    }
  }, {
    key: "getEndOrientation",
    value: function getEndOrientation() {
      var orientation = [0, 0];
      var diff_x, diff_y;
      return orientation;
    }
  }]);

  return Path;
}();

/* harmony default export */ __webpack_exports__["default"] = (Path);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzc3YmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NsYXNzZXMvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3ZpZXdzL1NjcmlwdHVyZS52dWU/NGJmZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzhjNzEiXSwibmFtZXMiOlsiUGF0aCIsIm9wdGlvbnMiLCJzdmciLCJzdGFydCIsImVuZCIsImlkIiwic3RhcnRfcG9zIiwiZW5kX3BvcyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydF92ZWN0b3IiLCJwYXRoIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZlY3RvciIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiaW5pdCIsInN0YXJ0T3JpZW50YXRpb24iLCJnZXRTdGFydE9yaWVudGF0aW9uIiwiZW5kT3JpZW50YXRpb24iLCJnZXRFbmRPcmllbnRhdGlvbiIsImRyYXdTdGFydFZlY3RvciIsIm9yaWVudGF0aW9uIiwiZGlmZl94IiwiZGlmZl95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBLFNBREEscUJBQ0EsQ0FFQSxDQUhBO0FBSUEsU0FKQSxxQkFJQTtBQUNBO0FBR0E7QUFDQSxXQURBO0FBRUEsbUJBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBSkE7QUFNQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBakJBO0FBa0JBO0FBbEJBLEc7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QUFDLENBQUQsRUFBRyxDQUFILENBQWxCO0FBRUEsVUFBSUMsTUFBSixFQUFZQyxNQUFaO0FBRUEsYUFBT0YsV0FBUDtBQUNIOzs7d0NBQ2tCO0FBQ2YsVUFBSUEsV0FBVyxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBbEI7QUFFQSxVQUFJQyxNQUFKLEVBQVlDLE1BQVo7QUFFQSxhQUFPRixXQUFQO0FBQ0g7Ozs7OztBQUdVekIsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUErTCxDQUFnQixxUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFwcC1wYWdlXCI+XG4gICAgICAgIDxzdmcgaWQ9XCJjYW52YXNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlXCI+XG4gICAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUGF0aCBmcm9tIFwiLi4vLi4vQ2xhc3Nlcy9QYXRoXCJcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKXtcblxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kZXZlbnRCdXMuJGVtaXQoJ3NldC10aXRsZScsICfQodC+0LfQtNCw0L3QuNC1INGB0LrRgNC40L/RgtCwJyk7XG5cblxuICAgICAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aCh7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgc3ZnOiAnY2FudmFzJyxcbiAgICAgICAgICAgICAgICBzdGFydDogW1szMDAsMzAwXSwgWzMwMCw1MDBdXSxcbiAgICAgICAgICAgICAgICBlbmQ6IFtbMzAwLDMwMF0sIFszMDAsNTAwXV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBhdGguZnJlc2goW1szMDAsMzAwXSwgWzMwMCw1MDBdXSwgW1tlLm9mZnNldFggLSA1MCwgZS5vZmZzZXRZXSwgW2Uub2Zmc2V0WCArIDUwLCBlLm9mZnNldFldXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcC1wYWdlXCIgfSwgW1xuICAgIF9jKFwic3ZnXCIsIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgYXR0cnM6IHsgaWQ6IFwiY2FudmFzXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY2xhc3MgUGF0aHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICAgICAgdGhpcy5zdmcgPSBvcHRpb25zLnN2ZztcbiAgICAgICAgdGhpcy5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gb3B0aW9ucy5lbmQ7XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXG5cbiAgICAgICAgdGhpcy5zdGFydF9wb3MgPSBbKHRoaXMuc3RhcnRbMF1bMF0gKyB0aGlzLnN0YXJ0WzFdWzBdKSAvIDIsICh0aGlzLnN0YXJ0WzBdWzFdICsgdGhpcy5zdGFydFsxXVsxXSkgLyAyXTtcbiAgICAgICAgdGhpcy5lbmRfcG9zID0gWyh0aGlzLmVuZFswXVswXSArIHRoaXMuZW5kWzFdWzBdKSAvIDIsICh0aGlzLmVuZFswXVsxXSArIHRoaXMuZW5kWzFdWzFdKSAvIDJdO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXJ0KTtcblxuICAgICAgICB0aGlzLnN0YXJ0X3ZlY3RvciA9W3RoaXMuc3RhcnRfcG9zWzBdICsgKHRoaXMuc3RhcnRbMF1bMF0gLSB0aGlzLnN0YXJ0WzFdWzBdKSwgdGhpcy5zdGFydF9wb3NbMV0gKyAodGhpcy5zdGFydFswXVsxXSAtIHRoaXMuc3RhcnRbMV1bMV0pXTtcblxuXG5cblxuICAgICAgICB0aGlzLnBhdGggPSBudWxsO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3ZnKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3ZnKTtcblxuXG4gICAgICAgIHRoaXMudmVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ2xpbmUnKTtcbiAgICAgICAgdGhpcy52ZWN0b3Iuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmVkJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudmVjdG9yKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN2ZykpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCl7XG4gICAgICAgIGxldCBzdGFydE9yaWVudGF0aW9uID0gdGhpcy5nZXRTdGFydE9yaWVudGF0aW9uKCk7XG4gICAgICAgIGxldCBlbmRPcmllbnRhdGlvbiA9IHRoaXMuZ2V0RW5kT3JpZW50YXRpb24oKTtcblxuICAgICAgICB0aGlzLnBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgICAgICB0aGlzLnBhdGguc2V0QXR0cmlidXRlKCdkJywgJ00nICsgdGhpcy5zdGFydF9wb3NbMF0gKyAnICcgKyB0aGlzLnN0YXJ0X3Bvc1sxXSArICcgQyAnICsgc3RhcnRPcmllbnRhdGlvblswXSArICcgJyArIHN0YXJ0T3JpZW50YXRpb25bMV0gKyAnLCAnICsgZW5kT3JpZW50YXRpb25bMF0gKyAnICcgKyBlbmRPcmllbnRhdGlvblsxXSArICcsICcgKyB0aGlzLmVuZF9wb3NbMF0gKyAnICcgKyB0aGlzLmVuZF9wb3NbMV0pO1xuICAgICAgICB0aGlzLnBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiKDExMSAyMTIgMCknKTtcbiAgICAgICAgdGhpcy5wYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzInKTtcbiAgICAgICAgdGhpcy5wYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd0cmFuc3BhcmVudCcpO1xuICAgICAgICB0aGlzLnBhdGguc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBhdGgpO1xuICAgICAgICB0aGlzLmRyYXdTdGFydFZlY3RvcigpO1xuICAgIH1cblxuICAgIGRyYXdTdGFydFZlY3Rvcigpe1xuICAgICAgICB0aGlzLnZlY3Rvci5zZXRBdHRyaWJ1dGUoJ3gxJywgdGhpcy5zdGFydF9wb3NbMF0pO1xuICAgICAgICB0aGlzLnZlY3Rvci5zZXRBdHRyaWJ1dGUoJ3kxJywgdGhpcy5zdGFydF9wb3NbMV0pO1xuICAgICAgICB0aGlzLnZlY3Rvci5zZXRBdHRyaWJ1dGUoJ3gyJywgdGhpcy5zdGFydF92ZWN0b3JbMF0pO1xuICAgICAgICB0aGlzLnZlY3Rvci5zZXRBdHRyaWJ1dGUoJ3kyJywgdGhpcy5zdGFydF92ZWN0b3JbMV0pO1xuICAgIH1cblxuICAgIGZyZXNoKHN0YXJ0LCBlbmQpe1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB0aGlzLnN0YXJ0X3BvcyA9IFsodGhpcy5zdGFydFswXVswXSArIHRoaXMuc3RhcnRbMV1bMF0pIC8gMiwgKHRoaXMuc3RhcnRbMF1bMV0gKyB0aGlzLnN0YXJ0WzFdWzFdKSAvIDJdO1xuICAgICAgICB0aGlzLmVuZF9wb3MgPSBbKHRoaXMuZW5kWzBdWzBdICsgdGhpcy5lbmRbMV1bMF0pIC8gMiwgKHRoaXMuZW5kWzBdWzFdICsgdGhpcy5lbmRbMV1bMV0pIC8gMl07XG4gICAgICAgIGxldCBzdGFydE9yaWVudGF0aW9uID0gdGhpcy5nZXRTdGFydE9yaWVudGF0aW9uKCk7XG4gICAgICAgIGxldCBlbmRPcmllbnRhdGlvbiA9IHRoaXMuZ2V0RW5kT3JpZW50YXRpb24oKTtcbiAgICAgICAgdGhpcy5wYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNJyArIHRoaXMuc3RhcnRfcG9zWzBdICsgJyAnICsgdGhpcy5zdGFydF9wb3NbMV0gKyAnIEMgJyArIHN0YXJ0T3JpZW50YXRpb25bMF0gKyAnICcgKyBzdGFydE9yaWVudGF0aW9uWzFdICsgJywgJyArIGVuZE9yaWVudGF0aW9uWzBdICsgJyAnICsgZW5kT3JpZW50YXRpb25bMV0gKyAnLCAnICsgdGhpcy5lbmRfcG9zWzBdICsgJyAnICsgdGhpcy5lbmRfcG9zWzFdKTtcbiAgICAgICAgdGhpcy5kcmF3U3RhcnRWZWN0b3IoKTtcbiAgICB9XG5cbiAgICBnZXRTdGFydE9yaWVudGF0aW9uKCl7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IFswLDBdO1xuXG4gICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb247XG4gICAgfVxuICAgIGdldEVuZE9yaWVudGF0aW9uKCl7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IFswLDBdO1xuXG4gICAgICAgIGxldCBkaWZmX3gsIGRpZmZfeTtcblxuICAgICAgICByZXR1cm4gb3JpZW50YXRpb247XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBQYXRoO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY3JpcHR1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZDE1MGMxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9TUGFuZWxcXFxcZG9tYWluc1xcXFxtYW5hZ2VyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3ZDE1MGMxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3ZDE1MGMxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3ZDE1MGMxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TY3JpcHR1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZDE1MGMxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA3ZDE1MGMxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY3JpcHR1cmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2QxNTBjMSZcIiJdLCJzb3VyY2VSb290IjoiIn0=