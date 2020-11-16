(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Scripture.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Classes/Canva/Canva */ "./resources/js/Classes/Canva/Canva.js");
/* harmony import */ var _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__);
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
    var canva = new _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__["Canva"]({
      container: 'canva'
    });
    var path = new _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__["Path"]({
      start: [300, 300, 90],
      end: [300, 500, 90]
    });
    var path2 = new _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__["Path"]({
      start: [10, 10, 90],
      end: [50, 50, 90]
    });
    var path3 = new _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__["Path"]({
      start: [10, 10, 90],
      end: [800, 800, 90]
    });
    var block = new _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__["TextBlock"]({
      position: [300, 300],
      canva: canva,
      text: 'Тестовый блок'
    });
    var block2 = new _Classes_Canva_Canva__WEBPACK_IMPORTED_MODULE_0__["TextBlock"]({
      position: [600, 600],
      canva: canva,
      text: 'Тестовый блок'
    });
    canva.addElem(path);
    canva.addElem(path2);
    canva.addElem(path3);
    canva.addElem(block);
    canva.addElem(block2);
    path.attach(block, 'start');
    path3.attach(block, 'start');
    path.attach(block2, 'end');
    path2.attach(block, 'start');
    document.getElementsByClassName('canva')[0].addEventListener('mousemove', function (e) {// path.freshStart([300,300, 90]);
      //path.freshEnd([e.offsetX, e.offsetY, 90]);
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

/***/ "./resources/js/Classes/Canva/Canva.js":
/*!*********************************************!*\
  !*** ./resources/js/Classes/Canva/Canva.js ***!
  \*********************************************/
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
      model.setContainer(this.canv);
      model.setId('part' + this.elems);
      this.elems++;
    }
  }]);

  return Canva;
}();

var Path = /*#__PURE__*/function () {
  function Path(options) {
    _classCallCheck(this, Path);

    this.orientation_scalar = 0;
    this.tag = null;
    this.svg = null;
    this.start_x = options.start[0];
    this.start_y = options.start[1];
    this.end_x = options.end[0];
    this.end_y = options.end[1];
    this.start_x_orient = 0;
    this.start_y_orient = 0;
    this.end_x_orient = 0;
    this.end_y_orient = 0;
    this.x_shift = 0;
    this.y_shift = 0;
    this.end_angle = options.end[2];
    this.start_angle = options.start[2];
    this.start_attach = null;
    this.end_attach = null;
    this.attached = [];
    this.init();
  }

  _createClass(Path, [{
    key: "init",
    value: function init() {
      this.startOrientation();
      this.endOrientation();
      this.calculateScalar();
      this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'path');
      this.tag.setAttribute('stroke', 'rgb(111 212 0)');
      this.tag.setAttribute('stroke-width', '2');
      this.tag.setAttribute('fill', 'transparent');
      this.render();
    }
  }, {
    key: "setContainer",
    value: function setContainer(svg) {
      this.svg = svg;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
      this.tag.setAttribute('id', id);
    }
  }, {
    key: "calculateScalar",
    value: function calculateScalar() {
      this.orientation_scalar = Math.sqrt(Math.pow(this.end_x - this.start_x, 2) + Math.pow(this.end_y - this.start_y, 2)) / 2;
    }
  }, {
    key: "attach",
    value: function attach(elem, side) {
      var _this = this;

      this.attached[elem.id] = {
        side: side
      };

      switch (elem.form) {
        case 'square':
          this.x_shift = elem.width;
          this.y_shift = elem.height;
          break;
      } // switch (elem.form) {
      //     case 'right': this.x_shift = this.width; y_shift = this.height / 2; angle = 90; break;
      //     case 'left': this.y_shift = this.height / 2; angle = 270; break;
      //     case 'top': this.x_shift = this.width / 2; angle = 180; break;
      //     case 'bottom': this.y_shift = this.height; x_shift = this.width / 2; angle = 0; break;
      // }


      this.freshPos(side, elem.x, elem.y);
      this.svg.addEventListener(elem.id + '_moving', function (e) {
        _this.freshPos(side, e.detail.x, e.detail.y);
      }, false);
    }
  }, {
    key: "freshPos",
    value: function freshPos(type, x, y) {
      var a = {
        x: this.start_x - 100,
        y: this.start_y
      };
      var b = {
        x: this.start_x,
        y: this.start_y
      };
      var c = {
        x: this.end_x,
        y: this.end_y
      };
      var d = {
        x: this.start_x,
        y: this.start_y
      };

      var getVector = function getVector(p1, p2) {
        return {
          x: p2.x - p1.x,
          y: p2.y - p1.y
        };
      };

      var v1 = getVector(a, b);
      var v2 = getVector(c, d);
      var dot = v1.x * v2.x + v1.y * v2.y;
      var cross = v1.x * v2.y - v1.y * v2.x;
      var angle = Math.atan2(cross, dot);
      var delimer = 90;
      angle = Math.floor((angle * 180 / PI + 180) / delimer);
      this.start_angle = 0 - angle * delimer;
      this.end_angle = 270 - angle * delimer;
      this[type + '_x'] = x + this.x_shift / 2;
      this[type + '_y'] = y + this.y_shift / 2;
      this[type + 'Orientation']();
      this.calculateScalar();
      this.startOrientation();
      this.endOrientation();
      this.render();
    }
  }, {
    key: "inverse",
    value: function inverse(type) {
      return type === 'start' ? 'end' : 'start';
    }
  }, {
    key: "startOrientation",
    value: function startOrientation() {
      this.start_x_orient = Math.sin(this.start_angle * PI / 180) * this.orientation_scalar + this.start_x;
      this.start_y_orient = Math.cos(this.start_angle * PI / 180) * this.orientation_scalar + this.start_y;
    }
  }, {
    key: "endOrientation",
    value: function endOrientation() {
      this.end_x_orient = Math.sin(this.end_angle * PI / 180) * this.orientation_scalar + this.end_x;
      this.end_y_orient = Math.cos(this.end_angle * PI / 180) * this.orientation_scalar + this.end_y;
    }
  }, {
    key: "render",
    value: function render() {
      this.tag.setAttribute('d', 'M' + this.start_x + ' ' + this.start_y + ' C ' + this.start_x_orient + ' ' + this.start_y_orient + ', ' + this.end_x_orient + ' ' + this.end_y_orient + ', ' + this.end_x + ' ' + this.end_y);
    }
  }]);

  return Path;
}();

var TextBlock = /*#__PURE__*/function () {
  function TextBlock(options) {
    _classCallCheck(this, TextBlock);

    this.x = options.position[0];
    this.y = options.position[1];
    this.text = options.text;
    this.canva = options.canva;
    this.dragged = false;
    this.width = 100;
    this.height = 100;
    this.touch_shift = [0, 0];
    this.form = 'square';
    this.init();
  }

  _createClass(TextBlock, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      this.tag.setAttribute('x', this.x);
      this.tag.setAttribute('y', this.y);
      this.tag.setAttribute('stroke', 'rgb(111 212 0)');
      this.tag.setAttribute('width', '100');
      this.tag.setAttribute('height', '100');
      document.addEventListener('mouseup', function (e) {
        _this2.dragged = false;
      });
      this.canva.canv.addEventListener('mousemove', function (e) {
        if (_this2.dragged) {
          var x = e.offsetX - _this2.touch_shift[0];
          var y = e.offsetY - _this2.touch_shift[1];

          _this2.moving(x, y);

          _this2.position = [x, y];
        }
      });
      this.tag.addEventListener('mousedown', function (e) {
        _this2.touch_shift = [e.offsetX - _this2.tag.x.animVal.value, e.offsetY - _this2.tag.y.animVal.value];
        _this2.dragged = true;
      });
    }
  }, {
    key: "setContainer",
    value: function setContainer(svg) {
      this.svg = svg;
    }
  }, {
    key: "moving",
    value: function moving(x, y) {
      this.tag.setAttribute('x', x);
      this.tag.setAttribute('y', y);
      var event = new CustomEvent(this.id + "_moving", {
        detail: {
          x: x,
          y: y
        }
      });
      this.svg.dispatchEvent(event);
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzc3YmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NsYXNzZXMvQ2FudmEvQ2FudmEuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy92aWV3cy9TY3JpcHR1cmUudnVlPzRiZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdmlld3MvU2NyaXB0dXJlLnZ1ZT84YzcxIl0sIm5hbWVzIjpbIlBJIiwiQ2FudmEiLCJvcHRpb25zIiwiY2FudiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJlbGVtcyIsImRlYnVnIiwibW9kZWwiLCJ0YWciLCJzZXRDb250YWluZXIiLCJzZXRJZCIsIlBhdGgiLCJvcmllbnRhdGlvbl9zY2FsYXIiLCJzdmciLCJzdGFydF94Iiwic3RhcnQiLCJzdGFydF95IiwiZW5kX3giLCJlbmQiLCJlbmRfeSIsInN0YXJ0X3hfb3JpZW50Iiwic3RhcnRfeV9vcmllbnQiLCJlbmRfeF9vcmllbnQiLCJlbmRfeV9vcmllbnQiLCJ4X3NoaWZ0IiwieV9zaGlmdCIsImVuZF9hbmdsZSIsInN0YXJ0X2FuZ2xlIiwic3RhcnRfYXR0YWNoIiwiZW5kX2F0dGFjaCIsImF0dGFjaGVkIiwiaW5pdCIsInN0YXJ0T3JpZW50YXRpb24iLCJlbmRPcmllbnRhdGlvbiIsImNhbGN1bGF0ZVNjYWxhciIsInNldEF0dHJpYnV0ZSIsInJlbmRlciIsImlkIiwiTWF0aCIsInNxcnQiLCJwb3ciLCJlbGVtIiwic2lkZSIsImZvcm0iLCJmcmVzaFBvcyIsIngiLCJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZXRhaWwiLCJ0eXBlIiwiYSIsImIiLCJjIiwiZCIsImdldFZlY3RvciIsInAxIiwicDIiLCJ2MSIsInYyIiwiZG90IiwiY3Jvc3MiLCJhbmdsZSIsImF0YW4yIiwiZGVsaW1lciIsImZsb29yIiwic2luIiwiY29zIiwiVGV4dEJsb2NrIiwicG9zaXRpb24iLCJ0ZXh0IiwiY2FudmEiLCJkcmFnZ2VkIiwidG91Y2hfc2hpZnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm1vdmluZyIsImFuaW1WYWwiLCJ2YWx1ZSIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBLFNBREEscUJBQ0EsQ0FFQSxDQUhBO0FBSUEsU0FKQSxxQkFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQSwyQkFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUtBO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBS0E7QUFDQSwwQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBO0FBQ0EsMEJBREE7QUFFQSxrQkFGQTtBQUdBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSw0RkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBdERBO0FBdURBO0FBdkRBLEc7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFNQSxFQUFFLEdBQUcsT0FBWDs7SUFDTUMsSztBQUNGLGlCQUFZQyxPQUFaLEVB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S0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBK0wsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFwcC1wYWdlIGNhbnZhXCI+XG48IS0tICAgICAgICA8c3ZnIGlkPVwiY2FudmFzXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiPi0tPlxuPCEtLSAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzAwIDMwMCBDIDMwMCAzMDAsIDMwMCA1MDAsIDMwMCA1MDBcIiBzdHJva2U9XCJyZ2IoMTExIDIxMiAwKVwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwidHJhbnNwYXJlbnRcIiBpZD1cIjFcIj48L3BhdGg+LS0+XG48IS0tICAgICAgICA8L3N2Zz4tLT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtDYW52YSwgUGF0aCwgVGV4dEJsb2NrfSBmcm9tIFwiLi4vLi4vQ2xhc3Nlcy9DYW52YS9DYW52YVwiXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCl7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGV2ZW50QnVzLiRlbWl0KCdzZXQtdGl0bGUnLCAn0KHQvtC30LTQsNC90LjQtSDRgdC60YDQuNC/0YLQsCcpO1xuXG4gICAgICAgICAgICBsZXQgY2FudmEgPSBuZXcgQ2FudmEoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJ2NhbnZhJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoKHtcbiAgICAgICAgICAgICAgICBzdGFydDogWzMwMCwzMDAsIDkwXSxcbiAgICAgICAgICAgICAgICBlbmQ6IFszMDAsNTAwLCA5MF0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHBhdGgyID0gbmV3IFBhdGgoe1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBbMTAsMTAsIDkwXSxcbiAgICAgICAgICAgICAgICBlbmQ6IFs1MCw1MCwgOTBdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBwYXRoMyA9IG5ldyBQYXRoKHtcbiAgICAgICAgICAgICAgICBzdGFydDogWzEwLDEwLCA5MF0sXG4gICAgICAgICAgICAgICAgZW5kOiBbODAwLDgwMCwgOTBdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBibG9jayA9IG5ldyBUZXh0QmxvY2soe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMzAwLDMwMF0sXG4gICAgICAgICAgICAgICAgY2FudmE6IGNhbnZhLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfQotC10YHRgtC+0LLRi9C5INCx0LvQvtC6JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGJsb2NrMiA9IG5ldyBUZXh0QmxvY2soe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbNjAwLDYwMF0sXG4gICAgICAgICAgICAgICAgY2FudmE6IGNhbnZhLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfQotC10YHRgtC+0LLRi9C5INCx0LvQvtC6JyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYW52YS5hZGRFbGVtKHBhdGgpO1xuICAgICAgICAgICAgY2FudmEuYWRkRWxlbShwYXRoMik7XG4gICAgICAgICAgICBjYW52YS5hZGRFbGVtKHBhdGgzKTtcbiAgICAgICAgICAgIGNhbnZhLmFkZEVsZW0oYmxvY2spO1xuICAgICAgICAgICAgY2FudmEuYWRkRWxlbShibG9jazIpO1xuXG5cblxuICAgICAgICAgICAgcGF0aC5hdHRhY2goYmxvY2ssICdzdGFydCcpO1xuICAgICAgICAgICAgcGF0aDMuYXR0YWNoKGJsb2NrLCAnc3RhcnQnKTtcbiAgICAgICAgICAgIHBhdGguYXR0YWNoKGJsb2NrMiwgJ2VuZCcpO1xuICAgICAgICAgICAgcGF0aDIuYXR0YWNoKGJsb2NrLCAnc3RhcnQnKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmEnKVswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHBhdGguZnJlc2hTdGFydChbMzAwLDMwMCwgOTBdKTtcbiAgICAgICAgICAgICAgICAvL3BhdGguZnJlc2hFbmQoW2Uub2Zmc2V0WCwgZS5vZmZzZXRZLCA5MF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcHAtcGFnZSBjYW52YVwiIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY29uc3QgUEkgPSAzLjE0MTU5O1xuY2xhc3MgQ2FudmF7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMuY2FudiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBcInN2Z1wiKTtcbiAgICAgICAgdGhpcy5jYW52LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5jYW52LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUob3B0aW9ucy5jb250YWluZXIpWzBdO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnYpO1xuICAgICAgICB0aGlzLmVsZW1zID0gMDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuXG4gICAgYWRkRWxlbShtb2RlbCl7XG4gICAgICAgIHRoaXMuY2Fudi5hcHBlbmRDaGlsZChtb2RlbC50YWcpO1xuICAgICAgICBtb2RlbC5zZXRDb250YWluZXIodGhpcy5jYW52KTtcbiAgICAgICAgbW9kZWwuc2V0SWQoJ3BhcnQnICsgdGhpcy5lbGVtcyk7XG4gICAgICAgIHRoaXMuZWxlbXMrKztcbiAgICB9XG5cbn1cbmNsYXNzIFBhdGh7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25fc2NhbGFyID0gMDtcbiAgICAgICAgdGhpcy50YWcgPSBudWxsO1xuICAgICAgICB0aGlzLnN2ZyA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnRfeCA9IG9wdGlvbnMuc3RhcnRbMF07XG4gICAgICAgIHRoaXMuc3RhcnRfeSA9IG9wdGlvbnMuc3RhcnRbMV07XG4gICAgICAgIHRoaXMuZW5kX3ggPSBvcHRpb25zLmVuZFswXTtcbiAgICAgICAgdGhpcy5lbmRfeSA9IG9wdGlvbnMuZW5kWzFdO1xuICAgICAgICB0aGlzLnN0YXJ0X3hfb3JpZW50ID0gMDtcbiAgICAgICAgdGhpcy5zdGFydF95X29yaWVudCA9IDA7XG4gICAgICAgIHRoaXMuZW5kX3hfb3JpZW50ID0gMDtcbiAgICAgICAgdGhpcy5lbmRfeV9vcmllbnQgPSAwO1xuXG4gICAgICAgIHRoaXMueF9zaGlmdCA9IDA7XG4gICAgICAgIHRoaXMueV9zaGlmdCA9IDA7XG5cbiAgICAgICAgdGhpcy5lbmRfYW5nbGUgPSBvcHRpb25zLmVuZFsyXTtcbiAgICAgICAgdGhpcy5zdGFydF9hbmdsZSA9IG9wdGlvbnMuc3RhcnRbMl07XG5cbiAgICAgICAgdGhpcy5zdGFydF9hdHRhY2ggPSBudWxsO1xuICAgICAgICB0aGlzLmVuZF9hdHRhY2ggPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYXR0YWNoZWQgPSBbXTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLnN0YXJ0T3JpZW50YXRpb24oKTtcbiAgICAgICAgdGhpcy5lbmRPcmllbnRhdGlvbigpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNjYWxhcigpO1xuICAgICAgICB0aGlzLnRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICdwYXRoJyk7XG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYigxMTEgMjEyIDApJyk7XG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzInKTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHNldENvbnRhaW5lcihzdmcpe1xuICAgICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICB9XG4gICAgc2V0SWQoaWQpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZVNjYWxhcigpe1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uX3NjYWxhciA9IE1hdGguc3FydChNYXRoLnBvdyggKHRoaXMuZW5kX3ggLSB0aGlzLnN0YXJ0X3gpICwgMikgKyBNYXRoLnBvdyggKHRoaXMuZW5kX3kgLSB0aGlzLnN0YXJ0X3kpICwgMikpIC8gMjtcbiAgICB9XG4gICAgYXR0YWNoKGVsZW0sIHNpZGUpe1xuXG4gICAgICAgIHRoaXMuYXR0YWNoZWRbZWxlbS5pZF0gPSB7XG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICB9O1xuICAgICAgICBzd2l0Y2ggKGVsZW0uZm9ybSkge1xuICAgICAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnhfc2hpZnQgPSBlbGVtLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMueV9zaGlmdCA9IGVsZW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBzd2l0Y2ggKGVsZW0uZm9ybSkge1xuICAgICAgICAvLyAgICAgY2FzZSAncmlnaHQnOiB0aGlzLnhfc2hpZnQgPSB0aGlzLndpZHRoOyB5X3NoaWZ0ID0gdGhpcy5oZWlnaHQgLyAyOyBhbmdsZSA9IDkwOyBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgJ2xlZnQnOiB0aGlzLnlfc2hpZnQgPSB0aGlzLmhlaWdodCAvIDI7IGFuZ2xlID0gMjcwOyBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgJ3RvcCc6IHRoaXMueF9zaGlmdCA9IHRoaXMud2lkdGggLyAyOyBhbmdsZSA9IDE4MDsgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlICdib3R0b20nOiB0aGlzLnlfc2hpZnQgPSB0aGlzLmhlaWdodDsgeF9zaGlmdCA9IHRoaXMud2lkdGggLyAyOyBhbmdsZSA9IDA7IGJyZWFrO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuZnJlc2hQb3Moc2lkZSwgZWxlbS54LCBlbGVtLnkpO1xuICAgICAgICB0aGlzLnN2Zy5hZGRFdmVudExpc3RlbmVyKGVsZW0uaWQgKyAnX21vdmluZycsKGUpPT57XG4gICAgICAgICAgICB0aGlzLmZyZXNoUG9zKHNpZGUsIGUuZGV0YWlsLngsIGUuZGV0YWlsLnkpXG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmcmVzaFBvcyh0eXBlLCB4LCB5KXtcblxuICAgICAgICBsZXQgYSA9IHt4OiB0aGlzLnN0YXJ0X3ggLSAxMDAsIHk6IHRoaXMuc3RhcnRfeX07XG4gICAgICAgIGxldCBiID0ge3g6IHRoaXMuc3RhcnRfeCwgeTogdGhpcy5zdGFydF95fTtcbiAgICAgICAgbGV0IGMgPSB7eDogdGhpcy5lbmRfeCwgeTogdGhpcy5lbmRfeX07XG4gICAgICAgIGxldCBkID0ge3g6IHRoaXMuc3RhcnRfeCwgeTogdGhpcy5zdGFydF95fTtcblxuICAgICAgICBsZXQgZ2V0VmVjdG9yID0gKHAxLCBwMik9PntcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogcDIueCAtIHAxLngsXG4gICAgICAgICAgICAgICAgeTogcDIueSAtIHAxLnlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHYxID0gZ2V0VmVjdG9yKGEsIGIpO1xuICAgICAgICBsZXQgdjIgPSBnZXRWZWN0b3IoYywgZCk7XG5cbiAgICAgICAgbGV0IGRvdCA9IHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnk7XG4gICAgICAgIGxldCBjcm9zcyA9IHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLng7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoY3Jvc3MsIGRvdCk7XG5cbiAgICAgICAgbGV0IGRlbGltZXIgPSA5MDtcblxuICAgICAgICBhbmdsZSA9IE1hdGguZmxvb3IoKGFuZ2xlICogMTgwIC8gUEkgKyAxODApIC8gZGVsaW1lcik7XG4gICAgICAgIHRoaXMuc3RhcnRfYW5nbGUgPSAwIC0gKGFuZ2xlICogZGVsaW1lcik7XG4gICAgICAgIHRoaXMuZW5kX2FuZ2xlID0gMjcwIC0gKGFuZ2xlICogZGVsaW1lcik7XG5cbiAgICAgICAgdGhpc1t0eXBlICsgJ194J10gPSB4ICsgdGhpcy54X3NoaWZ0IC8gMjtcbiAgICAgICAgdGhpc1t0eXBlICsgJ195J10gPSB5ICsgdGhpcy55X3NoaWZ0IC8gMjtcbiAgICAgICAgdGhpc1t0eXBlICsgJ09yaWVudGF0aW9uJ10oKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTY2FsYXIoKTtcbiAgICAgICAgdGhpcy5zdGFydE9yaWVudGF0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5kT3JpZW50YXRpb24oKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpbnZlcnNlKHR5cGUpe1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3N0YXJ0JyA/ICdlbmQnIDogJ3N0YXJ0JztcbiAgICB9XG4gICAgc3RhcnRPcmllbnRhdGlvbigpe1xuICAgICAgICB0aGlzLnN0YXJ0X3hfb3JpZW50ID0gTWF0aC5zaW4odGhpcy5zdGFydF9hbmdsZSAqIFBJIC8gMTgwKSAqIHRoaXMub3JpZW50YXRpb25fc2NhbGFyICsgdGhpcy5zdGFydF94O1xuICAgICAgICB0aGlzLnN0YXJ0X3lfb3JpZW50ID0gTWF0aC5jb3ModGhpcy5zdGFydF9hbmdsZSAqIFBJIC8gMTgwKSAqIHRoaXMub3JpZW50YXRpb25fc2NhbGFyICsgdGhpcy5zdGFydF95O1xuICAgIH1cbiAgICBlbmRPcmllbnRhdGlvbigpe1xuICAgICAgICB0aGlzLmVuZF94X29yaWVudCA9IE1hdGguc2luKHRoaXMuZW5kX2FuZ2xlICogUEkgLyAxODApICogdGhpcy5vcmllbnRhdGlvbl9zY2FsYXIgKyB0aGlzLmVuZF94IDtcbiAgICAgICAgdGhpcy5lbmRfeV9vcmllbnQgPSBNYXRoLmNvcyh0aGlzLmVuZF9hbmdsZSAqIFBJIC8gMTgwKSAqIHRoaXMub3JpZW50YXRpb25fc2NhbGFyICsgdGhpcy5lbmRfeSA7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ2QnLCAnTScgKyB0aGlzLnN0YXJ0X3ggKyAnICcgKyB0aGlzLnN0YXJ0X3kgKyAnIEMgJyArIHRoaXMuc3RhcnRfeF9vcmllbnQgKyAnICcgKyB0aGlzLnN0YXJ0X3lfb3JpZW50ICsgJywgJyArIHRoaXMuZW5kX3hfb3JpZW50ICsgJyAnICsgdGhpcy5lbmRfeV9vcmllbnQgKyAnLCAnICsgdGhpcy5lbmRfeCArICcgJyArIHRoaXMuZW5kX3kpO1xuICAgIH1cbn1cblxuY2xhc3MgVGV4dEJsb2Nre1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgICAgICB0aGlzLnggPSBvcHRpb25zLnBvc2l0aW9uWzBdO1xuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnBvc2l0aW9uWzFdO1xuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmEgPSBvcHRpb25zLmNhbnZhO1xuICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XG4gICAgICAgIHRoaXMudG91Y2hfc2hpZnQgPSBbMCwwXTtcbiAgICAgICAgdGhpcy5mb3JtID0gJ3NxdWFyZSc7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMudGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3JlY3QnKTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCd4JywgdGhpcy54KTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCd5JywgdGhpcy55KTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiKDExMSAyMTIgMCknKTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAnKTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKT0+e1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2FudmEuY2Fudi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuZHJhZ2dlZCl7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBlLm9mZnNldFggLSB0aGlzLnRvdWNoX3NoaWZ0WzBdO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gZS5vZmZzZXRZIC0gdGhpcy50b3VjaF9zaGlmdFsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyh4LCB5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gW3gseV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMudG91Y2hfc2hpZnQgPSBbZS5vZmZzZXRYIC0gdGhpcy50YWcueC5hbmltVmFsLnZhbHVlLCBlLm9mZnNldFkgLSB0aGlzLnRhZy55LmFuaW1WYWwudmFsdWVdO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldENvbnRhaW5lcihzdmcpe1xuICAgICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICB9XG4gICAgbW92aW5nKHgsIHkpe1xuICAgICAgICB0aGlzLnRhZy5zZXRBdHRyaWJ1dGUoJ3gnLCB4KTtcbiAgICAgICAgdGhpcy50YWcuc2V0QXR0cmlidXRlKCd5JywgeSk7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0aGlzLmlkICsgXCJfbW92aW5nXCIsIHtkZXRhaWw6IHt4OngsIHk6eX19KTtcbiAgICAgICAgdGhpcy5zdmcuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGFnLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ2FudmE6IENhbnZhLFxuICAgIFBhdGg6IFBhdGgsXG4gICAgVGV4dEJsb2NrOiBUZXh0QmxvY2tcbn07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdkMTUwYzEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT1NQYW5lbFxcXFxkb21haW5zXFxcXG1hbmFnZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdkMTUwYzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdkMTUwYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdkMTUwYzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdkMTUwYzEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdkMTUwYzEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3ZpZXdzL1NjcmlwdHVyZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjcmlwdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NyaXB0dXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY3JpcHR1cmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZDE1MGMxJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==