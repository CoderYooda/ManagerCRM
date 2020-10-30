(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Settings/Image.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Settings/Image.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      bodyIsDark: false,
      asideIsDark: false,
      isFullwidth: false
    };
  },
  mounted: function mounted() {
    this.prepareSettings();
  },
  methods: {
    setTheme: function setTheme() {
      this.asideIsDark = this.bodyIsDark ? true : this.asideIsDark;
      this.saveToLocalStorage('body_class', this.bodyIsDark ? 'dark' : 'dark-white');
      this.saveToLocalStorage('aside_class', this.asideIsDark ? 'dark' : 'dark-white');
      this.saveToLocalStorage('isFullwidth', this.isFullwidth);
      this.$eventBus.$emit('themeChanged');
    },
    prepareSettings: function prepareSettings() {
      var body_class = this.getFromLocalStorage('body_class');
      var aside_class = this.getFromLocalStorage('aside_class');
      var isFullwidth = this.getFromLocalStorage('isFullwidth');
      this.bodyIsDark = body_class === 'dark';
      this.asideIsDark = aside_class === 'dark';
      this.isFullwidth = isFullwidth === 'true';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Settings/Image.vue?vue&type=template&id=01aa52fb&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Settings/Image.vue?vue&type=template&id=01aa52fb& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "p-4 b-b _600" }, [
      _vm._v("Настройки изображения")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "p-4 col-md-6" }, [
      _c("div", { staticClass: "box" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "box-divider m-0" }),
        _vm._v(" "),
        _c("div", { staticClass: "box-body" }, [
          _c("form", [
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-6 col-form-label" }, [
                _vm._v("Тёмная тема")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("label", { staticClass: "md-switch p-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.bodyIsDark,
                        expression: "bodyIsDark"
                      }
                    ],
                    attrs: { type: "checkbox", checked: "" },
                    domProps: {
                      checked: Array.isArray(_vm.bodyIsDark)
                        ? _vm._i(_vm.bodyIsDark, null) > -1
                        : _vm.bodyIsDark
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.bodyIsDark,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.bodyIsDark = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.bodyIsDark = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.bodyIsDark = $$c
                          }
                        },
                        function($event) {
                          return _vm.setTheme()
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "blue" })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-6 col-form-label" }, [
                _vm._v("Тёмное меню")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("label", { staticClass: "md-switch p-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.asideIsDark,
                        expression: "asideIsDark"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      checked: "",
                      disabled: _vm.bodyIsDark
                    },
                    domProps: {
                      checked: Array.isArray(_vm.asideIsDark)
                        ? _vm._i(_vm.asideIsDark, null) > -1
                        : _vm.asideIsDark
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.asideIsDark,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.asideIsDark = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.asideIsDark = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.asideIsDark = $$c
                          }
                        },
                        function($event) {
                          return _vm.setTheme()
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "blue" })
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "box-divider m-0" }),
        _vm._v(" "),
        _c("div", { staticClass: "box-body" }, [
          _c("form", [
            _c("div", { staticClass: "form-group row" }, [
              _c("label", { staticClass: "col-sm-6 col-form-label" }, [
                _vm._v("На всю ширину")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("label", { staticClass: "md-switch p-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.isFullwidth,
                        expression: "isFullwidth"
                      }
                    ],
                    attrs: { type: "checkbox", checked: "" },
                    domProps: {
                      checked: Array.isArray(_vm.isFullwidth)
                        ? _vm._i(_vm.isFullwidth, null) > -1
                        : _vm.isFullwidth
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.isFullwidth,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.isFullwidth = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.isFullwidth = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.isFullwidth = $$c
                          }
                        },
                        function($event) {
                          return _vm.setTheme()
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "blue" })
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header" }, [
      _c("h2", [_vm._v("Цветовая настройка приложения")]),
      _vm._v(" "),
      _c("small", [
        _vm._v(
          "Настройте удобный для себя цветовой стиль приложения. Доступны тёмная и светлая тема"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header" }, [
      _c("h2", [_vm._v("Форма отображения")]),
      _vm._v(" "),
      _c("small", [
        _vm._v(
          "Используйте полноеэкранный режим для максимального использования монитора, или компактную версию"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/Settings/Image.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/views/Settings/Image.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_vue_vue_type_template_id_01aa52fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=01aa52fb& */ "./resources/js/components/views/Settings/Image.vue?vue&type=template&id=01aa52fb&");
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Settings/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Image_vue_vue_type_template_id_01aa52fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Image_vue_vue_type_template_id_01aa52fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Settings/Image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Settings/Image.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/views/Settings/Image.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Settings/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Settings/Image.vue?vue&type=template&id=01aa52fb&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/views/Settings/Image.vue?vue&type=template&id=01aa52fb& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_01aa52fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=template&id=01aa52fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Settings/Image.vue?vue&type=template&id=01aa52fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_01aa52fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_01aa52fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);