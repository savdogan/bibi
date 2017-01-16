webpackHotUpdate(1,{

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _button = __webpack_require__(125);
	
	var _drawer = __webpack_require__(127);
	
	var _drawer2 = _interopRequireDefault(_drawer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//require("!style!css!./../st/site.css");
	
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
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_button.Button, { label: "Show Drawer", raised: true, accent: true, onClick: this.handleToggle }),
	        React.createElement(
	          _drawer2.default,
	          { active: this.state.active, onOverlayClick: this.handleToggle },
	          React.createElement(
	            "h5",
	            null,
	            "This is your Drawer "
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Canım buraya stedigini ekle"
	          )
	        )
	      );
	    }
	  }]);
	
	  return DrawerTest;
	}(React.Component);
	
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
	
	
	var EListColumn = React.createClass({
	  displayName: "EListColumn",
	
	  render: function render() {
	    var value = this.props.rowData[this.props.colName];
	    return React.createElement(
	      "td",
	      null,
	      value
	    );
	  }
	});
	
	var EListFooColumn = React.createClass({
	  displayName: "EListFooColumn",
	
	  render: function render() {
	    var value = this.props.rowData[this.props.colName];
	    return React.createElement(
	      "td",
	      null,
	      value
	    );
	  }
	});
	
	var EListRow = React.createClass({
	  displayName: "EListRow",
	
	  render: function render() {
	
	    var rowData = this.props.rowData;
	    var colIndex = 0; //For react key of Columns 
	
	    var inner = this.props.allColumns.map(function (col) {
	      var rowKey = rowData.key + '@' + colIndex++;
	      return React.createElement(EListColumn, { key: rowKey, colName: col, rowData: rowData });
	    });
	    return React.createElement(
	      "tr",
	      null,
	      inner
	    );
	  }
	});
	
	var EListFooRow = React.createClass({
	  displayName: "EListFooRow",
	
	  render: function render() {
	
	    var rowData = this.props.rowData;
	
	    var inner = this.props.allColumns.map(function (col) {
	      return React.createElement(
	        "tr",
	        { key: rowData.key + col },
	        React.createElement(
	          "td",
	          { className: "mehmet" },
	          col
	        ),
	        React.createElement(
	          "td",
	          { className: "ahmet" },
	          rowData[col]
	        )
	      );
	    });
	    return React.createElement(
	      "tr",
	      null,
	      React.createElement(
	        "td",
	        { className: "dis", colSpan: "2" },
	        React.createElement(
	          "table",
	          null,
	          React.createElement(
	            "tbody",
	            null,
	            inner
	          )
	        )
	      )
	    );
	  }
	});
	
	var EList = React.createClass({
	  displayName: "EList",
	
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
	        inner.push(React.createElement(EListRow, { key: row.key, rowData: row, allColumns: mainColumns }));
	        inner.push(React.createElement(EListFooRow, { key: row.key + '_foo', rowData: row, allColumns: fooColumns }));
	      });
	    } else {
	      inner = this.props.feed.list.map(function (row) {
	        return React.createElement(EListRow, { key: row.key, rowData: row, allColumns: allColums });
	      });
	    }
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "table",
	        null,
	        React.createElement(
	          "tbody",
	          null,
	          inner
	        )
	      )
	    );
	  }
	});
	
	var EButton = React.createClass({
	  displayName: "EButton",
	
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
	    return React.createElement(
	      "div",
	      { "data-naper": "10", "aria-hidden": true },
	      React.createElement(
	        "li",
	        null,
	        React.createElement("input", { type: "button", value: this.props.feed.text + this.state.counter, onDoubleClick: this.onDoubleClick, onClick: this.props.feed.onClick })
	      )
	    );
	  }
	});
	
	var EImg = React.createClass({
	  displayName: "EImg",
	
	  render: function render() {
	    return React.createElement(
	      "li",
	      null,
	      React.createElement("img", { src: this.props.feed.src })
	    );
	  }
	});
	
	var RForm = React.createClass({
	  displayName: "RForm",
	
	  render: function render() {
	    var inner = this.props.data.controls.map(function (feed) {
	      switch (feed.type) {
	        case "text":
	          return React.createElement(BText, { key: feed.key, feed: feed });
	        case "img":
	          return React.createElement(EImg, { key: feed.key, feed: feed });
	        case "button":
	          return React.createElement(EButton, { key: feed.key, feed: feed });
	        case "list":
	          return React.createElement(EList, { key: feed.key, feed: feed });
	        default:
	          return React.createElement(
	            "div",
	            null,
	            "Buladım"
	          );
	      }
	    });
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "h1",
	          null,
	          this.props.data.caption
	        )
	      ),
	      React.createElement(
	        "ul",
	        null,
	        inner
	      )
	    );
	  }
	});
	
	var RRow = React.createClass({
	  displayName: "RRow",
	
	  render: function render() {
	    var inner = this.props.data.forms.map(function (form) {
	      return React.createElement(RForm, { key: form.key, data: form });
	    });
	    return React.createElement(
	      "div",
	      null,
	      inner
	    );
	  }
	});
	
	var RScreen = React.createClass({
	  displayName: "RScreen",
	
	  render: function render() {
	    var inner = this.props.data.map(function (row) {
	      return React.createElement(RRow, { key: row.key, data: row });
	    });
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(DrawerTest, null),
	      inner
	    );
	  }
	});
	
	function renderScreen(domElementName, screenData) {
	  ReactDOM.render(React.createElement(RScreen, { data: screenData }), document.getElementById(domElementName));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ycy9yZW5kZXIuanM/NzRlZCJdLCJuYW1lcyI6WyJCVGV4dCIsInJlcXVpcmUiLCJpbml0aWFsU2NyZWVuIiwiRHJhd2VyVGVzdCIsInN0YXRlIiwiYWN0aXZlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJmb29TdHlsZSIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwicmVzaXplTXlCb2R5IiwibG9jYWxGb29TdHlsZSIsInJlbmRlclNjcmVlbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb29TaXplIiwiRUxpc3RDb2x1bW4iLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInZhbHVlIiwicHJvcHMiLCJyb3dEYXRhIiwiY29sTmFtZSIsIkVMaXN0Rm9vQ29sdW1uIiwiRUxpc3RSb3ciLCJjb2xJbmRleCIsImlubmVyIiwiYWxsQ29sdW1ucyIsIm1hcCIsImNvbCIsInJvd0tleSIsImtleSIsIkVMaXN0Rm9vUm93IiwiRUxpc3QiLCJhbGxDb2x1bXMiLCJmZWVkIiwiZm9vQ29sdW1ucyIsIm1haW5Db2x1bW5zIiwiayIsImxlbmd0aCIsInB1c2giLCJsaXN0Iiwicm93IiwiRUJ1dHRvbiIsImdldEluaXRpYWxTdGF0ZSIsImNvdW50ZXIiLCJvbkRvdWJsZUNsaWNrIiwib25DbGljayIsInRleHQiLCJFSW1nIiwic3JjIiwiUkZvcm0iLCJkYXRhIiwiY29udHJvbHMiLCJ0eXBlIiwiY2FwdGlvbiIsIlJSb3ciLCJmb3JtcyIsImZvcm0iLCJSU2NyZWVuIiwiZG9tRWxlbWVudE5hbWUiLCJzY3JlZW5EYXRhIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsImFkZENvbnRyb2wiLCJhbGVydCIsIm15RnVuY3Rpb24iLCJzZXRUaW1lb3V0IiwiZCIsIkRhdGUiLCJ4IiwiaCIsImFkZFplcm8iLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJtcyIsImdldE1pbGxpc2Vjb25kcyIsIm4iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBTkE7O0FBRUEsS0FBSUEsUUFBUyxtQkFBQUMsQ0FBUSxFQUFSLENBQWI7QUFDQSxLQUFJQyxnQkFBZ0IsbUJBQUFELENBQVEsRUFBUixDQUFwQjs7S0FLTUUsVTs7Ozs7Ozs7Ozs7Ozs7K0xBQ0pDLEssR0FBUTtBQUNOQyxlQUFRO0FBREYsTSxRQUlSQyxZLEdBQWUsWUFBTTtBQUNuQixhQUFLQyxRQUFMLENBQWMsRUFBQ0YsUUFBUSxDQUFDLE1BQUtELEtBQUwsQ0FBV0MsTUFBckIsRUFBZDtBQUNELE07Ozs7OzhCQUVTO0FBQ1IsY0FDRTtBQUFBO0FBQUE7QUFDRSwrQ0FBUSxPQUFNLGFBQWQsRUFBNEIsWUFBNUIsRUFBbUMsWUFBbkMsRUFBMEMsU0FBUyxLQUFLQyxZQUF4RCxHQURGO0FBRUU7QUFBQTtBQUFBLGFBQVEsUUFBUSxLQUFLRixLQUFMLENBQVdDLE1BQTNCLEVBQW1DLGdCQUFnQixLQUFLQyxZQUF4RDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUZGLFFBREY7QUFTRDs7OztHQW5Cc0JFLE1BQU1DLFM7O0FBdUIvQkMsU0FBUUMsR0FBUixDQUFZVCxhQUFaOztBQUVBLEtBQUlVLFdBQVdDLFNBQVNDLElBQVQsQ0FBY0MsV0FBZCxHQUE0QixHQUEzQzs7QUFFQSxVQUFTQyxZQUFULEdBQXdCO0FBQ3RCTixXQUFRQyxHQUFSLENBQVlFLFNBQVNDLElBQVQsQ0FBY0MsV0FBMUI7O0FBRUEsT0FBSUUsZ0JBQWdCSixTQUFTQyxJQUFULENBQWNDLFdBQWQsR0FBNEIsR0FBaEQ7O0FBRUEsT0FBSUgsWUFBWUssYUFBaEIsRUFBK0I7QUFDN0JMLGdCQUFXSyxhQUFYO0FBQ0FDLGtCQUFhLE1BQWIsRUFBcUJoQixhQUFyQjtBQUNBUSxhQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRDtBQUNGOztBQUVEO0FBQ0FRLFFBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQzs7QUFJQSxLQUFJSyxVQUFVLENBQWQ7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSUMsY0FBY2QsTUFBTWUsV0FBTixDQUNoQjtBQUFBOztBQUNFQyxXQUFRLGtCQUFZO0FBQ2xCLFNBQUlDLFFBQVEsS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CLEtBQUtELEtBQUwsQ0FBV0UsT0FBOUIsQ0FBWjtBQUNBLFlBQU87QUFBQTtBQUFBO0FBQUtIO0FBQUwsTUFBUDtBQUNEO0FBSkgsRUFEZ0IsQ0FBbEI7O0FBU0EsS0FBSUksaUJBQWlCckIsTUFBTWUsV0FBTixDQUNuQjtBQUFBOztBQUNFQyxXQUFRLGtCQUFZO0FBQ2xCLFNBQUlDLFFBQVEsS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CLEtBQUtELEtBQUwsQ0FBV0UsT0FBOUIsQ0FBWjtBQUNBLFlBQU87QUFBQTtBQUFBO0FBQUtIO0FBQUwsTUFBUDtBQUNEO0FBSkgsRUFEbUIsQ0FBckI7O0FBWUEsS0FBSUssV0FBV3RCLE1BQU1lLFdBQU4sQ0FDYjtBQUFBOztBQUNFQyxXQUFRLGtCQUFZOztBQUVsQixTQUFJRyxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBekI7QUFDQSxTQUFJSSxXQUFXLENBQWYsQ0FIa0IsQ0FHRDs7QUFFakIsU0FBSUMsUUFBUSxLQUFLTixLQUFMLENBQVdPLFVBQVgsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQVVDLEdBQVYsRUFBZTtBQUNuRCxXQUFJQyxTQUFTVCxRQUFRVSxHQUFSLEdBQWMsR0FBZCxHQUFvQk4sVUFBakM7QUFDQSxjQUFPLG9CQUFDLFdBQUQsSUFBYSxLQUFPSyxNQUFwQixFQUE0QixTQUFTRCxHQUFyQyxFQUEwQyxTQUFTUixPQUFuRCxHQUFQO0FBQ0QsTUFIVyxDQUFaO0FBSUEsWUFBTztBQUFBO0FBQUE7QUFBS0s7QUFBTCxNQUFQO0FBRUQ7QUFaSCxFQURhLENBQWY7O0FBaUJBLEtBQUlNLGNBQWM5QixNQUFNZSxXQUFOLENBQ2hCO0FBQUE7O0FBQ0VDLFdBQVEsa0JBQVk7O0FBRWxCLFNBQUlHLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUF6Qjs7QUFFQSxTQUFJSyxRQUFRLEtBQUtOLEtBQUwsQ0FBV08sVUFBWCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBVUMsR0FBVixFQUFlO0FBQ25ELGNBQU87QUFBQTtBQUFBLFdBQUksS0FBT1IsUUFBUVUsR0FBUixHQUFjRixHQUF6QjtBQUNMO0FBQUE7QUFBQSxhQUFJLFdBQVksUUFBaEI7QUFBMEJBO0FBQTFCLFVBREs7QUFFTDtBQUFBO0FBQUEsYUFBSSxXQUFZLE9BQWhCO0FBQ0dSLG1CQUFRUSxHQUFSO0FBREg7QUFGSyxRQUFQO0FBS0QsTUFOVyxDQUFaO0FBT0EsWUFBTztBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsV0FBSSxXQUFVLEtBQWQsRUFBb0IsU0FBUyxHQUE3QjtBQUFpQztBQUFBO0FBQUE7QUFBTztBQUFBO0FBQUE7QUFBUUg7QUFBUjtBQUFQO0FBQWpDO0FBQUwsTUFBUDtBQUVEO0FBZEgsRUFEZ0IsQ0FBbEI7O0FBbUJBLEtBQUlPLFFBQVEvQixNQUFNZSxXQUFOLENBQ1Y7QUFBQTs7QUFDRUMsV0FBUSxrQkFBWTs7QUFFbEIsU0FBSWdCLFlBQVksS0FBS2QsS0FBTCxDQUFXZSxJQUFYLENBQWdCUixVQUFoQzs7QUFFQSxTQUFJUyxhQUFhLEVBQWpCO0FBQ0EsU0FBSUMsY0FBYyxFQUFsQjs7QUFFQSxVQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosVUFBVUssTUFBOUIsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFdBQUlBLElBQUl2QixVQUFVLENBQWxCLEVBQ0VxQixXQUFXSSxJQUFYLENBQWdCTixVQUFVSSxDQUFWLENBQWhCLEVBREYsS0FHRUQsWUFBWUcsSUFBWixDQUFpQk4sVUFBVUksQ0FBVixDQUFqQjtBQUNIOztBQUVEO0FBQ0EsU0FBSVosUUFBUSxFQUFaOztBQUVBLFNBQUlwQixRQUFKLEVBQWM7QUFDWixZQUFLYyxLQUFMLENBQVdlLElBQVgsQ0FBZ0JNLElBQWhCLENBQXFCYixHQUFyQixDQUF5QixVQUFVYyxHQUFWLEVBQWU7QUFDdENoQixlQUFNYyxJQUFOLENBQVcsb0JBQUMsUUFBRCxJQUFVLEtBQUtFLElBQUlYLEdBQW5CLEVBQXdCLFNBQVNXLEdBQWpDLEVBQXNDLFlBQVlMLFdBQWxELEdBQVg7QUFDQVgsZUFBTWMsSUFBTixDQUFXLG9CQUFDLFdBQUQsSUFBYSxLQUFLRSxJQUFJWCxHQUFKLEdBQVUsTUFBNUIsRUFBb0MsU0FBU1csR0FBN0MsRUFBa0QsWUFBWU4sVUFBOUQsR0FBWDtBQUNELFFBSEQ7QUFJRCxNQUxELE1BTUs7QUFDSFYsZUFBUSxLQUFLTixLQUFMLENBQVdlLElBQVgsQ0FBZ0JNLElBQWhCLENBQXFCYixHQUFyQixDQUF5QixVQUFVYyxHQUFWLEVBQWU7QUFDOUMsZ0JBQU8sb0JBQUMsUUFBRCxJQUFVLEtBQUtBLElBQUlYLEdBQW5CLEVBQXdCLFNBQVNXLEdBQWpDLEVBQXNDLFlBQVlSLFNBQWxELEdBQVA7QUFDRCxRQUZPLENBQVI7QUFHRDtBQUNELFlBQU07QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQU87QUFBQTtBQUFBO0FBQVFSO0FBQVI7QUFBUDtBQUFMLE1BQU47QUFDRDtBQTlCSCxFQURVLENBQVo7O0FBa0NBLEtBQUlpQixVQUFVekMsTUFBTWUsV0FBTixDQUNaO0FBQUE7O0FBQ0UyQixvQkFBaUIsMkJBQVk7QUFDM0IsWUFBTyxFQUFFQyxTQUFTLENBQVgsRUFBUDtBQUVELElBSkg7O0FBTUVDLGtCQUFlLHlCQUFZO0FBQ3pCLFNBQUlELFVBQVUsS0FBSy9DLEtBQUwsQ0FBVytDLE9BQXpCO0FBQ0FBO0FBQ0EsVUFBSzVDLFFBQUwsQ0FBYyxFQUFFNEMsU0FBU0EsT0FBWCxFQUFkO0FBQ0QsSUFWSDs7QUFZRTNCLFdBQVEsa0JBQVk7QUFDeEJkLGFBQVFDLEdBQVIsU0FBcUIsS0FBS2UsS0FBTCxDQUFXZSxJQUFYLENBQWdCWSxPQUFyQztBQUNNLFlBQU87QUFBQTtBQUFBLFNBQUssY0FBVyxJQUFoQixFQUFzQixlQUFhLElBQW5DO0FBQXlDO0FBQUE7QUFBQTtBQUFJLHdDQUFPLE1BQU8sUUFBZCxFQUF1QixPQUFTLEtBQUszQixLQUFMLENBQVdlLElBQVgsQ0FBZ0JhLElBQWhCLEdBQXVCLEtBQUtsRCxLQUFMLENBQVcrQyxPQUFsRSxFQUEyRSxlQUFnQixLQUFLQyxhQUFoRyxFQUFnSCxTQUFTLEtBQUsxQixLQUFMLENBQVdlLElBQVgsQ0FBZ0JZLE9BQXpJO0FBQUo7QUFBekMsTUFBUDtBQUNEO0FBZkgsRUFEWSxDQUFkOztBQW1CQSxLQUFJRSxPQUFPL0MsTUFBTWUsV0FBTixDQUNUO0FBQUE7O0FBQ0VDLFdBQVEsa0JBQVk7QUFDbEIsWUFBTztBQUFBO0FBQUE7QUFBSSxvQ0FBSyxLQUFLLEtBQUtFLEtBQUwsQ0FBV2UsSUFBWCxDQUFnQmUsR0FBMUI7QUFBSixNQUFQO0FBQ0Q7QUFISCxFQURTLENBQVg7O0FBT0EsS0FBSUMsUUFBUWpELE1BQU1lLFdBQU4sQ0FDVjtBQUFBOztBQUNFQyxXQUFRLGtCQUFZO0FBQ2xCLFNBQUlRLFFBQVEsS0FBS04sS0FBTCxDQUFXZ0MsSUFBWCxDQUFnQkMsUUFBaEIsQ0FBeUJ6QixHQUF6QixDQUE2QixVQUFVTyxJQUFWLEVBQWdCO0FBQ3ZELGVBQVFBLEtBQUttQixJQUFiO0FBQ0UsY0FBSyxNQUFMO0FBQWEsa0JBQU8sb0JBQUMsS0FBRCxJQUFPLEtBQUtuQixLQUFLSixHQUFqQixFQUFzQixNQUFNSSxJQUE1QixHQUFQO0FBQ2IsY0FBSyxLQUFMO0FBQVksa0JBQU8sb0JBQUMsSUFBRCxJQUFNLEtBQUtBLEtBQUtKLEdBQWhCLEVBQXNCLE1BQU1JLElBQTVCLEdBQVA7QUFDWixjQUFLLFFBQUw7QUFBZSxrQkFBTyxvQkFBQyxPQUFELElBQVMsS0FBS0EsS0FBS0osR0FBbkIsRUFBeUIsTUFBTUksSUFBL0IsR0FBUDtBQUNmLGNBQUssTUFBTDtBQUFhLGtCQUFPLG9CQUFDLEtBQUQsSUFBTyxLQUFLQSxLQUFLSixHQUFqQixFQUF1QixNQUFNSSxJQUE3QixHQUFQO0FBQ2I7QUFBUyxrQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFMWDtBQU9ELE1BUlcsQ0FBWjtBQVNBLFlBQU87QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUssZ0JBQUtmLEtBQUwsQ0FBV2dDLElBQVgsQ0FBZ0JHO0FBQXJCO0FBQUwsUUFBTDtBQUFrRDtBQUFBO0FBQUE7QUFBSzdCO0FBQUw7QUFBbEQsTUFBUDtBQUNEO0FBWkgsRUFEVSxDQUFaOztBQWlCQSxLQUFJOEIsT0FBT3RELE1BQU1lLFdBQU4sQ0FDVDtBQUFBOztBQUNFQyxXQUFRLGtCQUFZO0FBQ2xCLFNBQUlRLFFBQVEsS0FBS04sS0FBTCxDQUFXZ0MsSUFBWCxDQUFnQkssS0FBaEIsQ0FBc0I3QixHQUF0QixDQUEwQixVQUFVOEIsSUFBVixFQUFnQjtBQUNwRCxjQUFPLG9CQUFDLEtBQUQsSUFBTyxLQUFLQSxLQUFLM0IsR0FBakIsRUFBc0IsTUFBTTJCLElBQTVCLEdBQVA7QUFDRCxNQUZXLENBQVo7QUFHQSxZQUFPO0FBQUE7QUFBQTtBQUFNaEM7QUFBTixNQUFQO0FBQ0Q7QUFOSCxFQURTLENBQVg7O0FBV0EsS0FBSWlDLFVBQVV6RCxNQUFNZSxXQUFOLENBQ1o7QUFBQTs7QUFDRUMsV0FBUSxrQkFBWTtBQUNsQixTQUFJUSxRQUFRLEtBQUtOLEtBQUwsQ0FBV2dDLElBQVgsQ0FBZ0J4QixHQUFoQixDQUFvQixVQUFVYyxHQUFWLEVBQWU7QUFDN0MsY0FBTyxvQkFBQyxJQUFELElBQU0sS0FBS0EsSUFBSVgsR0FBZixFQUFvQixNQUFNVyxHQUExQixHQUFQO0FBQ0QsTUFGVyxDQUFaO0FBR0EsWUFBTztBQUFBO0FBQUE7QUFBSywyQkFBQyxVQUFELE9BQUw7QUFBb0JoQjtBQUFwQixNQUFQO0FBQ0Q7QUFOSCxFQURZLENBQWQ7O0FBWUEsVUFBU2QsWUFBVCxDQUFzQmdELGNBQXRCLEVBQXNDQyxVQUF0QyxFQUFrRDtBQUNoREMsWUFBUzVDLE1BQVQsQ0FDRSxvQkFBQyxPQUFELElBQVMsTUFBTTJDLFVBQWYsR0FERixFQUVFdEQsU0FBU3dELGNBQVQsQ0FBd0JILGNBQXhCLENBRkY7QUFHRDs7QUFJRGhELGNBQWEsTUFBYixFQUFxQmhCLGFBQXJCOztBQUVBLFVBQVNvRSxVQUFULEdBQXNCO0FBQ3BCcEUsaUJBQWMsQ0FBZCxFQUFpQjZELEtBQWpCLENBQXVCLENBQXZCLEVBQTBCSixRQUExQixDQUFtQ2IsSUFBbkMsQ0FBd0MsRUFBRVQsS0FBSyxNQUFQLEVBQWV1QixNQUFNLFFBQXJCLEVBQStCTixNQUFNLG1CQUFyQyxFQUEwREQsU0FBUyxtQkFBWTtBQUFFa0IsYUFBTSxtQkFBTjtBQUE2QixNQUE5RyxFQUF4QztBQUNBQztBQUNBdEQsZ0JBQWEsTUFBYixFQUFxQmhCLGFBQXJCO0FBQ0FzRTtBQUNEOztBQUVEQyxZQUFXLFlBQVc7QUFDdEJ2RSxpQkFBYyxDQUFkLEVBQWlCNkQsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBMEJGLE9BQTFCLEdBQWtDLG1DQUFsQztBQUNBM0QsaUJBQWMsQ0FBZCxFQUFpQjZELEtBQWpCLENBQXVCLENBQXZCLEVBQTBCSixRQUExQixDQUFtQyxDQUFuQyxFQUFzQ0wsSUFBdEMsR0FBMkMsbUJBQTNDO0FBQ0VrQjtBQUNBdEQsZ0JBQWEsTUFBYixFQUFxQmhCLGFBQXJCO0FBQ0NzRTtBQUNEOUQsV0FBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0QsRUFQRCxFQU9HLEtBUEg7O0FBU0EsVUFBUzZELFVBQVQsR0FBc0I7QUFDcEIsT0FBSUUsSUFBSSxJQUFJQyxJQUFKLEVBQVI7QUFDQSxPQUFJQyxJQUFJL0QsU0FBU3dELGNBQVQsQ0FBd0IsTUFBeEIsQ0FBUjtBQUNBLE9BQUlRLElBQUlDLFFBQVFKLEVBQUVLLFFBQUYsRUFBUixFQUFzQixDQUF0QixDQUFSO0FBQ0EsT0FBSUMsSUFBSUYsUUFBUUosRUFBRU8sVUFBRixFQUFSLEVBQXdCLENBQXhCLENBQVI7QUFDQSxPQUFJQyxJQUFJSixRQUFRSixFQUFFUyxVQUFGLEVBQVIsRUFBd0IsQ0FBeEIsQ0FBUjtBQUNBLE9BQUlDLEtBQUtOLFFBQVFKLEVBQUVXLGVBQUYsRUFBUixFQUE2QixDQUE3QixDQUFUO0FBQ0EzRSxXQUFRQyxHQUFSLENBQVlrRSxJQUFJLEdBQUosR0FBVUcsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCRSxFQUExQztBQUNEOztBQUVELFVBQVNOLE9BQVQsQ0FBaUJGLENBQWpCLEVBQW9CVSxDQUFwQixFQUF1QjtBQUNyQixVQUFPVixFQUFFVyxRQUFGLEdBQWExQyxNQUFiLEdBQXNCeUMsQ0FBN0IsRUFBZ0M7QUFDOUJWLFNBQUksTUFBTUEsQ0FBVjtBQUNEO0FBQ0QsVUFBT0EsQ0FBUDtBQUNELEUiLCJmaWxlIjoiMS45MjU2NGQ4MGI1YTUxMGZkYTRjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZXF1aXJlKFwiIXN0eWxlIWNzcyEuLy4uL3N0L3NpdGUuY3NzXCIpO1xuXG52YXIgQlRleHQgPSAgcmVxdWlyZShcIi4vY29udHJvbHMvQlRleHRcIik7XG52YXIgaW5pdGlhbFNjcmVlbiA9IHJlcXVpcmUoXCIuL21vY2tEYXRhL2luaXRpYWxTY3JlZW5cIik7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2J1dHRvbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2RyYXdlcic7XG5cbmNsYXNzIERyYXdlclRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlfSk7XG4gIH07XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD0nU2hvdyBEcmF3ZXInIHJhaXNlZCBhY2NlbnQgb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9IC8+XG4gICAgICAgIDxEcmF3ZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX0gb25PdmVybGF5Q2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cbiAgICAgICAgICA8aDU+VGhpcyBpcyB5b3VyIERyYXdlciA8L2g1PlxuICAgICAgICAgIDxwPkNhbsSxbSBidXJheWEgc3RlZGlnaW5pIGVrbGU8L3A+XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmNvbnNvbGUubG9nKGluaXRpYWxTY3JlZW4pO1xuXG52YXIgZm9vU3R5bGUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgNjAwO1xuXG5mdW5jdGlvbiByZXNpemVNeUJvZHkoKSB7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuXG4gIHZhciBsb2NhbEZvb1N0eWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMDtcblxuICBpZiAoZm9vU3R5bGUgIT0gbG9jYWxGb29TdHlsZSkge1xuICAgIGZvb1N0eWxlID0gbG9jYWxGb29TdHlsZTtcbiAgICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgUmVyZW5kZXJlZFwiKTtcbiAgfVxufVxuXG4vL0J1cmF5xLEgb3plbCBvbGFyYWsgYmlyIHllcmUga295bWFrIGdlcmVrZWJpbGlyZCBkdXJ1bWEgZ29yZS4gXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVNeUJvZHkpO1xuXG5cblxudmFyIGZvb1NpemUgPSAyO1xuXG5cblxuXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jZ2FyY2lhZS9qc29uZm5cbi8vIEZ1bmN0aW9ubGFyxLEgeWF6bWFrIGnDp2luIHlhesSxbMSxci4uLiBcbi8vIEpzb24gU3RyaWZ5IFxuLy8gdmFyIG9iaiA9IEpTT05mbi5wYXJzZShhKTtcbi8vIHZhciBhID0gSlNPTmZuLnN0cmluZ2lmeShpbml0aWFsU2NyZWVuKTtcblxuXG52YXIgRUxpc3RDb2x1bW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5yb3dEYXRhW3RoaXMucHJvcHMuY29sTmFtZV07XG4gICAgICByZXR1cm4gPHRkPnt2YWx1ZX08L3RkPlxuICAgIH1cbiAgfVxuKVxuXG52YXIgRUxpc3RGb29Db2x1bW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5yb3dEYXRhW3RoaXMucHJvcHMuY29sTmFtZV07XG4gICAgICByZXR1cm4gPHRkPnt2YWx1ZX08L3RkPlxuICAgIH1cbiAgfVxuKVxuXG5cblxuXG52YXIgRUxpc3RSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgcm93RGF0YSA9IHRoaXMucHJvcHMucm93RGF0YTtcbiAgICAgIHZhciBjb2xJbmRleCA9IDA7Ly9Gb3IgcmVhY3Qga2V5IG9mIENvbHVtbnMgXG5cbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICB2YXIgcm93S2V5ID0gcm93RGF0YS5rZXkgKyAnQCcgKyBjb2xJbmRleCsrO1xuICAgICAgICByZXR1cm4gPEVMaXN0Q29sdW1uIGtleSA9IHtyb3dLZXl9IGNvbE5hbWU9e2NvbH0gcm93RGF0YT17cm93RGF0YX0gIC8+XG4gICAgICB9KVxuICAgICAgcmV0dXJuIDx0cj57aW5uZXJ9PC90cj47XG5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0Rm9vUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHJvd0RhdGEgPSB0aGlzLnByb3BzLnJvd0RhdGE7XG4gICAgIFxuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5hbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHJldHVybiA8dHIga2V5ID0ge3Jvd0RhdGEua2V5ICsgY29sfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lID0gXCJtZWhtZXRcIj57Y29sfTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZSA9IFwiYWhtZXRcIj5cbiAgICAgICAgICAgIHtyb3dEYXRhW2NvbF19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIH0pXG4gICAgICByZXR1cm4gPHRyID48dGQgY2xhc3NOYW1lPVwiZGlzXCIgY29sU3BhbiA9XCIyXCI+PHRhYmxlPjx0Ym9keT57aW5uZXJ9PC90Ym9keT48L3RhYmxlPjwvdGQ+PC90cj47XG5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIGFsbENvbHVtcyA9IHRoaXMucHJvcHMuZmVlZC5hbGxDb2x1bW5zO1xuXG4gICAgICB2YXIgZm9vQ29sdW1ucyA9IFtdO1xuICAgICAgdmFyIG1haW5Db2x1bW5zID0gW107XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYWxsQ29sdW1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGlmIChrID4gZm9vU2l6ZSAtIDEpXG4gICAgICAgICAgZm9vQ29sdW1ucy5wdXNoKGFsbENvbHVtc1trXSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtYWluQ29sdW1ucy5wdXNoKGFsbENvbHVtc1trXSk7XG4gICAgICB9XG5cbiAgICAgIC8vdmFyIGZvb1RhYmxlID0gdGhpcy5wcm9wcy5mZWVkLmxpc3RUeXBlID09PSAnZm9vJztcbiAgICAgIHZhciBpbm5lciA9IFtdO1xuXG4gICAgICBpZiAoZm9vU3R5bGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZWVkLmxpc3QubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBpbm5lci5wdXNoKDxFTGlzdFJvdyBrZXk9e3Jvdy5rZXl9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17bWFpbkNvbHVtbnN9Lz4pO1xuICAgICAgICAgIGlubmVyLnB1c2goPEVMaXN0Rm9vUm93IGtleT17cm93LmtleSArICdfZm9vJ30gcm93RGF0YT17cm93fSBhbGxDb2x1bW5zPXtmb29Db2x1bW5zfS8+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpbm5lciA9IHRoaXMucHJvcHMuZmVlZC5saXN0Lm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIDxFTGlzdFJvdyBrZXk9e3Jvdy5rZXl9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17YWxsQ29sdW1zfS8+O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjxkaXY+PHRhYmxlPjx0Ym9keT57aW5uZXJ9PC90Ym9keT48L3RhYmxlPjwvZGl2PjtcbiAgICB9XG4gIH0pXG5cbnZhciBFQnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGNvdW50ZXI6IDAgfVxuXG4gICAgfSxcblxuICAgIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb3VudGVyID0gdGhpcy5zdGF0ZS5jb3VudGVyO1xuICAgICAgY291bnRlcisrO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IGNvdW50ZXIgfSlcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5jb25zb2xlLmxvZyAodHlwZW9mKCB0aGlzLnByb3BzLmZlZWQub25DbGljaykpO1xuICAgICAgcmV0dXJuIDxkaXYgZGF0YS1uYXBlcj0nMTAnICBhcmlhLWhpZGRlbj17dHJ1ZX0+PGxpPjxpbnB1dCB0eXBlID0gXCJidXR0b25cIiB2YWx1ZSA9IHt0aGlzLnByb3BzLmZlZWQudGV4dCArIHRoaXMuc3RhdGUuY291bnRlcn0gb25Eb3VibGVDbGljayA9e3RoaXMub25Eb3VibGVDbGlja30gIG9uQ2xpY2s9e3RoaXMucHJvcHMuZmVlZC5vbkNsaWNrfSAvPjwvbGk+PC9kaXY+O1xuICAgIH1cbiAgfSkgICAgIFxuXG52YXIgRUltZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gPGxpPjxpbWcgc3JjPXt0aGlzLnByb3BzLmZlZWQuc3JjfS8+PC9saT47XG4gICAgfVxuICB9KSBcblxudmFyIFJGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuZGF0YS5jb250cm9scy5tYXAoZnVuY3Rpb24gKGZlZWQpIHtcbiAgICAgICAgc3dpdGNoIChmZWVkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwidGV4dFwiOiByZXR1cm4gPEJUZXh0IGtleT17ZmVlZC5rZXl9IGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgY2FzZSBcImltZ1wiOiByZXR1cm4gPEVJbWcga2V5PXtmZWVkLmtleX0gIGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgY2FzZSBcImJ1dHRvblwiOiByZXR1cm4gPEVCdXR0b24ga2V5PXtmZWVkLmtleX0gIGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgY2FzZSBcImxpc3RcIjogcmV0dXJuIDxFTGlzdCBrZXk9e2ZlZWQua2V5fSAgZmVlZD17ZmVlZH0vPjtcbiAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gPGRpdj5CdWxhZMSxbTwvZGl2PjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gPGRpdj48ZGl2PjxoMT57dGhpcy5wcm9wcy5kYXRhLmNhcHRpb259PC9oMT48L2Rpdj48dWw+e2lubmVyfTwvdWw+PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxudmFyIFJSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5kYXRhLmZvcm1zLm1hcChmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICByZXR1cm4gPFJGb3JtIGtleT17Zm9ybS5rZXl9IGRhdGE9e2Zvcm19Lz47XG4gICAgICB9KTtcbiAgICAgIHJldHVybiA8ZGl2Pntpbm5lcn08L2Rpdj47XG4gICAgfVxuICB9XG4pO1xuXG52YXIgUlNjcmVlbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgcmV0dXJuIDxSUm93IGtleT17cm93LmtleX0gZGF0YT17cm93fS8+O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPGRpdj48RHJhd2VyVGVzdCAvPntpbm5lcn08L2Rpdj47XG4gICAgfVxuICB9XG4pO1xuXG5cbmZ1bmN0aW9uIHJlbmRlclNjcmVlbihkb21FbGVtZW50TmFtZSwgc2NyZWVuRGF0YSkge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFJTY3JlZW4gZGF0YT17c2NyZWVuRGF0YX0gLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tRWxlbWVudE5hbWUpKTtcbn1cblxuICAgIFxuXG5yZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcblxuZnVuY3Rpb24gYWRkQ29udHJvbCgpIHtcbiAgaW5pdGlhbFNjcmVlblswXS5mb3Jtc1swXS5jb250cm9scy5wdXNoKHsga2V5OiBcIjMyMDFcIiwgdHlwZTogXCJidXR0b25cIiwgdGV4dDogXCJCZW4geWVuaSBla2xlbmRpbVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IGFsZXJ0KCdiZW4geWVuaSBla2xlbmRpbScpOyB9IH0pO1xuICBteUZ1bmN0aW9uKCk7XG4gIHJlbmRlclNjcmVlbignY29tcCcsIGluaXRpYWxTY3JlZW4pO1xuICBteUZ1bmN0aW9uKCk7XG59XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5pbml0aWFsU2NyZWVuWzBdLmZvcm1zWzBdLmNhcHRpb249XCJCYW5hIGJhayBrYXJkZXNpbSBha8SxbGzEsSBvbGzFn8WfxZ/Fn8WfXCI7XG5pbml0aWFsU2NyZWVuWzBdLmZvcm1zWzFdLmNvbnRyb2xzWzFdLnRleHQ9XCJiaWJpIGdlbGl5b3IgYmliaVwiO1xuICBteUZ1bmN0aW9uKCk7XG4gIHJlbmRlclNjcmVlbignY29tcCcsIGluaXRpYWxTY3JlZW4pO1xuICAgbXlGdW5jdGlvbigpO1xuICBjb25zb2xlLmxvZygneWVuaWRlbiByZW5kZXInKTtcbn0sIDEwMDAwKTtcblxuZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKTtcbiAgdmFyIGggPSBhZGRaZXJvKGQuZ2V0SG91cnMoKSwgMik7XG4gIHZhciBtID0gYWRkWmVybyhkLmdldE1pbnV0ZXMoKSwgMik7XG4gIHZhciBzID0gYWRkWmVybyhkLmdldFNlY29uZHMoKSwgMik7XG4gIHZhciBtcyA9IGFkZFplcm8oZC5nZXRNaWxsaXNlY29uZHMoKSwgMyk7XG4gIGNvbnNvbGUubG9nKGggKyBcIjpcIiArIG0gKyBcIjpcIiArIHMgKyBcIjpcIiArIG1zKTtcbn1cblxuZnVuY3Rpb24gYWRkWmVybyh4LCBuKSB7XG4gIHdoaWxlICh4LnRvU3RyaW5nKCkubGVuZ3RoIDwgbikge1xuICAgIHggPSBcIjBcIiArIHg7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3JzL3JlbmRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=