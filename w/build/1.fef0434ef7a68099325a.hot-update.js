webpackHotUpdate(1,{

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(68);
	
	var _button = __webpack_require__(125);
	
	var _drawer = __webpack_require__(127);
	
	var _drawer2 = _interopRequireDefault(_drawer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //require("!style!css!./../st/site.css");
	
	
	var BText = __webpack_require__(96);
	var initialScreen = __webpack_require__(98);
	
	var DrawerTest = function (_React$Component) {
	  _inherits(DrawerTest, _React$Component);
	
	  function DrawerTest() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DrawerTest);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrawerTest.__proto__ || Object.getPrototypeOf(DrawerTest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      active: false
	    }, _this.handleToggle = function () {
	      _this.setState({ active: !_this.state.active });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(DrawerTest, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_button.Button, { label: 'Show Drawer', raised: true, accent: true, onClick: this.handleToggle }),
	        _react2.default.createElement(
	          _drawer2.default,
	          { active: this.state.active, onOverlayClick: this.handleToggle },
	          _react2.default.createElement(
	            'h5',
	            null,
	            'This is your Drawer '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Canım buraya stedigini ekle'
	          )
	        )
	      );
	    }
	  }]);
	
	  return DrawerTest;
	}(_react2.default.Component);
	
	console.log(initialScreen);
	
	var fooStyle = document.body.clientWidth < 600;
	
	function resizeMyBody() {
	  console.log(document.body.clientWidth);
	
	  var localFooStyle = document.body.clientWidth < 600;
	
	  if (fooStyle != localFooStyle) {
	    fooStyle = localFooStyle;
	    renderScreen('comp', initialScreen);
	    console.log("Page Rerendered");
	  }
	}
	
	//Burayı ozel olarak bir yere koymak gerekebilird duruma gore. 
	window.addEventListener("resize", resizeMyBody);
	
	var fooSize = 2;
	
	// https://github.com/cgarciae/jsonfn
	// Functionları yazmak için yazılır... 
	// Json Strify 
	// var obj = JSONfn.parse(a);
	// var a = JSONfn.stringify(initialScreen);
	
	
	var EListColumn = _react2.default.createClass({
	  displayName: 'EListColumn',
	
	  render: function render() {
	    var value = this.props.rowData[this.props.colName];
	    return _react2.default.createElement(
	      'td',
	      null,
	      value
	    );
	  }
	});
	
	var EListFooColumn = _react2.default.createClass({
	  displayName: 'EListFooColumn',
	
	  render: function render() {
	    var value = this.props.rowData[this.props.colName];
	    return _react2.default.createElement(
	      'td',
	      null,
	      value
	    );
	  }
	});
	
	var EListRow = _react2.default.createClass({
	  displayName: 'EListRow',
	
	  render: function render() {
	
	    var rowData = this.props.rowData;
	    var colIndex = 0; //For react key of Columns 
	
	    var inner = this.props.allColumns.map(function (col) {
	      var rowKey = rowData.key + '@' + colIndex++;
	      return _react2.default.createElement(EListColumn, { key: rowKey, colName: col, rowData: rowData });
	    });
	    return _react2.default.createElement(
	      'tr',
	      null,
	      inner
	    );
	  }
	});
	
	var EListFooRow = _react2.default.createClass({
	  displayName: 'EListFooRow',
	
	  render: function render() {
	
	    var rowData = this.props.rowData;
	
	    var inner = this.props.allColumns.map(function (col) {
	      return _react2.default.createElement(
	        'tr',
	        { key: rowData.key + col },
	        _react2.default.createElement(
	          'td',
	          { className: 'mehmet' },
	          col
	        ),
	        _react2.default.createElement(
	          'td',
	          { className: 'ahmet' },
	          rowData[col]
	        )
	      );
	    });
	    return _react2.default.createElement(
	      'tr',
	      null,
	      _react2.default.createElement(
	        'td',
	        { className: 'dis', colSpan: '2' },
	        _react2.default.createElement(
	          'table',
	          null,
	          _react2.default.createElement(
	            'tbody',
	            null,
	            inner
	          )
	        )
	      )
	    );
	  }
	});
	
	var EList = _react2.default.createClass({
	  displayName: 'EList',
	
	  render: function render() {
	
	    var allColums = this.props.feed.allColumns;
	
	    var fooColumns = [];
	    var mainColumns = [];
	
	    for (var k = 0; k < allColums.length; k++) {
	      if (k > fooSize - 1) fooColumns.push(allColums[k]);else mainColumns.push(allColums[k]);
	    }
	
	    //var fooTable = this.props.feed.listType === 'foo';
	    var inner = [];
	
	    if (fooStyle) {
	      this.props.feed.list.map(function (row) {
	        inner.push(_react2.default.createElement(EListRow, { key: row.key, rowData: row, allColumns: mainColumns }));
	        inner.push(_react2.default.createElement(EListFooRow, { key: row.key + '_foo', rowData: row, allColumns: fooColumns }));
	      });
	    } else {
	      inner = this.props.feed.list.map(function (row) {
	        return _react2.default.createElement(EListRow, { key: row.key, rowData: row, allColumns: allColums });
	      });
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          inner
	        )
	      )
	    );
	  }
	});
	
	var EButton = _react2.default.createClass({
	  displayName: 'EButton',
	
	  getInitialState: function getInitialState() {
	    return { counter: 0 };
	  },
	
	  onDoubleClick: function onDoubleClick() {
	    var counter = this.state.counter;
	    counter++;
	    this.setState({ counter: counter });
	  },
	
	  render: function render() {
	    console.log(_typeof(this.props.feed.onClick));
	    return _react2.default.createElement(
	      'div',
	      { 'data-naper': '10', 'aria-hidden': true },
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement('input', { type: 'button', value: this.props.feed.text + this.state.counter, onDoubleClick: this.onDoubleClick, onClick: this.props.feed.onClick })
	      )
	    );
	  }
	});
	
	var EImg = _react2.default.createClass({
	  displayName: 'EImg',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'li',
	      null,
	      _react2.default.createElement('img', { src: this.props.feed.src })
	    );
	  }
	});
	
	var RForm = _react2.default.createClass({
	  displayName: 'RForm',
	
	  render: function render() {
	    var inner = this.props.data.controls.map(function (feed) {
	      switch (feed.type) {
	        case "text":
	          return _react2.default.createElement(BText, { key: feed.key, feed: feed });
	        case "img":
	          return _react2.default.createElement(EImg, { key: feed.key, feed: feed });
	        case "button":
	          return _react2.default.createElement(EButton, { key: feed.key, feed: feed });
	        case "list":
	          return _react2.default.createElement(EList, { key: feed.key, feed: feed });
	        default:
	          return _react2.default.createElement(
	            'div',
	            null,
	            'Buladım'
	          );
	      }
	    });
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          this.props.data.caption
	        )
	      ),
	      _react2.default.createElement(
	        'ul',
	        null,
	        inner
	      )
	    );
	  }
	});
	
	var RRow = _react2.default.createClass({
	  displayName: 'RRow',
	
	  render: function render() {
	    var inner = this.props.data.forms.map(function (form) {
	      return _react2.default.createElement(RForm, { key: form.key, data: form });
	    });
	    return _react2.default.createElement(
	      'div',
	      null,
	      inner
	    );
	  }
	});
	
	var RScreen = _react2.default.createClass({
	  displayName: 'RScreen',
	
	  render: function render() {
	    var inner = this.props.data.map(function (row) {
	      return _react2.default.createElement(RRow, { key: row.key, data: row });
	    });
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(DrawerTest, null),
	      inner
	    );
	  }
	});
	
	function renderScreen(domElementName, screenData) {
	  ReactDOM.render(_react2.default.createElement(RScreen, { data: screenData }), document.getElementById(domElementName));
	}
	
	renderScreen('comp', initialScreen);
	
	function addControl() {
	  initialScreen[0].forms[0].controls.push({ key: "3201", type: "button", text: "Ben yeni eklendim", onClick: function onClick() {
	      alert('ben yeni eklendim');
	    } });
	  myFunction();
	  renderScreen('comp', initialScreen);
	  myFunction();
	}
	
	setTimeout(function () {
	  initialScreen[0].forms[0].caption = "Bana bak kardesim akıllı ollşşşşş";
	  initialScreen[0].forms[1].controls[1].text = "bibi geliyor bibi";
	  myFunction();
	  renderScreen('comp', initialScreen);
	  myFunction();
	  console.log('yeniden render');
	}, 10000);
	
	function myFunction() {
	  var d = new Date();
	  var x = document.getElementById("demo");
	  var h = addZero(d.getHours(), 2);
	  var m = addZero(d.getMinutes(), 2);
	  var s = addZero(d.getSeconds(), 2);
	  var ms = addZero(d.getMilliseconds(), 3);
	  console.log(h + ":" + m + ":" + s + ":" + ms);
	}
	
	function addZero(x, n) {
	  while (x.toString().length < n) {
	    x = "0" + x;
	  }
	  return x;
	}

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ycy9yZW5kZXIuanM/NzRlZCJdLCJuYW1lcyI6WyJCVGV4dCIsInJlcXVpcmUiLCJpbml0aWFsU2NyZWVuIiwiRHJhd2VyVGVzdCIsInN0YXRlIiwiYWN0aXZlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwiZm9vU3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInJlc2l6ZU15Qm9keSIsImxvY2FsRm9vU3R5bGUiLCJyZW5kZXJTY3JlZW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9vU2l6ZSIsIkVMaXN0Q29sdW1uIiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJ2YWx1ZSIsInByb3BzIiwicm93RGF0YSIsImNvbE5hbWUiLCJFTGlzdEZvb0NvbHVtbiIsIkVMaXN0Um93IiwiY29sSW5kZXgiLCJpbm5lciIsImFsbENvbHVtbnMiLCJtYXAiLCJjb2wiLCJyb3dLZXkiLCJrZXkiLCJFTGlzdEZvb1JvdyIsIkVMaXN0IiwiYWxsQ29sdW1zIiwiZmVlZCIsImZvb0NvbHVtbnMiLCJtYWluQ29sdW1ucyIsImsiLCJsZW5ndGgiLCJwdXNoIiwibGlzdCIsInJvdyIsIkVCdXR0b24iLCJnZXRJbml0aWFsU3RhdGUiLCJjb3VudGVyIiwib25Eb3VibGVDbGljayIsIm9uQ2xpY2siLCJ0ZXh0IiwiRUltZyIsInNyYyIsIlJGb3JtIiwiZGF0YSIsImNvbnRyb2xzIiwidHlwZSIsImNhcHRpb24iLCJSUm93IiwiZm9ybXMiLCJmb3JtIiwiUlNjcmVlbiIsImRvbUVsZW1lbnROYW1lIiwic2NyZWVuRGF0YSIsIlJlYWN0RE9NIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRDb250cm9sIiwiYWxlcnQiLCJteUZ1bmN0aW9uIiwic2V0VGltZW91dCIsImQiLCJEYXRlIiwieCIsImgiLCJhZGRaZXJvIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJn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eEIsQ0FBUjtBQUNBLE9BQUlDLElBQUlKLFFBQVFKLEVBQUVTLFVBQUYsRUFBUixFQUF3QixDQUF4QixDQUFSO0FBQ0EsT0FBSUMsS0FBS04sUUFBUUosRUFBRVcsZUFBRixFQUFSLEVBQTZCLENBQTdCLENBQVQ7QUFDQTNFLFdBQVFDLEdBQVIsQ0FBWWtFLElBQUksR0FBSixHQUFVRyxDQUFWLEdBQWMsR0FBZCxHQUFvQkUsQ0FBcEIsR0FBd0IsR0FBeEIsR0FBOEJFLEVBQTFDO0FBQ0Q7O0FBRUQsVUFBU04sT0FBVCxDQUFpQkYsQ0FBakIsRUFBb0JVLENBQXBCLEVBQXVCO0FBQ3JCLFVBQU9WLEVBQUVXLFFBQUYsR0FBYTFDLE1BQWIsR0FBc0J5QyxDQUE3QixFQUFnQztBQUM5QlYsU0FBSSxNQUFNQSxDQUFWO0FBQ0Q7QUFDRCxVQUFPQSxDQUFQO0FBQ0QsRSIsImZpbGUiOiIxLmZlZjA0MzRlZjdhNjgwOTkzMjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3JlcXVpcmUoXCIhc3R5bGUhY3NzIS4vLi4vc3Qvc2l0ZS5jc3NcIik7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cblxudmFyIEJUZXh0ID0gIHJlcXVpcmUoXCIuL2NvbnRyb2xzL0JUZXh0XCIpO1xudmFyIGluaXRpYWxTY3JlZW4gPSByZXF1aXJlKFwiLi9tb2NrRGF0YS9pbml0aWFsU2NyZWVuXCIpO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuaW1wb3J0IERyYXdlciBmcm9tICdyZWFjdC10b29sYm94L2xpYi9kcmF3ZXInO1xuXG5jbGFzcyBEcmF3ZXJUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZX0pO1xuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9J1Nob3cgRHJhd2VyJyByYWlzZWQgYWNjZW50IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPlxuICAgICAgICA8RHJhd2VyIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9IG9uT3ZlcmxheUNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0+XG4gICAgICAgICAgPGg1PlRoaXMgaXMgeW91ciBEcmF3ZXIgPC9oNT5cbiAgICAgICAgICA8cD5DYW7EsW0gYnVyYXlhIHN0ZWRpZ2luaSBla2xlPC9wPlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zb2xlLmxvZyhpbml0aWFsU2NyZWVuKTtcblxudmFyIGZvb1N0eWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMDtcblxuZnVuY3Rpb24gcmVzaXplTXlCb2R5KCkge1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcblxuICB2YXIgbG9jYWxGb29TdHlsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA2MDA7XG5cbiAgaWYgKGZvb1N0eWxlICE9IGxvY2FsRm9vU3R5bGUpIHtcbiAgICBmb29TdHlsZSA9IGxvY2FsRm9vU3R5bGU7XG4gICAgcmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG4gICAgY29uc29sZS5sb2coXCJQYWdlIFJlcmVuZGVyZWRcIik7XG4gIH1cbn1cblxuLy9CdXJhecSxIG96ZWwgb2xhcmFrIGJpciB5ZXJlIGtveW1hayBnZXJla2ViaWxpcmQgZHVydW1hIGdvcmUuIFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplTXlCb2R5KTtcblxuXG5cbnZhciBmb29TaXplID0gMjtcblxuXG5cblxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2dhcmNpYWUvanNvbmZuXG4vLyBGdW5jdGlvbmxhcsSxIHlhem1hayBpw6dpbiB5YXrEsWzEsXIuLi4gXG4vLyBKc29uIFN0cmlmeSBcbi8vIHZhciBvYmogPSBKU09OZm4ucGFyc2UoYSk7XG4vLyB2YXIgYSA9IEpTT05mbi5zdHJpbmdpZnkoaW5pdGlhbFNjcmVlbik7XG5cblxudmFyIEVMaXN0Q29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93RGF0YVt0aGlzLnByb3BzLmNvbE5hbWVdO1xuICAgICAgcmV0dXJuIDx0ZD57dmFsdWV9PC90ZD5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0Rm9vQ29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93RGF0YVt0aGlzLnByb3BzLmNvbE5hbWVdO1xuICAgICAgcmV0dXJuIDx0ZD57dmFsdWV9PC90ZD5cbiAgICB9XG4gIH1cbilcblxuXG5cblxudmFyIEVMaXN0Um93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHJvd0RhdGEgPSB0aGlzLnByb3BzLnJvd0RhdGE7XG4gICAgICB2YXIgY29sSW5kZXggPSAwOy8vRm9yIHJlYWN0IGtleSBvZiBDb2x1bW5zIFxuXG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgdmFyIHJvd0tleSA9IHJvd0RhdGEua2V5ICsgJ0AnICsgY29sSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIDxFTGlzdENvbHVtbiBrZXkgPSB7cm93S2V5fSBjb2xOYW1lPXtjb2x9IHJvd0RhdGE9e3Jvd0RhdGF9ICAvPlxuICAgICAgfSlcbiAgICAgIHJldHVybiA8dHI+e2lubmVyfTwvdHI+O1xuXG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdEZvb1JvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciByb3dEYXRhID0gdGhpcy5wcm9wcy5yb3dEYXRhO1xuICAgICBcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gPHRyIGtleSA9IHtyb3dEYXRhLmtleSArIGNvbH0+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZSA9IFwibWVobWV0XCI+e2NvbH08L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWUgPSBcImFobWV0XCI+XG4gICAgICAgICAgICB7cm93RGF0YVtjb2xdfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICB9KVxuICAgICAgcmV0dXJuIDx0ciA+PHRkIGNsYXNzTmFtZT1cImRpc1wiIGNvbFNwYW4gPVwiMlwiPjx0YWJsZT48dGJvZHk+e2lubmVyfTwvdGJvZHk+PC90YWJsZT48L3RkPjwvdHI+O1xuXG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBhbGxDb2x1bXMgPSB0aGlzLnByb3BzLmZlZWQuYWxsQ29sdW1ucztcblxuICAgICAgdmFyIGZvb0NvbHVtbnMgPSBbXTtcbiAgICAgIHZhciBtYWluQ29sdW1ucyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGFsbENvbHVtcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZiAoayA+IGZvb1NpemUgLSAxKVxuICAgICAgICAgIGZvb0NvbHVtbnMucHVzaChhbGxDb2x1bXNba10pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbWFpbkNvbHVtbnMucHVzaChhbGxDb2x1bXNba10pO1xuICAgICAgfVxuXG4gICAgICAvL3ZhciBmb29UYWJsZSA9IHRoaXMucHJvcHMuZmVlZC5saXN0VHlwZSA9PT0gJ2Zvbyc7XG4gICAgICB2YXIgaW5uZXIgPSBbXTtcblxuICAgICAgaWYgKGZvb1N0eWxlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmVlZC5saXN0Lm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgaW5uZXIucHVzaCg8RUxpc3RSb3cga2V5PXtyb3cua2V5fSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e21haW5Db2x1bW5zfS8+KTtcbiAgICAgICAgICBpbm5lci5wdXNoKDxFTGlzdEZvb1JvdyBrZXk9e3Jvdy5rZXkgKyAnX2Zvbyd9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17Zm9vQ29sdW1uc30vPik7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaW5uZXIgPSB0aGlzLnByb3BzLmZlZWQubGlzdC5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiA8RUxpc3RSb3cga2V5PXtyb3cua2V5fSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e2FsbENvbHVtc30vPjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm48ZGl2Pjx0YWJsZT48dGJvZHk+e2lubmVyfTwvdGJvZHk+PC90YWJsZT48L2Rpdj47XG4gICAgfVxuICB9KVxuXG52YXIgRUJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBjb3VudGVyOiAwIH1cblxuICAgIH0sXG5cbiAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY291bnRlciA9IHRoaXMuc3RhdGUuY291bnRlcjtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiBjb3VudGVyIH0pXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuY29uc29sZS5sb2cgKHR5cGVvZiggdGhpcy5wcm9wcy5mZWVkLm9uQ2xpY2spKTtcbiAgICAgIHJldHVybiA8ZGl2IGRhdGEtbmFwZXI9JzEwJyAgYXJpYS1oaWRkZW49e3RydWV9PjxsaT48aW5wdXQgdHlwZSA9IFwiYnV0dG9uXCIgdmFsdWUgPSB7dGhpcy5wcm9wcy5mZWVkLnRleHQgKyB0aGlzLnN0YXRlLmNvdW50ZXJ9IG9uRG91YmxlQ2xpY2sgPXt0aGlzLm9uRG91YmxlQ2xpY2t9ICBvbkNsaWNrPXt0aGlzLnByb3BzLmZlZWQub25DbGlja30gLz48L2xpPjwvZGl2PjtcbiAgICB9XG4gIH0pICAgICBcblxudmFyIEVJbWcgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDxsaT48aW1nIHNyYz17dGhpcy5wcm9wcy5mZWVkLnNyY30vPjwvbGk+O1xuICAgIH1cbiAgfSkgXG5cbnZhciBSRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmRhdGEuY29udHJvbHMubWFwKGZ1bmN0aW9uIChmZWVkKSB7XG4gICAgICAgIHN3aXRjaCAoZmVlZC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcInRleHRcIjogcmV0dXJuIDxCVGV4dCBrZXk9e2ZlZWQua2V5fSBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJpbWdcIjogcmV0dXJuIDxFSW1nIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJidXR0b25cIjogcmV0dXJuIDxFQnV0dG9uIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJsaXN0XCI6IHJldHVybiA8RUxpc3Qga2V5PXtmZWVkLmtleX0gIGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDxkaXY+QnVsYWTEsW08L2Rpdj47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PGRpdj48aDE+e3RoaXMucHJvcHMuZGF0YS5jYXB0aW9ufTwvaDE+PC9kaXY+PHVsPntpbm5lcn08L3VsPjwvZGl2PjtcbiAgICB9XG4gIH1cbik7XG5cbnZhciBSUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuZGF0YS5mb3Jtcy5tYXAoZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgcmV0dXJuIDxSRm9ybSBrZXk9e2Zvcm0ua2V5fSBkYXRhPXtmb3JtfS8+O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPGRpdj57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxudmFyIFJTY3JlZW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiA8UlJvdyBrZXk9e3Jvdy5rZXl9IGRhdGE9e3Jvd30vPjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PERyYXdlclRlc3QgLz57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxuXG5mdW5jdGlvbiByZW5kZXJTY3JlZW4oZG9tRWxlbWVudE5hbWUsIHNjcmVlbkRhdGEpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxSU2NyZWVuIGRhdGE9e3NjcmVlbkRhdGF9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUVsZW1lbnROYW1lKSk7XG59XG5cbiAgICBcblxucmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG5cbmZ1bmN0aW9uIGFkZENvbnRyb2woKSB7XG4gIGluaXRpYWxTY3JlZW5bMF0uZm9ybXNbMF0uY29udHJvbHMucHVzaCh7IGtleTogXCIzMjAxXCIsIHR5cGU6IFwiYnV0dG9uXCIsIHRleHQ6IFwiQmVuIHllbmkgZWtsZW5kaW1cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyBhbGVydCgnYmVuIHllbmkgZWtsZW5kaW0nKTsgfSB9KTtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgbXlGdW5jdGlvbigpO1xufVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1swXS5jYXB0aW9uPVwiQmFuYSBiYWsga2FyZGVzaW0gYWvEsWxsxLEgb2xsxZ/Fn8WfxZ/Fn1wiO1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1sxXS5jb250cm9sc1sxXS50ZXh0PVwiYmliaSBnZWxpeW9yIGJpYmlcIjtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgIG15RnVuY3Rpb24oKTtcbiAgY29uc29sZS5sb2coJ3llbmlkZW4gcmVuZGVyJyk7XG59LCAxMDAwMCk7XG5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gIHZhciBoID0gYWRkWmVybyhkLmdldEhvdXJzKCksIDIpO1xuICB2YXIgbSA9IGFkZFplcm8oZC5nZXRNaW51dGVzKCksIDIpO1xuICB2YXIgcyA9IGFkZFplcm8oZC5nZXRTZWNvbmRzKCksIDIpO1xuICB2YXIgbXMgPSBhZGRaZXJvKGQuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xuICBjb25zb2xlLmxvZyhoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzICsgXCI6XCIgKyBtcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFplcm8oeCwgbikge1xuICB3aGlsZSAoeC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHtcbiAgICB4ID0gXCIwXCIgKyB4O1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ycy9yZW5kZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9