webpackJsonp([1],{124:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(25),_userInfo=__webpack_require__(47),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);var UserInfo=function(_Component){function UserInfo(){return _classCallCheck(this,UserInfo),_possibleConstructorReturn(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return _inherits(UserInfo,_Component),_createClass(UserInfo,[{key:"render",value:function(){var e=this,r=this.props.userInfo,t=r.userInfo,n=r.isLoading,o=r.errorMsg;return _react2.default.createElement("div",null,n?"请求信息中......":o||_react2.default.createElement("div",null,_react2.default.createElement("p",null,"用户信息："),_react2.default.createElement("p",null,"用户名：",t.name),_react2.default.createElement("p",null,"介绍：",t.intro)),_react2.default.createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户信息"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),UserInfo}(_react.Component),_default=(0,_reactRedux.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:_userInfo.getUserInfo})(UserInfo),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(UserInfo,"UserInfo","E:/Workspace/js-labs/lab029/react-family/src/pages/UserInfo/UserInfo.js"),reactHotLoader.register(_default,"default","E:/Workspace/js-labs/lab029/react-family/src/pages/UserInfo/UserInfo.js"),leaveModule(module))}).call(exports,__webpack_require__(6)(module))}});