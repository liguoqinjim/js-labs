webpackJsonp([5],{0:function(e,t,r){e.exports=r("lVK7")},"0bWk":function(e,t,r){e.exports=function(e){r.e(1).then(function(t){e(r("8GHp"))}.bind(null,r)).catch(r.oe)}},"9rJ+":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},BVBi:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=d,(n=r("IDVs").enterModule)&&n(e);var o,a,u=t.GET_USER_INFO_REQUEST="userInfo/GET_USER_INFO_REQUEST",l=t.GET_USER_INFO_SUCCESS="userInfo/GET_USER_INFO_SUCCESS",s=t.GET_USER_INFO_FAIL="userInfo/GET_USER_INFO_FAIL";function c(){return{type:u}}function i(e){return{type:l,userInfo:e}}function f(){return{type:s}}function d(){return function(e){return e(c()),fetch("http://localhost:8080/api/user.json").then(function(e){return e.json()}).then(function(t){e(i(t))}).catch(function(){e(f())})}}o=r("IDVs").default,a=r("IDVs").leaveModule,o&&(o.register(u,"GET_USER_INFO_REQUEST","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(l,"GET_USER_INFO_SUCCESS","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(s,"GET_USER_INFO_FAIL","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(c,"getUserInfoRequest","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(i,"getUserInfoSuccess","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(f,"getUserInfoFail","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),o.register(d,"getUserInfo","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/userInfo.js"),a(e))}).call(t,r("9rJ+")(e))},BzaK:function(e,t,r){e.exports=function(e){r.e(3).then(function(t){e(r("KCvP"))}.bind(null,r)).catch(r.oe)}},"C+gl":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n,o=r("oTjF");(n=r("IDVs").enterModule)&&n(e);var a,u,l={count:0};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;switch(arguments[1].type){case o.INCREMENT:return{count:e.count+1};case o.DECREMENT:return{count:e.count-1};case o.RESET:return{count:0};default:return e}}a=r("IDVs").default,u=r("IDVs").leaveModule,a&&(a.register(l,"initState","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/counter.js"),a.register(s,"reducer","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/counter.js"),u(e))}).call(t,r("9rJ+")(e))},Hxpq:function(e,t,r){e.exports=function(e){r.e(2).then(function(t){e(r("hlLI"))}.bind(null,r)).catch(r.oe)}},IDVs:function(e,t,r){"use strict";e.exports=r("tVN6")},JU1R:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=f(r("2144")),a=r("3vYS"),u=f(r("gf5I")),l=f(r("Hxpq")),s=f(r("kDOR")),c=f(r("BzaK")),i=f(r("0bWk"));function f(e){return e&&e.__esModule?e:{default:e}}(n=r("IDVs").enterModule)&&n(e);var d,p,_=function(){return o.default.createElement("div",null,"Loading...")},E=function(e){return function(t){return o.default.createElement(u.default,{load:e},function(e){return e?o.default.createElement(e,t):o.default.createElement(_,null)})}},b=function(){return o.default.createElement(a.BrowserRouter,null,o.default.createElement("div",null,o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/"},"首页")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/page1"},"Page1")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/counter"},"Counter")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/userinfo"},"UserInfo"))),o.default.createElement(a.Switch,null,o.default.createElement(a.Route,{exact:!0,path:"/",component:E(l.default)}),o.default.createElement(a.Route,{path:"/page1",component:E(s.default)}),o.default.createElement(a.Route,{path:"/counter",component:E(c.default)}),o.default.createElement(a.Route,{path:"/userinfo",component:E(i.default)}))))},y=b;t.default=y,d=r("IDVs").default,p=r("IDVs").leaveModule,d&&(d.register(_,"Loading","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),d.register(E,"createComponent","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),d.register(b,"getRouter","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),d.register(y,"default","E:/Workspace/js-labs/lab029/react-family/src/router/router.js"),p(e))}).call(t,r("9rJ+")(e))},PDYz:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=c;var o,a=r("BVBi");(o=r("IDVs").enterModule)&&o(e);var u,l,s={isLoading:!1,userInfo:{},errorMsg:""};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case a.GET_USER_INFO_REQUEST:return n({},e,{isLoading:!0,userInfo:{},errorMsg:""});case a.GET_USER_INFO_SUCCESS:return n({},e,{isLoading:!1,userInfo:t.userInfo,errorMsg:""});case a.GET_USER_INFO_FAIL:return n({},e,{isLoading:!1,userInfo:{},errorMsg:"请求错误"});default:return e}}u=r("IDVs").default,l=r("IDVs").leaveModule,u&&(u.register(s,"initState","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/userInfo.js"),u.register(c,"reducer","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers/userInfo.js"),l(e))}).call(t,r("9rJ+")(e))},VCmz:function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t.default=o},WqZW:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("ks3K"),a=l(r("VCmz")),u=l(r("qCuJ"));function l(e){return e&&e.__esModule?e:{default:e}}(n=r("IDVs").enterModule)&&n(e);var s,c,i=(0,o.createStore)(u.default,(0,o.applyMiddleware)(a.default)),f=i;t.default=f,s=r("IDVs").default,c=r("IDVs").leaveModule,s&&(s.register(i,"store","E:/Workspace/js-labs/lab029/react-family/src/redux/store.js"),s.register(f,"default","E:/Workspace/js-labs/lab029/react-family/src/redux/store.js"),c(e))}).call(t,r("9rJ+")(e))},gf5I:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("2144"),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__("IDVs").enterModule,enterModule&&enterModule(module);var Bundle=function(_Component){function Bundle(){var e,t,r;_classCallCheck(this,Bundle);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r=_possibleConstructorReturn(this,(e=Bundle.__proto__||Object.getPrototypeOf(Bundle)).call.apply(e,[this].concat(o))),r.state={mod:null},_possibleConstructorReturn(r,t)}return _inherits(Bundle,_Component),_createClass(Bundle,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.props.children(this.state.mod)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bundle}(_react.Component),_default=Bundle,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("IDVs").default,leaveModule=__webpack_require__("IDVs").leaveModule,reactHotLoader&&(reactHotLoader.register(Bundle,"Bundle","E:/Workspace/js-labs/lab029/react-family/src/router/Bundle.js"),reactHotLoader.register(_default,"default","E:/Workspace/js-labs/lab029/react-family/src/router/Bundle.js"),leaveModule(module))}).call(exports,__webpack_require__("9rJ+")(module))},kDOR:function(e,t,r){e.exports=function(e){r.e(0).then(function(t){e(r("ZGsU"))}.bind(null,r)).catch(r.oe)}},lVK7:function(e,t,r){"use strict";(function(e){var t,n,o,a=f(r("2144")),u=f(r("hoja")),l=r("IDVs"),s=r("nliw"),c=f(r("WqZW")),i=f(r("JU1R"));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){u.default.render(a.default.createElement(l.AppContainer,null,a.default.createElement(s.Provider,{store:c.default},e)),document.getElementById("app"))}(t=r("IDVs").enterModule)&&t(e),d((0,i.default)()),n=r("IDVs").default,o=r("IDVs").leaveModule,n&&(n.register(d,"renderWithHotReload","E:/Workspace/js-labs/lab029/react-family/src/index.js"),o(e))}).call(t,r("9rJ+")(e))},oTjF:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.increment=c,t.decrement=i,t.reset=f,(n=r("IDVs").enterModule)&&n(e);var o,a,u=t.INCREMENT="counter/INCREMENT",l=t.DECREMENT="counter/DECREMENT",s=t.RESET="counter/RESET";function c(){return{type:u}}function i(){return{type:l}}function f(){return{type:s}}o=r("IDVs").default,a=r("IDVs").leaveModule,o&&(o.register(u,"INCREMENT","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(l,"DECREMENT","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(s,"RESET","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(c,"increment","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(i,"decrement","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),o.register(f,"reset","E:/Workspace/js-labs/lab029/react-family/src/redux/actions/counter.js"),a(e))}).call(t,r("9rJ+")(e))},qCuJ:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("ks3K"),a=l(r("C+gl")),u=l(r("PDYz"));function l(e){return e&&e.__esModule?e:{default:e}}(n=r("IDVs").enterModule)&&n(e);var s,c,i=(0,o.combineReducers)({counter:a.default,userInfo:u.default});t.default=i,s=r("IDVs").default,c=r("IDVs").leaveModule,s&&(s.register(i,"default","E:/Workspace/js-labs/lab029/react-family/src/redux/reducers.js"),c(e))}).call(t,r("9rJ+")(e))},tVN6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r("2144"))&&"object"==typeof n&&"default"in n?n.default:n,a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.Children.only(this.props.children)},t}(o.Component);t.AppContainer=l,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){}}},[0]);