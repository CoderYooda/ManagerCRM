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
    var block = new _Classes_Canva__WEBPACK_IMPORTED_MODULE_0__["TextBlock"]({
      position: [300, 300],
      attached: {
        path: path,
        connection: 'Start'
      },
      canva: canva,
      text: 'Тестовый блок'
    });
    canva.addElem(path);
    canva.addElem(block);
    document.getElementsByClassName('canva')[0].addEventListener('mousemove', function (e) {
      path.freshStart([300, 300, 90]);
      path.freshEnd([e.offsetX, e.offsetY, 90]);
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
    key: "freshStart",
    value: function freshStart(start) {
      this.start = start;
      var startOrientation = this.getStartOrientation();
      var endOrientation = this.getEndOrientation();
      this.calculateScalar();
      this.tag.setAttribute('d', 'M' + this.start[0] + ' ' + this.start[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end[0] + ' ' + this.end[1]);
    }
  }, {
    key: "freshEnd",
    value: function freshEnd(end) {
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

var TextBlock = /*#__PURE__*/function () {
  function TextBlock(options) {
    _classCallCheck(this, TextBlock);

    this.position = options.position;
    this.text = options.text;
    this.canva = options.canva;
    this.attached = options.attached;
    this.dragged = false;
    this.width = 100;
    this.height = 100;
    this.touch_shift = [0, 0];
    this.init();
  }

  _createClass(TextBlock, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      this.tag.setAttribute('x', this.position[0]);
      this.tag.setAttribute('y', this.position[1]);
      this.tag.setAttribute('stroke', 'rgb(111 212 0)');
      this.tag.setAttribute('width', '100');
      this.tag.setAttribute('height', '100');
      document.addEventListener('mouseup', function (e) {
        _this.dragged = false;
      });
      this.canva.canv.addEventListener('mousemove', function (e) {
        if (_this.dragged) {
          var x = e.offsetX;
          var y = e.offsetY;

          _this.tag.setAttribute('x', x - _this.touch_shift[0]);

          _this.tag.setAttribute('y', y - _this.touch_shift[1]);

          _this.position = [x, y];
        }
      });
      this.tag.addEventListener('mousedown', function (e) {
        _this.touch_shift = [e.offsetX - _this.tag.x.animVal.value, e.offsetY - _this.tag.y.animVal.value];
        _this.dragged = true;
      });
    }
  }, {
    key: "attachPath",
    value: function attachPath(options) {
      this.attached.push(options.path);
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.tag.setAttribute('id', id);
    }
  }]);

  return TextBlock;
}();

module.exports = {
  Canva: Canva,
  Path: Path,
  TextBlock: TextBlock
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzc3YmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NsYXNzZXMvQ2FudmEuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzRiZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZT84YzcxIl0sIm5hbWVzIjpbIlBJIiwiQ2FudmEiLCJvcHRpb25zIiwiY2FudiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJlbGVtcyIsImRlYnVnIiwibW9kZWwiLCJ0YWciLCJzZXRJZCIsIlBhdGgiLCJzdGFydCIsImVuZCIsIm9yaWVudGF0aW9uX3NjYWxhciIsImluaXQiLCJzdGFydE9yaWVudGF0aW9uIiwiZ2V0U3RhcnRPcmllbnRhdGlvbiIsImVuZE9yaWVudGF0aW9uIiwiZ2V0RW5kT3JpZW50YXRpb24iLCJjYWxjdWxhdGVTY2FsYXIiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsIk1hdGgiLCJzcXJ0IiwicG93Iiwib3JpZW50YXRpb24iLCJzaW4iLCJjb3MiLCJUZXh0QmxvY2siLCJwb3NpdGlvbiIsInRleHQiLCJjYW52YSIsImF0dGFjaGVkIiwiZHJhZ2dlZCIsInRvdWNoX3NoaWZ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ4Iiwib2Zmc2V0WCIsInki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QTBCLFdBQTFCLEVBQXVDLFVBQUNDLENBQUQsRUFBSztBQUN4QyxhQUFJLENBQUNGLFdBQUwsR0FBbUIsQ0FBQ0UsQ0FBQyxDQUFDRSxPQUFGLEdBQVksS0FBSSxDQUFDOUIsR0FBTCxDQUFTNkIsQ0FBVCxDQUFXSSxPQUFYLENBQW1CQyxLQUFoQyxFQUF1Q04sQ0FBQyxDQUFDSSxPQUFGLEdBQVksS0FBSSxDQUFDaEMsR0FBTCxDQUFTK0IsQ0FBVCxDQUFXRSxPQUFYLENBQW1CQyxLQUF0RSxDQUFuQjtBQUNBLGFBQUksQ0FBQ1QsT0FBTCxHQUFlLElBQWY7QUFDSCxPQUhEO0FBSUg7OzsrQkFDVXhDLE8sRUFBUTtBQUNmLFdBQUt1QyxRQUFMLENBQWNXLElBQWQsQ0FBbUJsRCxPQUFPLENBQUNtRCxJQUEzQjtBQUNIOzs7MEJBQ0t2QixFLEVBQUc7QUFDTCxXQUFLYixHQUFMLENBQVNZLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEJDLEVBQTVCO0FBQ0g7Ozs7OztBQUVMd0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J0RCxPQUFLLEVBQUVBLEtBRE07QUFFYmtCLE1BQUksRUFBRUEsSUFGTztBQUdia0IsV0FBUyxFQUFFQTtBQUhFLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQzFIQTtBQUFBO0FBQUE7QUFBQTtBQUF3RjtBQUMzQjtBQUNMOzs7QUFHeEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBK0wsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXBwLXBhZ2UgY2FudmFcIj5cclxuPCEtLSAgICAgICAgPHN2ZyBpZD1cImNhbnZhc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzAwIDMwMCBDIDMwMCAzMDAsIDMwMCA1MDAsIDMwMCA1MDBcIiBzdHJva2U9XCJyZ2IoMTExIDIxMiAwKVwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwidHJhbnNwYXJlbnRcIiBpZD1cIjFcIj48L3BhdGg+LS0+XHJcbjwhLS0gICAgICAgIDwvc3ZnPi0tPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtDYW52YSwgUGF0aCwgVGV4dEJsb2NrfSBmcm9tIFwiLi4vLi4vQ2xhc3Nlcy9DYW52YVwiXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY3JlYXRlZCgpe1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGV2ZW50QnVzLiRlbWl0KCdzZXQtdGl0bGUnLCAn0KHQvtC30LTQsNC90LjQtSDRgdC60YDQuNC/0YLQsCcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbnZhID0gbmV3IENhbnZhKHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2NhbnZhJyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMzAwLDMwMCwgOTBdLFxyXG4gICAgICAgICAgICAgICAgZW5kOiBbMzAwLDUwMCwgOTBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBibG9jayA9IG5ldyBUZXh0QmxvY2soe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFszMDAsMzAwXSxcclxuICAgICAgICAgICAgICAgIGF0dGFjaGVkOntcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogJ1N0YXJ0J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbnZhOiBjYW52YSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfQotC10YHRgtC+0LLRi9C5INCx0LvQvtC6JyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FudmEuYWRkRWxlbShwYXRoKTtcclxuICAgICAgICAgICAgY2FudmEuYWRkRWxlbShibG9jayk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW52YScpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXRoLmZyZXNoU3RhcnQoWzMwMCwzMDAsIDkwXSk7XHJcbiAgICAgICAgICAgICAgICBwYXRoLmZyZXNoRW5kKFtlLm9mZnNldFgsIGUub2Zmc2V0WSwgOTBdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcC1wYWdlIGNhbnZhXCIgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJjb25zdCBQSSA9IDMuMTQxNTk7XHJcbmNsYXNzIENhbnZhe1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cclxuICAgICAgICB0aGlzLmNhbnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgXCJzdmdcIik7XHJcbiAgICAgICAgdGhpcy5jYW52LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLmNhbnYuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG9wdGlvbnMuY29udGFpbmVyKVswXTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnYpO1xyXG4gICAgICAgIHRoaXMuZWxlbXMgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW0obW9kZWwpe1xyXG4gICAgICAgIHRoaXMuY2Fudi5hcHBlbmRDaGlsZChtb2RlbC50YWcpO1xyXG4gICAgICAgIG1vZGVsLnNldElkKCdwYXJ0JyArIHRoaXMuZWxlbXMpO1xyXG4gICAgICAgIHRoaXMuZWxlbXMrKztcclxuICAgIH1cclxuXHJcbn1cclxuY2xhc3MgUGF0aHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gb3B0aW9ucy5lbmQ7XHJcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGFnID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIGluaXQoKXtcclxuICAgICAgICBsZXQgc3RhcnRPcmllbnRhdGlvbiA9IHRoaXMuZ2V0U3RhcnRPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIGxldCBlbmRPcmllbnRhdGlvbiA9IHRoaXMuZ2V0RW5kT3JpZW50YXRpb24oKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNjYWxhcigpO1xyXG4gICAgICAgIHRoaXMudGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcclxuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2QnLCAnTScgKyB0aGlzLnN0YXJ0WzBdICsgJyAnICsgdGhpcy5zdGFydFsxXSArICcgQyAnICsgc3RhcnRPcmllbnRhdGlvblswXSArICcgJyArIHN0YXJ0T3JpZW50YXRpb25bMV0gKyAnLCAnICsgZW5kT3JpZW50YXRpb25bMF0gKyAnICcgKyBlbmRPcmllbnRhdGlvblsxXSArICcsICcgKyB0aGlzLmVuZFswXSArICcgJyArIHRoaXMuZW5kWzFdKTtcclxuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdyZ2IoMTExIDIxMiAwKScpO1xyXG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzInKTtcclxuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKTtcclxuICAgIH1cclxuICAgIHNldElkKGlkKXtcclxuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlU2NhbGFyKCl7XHJcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgPSBNYXRoLnNxcnQoTWF0aC5wb3coICh0aGlzLmVuZFswXSAtIHRoaXMuc3RhcnRbMF0pICwgMikgKyBNYXRoLnBvdyggKHRoaXMuZW5kWzFdIC0gdGhpcy5zdGFydFsxXSkgLCAyKSkgLyAyO1xyXG4gICAgfVxyXG4gICAgZnJlc2hTdGFydChzdGFydCl7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIGxldCBzdGFydE9yaWVudGF0aW9uID0gdGhpcy5nZXRTdGFydE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgbGV0IGVuZE9yaWVudGF0aW9uID0gdGhpcy5nZXRFbmRPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2NhbGFyKCk7XHJcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdkJywgJ00nICsgdGhpcy5zdGFydFswXSArICcgJyArIHRoaXMuc3RhcnRbMV0gKyAnIEMgJyArIHN0YXJ0T3JpZW50YXRpb25bMF0gKyAnICcgKyBzdGFydE9yaWVudGF0aW9uWzFdICsgJywgJyArIGVuZE9yaWVudGF0aW9uWzBdICsgJyAnICsgZW5kT3JpZW50YXRpb25bMV0gKyAnLCAnICsgdGhpcy5lbmRbMF0gKyAnICcgKyB0aGlzLmVuZFsxXSk7XHJcbiAgICB9XHJcbiAgICBmcmVzaEVuZChlbmQpe1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIGxldCBzdGFydE9yaWVudGF0aW9uID0gdGhpcy5nZXRTdGFydE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgbGV0IGVuZE9yaWVudGF0aW9uID0gdGhpcy5nZXRFbmRPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2NhbGFyKCk7XHJcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdkJywgJ00nICsgdGhpcy5zdGFydFswXSArICcgJyArIHRoaXMuc3RhcnRbMV0gKyAnIEMgJyArIHN0YXJ0T3JpZW50YXRpb25bMF0gKyAnICcgKyBzdGFydE9yaWVudGF0aW9uWzFdICsgJywgJyArIGVuZE9yaWVudGF0aW9uWzBdICsgJyAnICsgZW5kT3JpZW50YXRpb25bMV0gKyAnLCAnICsgdGhpcy5lbmRbMF0gKyAnICcgKyB0aGlzLmVuZFsxXSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdGFydE9yaWVudGF0aW9uKCl7XHJcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gWzAsMF07XHJcbiAgICAgICAgb3JpZW50YXRpb25bMF0gPSBNYXRoLnNpbih0aGlzLnN0YXJ0WzJdICogUEkgLyAxODApICogdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgKyB0aGlzLnN0YXJ0WzBdO1xyXG4gICAgICAgIG9yaWVudGF0aW9uWzFdID0gTWF0aC5jb3ModGhpcy5zdGFydFsyXSAqIFBJIC8gMTgwKSAqIHRoaXMub3JpZW50YXRpb25fc2NhbGFyICsgdGhpcy5zdGFydFsxXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0RW5kT3JpZW50YXRpb24oKXtcclxuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBbMCwwXTtcclxuICAgICAgICBvcmllbnRhdGlvblswXSA9IE1hdGguc2luKHRoaXMuZW5kWzJdICogUEkgLyAxODApICogdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgKyB0aGlzLmVuZFswXTtcclxuICAgICAgICBvcmllbnRhdGlvblsxXSA9IE1hdGguY29zKHRoaXMuZW5kWzJdICogUEkgLyAxODApICogdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgKyB0aGlzLmVuZFsxXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUZXh0QmxvY2t7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YSA9IG9wdGlvbnMuY2FudmE7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IG9wdGlvbnMuYXR0YWNoZWQ7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLnRvdWNoX3NoaWZ0ID0gWzAsMF07XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy50YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncmVjdCcpO1xyXG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgneCcsIHRoaXMucG9zaXRpb25bMF0pO1xyXG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgneScsIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYigxMTEgMjEyIDApJyk7XHJcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAnKTtcclxuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YS5jYW52LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmRyYWdnZWQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBlLm9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgneCcsIHggLSB0aGlzLnRvdWNoX3NoaWZ0WzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgneScsIHkgLSB0aGlzLnRvdWNoX3NoaWZ0WzFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBbeCx5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoX3NoaWZ0ID0gW2Uub2Zmc2V0WCAtIHRoaXMudGFnLnguYW5pbVZhbC52YWx1ZSwgZS5vZmZzZXRZIC0gdGhpcy50YWcueS5hbmltVmFsLnZhbHVlXTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGF0dGFjaFBhdGgob3B0aW9ucyl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZC5wdXNoKG9wdGlvbnMucGF0aCk7XHJcbiAgICB9XHJcbiAgICBzZXRJZChpZCl7XHJcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIENhbnZhOiBDYW52YSxcclxuICAgIFBhdGg6IFBhdGgsXHJcbiAgICBUZXh0QmxvY2s6IFRleHRCbG9ja1xyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdkMTUwYzEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXE1hbmFnZXJDUk1cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdkMTUwYzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdkMTUwYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdkMTUwYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdkMTUwYzEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdkMTUwYzEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3ZpZXdzL1NjcmlwdHVyZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY3JpcHR1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZDE1MGMxJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==