webpackJsonp([4],{0:function(e,t,r){"use strict";e.exports=r(60)},115:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);var Bundle=function(_Component){function Bundle(){var e,t,r;_classCallCheck(this,Bundle);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r=_possibleConstructorReturn(this,(e=Bundle.__proto__||Object.getPrototypeOf(Bundle)).call.apply(e,[this].concat(o))),r.state={mod:null},_possibleConstructorReturn(r,t)}return _inherits(Bundle,_Component),_createClass(Bundle,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.props.children(this.state.mod)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bundle}(_react.Component),_default=Bundle,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(Bundle,"Bundle","E:/Workspace/js-labs/lab029/react-family/src/router/Bundle.js"),reactHotLoader.register(_default,"default","E:/Workspace/js-labs/lab029/react-family/src/router/Bundle.js"),leaveModule(module))}).call(exports,__webpack_require__(6)(module))},116:function(e,t,r){e.exports=function(e){r.e(2).then(function(t){e(r(121))}.bind(null,r)).catch(r.oe)}},117:function(e,t,r){e.exports=function(e){r.e(0).then(function(t){e(r(122))}.bind(null,r)).catch(r.oe)}},118:function(e,t,r){e.exports=function(e){r.e(3).then(function(t){e(r(123))}.bind(null,r)).catch(r.oe)}},119:function(e,t,r){e.exports=function(e){r.e(1).then(function(t){e(r(124))}.bind(null,r)).catch(r.oe)}},46:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.increment=s,t.decrement=i,t.reset=f,(n=r(0).enterModule)&&n(e);var o,a,u=t.INCREMENT="counter/INCREMENT",l=t.DECREMENT="counter/DECREMENT",c=t.RESET="counter/RESET";function s(){return{type:u}}function i(){return{type:l}}function f(){return{type:c}}o=r(0).default,a=r(0).leaveModule,o&&(o.register(u,"INCREMENT","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(l,"DECREMENT","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(c,"RESET","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(s,"increment","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(i,"decrement","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(f,"reset","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),a(e))}).call(t,r(6)(e))},47:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=d,(n=r(0).enterModule)&&n(e);var o,a,u=t.GET_USER_INFO_REQUEST="userInfo/GET_USER_INFO_REQUEST",l=t.GET_USER_INFO_SUCCESS="userInfo/GET_USER_INFO_SUCCESS",c=t.GET_USER_INFO_FAIL="userInfo/GET_USER_INFO_FAIL";function s(){return{type:u}}function i(e){return{type:l,userInfo:e}}function f(){return{type:c}}function d(){return function(e){return e(s()),fetch("http://localhost:8080/api/user.json").then(function(e){return e.json()}).then(function(t){e(i(t))}).catch(function(){e(f())})}}o=r(0).default,a=r(0).leaveModule,o&&(o.register(u,"GET_USER_INFO_REQUEST","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(l,"GET_USER_INFO_SUCCESS","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(c,"GET_USER_INFO_FAIL","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(s,"getUserInfoRequest","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(i,"getUserInfoSuccess","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(f,"getUserInfoFail","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(d,"getUserInfo","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),a(e))}).call(t,r(6)(e))},48:function(e,t,r){e.exports=r(49)},49:function(e,t,r){"use strict";(function(e){var t,n,o,a=f(r(1)),u=f(r(26)),l=r(0),c=r(25),s=f(r(84)),i=f(r(89));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){u.default.render(a.default.createElement(l.AppContainer,null,a.default.createElement(c.Provider,{store:s.default},e)),document.getElementById("app"))}(t=r(0).enterModule)&&t(e),d((0,i.default)()),n=r(0).default,o=r(0).leaveModule,n&&(n.register(d,"renderWithHotReload","E:/Workspace/js-labs/lab029/react-family/src/index.js"),o(e))}).call(t,r(6)(e))},6:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},60:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(1))&&"object"==typeof n&&"default"in n?n.default:n,a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.Children.only(this.props.children)},t}(o.Component);t.AppContainer=l,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){}},84:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(14),a=l(r(85)),u=l(r(86));function l(e){return e&&e.__esModule?e:{default:e}}(n=r(0).enterModule)&&n(e);var c,s,i=(0,o.createStore)(u.default,(0,o.applyMiddleware)(a.default)),f=i;t.default=f,c=r(0).default,s=r(0).leaveModule,c&&(c.register(i,"store","E:/Workspace/js-labs/lab029/react-family/src/redux/store.js"),c.register(f,"default","E:/Workspace/js-labs/lab029/react-family/src/redux/store.js"),s(e))}).call(t,r(6)(e))},85:function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t.default=o},86:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(14),a=l(r(87)),u=l(r(88));function l(e){return e&&e.__esModule?e:{default:e}}(n=r(0).enterModule)&&n(e);var c,s,i=(0,o.combineReducers)({counter:a.default,userInfo:u.default});t.default=i,c=r(0).default,s=r(0).leaveModule,c&&(c.register(i,"default","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers.js"),s(e))}).call(t,r(6)(e))},87:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n,o=r(46);(n=r(0).enterModule)&&n(e);var a,u,l={count:0};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;switch(arguments[1].type){case o.INCREMENT:return{count:e.count+1};case o.DECREMENT:return{count:e.count-1};case o.RESET:return{count:0};default:return e}}a=r(0).default,u=r(0).leaveModule,a&&(a.register(l,"initState","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/counter.js"),a.register(c,"reducer","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/counter.js"),u(e))}).call(t,r(6)(e))},88:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=s;var o,a=r(47);(o=r(0).enterModule)&&o(e);var u,l,c={isLoading:!1,userInfo:{},errorMsg:""};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case a.GET_USER_INFO_REQUEST:return n({},e,{isLoading:!0,userInfo:{},errorMsg:""});case a.GET_USER_INFO_SUCCESS:return n({},e,{isLoading:!1,userInfo:t.userInfo,errorMsg:""});case a.GET_USER_INFO_FAIL:return n({},e,{isLoading:!1,userInfo:{},errorMsg:"请求错误"});default:return e}}u=r(0).default,l=r(0).leaveModule,u&&(u.register(c,"initState","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/userInfo.js"),u.register(s,"reducer","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/userInfo.js"),l(e))}).call(t,r(6)(e))},89:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=f(r(1)),a=r(38),u=f(r(115)),l=f(r(116)),c=f(r(117)),s=f(r(118)),i=f(r(119));function f(e){return e&&e.__esModule?e:{default:e}}(n=r(0).enterModule)&&n(e);var d,p,_=function(){return o.default.createElement("div",null,"Loading...")},E=function(e){return function(t){return o.default.createElement(u.default,{load:e},function(e){return e?o.default.createElement(e,t):o.default.createElement(_,null)})}},b=function(){return o.default.createElement(a.BrowserRouter,null,o.default.createElement("div",null,o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/"},"首页")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/page1"},"Page1")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/counter"},"Counter")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/userinfo"},"UserInfo"))),o.default.createElement(a.Switch,null,o.default.createElement(a.Route,{exact:!0,path:"/",component:E(l.default)}),o.default.createElement(a.Route,{path:"/page1",component:E(c.default)}),o.default.createElement(a.Route,{path:"/counter",component:E(s.default)}),o.default.createElement(a.Route,{path:"/userinfo",component:E(i.default)}))))},y=b;t.default=y,d=r(0).default,p=r(0).leaveModule,d&&(d.register(_,"Loading","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),d.register(E,"createComponent","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),d.register(b,"getRouter","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),d.register(y,"default","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),p(e))}).call(t,r(6)(e))}},[48]);