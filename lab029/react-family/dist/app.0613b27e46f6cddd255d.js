webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(60);
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bundle = function (_Component) {
    _inherits(Bundle, _Component);

    function Bundle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Bundle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Bundle, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.load(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.load !== this.props.load) {
                this.load(nextProps);
            }
        }
    }, {
        key: 'load',
        value: function load(props) {
            var _this2 = this;

            this.setState({
                mod: null
            });
            props.load(function (mod) {
                _this2.setState({
                    // handle both es imports and cjs
                    mod: mod.default ? mod.default : mod
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.state.mod);
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Bundle;
}(_react.Component);

var _default = Bundle;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Bundle, 'Bundle', 'E:/Workspace/js-labs/lab029/react-family/src/router/Bundle.js');
    reactHotLoader.register(_default, 'default', 'E:/Workspace/js-labs/lab029/react-family/src/router/Bundle.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(121));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(122));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(123));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(124));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.reset = reset;

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var INCREMENT = exports.INCREMENT = "counter/INCREMENT";
var DECREMENT = exports.DECREMENT = "counter/DECREMENT";
var RESET = exports.RESET = "counter/RESET";

function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

function reset() {
    return { type: RESET };
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(INCREMENT, "INCREMENT", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(DECREMENT, "DECREMENT", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(RESET, "RESET", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(increment, "increment", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(decrement, "decrement", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js");
    reactHotLoader.register(reset, "reset", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserInfo = getUserInfo;

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var GET_USER_INFO_REQUEST = exports.GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
var GET_USER_INFO_SUCCESS = exports.GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
var GET_USER_INFO_FAIL = exports.GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    };
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    };
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    };
}

function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:8080/api/user.json').then(function (response) {
            return response.json();
        }).then(function (json) {
            dispatch(getUserInfoSuccess(json));
        }).catch(function () {
            dispatch(getUserInfoFail());
        });
    };
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(GET_USER_INFO_REQUEST, "GET_USER_INFO_REQUEST", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(GET_USER_INFO_SUCCESS, "GET_USER_INFO_SUCCESS", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(GET_USER_INFO_FAIL, "GET_USER_INFO_FAIL", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfoRequest, "getUserInfoRequest", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfoSuccess, "getUserInfoSuccess", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfoFail, "getUserInfoFail", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    reactHotLoader.register(getUserInfo, "getUserInfo", "E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(0);

var _reactRedux = __webpack_require__(25);

var _store = __webpack_require__(84);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(89);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

//初始化
renderWithHotReload((0, _router2.default)());

//热更新
if (false) {
    module.hot.accept('./router/router', function () {
        var getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    _reactDom2.default.render(_react2.default.createElement(
        _reactHotLoader.AppContainer,
        null,
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: _store2.default },
            RootElement
        )
    ), document.getElementById("app"));
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(renderWithHotReload, 'renderWithHotReload', 'E:/Workspace/js-labs/lab029/react-family/src/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(1)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(85);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(86);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, 'store', 'E:/Workspace/js-labs/lab029/react-family/src/redux/store.js');
  reactHotLoader.register(_default, 'default', 'E:/Workspace/js-labs/lab029/react-family/src/redux/store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(14);

var _counter = __webpack_require__(87);

var _counter2 = _interopRequireDefault(_counter);

var _userInfo = __webpack_require__(88);

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _default = (0, _redux.combineReducers)({
    counter: _counter2.default,
    userInfo: _userInfo2.default
});

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'E:/Workspace/js-labs/lab029/react-family/src/redux/reducers.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _counter = __webpack_require__(46);

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

//初始化state
var initState = {
    count: 0
};

//reducer
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _counter.INCREMENT:
            return {
                count: state.count + 1
            };
        case _counter.DECREMENT:
            return {
                count: state.count - 1
            };
        case _counter.RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initState, "initState", "E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/counter.js");
    reactHotLoader.register(reducer, "reducer", "E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/counter.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _userInfo = __webpack_require__(47);

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _userInfo.GET_USER_INFO_REQUEST:
            return _extends({}, state, {
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            });
        case _userInfo.GET_USER_INFO_SUCCESS:
            return _extends({}, state, {
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: ''
            });
        case _userInfo.GET_USER_INFO_FAIL:
            return _extends({}, state, {
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            });
        default:
            return state;
    }
}
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initState, 'initState', 'E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/userInfo.js');
    reactHotLoader.register(reducer, 'reducer', 'E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/userInfo.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(38);

var _Bundle = __webpack_require__(115);

var _Bundle2 = _interopRequireDefault(_Bundle);

var _Home = __webpack_require__(116);

var _Home2 = _interopRequireDefault(_Home);

var _Page = __webpack_require__(117);

var _Page2 = _interopRequireDefault(_Page);

var _Counter = __webpack_require__(118);

var _Counter2 = _interopRequireDefault(_Counter);

var _UserInfo = __webpack_require__(119);

var _UserInfo2 = _interopRequireDefault(_UserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        null,
        'Loading...'
    );
};

var createComponent = function createComponent(component) {
    return function (props) {
        return _react2.default.createElement(
            _Bundle2.default,
            { load: component },
            function (Component) {
                return Component ? _react2.default.createElement(Component, props) : _react2.default.createElement(Loading, null);
            }
        );
    };
};

var getRouter = function getRouter() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        '\u9996\u9875'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/page1' },
                        'Page1'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/counter' },
                        'Counter'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/userinfo' },
                        'UserInfo'
                    )
                )
            ),
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: createComponent(_Home2.default) }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/page1', component: createComponent(_Page2.default) }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/counter', component: createComponent(_Counter2.default) }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/userinfo', component: createComponent(_UserInfo2.default) })
            )
        )
    );
};

var _default = getRouter;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'E:/Workspace/js-labs/lab029/react-family/src/router/router.js');
    reactHotLoader.register(createComponent, 'createComponent', 'E:/Workspace/js-labs/lab029/react-family/src/router/router.js');
    reactHotLoader.register(getRouter, 'getRouter', 'E:/Workspace/js-labs/lab029/react-family/src/router/router.js');
    reactHotLoader.register(_default, 'default', 'E:/Workspace/js-labs/lab029/react-family/src/router/router.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ })

},[48]);
//# sourceMappingURL=app.0613b27e46f6cddd255d.js.map