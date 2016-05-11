webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(159);

	var _actions = __webpack_require__(515);

	var actions = _interopRequireWildcard(_actions);

	var _reactExtend = __webpack_require__(516);

	var _reactExtend2 = _interopRequireDefault(_reactExtend);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//改造后的父类组件（构造方法会默认的收集该组件的setState方法）
	var newactions = (0, _reactExtend.bindAction)(actions);
	var SubMenu = _antd.Menu.SubMenu;
	var MenuItemGroup = _antd.Menu.ItemGroup;

	var Nav = function (_Component) {
		_inherits(Nav, _Component);

		function Nav() {
			_classCallCheck(this, Nav);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).apply(this, arguments));
		}

		_createClass(Nav, [{
			key: "init",
			value: function init() {
				newactions.createNav()(Nav);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {}
		}, {
			key: "mapItem",
			value: function mapItem() {
				var keys = Math.random() * 15 + 1;
				var loop = function loop(data, Node) {
					var key = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];

					return data && data.map(function (item, index) {
						keys++;
						if (Node && item.children) {
							return _react2.default.createElement(
								Node,
								{ key: keys, title: "分组1" },
								loop(item.children, null, "setting:")
							);
						} else if (item.children) {
							return _react2.default.createElement(
								SubMenu,
								{ key: "SubMenu" + keys, title: _react2.default.createElement(
										"span",
										null,
										_react2.default.createElement(_antd.Icon, { type: "setting" }),
										item.name
									) },
								loop(item.children, MenuItemGroup)
							);
						} else {
							return _react2.default.createElement(
								_antd.Menu.Item,
								{ key: key + keys },
								_react2.default.createElement(_antd.Icon, { type: "mail" }),
								item.name
							);
						}
					});
				};
				return loop(this.data.nav || []);
			}
		}, {
			key: "render",
			value: function render() {
				this.data.nav && Other.dispatch(this.data.nav[0]);
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_antd.Menu,
						{ mode: "horizontal" },
						this.mapItem()
					),
					_react2.default.createElement(Test, { listener: this.data, test: "添加菜单" })
				);
			}
		}]);

		return Nav;
	}(_reactExtend2.default);

	var Test = function (_Component2) {
		_inherits(Test, _Component2);

		function Test() {
			_classCallCheck(this, Test);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Test).apply(this, arguments));
		}

		_createClass(Test, [{
			key: "init",
			value: function init() {}
		}, {
			key: "clickHanlder",
			value: function clickHanlder() {
				newactions.addNav()(Nav);
			}
		}, {
			key: "restHanlder",
			value: function restHanlder() {
				newactions.createNav()(Nav);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"h1",
						{ onClick: this.clickHanlder.bind(this) },
						this.props.test
					),
					_react2.default.createElement(
						"p",
						{ onClick: this.restHanlder.bind(this) },
						"重置"
					)
				);
			}
		}]);

		return Test;
	}(_reactExtend2.default);

	var Other = function (_Component3) {
		_inherits(Other, _Component3);

		function Other() {
			_classCallCheck(this, Other);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Other).apply(this, arguments));
		}

		_createClass(Other, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"p",
					null,
					this.data.name
				);
			}
		}]);

		return Other;
	}(_reactExtend2.default);

	_reactDom2.default.render(_react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(Nav, null),
		_react2.default.createElement(Other, null)
	), document.getElementById("container"));

/***/ },

/***/ 515:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.cut = cut;
	exports.addNav = addNav;
	exports.createNav = createNav;
	function cut(state, data) {
		return {
			type: "CUT",
			content: state.content - 1 || 0
		};
	}
	function addNav(state) {
		state.nav.push({
			name: "微坛02",
			id: 15,
			children: [{
				name: "管理",
				id: 16,
				children: [{
					name: "邦德",
					id: 17
				}]
			}, {
				name: "管理",
				id: 18,
				children: [{
					name: "邦德",
					id: 19
				}, {
					name: "火种",
					id: 20
				}]
			}]
		});
		return state;
	}
	function createNav() {
		return function (component) {
			setTimeout(function (res) {
				component.dispatch({
					nav: [{
						name: "药联",
						id: 1,
						children: [{
							name: "海景",
							id: 2,
							children: [{
								name: "邦德",
								id: 3
							}]
						}]
					}, {
						name: "微坛",
						id: 4,
						children: [{
							name: "管理",
							id: 5,
							children: [{
								name: "邦德",
								id: 6
							}]
						}, {
							name: "管理",
							id: 7,
							children: [{
								name: "邦德",
								id: 8
							}, {
								name: "火种",
								id: 9
							}]
						}]
					}]
				});
			}, 1000);
		};
	}

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.bindAction = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(147);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var setStateList = {};

	var newComponent = function (_Component) {
		_inherits(newComponent, _Component);

		function newComponent(props) {
			_classCallCheck(this, newComponent);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(newComponent).call(this, props));

			_this.props.listener && event.listener(_this.constructor.name, _this.props.listener);
			setStateList[_this.constructor.name] = setState.bind(_this); //收集每个组件的setState方法
			_this.constructor.listener = event.listener; //提供监听接口，可以监听额外数据
			_this.constructor.dispatch = event.dispatch; //发布接口
			_this.constructor.getData = event.getData;
			_this.init && _this.init(); //组件初始化提供接口
			setData.call(_this); //更新属性
			return _this;
		}

		_createClass(newComponent, [{
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps, nextState) {
				setData.call(this, nextProps, nextState);
				return true;
			}
		}]);

		return newComponent;
	}(_react.Component);

	exports.default = newComponent;

	function setData() {
		var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
		var state = arguments.length <= 1 || arguments[1] === undefined ? this.state : arguments[1];

		if (props.listener) {
			//this.props.initProps
			var data = Object.assign(props.listener, this.data || {}, state);
			delete data.listener;
		}
		//提供给组件使用的数据，因为react的this.props很难维护，所以添加了新的属性this.toProp来代替this.props
		this.data = data ? data : Object.assign({}, state);
	}
	function setState(data) {
		var component = this.constructor.name,
		    props = event.getData(component);
		if (isObject(data)) {
			//更新状态
			this.setState(props ? Object.assign(props, data) : data);
		}
	}
	var event = function () {
		var listenerData = {},
		    //组件数据列表
		updateComponents = {}; //依赖列表，以数据决定依赖
		function listener(type, data) {
			//监听数据
			if (typeof type !== "string" && isObject(type)) {
				data = type;
				type = this.name;
			}
			if (isObject(data)) {
				listenerData[type] = data;
				updateComponents[data] ? updateComponents[data].push(type) : updateComponents[data] = [type];
			}
		}
		function getData(type, status) {
			type = type || this.name;
			if (status) {
				return Object.assign({}, listenerData[type]); //获取的组件数据
			} else {
					return listenerData[type];
				}
		}
		function dispatch(data, status) {
			//更新状态并处理依赖,param监听一个方方法的参数,status=true开启更新依赖模式
			var type = this.name; //组件名
			var components = updateComponents[listenerData[type]]; //获取使用该数据该的组件
			if (!isObject(data) && data !== "function") {
				throw new Error("dispatch参数错误！");
			}
			if (typeof data === "function") {
				data(this);
				return false;
			}
			if (!components) {
				listener(type, data);
				components = [type];
			}
			if (!status) {
				setStateList[type](data);
				return false;
			}
			//更新所有使用了该数据的组件
			components.forEach(function (item) {
				setStateList[item](data);
			});
		}
		return {
			listener: listener,
			getData: getData,
			dispatch: dispatch
		};
	}();
	var isObject = function isObject(data) {
		return Object.prototype.toString.call(data).indexOf("object") != -1;
	};
	//包装actions
	var bindActionCreators = function bindActionCreators(action) {
		return function () {
			for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
				param[_key] = arguments[_key];
			}

			return function (component) {
				component.dispatch(action.apply(undefined, [event.getData(component.name)].concat(param)));
			};
		};
	};
	var bindAction = exports.bindAction = function bindAction(action) {
		if (typeof action == "function") {
			return bindActionCreators(action);
		}
		if (isObject(action)) {
			var newAction = {};
			var keys = Object.keys(action);
			for (var i = 0; i < keys.length; i++) {
				newAction[keys[i]] = bindActionCreators(action[keys[i]]);
			}
		}
		return newAction;
	};

/***/ }

});