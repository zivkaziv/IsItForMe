webpackJsonp([2],{

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	// Import Images
	
	
	// Material
	
	
	// Import Components
	// import PostList from '../../components/PostList';
	
	// Import Actions
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	// import { getPosts } from '../../PostReducer';
	
	//images
	// Import Images
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(52);
	
	var _MenuAppBar = __webpack_require__(314);
	
	var _MenuAppBar2 = _interopRequireDefault(_MenuAppBar);
	
	var _reactRedux = __webpack_require__(50);
	
	var _landricksComponents = __webpack_require__(851);
	
	var _background_mirror = __webpack_require__(990);
	
	var _background_mirror2 = _interopRequireDefault(_background_mirror);
	
	var _RaisedButton = __webpack_require__(855);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _getMuiTheme = __webpack_require__(107);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(106);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _TextField = __webpack_require__(850);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _IconSvg = __webpack_require__(312);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	var _logo_trans = __webpack_require__(320);
	
	var _logo_trans2 = _interopRequireDefault(_logo_trans);
	
	var _groceries = __webpack_require__(991);
	
	var _groceries2 = _interopRequireDefault(_groceries);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BASE_THEME = {
	  fontFamily: 'Lato',
	  baseFontSize: '18px'
	};
	
	var HEADER_BAND_THEME = _extends({}, BASE_THEME, {
	  baseFontSize: '18px',
	  // backgroundColor: '#71A2B6',
	  backgroundColor: 'white',
	  textColor: '#000000',
	  primaryColor: '#000000',
	  primaryContrastColor: '#71A2B6',
	  objectDesign: 'square-solid',
	  backgroundImage: '' + _background_mirror2.default
	});
	
	var HEAVY_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#699aad',
	  textColor: '#FFFFFF',
	  primaryColor: '#FFFFFF',
	  primaryContrastColor: '#000000',
	  secondaryColor: '#C99DA3',
	  objectDesign: 'square-outline'
	});
	
	var LIGHT_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#8fcfe8',
	  // textColor: '#888888',
	  textColor: '#FFFFFF',
	  primaryColor: '#996888',
	  secondaryColor: '#C99DA3'
	});
	
	var styles = {
	  homePageContainer: {
	    // background: `url("${background}") no-repeat center`,
	    // textAlign:'center',
	    height: '100%'
	    // marginBottom:'100px'
	  },
	  logo: {
	    position: 'fixed',
	    top: '10px',
	    left: '15px',
	    color: 'black'
	  },
	  homePageTextContainer: {
	    position: 'relative',
	    top: '26%',
	    textAlign: 'center',
	    color: 'black'
	  },
	  homePageTextTitle: {
	    fontSize: '30px',
	    fontWeight: "bold",
	    marginBottom: "10px"
	  },
	  homePageTextSubTitle: {
	    fontSize: '18px',
	    marginBottom: "15px"
	  },
	  button: {
	    textAlign: 'center',
	    display: 'inline-flex',
	    fontSize: "24px"
	    // fontWeight:"bold"
	  },
	  callForAction: {
	    // backgroundColor:'#71A2B6',
	    // color:'#FFFFFF'
	  },
	  callForActionContainer: {
	    marginTop: '35px'
	  },
	  logoContainer: {},
	  logoTitleContainer: {
	    // display:'flex',
	    // alignItems:'center',
	    // marginTop: '90px'
	  },
	  logoImage: {
	    height: '90px'
	  },
	  logoTitle: {
	    fontSize: '25px',
	    fontWeight: 'bold'
	  },
	  logoTagline: {
	    marginTop: '10px',
	    fontSize: '14px'
	  }
	};
	
	var LandingPage = function (_Component) {
	  _inherits(LandingPage, _Component);
	
	  function LandingPage(props) {
	    _classCallCheck(this, LandingPage);
	
	    var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));
	
	    _this.state = {
	      callToActionText: 'Let me know when it\'s ready...',
	      email: ''
	    };
	
	    _this.registerUser = _this.registerUser.bind(_this);
	    return _this;
	  }
	
	  _createClass(LandingPage, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('LandingPage login', { 'ab_version': 'v1' });
	    }
	  }, {
	    key: 'emailHasChanged',
	    value: function emailHasChanged(email) {
	      this.state.email = email;
	    }
	  }, {
	    key: 'registerUser',
	    value: function registerUser() {
	      this.setState({ callToActionText: 'Sent' });
	      this.context.mixpanel.track('Register email', {
	        'ab_version': 'v1',
	        'email': this.state.email
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _landricksComponents.LandingCanvas,
	        { wrapperStyle: {
	            width: '100%'
	          } },
	        _react2.default.createElement(
	          _landricksComponents.GenericBrick,
	          {
	            theme: HEADER_BAND_THEME,
	            wrapperStyle: styles.homePageContainer },
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            null,
	            _react2.default.createElement(
	              'div',
	              { style: {
	                  display: 'flex',
	                  alignItems: 'flex-end',
	                  textAlign: 'center',
	                  justifyContent: 'center'
	                } },
	              _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'div',
	                  { style: styles.logoContainer },
	                  _react2.default.createElement(
	                    'div',
	                    { style: styles.logoTitleContainer },
	                    _react2.default.createElement('img', { src: _logo_trans2.default, style: styles.logoImage })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { style: styles.callForActionContainer },
	                  _react2.default.createElement(
	                    'div',
	                    { style: {
	                        fontSize: '30px'
	                      } },
	                    'All the products in one place'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { style: {
	                        fontSize: '20px',
	                        marginBottom: '20px'
	                      } },
	                    'Easy to understand if it\'s fits for you or not'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { style: {
	                        fontSize: '14px',
	                        marginBottom: '10px'
	                      } },
	                    'Coming soon'
	                  ),
	                  _react2.default.createElement(_TextField2.default, {
	                    hintText: 'Email',
	                    onChange: this.emailHasChanged()
	                  }),
	                  _react2.default.createElement(_landricksComponents.CallToAction, {
	                    wrapperStyle: {
	                      backgroundColor: '#71A2B6',
	                      color: 'white'
	                    },
	                    label: this.state.callToActionText,
	                    onClick: this.registerUser })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('img', { src: _groceries2.default, style: { height: '300px' } })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _landricksComponents.DoubleContentBrick,
	          { theme: HEAVY_BAND_THEME, hasHeader: false },
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Our vision'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'We aim to improve human health by being the most accessible platform for dependable and accurate medical rights information.'
	            )
	          ),
	          _react2.default.createElement(_landricksComponents.PlaceHolder, {
	            label: '',
	            wrapperStyle: {
	              background: 'url("http://www.freepngimg.com/thumb/vision/3-2-vision-free-download-png-thumb.png") no-repeat center',
	              border: 'none'
	            } })
	        ),
	        _react2.default.createElement(
	          _landricksComponents.DoubleContentBrick,
	          { theme: LIGHT_BAND_THEME, hasHeader: false },
	          _react2.default.createElement(_landricksComponents.PlaceHolder, {
	            label: '',
	            wrapperStyle: {
	              background: 'url("https://nelioabtesting.com/wp-content/uploads/2014/07/goal-icon.png") no-repeat center',
	              border: 'none'
	            } }),
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            { wrapperStyle: { marginLeft: '20px' } },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Our goal'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Every insurance policy is different and often very hard to interpret - We want to improve your health by rising your awareness to your medical rights..'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return LandingPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	// PostListPage.need = [() => { return fetchPosts(); }];
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    // posts: getPosts(state),
	  };
	}
	
	LandingPage.propTypes = {
	  // posts: PropTypes.arrayOf(PropTypes.shape({
	  //   name: PropTypes.string.isRequired,
	  //   title: PropTypes.string.isRequired,
	  //   content: PropTypes.string.isRequired,
	  // })).isRequired,
	  // showAddPost: PropTypes.bool.isRequired,
	  // dispatch: PropTypes.func.isRequired,
	};
	LandingPage.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	LandingPage.contextTypes = {
	  router: _propTypes2.default.object,
	  mixpanel: _propTypes2.default.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LandingPage);

/***/ },

/***/ 849:
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.safeThemeFromProps = safeThemeFromProps;
	var DEFAULT_THEME = exports.DEFAULT_THEME = {
	  fontFamily: 'Lato',
	  baseFontSize: '20px',
	  backgroundColor: '#4051B5',
	  primaryColor: '#E91C63',
	  textColor: '#FFFFFF'
	};
	
	function safeThemeFromProps(props) {
	  return props.theme || DEFAULT_THEME;
	}

/***/ },

/***/ 850:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _TextField = __webpack_require__(865);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TextField2.default;

/***/ },

/***/ 851:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.styleHelpers = exports.PlaceHolder = exports.FeatureItem = exports.CallToAction = exports.NavigationBrick = exports.TripleContentBrick = exports.DoubleContentBrick = exports.GenericBrick = exports.StrongMessageBrick = exports.EmailSqueezeBrick = exports.GalleryBrick = exports.FooterBrick = exports.EnumerationBrick = exports.LandingCanvas = exports.ThemePropagator = undefined;
	
	var _ThemePropagator = __webpack_require__(921);
	
	var _ThemePropagator2 = _interopRequireDefault(_ThemePropagator);
	
	var _LandingCanvas = __webpack_require__(914);
	
	var _LandingCanvas2 = _interopRequireDefault(_LandingCanvas);
	
	var _EnumerationBrick = __webpack_require__(905);
	
	var _EnumerationBrick2 = _interopRequireDefault(_EnumerationBrick);
	
	var _FooterBrick = __webpack_require__(909);
	
	var _FooterBrick2 = _interopRequireDefault(_FooterBrick);
	
	var _EmailSqueezeBrick = __webpack_require__(903);
	
	var _EmailSqueezeBrick2 = _interopRequireDefault(_EmailSqueezeBrick);
	
	var _StrongMessageBrick = __webpack_require__(919);
	
	var _StrongMessageBrick2 = _interopRequireDefault(_StrongMessageBrick);
	
	var _GenericBrick = __webpack_require__(912);
	
	var _GenericBrick2 = _interopRequireDefault(_GenericBrick);
	
	var _DoubleContentBrick = __webpack_require__(901);
	
	var _DoubleContentBrick2 = _interopRequireDefault(_DoubleContentBrick);
	
	var _TripleContentBrick = __webpack_require__(922);
	
	var _TripleContentBrick2 = _interopRequireDefault(_TripleContentBrick);
	
	var _NavigationBrick = __webpack_require__(915);
	
	var _NavigationBrick2 = _interopRequireDefault(_NavigationBrick);
	
	var _GalleryBrick = __webpack_require__(910);
	
	var _GalleryBrick2 = _interopRequireDefault(_GalleryBrick);
	
	var _CallToAction = __webpack_require__(899);
	
	var _CallToAction2 = _interopRequireDefault(_CallToAction);
	
	var _FeatureItem = __webpack_require__(907);
	
	var _FeatureItem2 = _interopRequireDefault(_FeatureItem);
	
	var _PlaceHolder = __webpack_require__(917);
	
	var _PlaceHolder2 = _interopRequireDefault(_PlaceHolder);
	
	var _styleHelpers = __webpack_require__(849);
	
	var _styleHelpers2 = _interopRequireDefault(_styleHelpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ThemePropagator = _ThemePropagator2.default;
	exports.LandingCanvas = _LandingCanvas2.default;
	exports.EnumerationBrick = _EnumerationBrick2.default;
	exports.FooterBrick = _FooterBrick2.default;
	exports.GalleryBrick = _GalleryBrick2.default;
	exports.EmailSqueezeBrick = _EmailSqueezeBrick2.default;
	exports.StrongMessageBrick = _StrongMessageBrick2.default;
	exports.GenericBrick = _GenericBrick2.default;
	exports.DoubleContentBrick = _DoubleContentBrick2.default;
	exports.TripleContentBrick = _TripleContentBrick2.default;
	exports.NavigationBrick = _NavigationBrick2.default;
	exports.CallToAction = _CallToAction2.default;
	exports.FeatureItem = _FeatureItem2.default;
	exports.PlaceHolder = _PlaceHolder2.default;
	exports.styleHelpers = _styleHelpers2.default;

/***/ },

/***/ 853:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LandricksPropTypes = undefined;
	
	var _React$PropTypes$shap;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var LandricksPropTypes = exports.LandricksPropTypes = {
	  brickTheme: _react2.default.PropTypes.shape((_React$PropTypes$shap = {
	    fontFamily: _react2.default.PropTypes.string,
	    baseFontSize: _react2.default.PropTypes.string
	  }, _defineProperty(_React$PropTypes$shap, 'baseFontSize', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'backgroundImage', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'backgroundColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'textColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'primaryColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'primaryContrastColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'objectDesign', _react2.default.PropTypes.oneOf(['square-solid', 'square-outline', 'rounded-solid', 'rounded-outline', 'bump'])), _React$PropTypes$shap))
	};

/***/ },

/***/ 855:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(863);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ },

/***/ 856:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _screenReaderStyles = __webpack_require__(979);
	
	var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A React component for the font-awesome icon library.
	 *
	 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
	 * @param {Boolean} [border=false] Whether or not to show a border radius
	 * @param {String} [className] An extra set of CSS classes to add to the component
	 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
	 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
	 * @param {String} [flip=false] Flip the icon's orientation.
	 * @param {Boolean} [inverse=false]Inverse the icon's color
	 * @param {String} name Name of the icon to use
	 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
	 * @param {Number} [rotate] The degress to rotate the icon by
	 * @param {String} [size] The icon scaling size
	 * @param {Boolean} [spin=false] Spin the icon
	 * @param {String} [stack] Stack an icon on top of another
	 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
	 * @module FontAwesome
	 * @type {ReactClass}
	 */
	var FontAwesome = function (_React$Component) {
	  _inherits(FontAwesome, _React$Component);
	
	  function FontAwesome() {
	    _classCallCheck(this, FontAwesome);
	
	    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));
	
	    _this.displayName = 'FontAwesome';
	    return _this;
	  }
	
	  _createClass(FontAwesome, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          border = _props.border,
	          cssModule = _props.cssModule,
	          className = _props.className,
	          fixedWidth = _props.fixedWidth,
	          flip = _props.flip,
	          inverse = _props.inverse,
	          name = _props.name,
	          pulse = _props.pulse,
	          rotate = _props.rotate,
	          size = _props.size,
	          spin = _props.spin,
	          stack = _props.stack,
	          _props$tag = _props.tag,
	          tag = _props$tag === undefined ? 'span' : _props$tag,
	          ariaLabel = _props.ariaLabel,
	          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);
	
	      var classNames = [];
	
	      if (cssModule) {
	        classNames.push(cssModule['fa']);
	        classNames.push(cssModule['fa-' + name]);
	        size && classNames.push(cssModule['fa-' + size]);
	        spin && classNames.push(cssModule['fa-spin']);
	        pulse && classNames.push(cssModule['fa-pulse']);
	        border && classNames.push(cssModule['fa-border']);
	        fixedWidth && classNames.push(cssModule['fa-fw']);
	        inverse && classNames.push(cssModule['fa-inverse']);
	        flip && classNames.push(cssModule['fa-flip-' + flip]);
	        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
	        stack && classNames.push(cssModule['fa-stack-' + stack]);
	      } else {
	        classNames.push('fa');
	        classNames.push('fa-' + name);
	        size && classNames.push('fa-' + size);
	        spin && classNames.push('fa-spin');
	        pulse && classNames.push('fa-pulse');
	        border && classNames.push('fa-border');
	        fixedWidth && classNames.push('fa-fw');
	        inverse && classNames.push('fa-inverse');
	        flip && classNames.push('fa-flip-' + flip);
	        rotate && classNames.push('fa-rotate-' + rotate);
	        stack && classNames.push('fa-stack-' + stack);
	      }
	
	      // Add any custom class names at the end.
	      className && classNames.push(className);
	      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
	    }
	  }]);
	
	  return FontAwesome;
	}(_react2.default.Component);
	
	FontAwesome.propTypes = {
	  ariaLabel: _propTypes2.default.string,
	  border: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  cssModule: _propTypes2.default.object,
	  fixedWidth: _propTypes2.default.bool,
	  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
	  inverse: _propTypes2.default.bool,
	  name: _propTypes2.default.string.isRequired,
	  pulse: _propTypes2.default.bool,
	  rotate: _propTypes2.default.oneOf([90, 180, 270]),
	  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
	  spin: _propTypes2.default.bool,
	  stack: _propTypes2.default.oneOf(['1x', '2x']),
	  tag: _propTypes2.default.string
	};
	
	exports.default = FontAwesome;
	module.exports = exports['default'];

/***/ },

/***/ 863:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(7);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(11);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(4);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(13);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(21);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(70);
	
	var _childUtils = __webpack_require__(109);
	
	var _EnhancedButton = __webpack_require__(104);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(69);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (false) {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton,
	      borderRadius = _context$muiTheme.borderRadius;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };
	
	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          buttonStyle = _props.buttonStyle,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          disabledBackgroundColor = _props.disabledBackgroundColor,
	          disabledLabelColor = _props.disabledLabelColor,
	          fullWidth = _props.fullWidth,
	          icon = _props.icon,
	          label = _props.label,
	          labelColor = _props.labelColor,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          overlayStyle = _props.overlayStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _propTypes2.default.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	    * The element to use as the container for the RaisedButton. Either a string to
	    * use a DOM element or a ReactElement. This is useful for wrapping the
	    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
	    * that it passes all of its given props through to the underlying DOM
	    * element and renders its children prop for proper integration.
	    */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _propTypes2.default.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _propTypes2.default.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _propTypes2.default.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _propTypes2.default.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _propTypes2.default.object,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _propTypes2.default.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = RaisedButton;

/***/ },

/***/ 864:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(7);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(11);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(4);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(13);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactEventListener = __webpack_require__(171);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rowsHeight = 24;
	
	function getStyles(props, context, state) {
	  return {
	    root: {
	      position: 'relative' },
	    textarea: {
	      height: state.height,
	      width: '100%',
	      resize: 'none',
	      font: 'inherit',
	      padding: 0,
	      cursor: 'inherit'
	    },
	    shadow: {
	      resize: 'none',
	      // Overflow also needed to here to remove the extra row
	      // added to textareas in Firefox.
	      overflow: 'hidden',
	      // Visibility needed to hide the extra text area on ipads
	      visibility: 'hidden',
	      position: 'absolute',
	      height: 'auto'
	    }
	  };
	}
	
	var EnhancedTextarea = function (_Component) {
	  (0, _inherits3.default)(EnhancedTextarea, _Component);
	
	  function EnhancedTextarea() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedTextarea);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      height: null
	    }, _this.handleResize = function (event) {
	      _this.syncHeightWithShadow(undefined, event);
	    }, _this.handleChange = function (event) {
	      _this.syncHeightWithShadow(event.target.value);
	
	      if (_this.props.hasOwnProperty('valueLink')) {
	        _this.props.valueLink.requestChange(event.target.value);
	      }
	
	      if (_this.props.onChange) {
	        _this.props.onChange(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedTextarea, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        height: this.props.rows * rowsHeight
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncHeightWithShadow();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
	        this.syncHeightWithShadow(nextProps.value, null, nextProps);
	      }
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.refs.input;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value) {
	      this.getInputNode().value = value;
	      this.syncHeightWithShadow(value);
	    }
	  }, {
	    key: 'syncHeightWithShadow',
	    value: function syncHeightWithShadow(newValue, event, props) {
	      var shadow = this.refs.shadow;
	      var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;
	
	      if (displayText !== undefined) {
	        shadow.value = displayText;
	      }
	
	      var newHeight = shadow.scrollHeight;
	
	      // Guarding for jsdom, where scrollHeight isn't present.
	      // See https://github.com/tmpvar/jsdom/issues/1013
	      if (newHeight === undefined) return;
	
	      props = props || this.props;
	
	      if (props.rowsMax >= props.rows) {
	        newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
	      }
	
	      newHeight = Math.max(newHeight, rowsHeight);
	
	      if (this.state.height !== newHeight) {
	        this.setState({
	          height: newHeight
	        });
	
	        if (props.onHeightChange) {
	          props.onHeightChange(event, newHeight);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onChange = _props.onChange,
	          onHeightChange = _props.onHeightChange,
	          rows = _props.rows,
	          rowsMax = _props.rowsMax,
	          shadowStyle = _props.shadowStyle,
	          style = _props.style,
	          hintText = _props.hintText,
	          textareaStyle = _props.textareaStyle,
	          valueLink = _props.valueLink,
	          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
	      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
	
	      if (this.props.hasOwnProperty('valueLink')) {
	        other.value = this.props.valueLink.value;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(rootStyles) },
	        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
	        _react2.default.createElement('textarea', {
	          ref: 'shadow',
	          style: prepareStyles(shadowStyles),
	          tabIndex: '-1',
	          rows: this.props.rows,
	          defaultValue: this.props.defaultValue,
	          readOnly: true,
	          value: this.props.value,
	          valueLink: this.props.valueLink
	        }),
	        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
	          ref: 'input',
	          rows: this.props.rows,
	          style: prepareStyles(textareaStyles),
	          onChange: this.handleChange
	        }))
	      );
	    }
	  }]);
	  return EnhancedTextarea;
	}(_react.Component);
	
	EnhancedTextarea.defaultProps = {
	  rows: 1
	};
	EnhancedTextarea.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? EnhancedTextarea.propTypes = {
	  defaultValue: _propTypes2.default.any,
	  disabled: _propTypes2.default.bool,
	  hintText: _propTypes2.default.node,
	  onChange: _propTypes2.default.func,
	  onHeightChange: _propTypes2.default.func,
	  rows: _propTypes2.default.number,
	  rowsMax: _propTypes2.default.number,
	  shadowStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  textareaStyle: _propTypes2.default.object,
	  value: _propTypes2.default.string,
	  valueLink: _propTypes2.default.object
	} : void 0;
	exports.default = EnhancedTextarea;

/***/ },

/***/ 865:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(7);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(11);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(4);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(9);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(13);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(19);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(51);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _transitions = __webpack_require__(21);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedTextarea = __webpack_require__(864);
	
	var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);
	
	var _TextFieldHint = __webpack_require__(866);
	
	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);
	
	var _TextFieldLabel = __webpack_require__(867);
	
	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);
	
	var _TextFieldUnderline = __webpack_require__(868);
	
	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);
	
	var _warning = __webpack_require__(15);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getStyles = function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      _context$muiTheme$tex = _context$muiTheme.textField,
	      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
	      focusColor = _context$muiTheme$tex.focusColor,
	      textColor = _context$muiTheme$tex.textColor,
	      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
	      backgroundColor = _context$muiTheme$tex.backgroundColor,
	      errorColor = _context$muiTheme$tex.errorColor;
	
	
	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height'),
	      cursor: props.disabled ? 'not-allowed' : 'auto'
	    },
	    error: {
	      position: 'relative',
	      bottom: 2,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: props.disabled ? disabledTextColor : floatingLabelColor,
	      pointerEvents: 'none'
	    },
	    input: {
	      padding: 0,
	      position: 'relative',
	      width: '100%',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      cursor: 'inherit',
	      font: 'inherit',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
	    inputNative: {
	      appearance: 'textfield' }
	  };
	
	  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
	    marginTop: props.floatingLabelText ? 36 : 12,
	    marginBottom: props.floatingLabelText ? -36 : -12,
	    boxSizing: 'border-box',
	    font: 'inherit'
	  });
	
	  // Do not assign a height to the textarea as he handles it on his own.
	  styles.input.height = '100%';
	
	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }
	
	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';
	
	    if (!props.multiLine) {
	      styles.input.marginTop = 14;
	    }
	
	    if (state.errorText) {
	      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	    }
	  }
	
	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }
	
	  return styles;
	};
	
	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
	}
	
	var TextField = function (_Component) {
	  (0, _inherits3.default)(TextField, _Component);
	
	  function TextField() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, TextField);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isFocused: false,
	      errorText: undefined,
	      hasValue: false
	    }, _this.handleInputBlur = function (event) {
	      _this.setState({ isFocused: false });
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleInputChange = function (event) {
	      if (!_this.props.hasOwnProperty('value')) {
	        _this.setState({ hasValue: isValid(event.target.value) });
	      }
	      if (_this.props.onChange) {
	        _this.props.onChange(event, event.target.value);
	      }
	    }, _this.handleInputFocus = function (event) {
	      if (_this.props.disabled) {
	        return;
	      }
	      _this.setState({ isFocused: true });
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleHeightChange = function (event, height) {
	      var newHeight = height + 24;
	      if (_this.props.floatingLabelText) {
	        newHeight += 24;
	      }
	      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(TextField, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          children = _props.children,
	          name = _props.name,
	          hintText = _props.hintText,
	          floatingLabelText = _props.floatingLabelText,
	          id = _props.id;
	
	
	      var propsLeaf = children ? children.props : this.props;
	
	      this.setState({
	        errorText: this.props.errorText,
	        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
	      });
	
	       false ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;
	
	      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.errorText !== this.props.errorText) {
	        this.setState({
	          errorText: nextProps.errorText
	        });
	      }
	
	      if (nextProps.children && nextProps.children.props) {
	        nextProps = nextProps.children.props;
	      }
	
	      if (nextProps.hasOwnProperty('value')) {
	        var hasValue = isValid(nextProps.value);
	
	        this.setState({
	          hasValue: hasValue
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      if (this.input) {
	        this.getInputNode().blur();
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.input) {
	        this.getInputNode().focus();
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.input) {
	        this.getInputNode().select();
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.input ? this.getInputNode().value : undefined;
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
	    }
	  }, {
	    key: '_isControlled',
	    value: function _isControlled() {
	      return this.props.hasOwnProperty('value');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          disabled = _props2.disabled,
	          errorStyle = _props2.errorStyle,
	          errorText = _props2.errorText,
	          floatingLabelFixed = _props2.floatingLabelFixed,
	          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
	          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
	          floatingLabelStyle = _props2.floatingLabelStyle,
	          floatingLabelText = _props2.floatingLabelText,
	          fullWidth = _props2.fullWidth,
	          hintText = _props2.hintText,
	          hintStyle = _props2.hintStyle,
	          id = _props2.id,
	          inputStyle = _props2.inputStyle,
	          multiLine = _props2.multiLine,
	          onBlur = _props2.onBlur,
	          onChange = _props2.onChange,
	          onFocus = _props2.onFocus,
	          style = _props2.style,
	          type = _props2.type,
	          underlineDisabledStyle = _props2.underlineDisabledStyle,
	          underlineFocusStyle = _props2.underlineFocusStyle,
	          underlineShow = _props2.underlineShow,
	          underlineStyle = _props2.underlineStyle,
	          rows = _props2.rows,
	          rowsMax = _props2.rowsMax,
	          textareaStyle = _props2.textareaStyle,
	          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var inputId = id || this.uniqueId;
	
	      var errorTextElement = this.state.errorText && _react2.default.createElement(
	        'div',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
	        this.state.errorText
	      );
	
	      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
	        _TextFieldLabel2.default,
	        {
	          muiTheme: this.context.muiTheme,
	          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
	          shrinkStyle: floatingLabelShrinkStyle,
	          htmlFor: inputId,
	          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
	          disabled: disabled
	        },
	        floatingLabelText
	      );
	
	      var inputProps = {
	        id: inputId,
	        ref: function ref(elem) {
	          return _this2.input = elem;
	        },
	        disabled: this.props.disabled,
	        onBlur: this.handleInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.handleInputFocus
	      };
	
	      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);
	
	      var inputElement = void 0;
	      if (children) {
	        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
	          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
	        }));
	      } else {
	        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
	          style: childStyleMerged,
	          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
	          rows: rows,
	          rowsMax: rowsMax,
	          hintText: hintText
	        }, other, inputProps, {
	          onHeightChange: this.handleHeightChange
	        })) : _react2.default.createElement('input', (0, _extends3.default)({
	          type: type,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
	        }, other, inputProps));
	      }
	
	      var rootProps = {};
	
	      if (children) {
	        rootProps = other;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, rootProps, {
	          className: className,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }),
	        floatingLabelTextElement,
	        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	          muiTheme: this.context.muiTheme,
	          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
	          style: hintStyle,
	          text: hintText
	        }) : null,
	        inputElement,
	        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	          disabled: disabled,
	          disabledStyle: underlineDisabledStyle,
	          error: !!this.state.errorText,
	          errorStyle: errorStyle,
	          focus: this.state.isFocused,
	          focusStyle: underlineFocusStyle,
	          muiTheme: this.context.muiTheme,
	          style: underlineStyle
	        }) : null,
	        errorTextElement
	      );
	    }
	  }]);
	  return TextField;
	}(_react.Component);
	
	TextField.defaultProps = {
	  disabled: false,
	  floatingLabelFixed: false,
	  multiLine: false,
	  fullWidth: false,
	  type: 'text',
	  underlineShow: true,
	  rows: 1
	};
	TextField.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? TextField.propTypes = {
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The text string to use for the default value.
	   */
	  defaultValue: _propTypes2.default.any,
	  /**
	   * Disables the text field if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The style object to use to override error styles.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _propTypes2.default.node,
	  /**
	   * If true, the floating label will float even when there is no value.
	   */
	  floatingLabelFixed: _propTypes2.default.bool,
	  /**
	   * The style object to use to override floating label styles when focused.
	   */
	  floatingLabelFocusStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override floating label styles when shrunk.
	   */
	  floatingLabelShrinkStyle: _propTypes2.default.object,
	  /**
	   * The style object to use to override floating label styles.
	   */
	  floatingLabelStyle: _propTypes2.default.object,
	  /**
	   * The content to use for the floating label element.
	   */
	  floatingLabelText: _propTypes2.default.node,
	  /**
	   * If true, the field receives the property width 100%.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the TextField's hint text element.
	   */
	  hintStyle: _propTypes2.default.object,
	  /**
	   * The hint content to display.
	   */
	  hintText: _propTypes2.default.node,
	  /**
	   * The id prop for the text field.
	   */
	  id: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the TextField's input element.
	   * When multiLine is false: define the style of the input element.
	   * When multiLine is true: define the style of the container of the textarea.
	   */
	  inputStyle: _propTypes2.default.object,
	  /**
	   * If true, a textarea element will be rendered.
	   * The textarea also grows and shrinks according to the number of lines.
	   */
	  multiLine: _propTypes2.default.bool,
	  /**
	   * Name applied to the input.
	   */
	  name: _propTypes2.default.string,
	  /** @ignore */
	  onBlur: _propTypes2.default.func,
	  /**
	   * Callback function that is fired when the textfield's value changes.
	   *
	   * @param {object} event Change event targeting the text field.
	   * @param {string} newValue The new value of the text field.
	   */
	  onChange: _propTypes2.default.func,
	  /** @ignore */
	  onFocus: _propTypes2.default.func,
	  /**
	   * Number of rows to display when multiLine option is set to true.
	   */
	  rows: _propTypes2.default.number,
	  /**
	   * Maximum number of rows to display when
	   * multiLine option is set to true.
	   */
	  rowsMax: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the TextField's textarea element.
	   * The TextField use either a textarea or an input,
	   * this property has effects only when multiLine is true.
	   */
	  textareaStyle: _propTypes2.default.object,
	  /**
	   * Specifies the type of input to display
	   * such as "password" or "text".
	   */
	  type: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the
	   * TextField's underline element when disabled.
	   */
	  underlineDisabledStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the TextField's
	   * underline element when focussed.
	   */
	  underlineFocusStyle: _propTypes2.default.object,
	  /**
	   * If true, shows the underline for the text field.
	   */
	  underlineShow: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the TextField's underline element.
	   */
	  underlineStyle: _propTypes2.default.object,
	  /**
	   * The value of the text field.
	   */
	  value: _propTypes2.default.any
	} : void 0;
	exports.default = TextField;

/***/ },

/***/ 866:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(13);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(21);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var hintColor = props.muiTheme.textField.hintColor,
	      show = props.show;
	
	
	  return {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	}
	
	var TextFieldHint = function TextFieldHint(props) {
	  var prepareStyles = props.muiTheme.prepareStyles,
	      style = props.style,
	      text = props.text;
	
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'div',
	    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	    text
	  );
	};
	
	 false ? TextFieldHint.propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The hint text displayed.
	   */
	  text: _propTypes2.default.node
	} : void 0;
	
	TextFieldHint.defaultProps = {
	  show: true
	};
	
	exports.default = TextFieldHint;

/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(13);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(21);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var defaultStyles = {
	    position: 'absolute',
	    lineHeight: '22px',
	    top: 38,
	    transition: _transitions2.default.easeOut(),
	    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	    transform: 'scale(1) translate(0, 0)',
	    transformOrigin: 'left top',
	    pointerEvents: 'auto',
	    userSelect: 'none'
	  };
	
	  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
	    transform: 'scale(0.75) translate(0, -28px)',
	    pointerEvents: 'none'
	  }, props.shrinkStyle) : null;
	
	  return {
	    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
	  };
	}
	
	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme,
	      className = props.className,
	      children = props.children,
	      htmlFor = props.htmlFor,
	      onTouchTap = props.onTouchTap;
	  var prepareStyles = muiTheme.prepareStyles;
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: prepareStyles(styles.root),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};
	
	 false ? TextFieldLabel.propTypes = {
	  /**
	   * The label contents.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _propTypes2.default.string,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the text field label.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element when shrunk.
	   */
	  shrinkStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	
	TextFieldLabel.defaultProps = {
	  disabled: false,
	  shrink: false
	};
	
	exports.default = TextFieldLabel;

/***/ },

/***/ 868:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(13);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(21);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _propTypes2.default.object,
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _propTypes2.default.object,
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _propTypes2.default.object,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _propTypes2.default.object.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	};
	
	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};
	
	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled,
	      disabledStyle = props.disabledStyle,
	      error = props.error,
	      errorStyle = props.errorStyle,
	      focus = props.focus,
	      focusStyle = props.focusStyle,
	      muiTheme = props.muiTheme,
	      style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles,
	      _muiTheme$textField = muiTheme.textField,
	      borderColor = _muiTheme$textField.borderColor,
	      disabledTextColor = _muiTheme$textField.disabledTextColor,
	      errorColor = _muiTheme$textField.errorColor,
	      focusColor = _muiTheme$textField.focusColor;
	
	
	  var styles = {
	    root: {
	      borderTop: 'none',
	      borderLeft: 'none',
	      borderRight: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };
	
	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);
	
	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(underline) }),
	    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(focusedUnderline) })
	  );
	};
	
	 false ? TextFieldUnderline.propTypes = propTypes : void 0;
	TextFieldUnderline.defaultProps = defaultProps;
	
	exports.default = TextFieldUnderline;

/***/ },

/***/ 899:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(856);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _styles = __webpack_require__(900);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CallToAction = function (_Component) {
	  _inherits(CallToAction, _Component);
	
	  function CallToAction() {
	    _classCallCheck(this, CallToAction);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CallToAction).apply(this, arguments));
	  }
	
	  _createClass(CallToAction, [{
	    key: 'renderLabel',
	    value: function renderLabel(style, props) {
	
	      if (props.renderLabel) {
	        return props.renderLabel(style, props);
	      }
	
	      if (!props.label) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'span',
	        { style: style.label },
	        props.label
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(style, props) {
	
	      if (props.renderIcon) {
	        return props.renderIcon(style, props);
	      }
	
	      if (!props.icon) {
	        return null;
	      }
	
	      return _react2.default.createElement(_reactFontawesome2.default, { name: props.icon, style: style.icon });
	    }
	  }, {
	    key: 'renderButton',
	    value: function renderButton(style, props) {
	
	      if (props.renderButton) {
	        return props.renderButton(style, props);
	      }
	
	      return _react2.default.createElement(
	        'button',
	        { onClick: props.onClick, style: style.wrapper },
	        this.renderIcon(style, props),
	        ' ',
	        this.renderLabel(style, props)
	      );
	    }
	  }, {
	    key: 'renderAnchor',
	    value: function renderAnchor(style, props) {
	
	      if (props.renderAnchor) {
	        return props.renderAnchor(style, props);
	      }
	
	      return _react2.default.createElement(
	        'a',
	        { href: props.href, target: props.target | '_self', style: style.wrapper },
	        this.renderIcon(style, props),
	        ' ',
	        this.renderLabel(style, props)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      if (this.props.href) {
	        return this.renderAnchor(s, this.props);
	      } else {
	        return this.renderButton(s, this.props);
	      }
	    }
	  }]);
	
	  return CallToAction;
	}(_react.Component);
	
	CallToAction.propTypes = {
	  href: _react2.default.PropTypes.string,
	  target: _react2.default.PropTypes.string,
	  icon: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};
	
	exports.default = CallToAction;

/***/ },

/***/ 900:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps2.textColor;
	  var primaryColor = _safeThemeFromProps2.primaryColor;
	  var wrapperStyle = props.wrapperStyle;
	  var iconStyle = props.iconStyle;
	  var labelStyle = props.labelStyle;
	
	
	  var styles = {
	    wrapper: _extends({}, getWrapperForDesign(props), {
	      padding: '1.7%',
	      textDecoration: 'none',
	      display: 'inline-block',
	      margin: '1%',
	      fontSize: 'inherit'
	    }, wrapperStyle),
	    icon: _extends({
	      fontSize: '1em'
	    }, iconStyle),
	    label: _extends({
	      fontSize: '1em',
	      fontWeight: 'bold'
	    }, labelStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);
	
	function getWrapperForDesign(props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
	  var objectDesign = _safeThemeFromProps.objectDesign;
	
	
	  switch (objectDesign) {
	    case 'rounded-solid':
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: '30px'
	      };
	    case 'rounded-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: '30px'
	      };
	    case 'square-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: 0
	      };
	    default:
	      //square-solid
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: 0
	      };
	  }
	}

/***/ },

/***/ 901:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(902);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _ = __webpack_require__(851);
	
	var _conventions = __webpack_require__(853);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DoubleContentBrick = function (_Component) {
	  _inherits(DoubleContentBrick, _Component);
	
	  function DoubleContentBrick() {
	    _classCallCheck(this, DoubleContentBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DoubleContentBrick).apply(this, arguments));
	  }
	
	  _createClass(DoubleContentBrick, [{
	    key: 'renderFirstContent',
	    value: function renderFirstContent(firstChild, parentStyles, parentProps) {
	
	      if (parentProps.renderFirstContent) {
	        return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        firstChild
	      );
	    }
	  }, {
	    key: 'renderSecondContent',
	    value: function renderSecondContent(secondChild, parentStyles, parentProps) {
	
	      if (parentProps.renderSecondContent) {
	        return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        secondChild
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children);
	
	      var _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2);
	
	      var firstChild = _React$Children$toArr2[0];
	      var secondChild = _React$Children$toArr2[1];
	
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
	          this.renderFirstContent(firstChild, s, this.props),
	          this.renderSecondContent(secondChild, s, this.props)
	        )
	      );
	    }
	  }]);
	
	  return DoubleContentBrick;
	}(_react.Component);
	
	DoubleContentBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderHeader: _react2.default.PropTypes.func,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = DoubleContentBrick;

/***/ },

/***/ 902:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (props) {
	
	  var styles = {};
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(904);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var inputValue = null;
	
	function handleSubmit(onClick) {
	  return function (event) {
	    event.preventDefault();
	    onClick({ email: inputValue });
	  };
	}
	
	function handleInputChange(event) {
	  inputValue = event.target.value;
	}
	
	var EmailSqueezeBrick = function EmailSqueezeBrick(props) {
	
	  var s = (0, _styles2.default)(props);
	
	  return _react2.default.createElement(
	    'section',
	    { style: s.box },
	    _react2.default.createElement(
	      'h1',
	      { style: s.h1 },
	      props.title
	    ),
	    _react2.default.createElement(
	      'h2',
	      { style: s.h2 },
	      props.subtitle
	    ),
	    _react2.default.createElement(
	      'form',
	      { style: s.form, onSubmit: handleSubmit(props.onSubmit) },
	      _react2.default.createElement('input', { type: 'email', style: s.input, placeholder: props.placeholder, required: true, onChange: handleInputChange }),
	      _react2.default.createElement(
	        'button',
	        { type: 'submit', style: s.button },
	        props.buttonLabel
	      )
	    ),
	    _react2.default.createElement(
	      'small',
	      { style: s.small },
	      props.smallText
	    )
	  );
	};
	
	EmailSqueezeBrick.propTypes = {
	  buttonLabel: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.string
	};
	
	exports.default = EmailSqueezeBrick;

/***/ },

/***/ 904:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var activeColor = _safeThemeFromProps.activeColor;
	  var contentStyle = _safeThemeFromProps.contentStyle;
	  var titleStyle = _safeThemeFromProps.titleStyle;
	  var subtitleStyle = _safeThemeFromProps.subtitleStyle;
	  var buttonStyle = _safeThemeFromProps.buttonStyle;
	  var inputStyle = _safeThemeFromProps.inputStyle;
	  var smallStyle = _safeThemeFromProps.smallStyle;
	  var mode = props.mode;
	
	
	  var styles = {
	    box: _extends({
	      background: backgroundColor,
	      color: textColor,
	      padding: '5%',
	      textAlign: 'center'
	    }, contentStyle, props.contentStyle),
	    h1: _extends({
	      fontSize: '3rem',
	      fontWeight: 'bold',
	      marginBottom: '1.5rem'
	    }, titleStyle, props.titleStyle),
	    h2: _extends({
	      fontSize: '1rem',
	      fontWeight: 'normal',
	      marginBottom: '4rem'
	    }, subtitleStyle, props.subtitleStyle),
	    form: {
	      flexDirection: 'row',
	      justifyContent: 'center',
	      display: 'block',
	      padding: '0 5%',
	      marginBottom: '10px'
	    },
	    input: _extends({
	      flex: '1',
	      minWidth: '45%',
	      fontSize: '1.2rem',
	      background: 'rgba(0,0,0,0)',
	      border: '2px solid ' + (textColor || '#FFF'),
	      color: textColor || '#FFF',
	      padding: '.3rem .4rem .25rem'
	    }, inputStyle, props.inputStyle),
	    button: _extends({
	      flex: '1',
	      minWidth: '10%',
	      fontSize: '1.2rem',
	      background: activeColor,
	      border: '2px solid rgba(0,0,0,0)',
	      color: textColor,
	      padding: '.3rem .8rem .25rem',
	      cursor: 'pointer'
	    }, buttonStyle, props.buttonStyle),
	    small: _extends({}, smallStyle, props.smallStyle)
	  };
	
	  if (mode === 'TEXT_ON_LEFT') {
	    styles.box.textAlign = 'left';
	  }
	
	  if (mode === 'TEXT_ON_RIGHT') {
	    styles.box.textAlign = 'right';
	  }
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 905:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(906);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _reactFontawesome = __webpack_require__(856);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _ = __webpack_require__(851);
	
	var _conventions = __webpack_require__(853);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EnumerationBrick = function EnumerationBrick(props) {
	
	  var s = (0, _styles2.default)(props);
	
	  return _react2.default.createElement(
	    _.GenericBrick,
	    _extends({}, props, { contentStyle: s.container }),
	    props.children
	  );
	};
	
	EnumerationBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderHeader: _react2.default.PropTypes.func,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = EnumerationBrick;

/***/ },

/***/ 906:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var contentStyle = props.contentStyle;
	  var titleStyle = props.titleStyle;
	  var subtitleStyle = props.subtitleStyle;
	  var itemStyle = props.itemStyle;
	  var itemTextStyle = props.itemTextStyle;
	  var itemIconStyle = props.itemIconStyle;
	  var itemImageStyle = props.itemImageStyle;
	
	
	  var styles = {
	    container: _extends({
	      display: 'flex',
	      flexDirection: 'row',
	      justifyContent: 'space-around',
	      alignItems: 'center',
	      flexWrap: 'wrap'
	    }, contentStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 907:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(856);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _styles = __webpack_require__(908);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FeatureItem = function (_Component) {
	  _inherits(FeatureItem, _Component);
	
	  function FeatureItem() {
	    _classCallCheck(this, FeatureItem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FeatureItem).apply(this, arguments));
	  }
	
	  _createClass(FeatureItem, [{
	    key: 'renderLabel',
	    value: function renderLabel(style, props) {
	
	      if (props.renderLabel) {
	        return props.renderLabel(style, props);
	      }
	
	      if (!props.label) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'span',
	        { style: style.label },
	        props.label
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(style, props) {
	
	      if (props.renderIcon) {
	        return props.renderIcon(style, props);
	      }
	
	      if (!props.icon) {
	        return null;
	      }
	
	      return _react2.default.createElement(_reactFontawesome2.default, { name: props.icon, style: style.icon });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      var _props = this.props;
	      var icon = _props.icon;
	      var image = _props.image;
	      var title = _props.title;
	      var description = _props.description;
	
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: s.wrapper }),
	        icon ? _react2.default.createElement(_reactFontawesome2.default, { name: icon, style: s.icon }) : null,
	        image ? _react2.default.createElement('img', { src: image, style: s.image }) : null,
	        _react2.default.createElement(
	          'h5',
	          { style: s.title },
	          title
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: s.description },
	          description
	        )
	      );
	    }
	  }]);
	
	  return FeatureItem;
	}(_react.Component);
	
	FeatureItem.propTypes = {
	  icon: _react2.default.PropTypes.string,
	  image: _react2.default.PropTypes.string,
	  title: _react2.default.PropTypes.string,
	  description: _react2.default.PropTypes.string
	};
	
	exports.default = FeatureItem;

/***/ },

/***/ 908:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps2.textColor;
	  var primaryColor = _safeThemeFromProps2.primaryColor;
	  var wrapperStyle = props.wrapperStyle;
	  var iconStyle = props.iconStyle;
	  var titleStyle = props.titleStyle;
	  var descriptionStyle = props.descriptionStyle;
	  var imageStyle = props.imageStyle;
	
	
	  var styles = {
	    wrapper: _extends({}, getWrapperForDesign(props), {
	      padding: '1.7%',
	      margin: '1%',
	      textAlign: 'center',
	      minWidth: '200px',
	      flex: 1
	    }, wrapperStyle),
	    icon: _extends({
	      fontSize: '3em'
	    }, iconStyle),
	    image: _extends({
	      width: '6em'
	    }, imageStyle),
	    title: _extends({
	      fontSize: '1em',
	      fontWeight: 'bold',
	      margin: '0.5%'
	    }, titleStyle),
	    description: _extends({
	      fontSize: '0.8em',
	      fontWeight: 'normal',
	      margin: '0.5%'
	    }, descriptionStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);
	
	function getWrapperForDesign(props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
	  var objectDesign = _safeThemeFromProps.objectDesign;
	
	
	  switch (objectDesign) {
	    case 'rounded-solid':
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: '30px'
	      };
	    case 'rounded-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: '30px'
	      };
	    case 'square-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: 0
	      };
	    default:
	      //square-solid
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: 0
	      };
	  }
	}

/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(851);
	
	var _conventions = __webpack_require__(853);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FooterBrick = function (_Component) {
	  _inherits(FooterBrick, _Component);
	
	  function FooterBrick() {
	    _classCallCheck(this, FooterBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterBrick).apply(this, arguments));
	  }
	
	  _createClass(FooterBrick, [{
	    key: 'render',
	    value: function render() {
	      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children);
	
	      var _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 3);
	
	      var firstChild = _React$Children$toArr2[0];
	      var secondChild = _React$Children$toArr2[1];
	      var thirdChild = _React$Children$toArr2[2];
	
	
	      return _react2.default.createElement(
	        _.TripleContentBrick,
	        _extends({}, this.props, { theme: this.props.theme, hasHeader: false }),
	        firstChild,
	        secondChild,
	        thirdChild
	      );
	    }
	  }]);
	
	  return FooterBrick;
	}(_react.Component);
	
	FooterBrick.propTypes = {
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = FooterBrick;

/***/ },

/***/ 910:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(856);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _ = __webpack_require__(851);
	
	var _styles = __webpack_require__(911);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GalleryBrick = function (_Component) {
	  _inherits(GalleryBrick, _Component);
	
	  function GalleryBrick(props) {
	    _classCallCheck(this, GalleryBrick);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GalleryBrick).call(this, props));
	
	    _this.state = { currentPage: 1 };
	    return _this;
	  }
	
	  _createClass(GalleryBrick, [{
	    key: 'calculatePages',
	    value: function calculatePages() {
	      var _props = this.props;
	      var children = _props.children;
	      var itemsPerPage = _props.itemsPerPage;
	
	
	      var pages = parseInt(children.length / itemsPerPage);
	
	      return children.length % itemsPerPage > 0 ? pages + 1 : pages;
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(item, key, style) {
	      return item;
	    }
	  }, {
	    key: 'renderPageOfItems',
	    value: function renderPageOfItems(items, style) {
	      var _this2 = this;
	
	      if (!items) return null;
	
	      var initial = (this.state.currentPage - 1) * this.props.itemsPerPage;
	
	      var boxItems = items.slice(initial, initial + this.props.itemsPerPage);
	
	      return boxItems.map(function (item, key) {
	        return _this2.renderItem(item, key, style);
	      });
	    }
	  }, {
	    key: 'renderPrevBtn',
	    value: function renderPrevBtn(style) {
	      var _this3 = this;
	
	      var styleCustom = {};
	      if (this.state.currentPage === 1) styleCustom = { opacity: '0', pointerEvents: 'none' };
	      return _react2.default.createElement(
	        'a',
	        {
	          style: _extends({}, style.controls, styleCustom),
	          onClick: function onClick() {
	            return _this3.setState({ currentPage: _this3.state.currentPage - 1 });
	          } },
	        _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left' })
	      );
	    }
	  }, {
	    key: 'renderNextBtn',
	    value: function renderNextBtn(style) {
	      var _this4 = this;
	
	      var styleCustom = {};
	      if (this.state.currentPage >= this.calculatePages()) styleCustom = { opacity: '0', pointerEvents: 'none' };
	      return _react2.default.createElement(
	        'a',
	        {
	          style: _extends({}, style.controls, styleCustom),
	          onClick: function onClick() {
	            return _this4.setState({ currentPage: _this4.state.currentPage + 1 });
	          } },
	        _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-right' })
	      );
	    }
	  }, {
	    key: 'renderIndicators',
	    value: function renderIndicators(style) {
	      var _this5 = this;
	
	      var currentPage = this.state.currentPage;
	
	      var count = [].concat(_toConsumableArray(Array(this.calculatePages()).keys()));
	
	      if (this.calculatePages() < 2) return null;
	
	      return count.map(function (item) {
	        return _react2.default.createElement(_reactFontawesome2.default, {
	          style: style.indicator,
	          onClick: function onClick() {
	            return _this5.setState({ currentPage: item + 1 });
	          },
	          name: currentPage === item + 1 ? 'circle' : 'circle-o'
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = (0, _styles2.default)(this.props);
	
	      var items = this.props.children;
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        _extends({}, this.props, { contentStyle: style.container }),
	        _react2.default.createElement(
	          'div',
	          { style: style.wrapper },
	          this.renderPrevBtn(style),
	          _react2.default.createElement(
	            'div',
	            { style: style.pageWrapper },
	            this.renderPageOfItems(items, style)
	          ),
	          this.renderNextBtn(style)
	        ),
	        this.renderIndicators(style)
	      );
	    }
	  }]);
	
	  return GalleryBrick;
	}(_react.Component);
	
	GalleryBrick.propTypes = {
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  items: _react2.default.PropTypes.array,
	  itemsPerPage: _react2.default.PropTypes.number
	};
	
	exports.default = GalleryBrick;

/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps2.textColor;
	  var primaryColor = _safeThemeFromProps2.primaryColor;
	  var fontSize = _safeThemeFromProps2.fontSize;
	  var indicatorColor = _safeThemeFromProps2.indicatorColor;
	  var controlsColor = _safeThemeFromProps2.controlsColor;
	  var wrapperStyle = props.wrapperStyle;
	  var iconStyle = props.iconStyle;
	  var titleStyle = props.titleStyle;
	  var descriptionStyle = props.descriptionStyle;
	  var itemStyle = props.itemStyle;
	  var pageWrapperStyle = props.pageWrapperStyle;
	
	
	  var styles = {
	    wrapper: _extends({}, getWrapperForDesign(props), {
	      textAlign: 'center',
	      minHeigh: '200px',
	      display: 'flex',
	      padding: '2%',
	      flexDirection: 'row',
	      flex: 1
	    }, wrapperStyle),
	    container: {
	      flexDirection: 'column',
	      textAlign: 'center',
	      backgroundColor: primaryColor || '#fff'
	    },
	    pageWrapper: _extends({
	      flex: 5,
	      display: 'flex'
	    }, pageWrapperStyle),
	    controls: {
	      alignSelf: 'center',
	      margin: '0 15px',
	      fontSize: '2.5rem',
	      color: controlsColor || '#000'
	    },
	    itemWrapper: {
	      flex: 1,
	      margin: '20px',
	      flexGrow: 1,
	      flexBasis: 'auto',
	      alignSelf: 'center'
	    },
	    item: _extends({
	      maxWidth: '100%',
	      maxHeight: '100%',
	      minHeight: 100,
	      minWidth: 100
	    }, itemStyle),
	    center: _defineProperty({
	      textAlign: 'center',
	      alignSelf: 'center',
	      padding: '25px',
	      backgroundColor: primaryColor || '#fff'
	    }, 'padding', 0),
	    indicator: {
	      margin: '0 5px',
	      color: indicatorColor || "#000"
	    }
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getWrapperForDesign(props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
	  var objectDesign = _safeThemeFromProps.objectDesign;
	
	
	  switch (objectDesign) {
	    case 'rounded-solid':
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: '30px'
	      };
	    case 'rounded-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: '30px'
	      };
	    case 'square-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: 0
	      };
	    default:
	      //square-solid
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: 0
	      };
	  }
	}

/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(851);
	
	var _conventions = __webpack_require__(853);
	
	var _styles = __webpack_require__(913);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GenericBrick = function (_Component) {
	  _inherits(GenericBrick, _Component);
	
	  function GenericBrick() {
	    _classCallCheck(this, GenericBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GenericBrick).apply(this, arguments));
	  }
	
	  _createClass(GenericBrick, [{
	    key: 'renderHeader',
	    value: function renderHeader(styles, props) {
	
	      if (!props.hasHeader) {
	        return null;
	      }
	
	      if (props.renderHeader) {
	        return props.renderHeader(styles, props);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.header },
	        _react2.default.createElement(
	          'h3',
	          { style: styles.title },
	          props.title
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: styles.subtitle },
	          props.subtitle
	        )
	      );
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent(styles, props) {
	
	      if (props.renderContent) {
	        return props.renderContent(styles, props);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, props, { wrapperStyle: styles.content }),
	        props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      return _react2.default.createElement(
	        'section',
	        _extends({}, this.props, { style: s.wrapper }),
	        _react2.default.createElement(
	          'div',
	          { style: s.canvas },
	          this.renderHeader(s, this.props),
	          this.renderContent(s, this.props)
	        )
	      );
	    }
	  }]);
	
	  return GenericBrick;
	}(_react.Component);
	
	GenericBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderContent: _react2.default.PropTypes.func,
	  renderHeader: _react2.default.PropTypes.func
	};
	
	GenericBrick.defaultProps = {
	  hasHeader: true
	};
	
	exports.default = GenericBrick;

/***/ },

/***/ 913:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var fontFamily = _safeThemeFromProps.fontFamily;
	  var baseFontSize = _safeThemeFromProps.baseFontSize;
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var backgroundImage = props.backgroundImage;
	  var wrapperStyle = props.wrapperStyle;
	  var contentStyle = props.contentStyle;
	  var headerStyle = props.headerStyle;
	  var titleStyle = props.titleStyle;
	  var subtitleStyle = props.subtitleStyle;
	
	
	  var styles = {
	    wrapper: _extends({
	      fontFamily: fontFamily,
	      fontSize: baseFontSize,
	      backgroundColor: backgroundColor,
	      backgroundImage: 'url(' + backgroundImage + ')',
	      backgroundSize: 'cover',
	      color: textColor,
	      padding: '5%'
	    }, wrapperStyle),
	    content: _extends({}, contentStyle),
	    header: _extends({
	      textAlign: 'center'
	    }, headerStyle),
	    title: _extends({
	      margin: '1%',
	      fontSize: '1.2rem',
	      fontWeight: 'bold'
	    }, titleStyle),
	    subtitle: _extends({
	      margin: '1%',
	      fontSize: '1rem',
	      fontWeight: 'normal',
	      marginBottom: '2rem'
	    }, subtitleStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 914:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(319);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calculateViewportFromWindow() {
	  if (typeof window !== 'undefined') {
	    var size = window.innerWidth;
	    if (size < 544) return 'xs';
	    if (size >= 544 && size < 768) return 'sm';
	    if (size >= 768 && size < 992) return 'md';
	    if (size >= 992 && size < 1200) return 'lg';
	    if (size >= 1200) return 'xl';
	  } else {
	    return null;
	  }
	}
	
	function renderAugmentedChildren(props) {
	  return _react2.default.Children.map(props.children, function (child) {
	    if (!child) return null;
	    return _react2.default.cloneElement(child, { viewport: calculateViewportFromWindow() });
	  });
	}
	
	var LandingCanvas = function LandingCanvas(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: props.wrapperStyle },
	    _react2.default.createElement(_reactHelmet2.default, {
	      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }]
	    }),
	    renderAugmentedChildren(props)
	  );
	};
	
	exports.default = LandingCanvas;

/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(856);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _styler = __webpack_require__(916);
	
	var _styler2 = _interopRequireDefault(_styler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavigationBrick = function (_Component) {
		_inherits(NavigationBrick, _Component);
	
		function NavigationBrick(props) {
			_classCallCheck(this, NavigationBrick);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationBrick).call(this, props));
	
			_this.state = {
				open: false
			};
			return _this;
		}
	
		_createClass(NavigationBrick, [{
			key: 'renderItem',
			value: function renderItem(item, index, style) {
				var _this2 = this;
	
				return _react2.default.createElement(
					'li',
					{ onClick: function onClick() {
							return _this2.setState({ open: false });
						}, style: item.highlight ? style.itemHighlight : style.item, key: index },
					item.href ? _react2.default.createElement(
						'a',
						{ style: style.itemLink, href: item.href },
						item.label
					) : null,
					item.onClick ? _react2.default.createElement(
						'button',
						{ style: style.itemLink, onClick: function onClick() {
								return item.onClick();
							} },
						item.label
					) : null
				);
			}
		}, {
			key: 'renderItems',
			value: function renderItems(style, items) {
				var _this3 = this;
	
				if (!items) return null;
				return items.map(function (item, index) {
					return _this3.renderItem(item, index, style);
				});
			}
		}, {
			key: 'renderNavigation',
			value: function renderNavigation(style, items, isCollapsed) {
				return _react2.default.createElement(
					'ul',
					{ style: _extends({}, style.navigationContainer, isCollapsed ? style.collapsedContainer : {}) },
					this.renderItems(style, items)
				);
			}
		}, {
			key: 'renderLogo',
			value: function renderLogo(style) {
				var _props = this.props;
				var logo = _props.logo;
				var brand = _props.brand;
	
				return _react2.default.createElement(
					'span',
					{ style: style.collapsedHeader },
					logo ? _react2.default.createElement('img', { style: style.logo, src: logo }) : null,
					brand ? _react2.default.createElement(
						'span',
						{ style: style.brand },
						brand
					) : null
				);
			}
		}, {
			key: 'renderFullWidth',
			value: function renderFullWidth(style) {
				return _react2.default.createElement(
					'nav',
					{ style: style.box },
					_react2.default.createElement(
						'div',
						{ style: style.boxContent },
						_react2.default.createElement(
							'ul',
							{ style: style.logoContainer },
							this.renderLogo(style)
						),
						this.renderNavigation(style, this.props.items, false)
					)
				);
			}
		}, {
			key: 'renderCollapsed',
			value: function renderCollapsed(style) {
				var _this4 = this;
	
				return _react2.default.createElement(
					'nav',
					{ style: style.collapsed.box },
					_react2.default.createElement(_reactFontawesome2.default, { name: this.state.open ? 'times' : 'bars', style: style.menuIcon, onClick: function onClick() {
							return _this4.setState({ open: !_this4.state.open });
						} }),
					this.renderLogo(style),
					this.renderCollapsedContent(style)
				);
			}
		}, {
			key: 'renderCollapsedContent',
			value: function renderCollapsedContent(style) {
				var visible = _extends({}, style.menuContent, this.state.open ? style.menuOpen : '');
				return _react2.default.createElement(
					'div',
					{ style: visible },
					this.renderNavigation(style, this.props.items, true)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				var style = (0, _styler2.default)(this.props);
				var viewport = this.props.viewport;
	
	
				return viewport == 'xs' || viewport == 'sm' ? this.renderCollapsed(style) : this.renderFullWidth(style);
			}
		}]);
	
		return NavigationBrick;
	}(_react.Component);
	
	exports.default = NavigationBrick;

/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var activeColor = _safeThemeFromProps.activeColor;
	  var contentStyle = _safeThemeFromProps.contentStyle;
	  var itemStyle = _safeThemeFromProps.itemStyle;
	  var itemHighlightStyle = _safeThemeFromProps.itemHighlightStyle;
	  var logoStyle = _safeThemeFromProps.logoStyle;
	  var brandStyle = _safeThemeFromProps.brandStyle;
	  var mode = props.mode;
	  var barContentStyle = props.barContentStyle;
	
	
	  var styles = {
	    box: {
	      position: 'fixed',
	      top: 0,
	      left: 0,
	      width: '100%',
	      height: 'auto',
	      zIndex: 1000
	    },
	    boxContent: _extends({
	      background: backgroundColor || 'rgba(0,0,0,0)',
	      color: textColor,
	      padding: '0 5%',
	      display: 'flex',
	      flexDirection: 'row',
	      justifyContent: 'space-between',
	      alignItems: 'center'
	    }, contentStyle, props.contentStyle),
	    logoContainer: {
	      margin: 0,
	      padding: 0,
	      listStyle: 'none',
	      flex: '0 1 auto'
	    },
	    navigationContainer: {
	      margin: 0,
	      padding: 0,
	      listStyle: 'none',
	      flex: '0 1 auto',
	      textAlign: 'right'
	    },
	    item: _extends({
	      display: 'inline-block',
	      padding: '15px',
	      fontSize: '16px'
	    }, itemStyle, props.itemStyle),
	    itemHighlight: _extends({
	      display: 'inline-block',
	      padding: '7px 12px',
	      fontSize: '16px',
	      margin: '8px',
	      background: activeColor,
	      borderRadius: '2px'
	    }, itemHighlightStyle, props.itemHighlightStyle),
	    itemLink: {
	      color: textColor,
	      textDecoration: 'none',
	      border: 'none',
	      background: 'transparent'
	    },
	    logo: _extends({
	      height: '50px',
	      width: 'auto',
	      float: 'left'
	    }, logoStyle, props.logoStyle),
	    brand: _extends({
	      fontSize: '18px',
	      fontWeight: 'bold',
	      lineHeight: '50px',
	      display: 'inline-block',
	      marginLeft: '10px'
	    }, brandStyle, props.brandStyle),
	    collapsed: {
	      box: _extends({
	        position: 'fixed',
	        top: 0,
	        left: 0,
	        width: '100%',
	        height: '10vh',
	        zIndex: 1000,
	        background: backgroundColor || '#37474f',
	        display: 'flex'
	      }, props.contentStyle)
	    },
	    menuContent: {
	      position: 'fixed',
	      height: '90vh',
	      top: '10vh',
	      width: '60%',
	      left: '-60%',
	      transition: 'left .5s',
	      backgroundColor: backgroundColor || '#37474f'
	    },
	    collapsedContainer: {
	      display: 'flex',
	      flexDirection: 'column',
	      textAlign: 'center',
	      paddingTop: '5vh'
	    },
	    menuOpen: {
	      left: 0
	    },
	    menuIcon: _extends({
	      color: textColor || '#fff',
	      fontSize: '1.8rem',
	      margin: 15,
	      position: 'absolute',
	      top: 0
	    }, props.iconStyle),
	    collapsedHeader: _extends({
	      display: 'flex',
	      justifyContent: 'center',
	      alignItems: 'center',
	      width: '100%'
	    }, barContentStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(918);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PlaceHolder = function PlaceHolder(props) {
	
	  var s = (0, _styles2.default)(props);
	
	  if (props.useLoremIpsum) {
	    return _react2.default.createElement(
	      'p',
	      { style: { padding: '10%' } },
	      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue ex. Donec tortor erat, placerat non dolor quis, porta vestibulum massa. Suspendisse potenti. Etiam bibendum vel magna ac molestie. In lacinia dui vitae sem suscipit, ut fermentum nulla scelerisque. In sollicitudin placerat purus sit amet porttitor. Aenean id quam augue. In maximus ultrices pretium. Aliquam erat volutpat.'
	    );
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { style: s.wrapper },
	    _react2.default.createElement(
	      'div',
	      null,
	      props.label
	    )
	  );
	};
	
	PlaceHolder.propTypes = {
	  wrapperStyle: _react2.default.PropTypes.object,
	  label: _react2.default.PropTypes.string,
	  useLoremIpsum: _react2.default.PropTypes.bool
	};
	
	PlaceHolder.defaultProps = {
	  label: 'content placeholder',
	  useLoremIpsum: false
	};
	
	exports.default = PlaceHolder;

/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _styleHelpers = __webpack_require__(849);
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var wrapperStyle = props.wrapperStyle;
	
	
	  return {
	    wrapper: _extends({
	      borderStyle: 'dashed',
	      borderWidth: 3,
	      borderColor: primaryColor,
	      display: 'flex',
	      width: '100%',
	      height: '100%',
	      minHeight: '200px',
	      justifyContent: 'center',
	      alignItems: 'center'
	    }, wrapperStyle)
	  };
	};

/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(920);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _ = __webpack_require__(851);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StrongMessageBrick = function (_Component) {
	  _inherits(StrongMessageBrick, _Component);
	
	  function StrongMessageBrick() {
	    _classCallCheck(this, StrongMessageBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StrongMessageBrick).apply(this, arguments));
	  }
	
	  _createClass(StrongMessageBrick, [{
	    key: 'renderMessageLevel1',
	    value: function renderMessageLevel1(styles, props) {
	
	      if (props.renderMessageLevel1) {
	        return props.renderMessageLevel1(styles, props);
	      }
	
	      return _react2.default.createElement(
	        'h1',
	        { style: styles.messageLevel1 },
	        props.messageLevel1
	      );
	    }
	  }, {
	    key: 'renderMessageLevel2',
	    value: function renderMessageLevel2(styles, props) {
	
	      if (!props.messageLevel2) {
	        return null;
	      }
	
	      if (props.renderMessageLevel2) {
	        return props.renderMessageLevel2(styles, props);
	      }
	
	      return _react2.default.createElement(
	        'h2',
	        { style: styles.messageLevel2 },
	        props.messageLevel2
	      );
	    }
	  }, {
	    key: 'renderCTAs',
	    value: function renderCTAs(styles, props) {
	
	      if (props.renderCTAs) {
	        return props.renderCTAs(styles, props);
	      }
	
	      if (!props.CTAs) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        null,
	        props.CTAs
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        _extends({}, this.props, { contentStyle: s.content, hasHeader: false }),
	        this.renderMessageLevel1(s, this.props),
	        this.renderMessageLevel2(s, this.props),
	        this.renderCTAs(s, this.props)
	      );
	    }
	  }]);
	
	  return StrongMessageBrick;
	}(_react.Component);
	
	StrongMessageBrick.propTypes = {
	  messageLevel1: _react2.default.PropTypes.string.isRequired,
	  messageLevel2: _react2.default.PropTypes.string
	};
	
	StrongMessageBrick.defaultProps = {
	  messageLevel1: 'This is my Strong Message'
	};
	
	exports.default = StrongMessageBrick;

/***/ },

/***/ 920:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var messageLevel1Style = props.messageLevel1Style;
	  var messageLevel2Style = props.messageLevel2Style;
	  var contentStyle = props.contentStyle;
	
	
	  var styles = {
	    messageLevel1: _extends({
	      fontSize: '2.25em',
	      fontWeight: 'bold',
	      margin: '1.5%',
	      color: textColor
	    }, messageLevel1Style),
	    messageLevel2: _extends({
	      fontSize: '1.2em',
	      fontWeight: 'normal',
	      lineHeight: '1.5rem',
	      margin: '1.5%',
	      color: textColor
	    }, messageLevel2Style),
	    content: _extends({
	      textAlign: 'center'
	    }, contentStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function renderThemedChildren(props) {
	  return _react2.default.Children.map(props.children, function (child) {
	    if (!child) return null;
	    return _react2.default.cloneElement(child, { theme: props.theme });
	  });
	}
	
	var ThemePropagator = function ThemePropagator(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: props.wrapperStyle },
	    renderThemedChildren(props)
	  );
	};
	
	ThemePropagator.propTypes = {
	  wrapperStyle: _react2.default.PropTypes.object,
	  children: _react2.default.PropTypes.node
	};
	
	exports.default = ThemePropagator;

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(923);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _ = __webpack_require__(851);
	
	var _conventions = __webpack_require__(853);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TripleContentBrick = function (_Component) {
	  _inherits(TripleContentBrick, _Component);
	
	  function TripleContentBrick() {
	    _classCallCheck(this, TripleContentBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TripleContentBrick).apply(this, arguments));
	  }
	
	  _createClass(TripleContentBrick, [{
	    key: 'renderFirstContent',
	    value: function renderFirstContent(firstChild, parentStyles, parentProps) {
	
	      if (parentProps.renderFirstContent) {
	        return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        firstChild
	      );
	    }
	  }, {
	    key: 'renderSecondContent',
	    value: function renderSecondContent(secondChild, parentStyles, parentProps) {
	
	      if (parentProps.renderSecondContent) {
	        return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        secondChild
	      );
	    }
	  }, {
	    key: 'renderThirdContent',
	    value: function renderThirdContent(thirdChild, parentStyles, parentProps) {
	
	      if (parentProps.renderSecondContent) {
	        return parentProps.renderSecondContent(thirdChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        thirdChild
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children);
	
	      var _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 3);
	
	      var firstChild = _React$Children$toArr2[0];
	      var secondChild = _React$Children$toArr2[1];
	      var thirdChild = _React$Children$toArr2[2];
	
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
	          this.renderFirstContent(firstChild, s, this.props),
	          this.renderSecondContent(secondChild, s, this.props),
	          this.renderThirdContent(thirdChild, s, this.props)
	        )
	      );
	    }
	  }]);
	
	  return TripleContentBrick;
	}(_react.Component);
	
	TripleContentBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderHeader: _react2.default.PropTypes.func,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = TripleContentBrick;

/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (props) {
	
	  var styles = {};
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(849);

/***/ },

/***/ 979:
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  padding: '0px',
	  margin: '-1px',
	  overflow: 'hidden',
	  clip: 'rect(0px, 0px, 0px, 0px)',
	  border: '0px'
	};
	module.exports = exports['default'];

/***/ },

/***/ 990:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "17d5c018528c84eac956cfcf1f56b896.jpg";

/***/ },

/***/ 991:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a71ec9d0457a9962055c91fcd8e885f5.jpg";

/***/ }

});