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
	  (0, _reactDom.render)(_react2.default.createElement(RScreen, { data: screenData }), document.getElementById(domElementName));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ycy9yZW5kZXIuanM/NzRlZCJdLCJuYW1lcyI6WyJCVGV4dCIsInJlcXVpcmUiLCJpbml0aWFsU2NyZWVuIiwiRHJhd2VyVGVzdCIsInN0YXRlIiwiYWN0aXZlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwiZm9vU3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInJlc2l6ZU15Qm9keSIsImxvY2FsRm9vU3R5bGUiLCJyZW5kZXJTY3JlZW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9vU2l6ZSIsIkVMaXN0Q29sdW1uIiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJ2YWx1ZSIsInByb3BzIiwicm93RGF0YSIsImNvbE5hbWUiLCJFTGlzdEZvb0NvbHVtbiIsIkVMaXN0Um93IiwiY29sSW5kZXgiLCJpbm5lciIsImFsbENvbHVtbnMiLCJtYXAiLCJjb2wiLCJyb3dLZXkiLCJrZXkiLCJFTGlzdEZvb1JvdyIsIkVMaXN0IiwiYWxsQ29sdW1zIiwiZmVlZCIsImZvb0NvbHVtbnMiLCJtYWluQ29sdW1ucyIsImsiLCJsZW5ndGgiLCJwdXNoIiwibGlzdCIsInJvdyIsIkVCdXR0b24iLCJnZXRJbml0aWFsU3RhdGUiLCJjb3VudGVyIiwib25Eb3VibGVDbGljayIsIm9uQ2xpY2siLCJ0ZXh0IiwiRUltZyIsInNyYyIsIlJGb3JtIiwiZGF0YSIsImNvbnRyb2xzIiwidHlwZSIsImNhcHRpb24iLCJSUm93IiwiZm9ybXMiLCJmb3JtIiwiUlNjcmVlbiIsImRvbUVsZW1lbnROYW1lIiwic2NyZWVuRGF0YSIsImdldEVsZW1lbnRCeUlkIiwiYWRkQ29udHJvbCIsImFsZXJ0IiwibXlGdW5jdGlvbiIsInNldFRpbWVvdXQiLCJkIiwiRGF0ZSIsIngiLCJoIiwiYWRkWmVybyIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIs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LFFBQVFKLEVBQUVTLFVBQUYsRUFBUixFQUF3QixDQUF4QixDQUFSO0FBQ0EsT0FBSUMsS0FBS04sUUFBUUosRUFBRVcsZUFBRixFQUFSLEVBQTZCLENBQTdCLENBQVQ7QUFDQTFFLFdBQVFDLEdBQVIsQ0FBWWlFLElBQUksR0FBSixHQUFVRyxDQUFWLEdBQWMsR0FBZCxHQUFvQkUsQ0FBcEIsR0FBd0IsR0FBeEIsR0FBOEJFLEVBQTFDO0FBQ0Q7O0FBRUQsVUFBU04sT0FBVCxDQUFpQkYsQ0FBakIsRUFBb0JVLENBQXBCLEVBQXVCO0FBQ3JCLFVBQU9WLEVBQUVXLFFBQUYsR0FBYXpDLE1BQWIsR0FBc0J3QyxDQUE3QixFQUFnQztBQUM5QlYsU0FBSSxNQUFNQSxDQUFWO0FBQ0Q7QUFDRCxVQUFPQSxDQUFQO0FBQ0QsRSIsImZpbGUiOiIxLmQ4MTYzMzkzMjIzZDNhZmJjZmU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3JlcXVpcmUoXCIhc3R5bGUhY3NzIS4vLi4vc3Qvc2l0ZS5jc3NcIik7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cblxudmFyIEJUZXh0ID0gIHJlcXVpcmUoXCIuL2NvbnRyb2xzL0JUZXh0XCIpO1xudmFyIGluaXRpYWxTY3JlZW4gPSByZXF1aXJlKFwiLi9tb2NrRGF0YS9pbml0aWFsU2NyZWVuXCIpO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuaW1wb3J0IERyYXdlciBmcm9tICdyZWFjdC10b29sYm94L2xpYi9kcmF3ZXInO1xuXG5jbGFzcyBEcmF3ZXJUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZX0pO1xuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9J1Nob3cgRHJhd2VyJyByYWlzZWQgYWNjZW50IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPlxuICAgICAgICA8RHJhd2VyIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9IG9uT3ZlcmxheUNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0+XG4gICAgICAgICAgPGg1PlRoaXMgaXMgeW91ciBEcmF3ZXIgPC9oNT5cbiAgICAgICAgICA8cD5DYW7EsW0gYnVyYXlhIHN0ZWRpZ2luaSBla2xlPC9wPlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zb2xlLmxvZyhpbml0aWFsU2NyZWVuKTtcblxudmFyIGZvb1N0eWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMDtcblxuZnVuY3Rpb24gcmVzaXplTXlCb2R5KCkge1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcblxuICB2YXIgbG9jYWxGb29TdHlsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA2MDA7XG5cbiAgaWYgKGZvb1N0eWxlICE9IGxvY2FsRm9vU3R5bGUpIHtcbiAgICBmb29TdHlsZSA9IGxvY2FsRm9vU3R5bGU7XG4gICAgcmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG4gICAgY29uc29sZS5sb2coXCJQYWdlIFJlcmVuZGVyZWRcIik7XG4gIH1cbn1cblxuLy9CdXJhecSxIG96ZWwgb2xhcmFrIGJpciB5ZXJlIGtveW1hayBnZXJla2ViaWxpcmQgZHVydW1hIGdvcmUuIFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplTXlCb2R5KTtcblxuXG5cbnZhciBmb29TaXplID0gMjtcblxuXG5cblxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2dhcmNpYWUvanNvbmZuXG4vLyBGdW5jdGlvbmxhcsSxIHlhem1hayBpw6dpbiB5YXrEsWzEsXIuLi4gXG4vLyBKc29uIFN0cmlmeSBcbi8vIHZhciBvYmogPSBKU09OZm4ucGFyc2UoYSk7XG4vLyB2YXIgYSA9IEpTT05mbi5zdHJpbmdpZnkoaW5pdGlhbFNjcmVlbik7XG5cblxudmFyIEVMaXN0Q29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93RGF0YVt0aGlzLnByb3BzLmNvbE5hbWVdO1xuICAgICAgcmV0dXJuIDx0ZD57dmFsdWV9PC90ZD5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0Rm9vQ29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93RGF0YVt0aGlzLnByb3BzLmNvbE5hbWVdO1xuICAgICAgcmV0dXJuIDx0ZD57dmFsdWV9PC90ZD5cbiAgICB9XG4gIH1cbilcblxuXG5cblxudmFyIEVMaXN0Um93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHJvd0RhdGEgPSB0aGlzLnByb3BzLnJvd0RhdGE7XG4gICAgICB2YXIgY29sSW5kZXggPSAwOy8vRm9yIHJlYWN0IGtleSBvZiBDb2x1bW5zIFxuXG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgdmFyIHJvd0tleSA9IHJvd0RhdGEua2V5ICsgJ0AnICsgY29sSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIDxFTGlzdENvbHVtbiBrZXkgPSB7cm93S2V5fSBjb2xOYW1lPXtjb2x9IHJvd0RhdGE9e3Jvd0RhdGF9ICAvPlxuICAgICAgfSlcbiAgICAgIHJldHVybiA8dHI+e2lubmVyfTwvdHI+O1xuXG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdEZvb1JvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciByb3dEYXRhID0gdGhpcy5wcm9wcy5yb3dEYXRhO1xuICAgICBcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gPHRyIGtleSA9IHtyb3dEYXRhLmtleSArIGNvbH0+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZSA9IFwibWVobWV0XCI+e2NvbH08L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWUgPSBcImFobWV0XCI+XG4gICAgICAgICAgICB7cm93RGF0YVtjb2xdfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICB9KVxuICAgICAgcmV0dXJuIDx0ciA+PHRkIGNsYXNzTmFtZT1cImRpc1wiIGNvbFNwYW4gPVwiMlwiPjx0YWJsZT48dGJvZHk+e2lubmVyfTwvdGJvZHk+PC90YWJsZT48L3RkPjwvdHI+O1xuXG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBhbGxDb2x1bXMgPSB0aGlzLnByb3BzLmZlZWQuYWxsQ29sdW1ucztcblxuICAgICAgdmFyIGZvb0NvbHVtbnMgPSBbXTtcbiAgICAgIHZhciBtYWluQ29sdW1ucyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGFsbENvbHVtcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZiAoayA+IGZvb1NpemUgLSAxKVxuICAgICAgICAgIGZvb0NvbHVtbnMucHVzaChhbGxDb2x1bXNba10pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbWFpbkNvbHVtbnMucHVzaChhbGxDb2x1bXNba10pO1xuICAgICAgfVxuXG4gICAgICAvL3ZhciBmb29UYWJsZSA9IHRoaXMucHJvcHMuZmVlZC5saXN0VHlwZSA9PT0gJ2Zvbyc7XG4gICAgICB2YXIgaW5uZXIgPSBbXTtcblxuICAgICAgaWYgKGZvb1N0eWxlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmVlZC5saXN0Lm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgaW5uZXIucHVzaCg8RUxpc3RSb3cga2V5PXtyb3cua2V5fSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e21haW5Db2x1bW5zfS8+KTtcbiAgICAgICAgICBpbm5lci5wdXNoKDxFTGlzdEZvb1JvdyBrZXk9e3Jvdy5rZXkgKyAnX2Zvbyd9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17Zm9vQ29sdW1uc30vPik7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaW5uZXIgPSB0aGlzLnByb3BzLmZlZWQubGlzdC5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiA8RUxpc3RSb3cga2V5PXtyb3cua2V5fSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e2FsbENvbHVtc30vPjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm48ZGl2Pjx0YWJsZT48dGJvZHk+e2lubmVyfTwvdGJvZHk+PC90YWJsZT48L2Rpdj47XG4gICAgfVxuICB9KVxuXG52YXIgRUJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBjb3VudGVyOiAwIH1cblxuICAgIH0sXG5cbiAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY291bnRlciA9IHRoaXMuc3RhdGUuY291bnRlcjtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiBjb3VudGVyIH0pXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuY29uc29sZS5sb2cgKHR5cGVvZiggdGhpcy5wcm9wcy5mZWVkLm9uQ2xpY2spKTtcbiAgICAgIHJldHVybiA8ZGl2IGRhdGEtbmFwZXI9JzEwJyAgYXJpYS1oaWRkZW49e3RydWV9PjxsaT48aW5wdXQgdHlwZSA9IFwiYnV0dG9uXCIgdmFsdWUgPSB7dGhpcy5wcm9wcy5mZWVkLnRleHQgKyB0aGlzLnN0YXRlLmNvdW50ZXJ9IG9uRG91YmxlQ2xpY2sgPXt0aGlzLm9uRG91YmxlQ2xpY2t9ICBvbkNsaWNrPXt0aGlzLnByb3BzLmZlZWQub25DbGlja30gLz48L2xpPjwvZGl2PjtcbiAgICB9XG4gIH0pICAgICBcblxudmFyIEVJbWcgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDxsaT48aW1nIHNyYz17dGhpcy5wcm9wcy5mZWVkLnNyY30vPjwvbGk+O1xuICAgIH1cbiAgfSkgXG5cbnZhciBSRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmRhdGEuY29udHJvbHMubWFwKGZ1bmN0aW9uIChmZWVkKSB7XG4gICAgICAgIHN3aXRjaCAoZmVlZC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcInRleHRcIjogcmV0dXJuIDxCVGV4dCBrZXk9e2ZlZWQua2V5fSBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJpbWdcIjogcmV0dXJuIDxFSW1nIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJidXR0b25cIjogcmV0dXJuIDxFQnV0dG9uIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJsaXN0XCI6IHJldHVybiA8RUxpc3Qga2V5PXtmZWVkLmtleX0gIGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDxkaXY+QnVsYWTEsW08L2Rpdj47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PGRpdj48aDE+e3RoaXMucHJvcHMuZGF0YS5jYXB0aW9ufTwvaDE+PC9kaXY+PHVsPntpbm5lcn08L3VsPjwvZGl2PjtcbiAgICB9XG4gIH1cbik7XG5cbnZhciBSUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuZGF0YS5mb3Jtcy5tYXAoZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgcmV0dXJuIDxSRm9ybSBrZXk9e2Zvcm0ua2V5fSBkYXRhPXtmb3JtfS8+O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPGRpdj57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxudmFyIFJTY3JlZW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiA8UlJvdyBrZXk9e3Jvdy5rZXl9IGRhdGE9e3Jvd30vPjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PERyYXdlclRlc3QgLz57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxuXG5mdW5jdGlvbiByZW5kZXJTY3JlZW4oZG9tRWxlbWVudE5hbWUsIHNjcmVlbkRhdGEpIHtcbiAgcmVuZGVyKFxuICAgIDxSU2NyZWVuIGRhdGE9e3NjcmVlbkRhdGF9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUVsZW1lbnROYW1lKSk7XG59XG5cbiAgICBcblxucmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG5cbmZ1bmN0aW9uIGFkZENvbnRyb2woKSB7XG4gIGluaXRpYWxTY3JlZW5bMF0uZm9ybXNbMF0uY29udHJvbHMucHVzaCh7IGtleTogXCIzMjAxXCIsIHR5cGU6IFwiYnV0dG9uXCIsIHRleHQ6IFwiQmVuIHllbmkgZWtsZW5kaW1cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyBhbGVydCgnYmVuIHllbmkgZWtsZW5kaW0nKTsgfSB9KTtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgbXlGdW5jdGlvbigpO1xufVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1swXS5jYXB0aW9uPVwiQmFuYSBiYWsga2FyZGVzaW0gYWvEsWxsxLEgb2xsxZ/Fn8WfxZ/Fn1wiO1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1sxXS5jb250cm9sc1sxXS50ZXh0PVwiYmliaSBnZWxpeW9yIGJpYmlcIjtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgIG15RnVuY3Rpb24oKTtcbiAgY29uc29sZS5sb2coJ3llbmlkZW4gcmVuZGVyJyk7XG59LCAxMDAwMCk7XG5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gIHZhciBoID0gYWRkWmVybyhkLmdldEhvdXJzKCksIDIpO1xuICB2YXIgbSA9IGFkZFplcm8oZC5nZXRNaW51dGVzKCksIDIpO1xuICB2YXIgcyA9IGFkZFplcm8oZC5nZXRTZWNvbmRzKCksIDIpO1xuICB2YXIgbXMgPSBhZGRaZXJvKGQuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xuICBjb25zb2xlLmxvZyhoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzICsgXCI6XCIgKyBtcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFplcm8oeCwgbikge1xuICB3aGlsZSAoeC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHtcbiAgICB4ID0gXCIwXCIgKyB4O1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ycy9yZW5kZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9