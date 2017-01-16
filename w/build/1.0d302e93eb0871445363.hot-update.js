webpackHotUpdate(1,{

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
	
	Console.log(initialScreen);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ycy9yZW5kZXIuanM/NzRlZCJdLCJuYW1lcyI6WyJCVGV4dCIsInJlcXVpcmUiLCJpbml0aWFsU2NyZWVuIiwiQ29uc29sZSIsImxvZyIsIkRyYXdlclRlc3QiLCJzdGF0ZSIsImFjdGl2ZSIsImhhbmRsZVRvZ2dsZSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJmb29TdHlsZSIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwicmVzaXplTXlCb2R5IiwiY29uc29sZSIsImxvY2FsRm9vU3R5bGUiLCJyZW5kZXJTY3JlZW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9vU2l6ZSIsIkVMaXN0Q29sdW1uIiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJ2YWx1ZSIsInByb3BzIiwicm93RGF0YSIsImNvbE5hbWUiLCJFTGlzdEZvb0NvbHVtbiIsIkVMaXN0Um93IiwiY29sSW5kZXgiLCJpbm5lciIsImFsbENvbHVtbnMiLCJtYXAiLCJjb2wiLCJyb3dLZXkiLCJrZXkiLCJFTGlzdEZvb1JvdyIsIkVMaXN0IiwiYWxsQ29sdW1zIiwiZmVlZCIsImZvb0NvbHVtbnMiLCJtYWluQ29sdW1ucyIsImsiLCJsZW5ndGgiLCJwdXNoIiwibGlzdCIsInJvdyIsIkVCdXR0b24iLCJnZXRJbml0aWFsU3RhdGUiLCJjb3VudGVyIiwib25Eb3VibGVDbGljayIsInRleHQiLCJvbkNsaWNrIiwiRUltZyIsInNyYyIsIlJGb3JtIiwiZGF0YSIsImNvbnRyb2xzIiwidHlwZSIsImNhcHRpb24iLCJSUm93IiwiZm9ybXMiLCJmb3JtIiwiUlNjcmVlbiIsImRvbUVsZW1lbnROYW1lIiwic2NyZWVuRGF0YSIsIlJlYWN0RE9NIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRDb250cm9sIiwiYWxlcnQiLCJteUZ1bmN0aW9uIiwic2V0VGltZW91dCIsImQiLCJEYXRlIiwieCIsImgiLCJhZGRaZXJvIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwibXMiLCJnZXRNaWxsaXNlY29uZHMiLCJuIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BOztBQUNBOzs7Ozs7Ozs7Ozs7QUFQQTtBQUNBLEtBQUlBLFFBQVMsbUJBQUFDLENBQVEsRUFBUixDQUFiO0FBQ0EsS0FBSUMsZ0JBQWdCLG1CQUFBRCxDQUFRLEVBQVIsQ0FBcEI7O0FBRUFFLFNBQVFDLEdBQVIsQ0FBWUYsYUFBWjs7S0FLTUcsVTs7Ozs7Ozs7Ozs7Ozs7K0xBQ0pDLEssR0FBUTtBQUNOQyxlQUFRO0FBREYsTSxRQUlSQyxZLEdBQWUsWUFBTTtBQUNuQixhQUFLQyxRQUFMLENBQWMsRUFBQ0YsUUFBUSxDQUFDLE1BQUtELEtBQUwsQ0FBV0MsTUFBckIsRUFBZDtBQUNELE07Ozs7OzhCQUVTO0FBQ1IsY0FDRTtBQUFBO0FBQUE7QUFDRSwrQ0FBUSxPQUFNLGFBQWQsRUFBNEIsWUFBNUIsRUFBbUMsWUFBbkMsRUFBMEMsU0FBUyxLQUFLQyxZQUF4RCxHQURGO0FBRUU7QUFBQTtBQUFBLGFBQVEsUUFBUSxLQUFLRixLQUFMLENBQVdDLE1BQTNCLEVBQW1DLGdCQUFnQixLQUFLQyxZQUF4RDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUZGLFFBREY7QUFTRDs7OztHQW5Cc0JFLE1BQU1DLFM7O0FBd0IvQixLQUFJQyxXQUFXQyxTQUFTQyxJQUFULENBQWNDLFdBQWQsR0FBNEIsR0FBM0M7O0FBRUEsVUFBU0MsWUFBVCxHQUF3QjtBQUN0QkMsV0FBUWIsR0FBUixDQUFZUyxTQUFTQyxJQUFULENBQWNDLFdBQTFCOztBQUVBLE9BQUlHLGdCQUFnQkwsU0FBU0MsSUFBVCxDQUFjQyxXQUFkLEdBQTRCLEdBQWhEOztBQUVBLE9BQUlILFlBQVlNLGFBQWhCLEVBQStCO0FBQzdCTixnQkFBV00sYUFBWDtBQUNBQyxrQkFBYSxNQUFiLEVBQXFCakIsYUFBckI7QUFD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d0IsQ0FBeEIsQ0FBUjtBQUNBLE9BQUlDLEtBQUtOLFFBQVFKLEVBQUVXLGVBQUYsRUFBUixFQUE2QixDQUE3QixDQUFUO0FBQ0FyRSxXQUFRYixHQUFSLENBQVkwRSxJQUFJLEdBQUosR0FBVUcsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCRSxFQUExQztBQUNEOztBQUVELFVBQVNOLE9BQVQsQ0FBaUJGLENBQWpCLEVBQW9CVSxDQUFwQixFQUF1QjtBQUNyQixVQUFPVixFQUFFVyxRQUFGLEdBQWExQyxNQUFiLEdBQXNCeUMsQ0FBN0IsRUFBZ0M7QUFDOUJWLFNBQUksTUFBTUEsQ0FBVjtBQUNEO0FBQ0QsVUFBT0EsQ0FBUDtBQUNELEUiLCJmaWxlIjoiMS4wZDMwMmU5M2ViMDg3MTQ0NTM2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZXF1aXJlKFwiIXN0eWxlIWNzcyEuLy4uL3N0L3NpdGUuY3NzXCIpO1xudmFyIEJUZXh0ID0gIHJlcXVpcmUoXCIuL2NvbnRyb2xzL0JUZXh0XCIpO1xudmFyIGluaXRpYWxTY3JlZW4gPSByZXF1aXJlKFwiLi9tb2NrRGF0YS9pbml0aWFsU2NyZWVuXCIpO1xuXG5Db25zb2xlLmxvZyhpbml0aWFsU2NyZWVuKTtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtdG9vbGJveC9saWIvYnV0dG9uJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAncmVhY3QtdG9vbGJveC9saWIvZHJhd2VyJztcblxuY2xhc3MgRHJhd2VyVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZTogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmV9KTtcbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIGxhYmVsPSdTaG93IERyYXdlcicgcmFpc2VkIGFjY2VudCBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0gLz5cbiAgICAgICAgPERyYXdlciBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfSBvbk92ZXJsYXlDbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxuICAgICAgICAgIDxoNT5UaGlzIGlzIHlvdXIgRHJhd2VyIDwvaDU+XG4gICAgICAgICAgPHA+Q2FuxLFtIGJ1cmF5YSBzdGVkaWdpbmkgZWtsZTwvcD5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG52YXIgZm9vU3R5bGUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgNjAwO1xuXG5mdW5jdGlvbiByZXNpemVNeUJvZHkoKSB7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xuXG4gIHZhciBsb2NhbEZvb1N0eWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMDtcblxuICBpZiAoZm9vU3R5bGUgIT0gbG9jYWxGb29TdHlsZSkge1xuICAgIGZvb1N0eWxlID0gbG9jYWxGb29TdHlsZTtcbiAgICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgUmVyZW5kZXJlZFwiKTtcbiAgfVxufVxuXG4vL0J1cmF5xLEgb3plbCBvbGFyYWsgYmlyIHllcmUga295bWFrIGdlcmVrZWJpbGlyZCBkdXJ1bWEgZ29yZS4gXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVNeUJvZHkpO1xuXG5cblxudmFyIGZvb1NpemUgPSAyO1xuXG5cblxuXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jZ2FyY2lhZS9qc29uZm5cbi8vIEZ1bmN0aW9ubGFyxLEgeWF6bWFrIGnDp2luIHlhesSxbMSxci4uLiBcbi8vIEpzb24gU3RyaWZ5IFxuLy8gdmFyIG9iaiA9IEpTT05mbi5wYXJzZShhKTtcbi8vIHZhciBhID0gSlNPTmZuLnN0cmluZ2lmeShpbml0aWFsU2NyZWVuKTtcblxuXG52YXIgRUxpc3RDb2x1bW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5yb3dEYXRhW3RoaXMucHJvcHMuY29sTmFtZV07XG4gICAgICByZXR1cm4gPHRkPnt2YWx1ZX08L3RkPlxuICAgIH1cbiAgfVxuKVxuXG52YXIgRUxpc3RGb29Db2x1bW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5yb3dEYXRhW3RoaXMucHJvcHMuY29sTmFtZV07XG4gICAgICByZXR1cm4gPHRkPnt2YWx1ZX08L3RkPlxuICAgIH1cbiAgfVxuKVxuXG5cblxuXG52YXIgRUxpc3RSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgcm93RGF0YSA9IHRoaXMucHJvcHMucm93RGF0YTtcbiAgICAgIHZhciBjb2xJbmRleCA9IDA7Ly9Gb3IgcmVhY3Qga2V5IG9mIENvbHVtbnMgXG5cbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICB2YXIgcm93S2V5ID0gcm93RGF0YS5rZXkgKyAnQCcgKyBjb2xJbmRleCsrO1xuICAgICAgICByZXR1cm4gPEVMaXN0Q29sdW1uIGtleSA9IHtyb3dLZXl9IGNvbE5hbWU9e2NvbH0gcm93RGF0YT17cm93RGF0YX0gIC8+XG4gICAgICB9KVxuICAgICAgcmV0dXJuIDx0cj57aW5uZXJ9PC90cj47XG5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0Rm9vUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHJvd0RhdGEgPSB0aGlzLnByb3BzLnJvd0RhdGE7XG4gICAgIFxuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5hbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHJldHVybiA8dHIga2V5ID0ge3Jvd0RhdGEua2V5ICsgY29sfT5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lID0gXCJtZWhtZXRcIj57Y29sfTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZSA9IFwiYWhtZXRcIj5cbiAgICAgICAgICAgIHtyb3dEYXRhW2NvbF19PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIH0pXG4gICAgICByZXR1cm4gPHRyID48dGQgY2xhc3NOYW1lPVwiZGlzXCIgY29sU3BhbiA9XCIyXCI+PHRhYmxlPjx0Ym9keT57aW5uZXJ9PC90Ym9keT48L3RhYmxlPjwvdGQ+PC90cj47XG5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIGFsbENvbHVtcyA9IHRoaXMucHJvcHMuZmVlZC5hbGxDb2x1bW5zO1xuXG4gICAgICB2YXIgZm9vQ29sdW1ucyA9IFtdO1xuICAgICAgdmFyIG1haW5Db2x1bW5zID0gW107XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgYWxsQ29sdW1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGlmIChrID4gZm9vU2l6ZSAtIDEpXG4gICAgICAgICAgZm9vQ29sdW1ucy5wdXNoKGFsbENvbHVtc1trXSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtYWluQ29sdW1ucy5wdXNoKGFsbENvbHVtc1trXSk7XG4gICAgICB9XG5cbiAgICAgIC8vdmFyIGZvb1RhYmxlID0gdGhpcy5wcm9wcy5mZWVkLmxpc3RUeXBlID09PSAnZm9vJztcbiAgICAgIHZhciBpbm5lciA9IFtdO1xuXG4gICAgICBpZiAoZm9vU3R5bGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZWVkLmxpc3QubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBpbm5lci5wdXNoKDxFTGlzdFJvdyBrZXk9e3Jvdy5rZXl9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17bWFpbkNvbHVtbnN9Lz4pO1xuICAgICAgICAgIGlubmVyLnB1c2goPEVMaXN0Rm9vUm93IGtleT17cm93LmtleSArICdfZm9vJ30gcm93RGF0YT17cm93fSBhbGxDb2x1bW5zPXtmb29Db2x1bW5zfS8+KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpbm5lciA9IHRoaXMucHJvcHMuZmVlZC5saXN0Lm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIDxFTGlzdFJvdyBrZXk9e3Jvdy5rZXl9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17YWxsQ29sdW1zfS8+O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjxkaXY+PHRhYmxlPjx0Ym9keT57aW5uZXJ9PC90Ym9keT48L3RhYmxlPjwvZGl2PjtcbiAgICB9XG4gIH0pXG5cbnZhciBFQnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGNvdW50ZXI6IDAgfVxuXG4gICAgfSxcblxuICAgIG9uRG91YmxlQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjb3VudGVyID0gdGhpcy5zdGF0ZS5jb3VudGVyO1xuICAgICAgY291bnRlcisrO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6IGNvdW50ZXIgfSlcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gPGRpdiBkYXRhLW5hcGVyPScxMCcgIGFyaWEtaGlkZGVuPXt0cnVlfT48bGk+PGlucHV0IHR5cGUgPSBcImJ1dHRvblwiIHZhbHVlID0ge3RoaXMucHJvcHMuZmVlZC50ZXh0ICsgdGhpcy5zdGF0ZS5jb3VudGVyfSBvbkRvdWJsZUNsaWNrID17dGhpcy5vbkRvdWJsZUNsaWNrfSAgb25DbGljaz17dGhpcy5wcm9wcy5mZWVkLm9uQ2xpY2t9IC8+PC9saT48L2Rpdj47XG4gICAgfVxuICB9KSAgICAgXG5cbnZhciBFSW1nID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiA8bGk+PGltZyBzcmM9e3RoaXMucHJvcHMuZmVlZC5zcmN9Lz48L2xpPjtcbiAgICB9XG4gIH0pIFxuXG52YXIgUkZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xzLm1hcChmdW5jdGlvbiAoZmVlZCkge1xuICAgICAgICBzd2l0Y2ggKGZlZWQudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6IHJldHVybiA8QlRleHQga2V5PXtmZWVkLmtleX0gZmVlZD17ZmVlZH0vPjtcbiAgICAgICAgICBjYXNlIFwiaW1nXCI6IHJldHVybiA8RUltZyBrZXk9e2ZlZWQua2V5fSAgZmVlZD17ZmVlZH0vPjtcbiAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6IHJldHVybiA8RUJ1dHRvbiBrZXk9e2ZlZWQua2V5fSAgZmVlZD17ZmVlZH0vPjtcbiAgICAgICAgICBjYXNlIFwibGlzdFwiOiByZXR1cm4gPEVMaXN0IGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiA8ZGl2PkJ1bGFkxLFtPC9kaXY+O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiA8ZGl2PjxkaXY+PGgxPnt0aGlzLnByb3BzLmRhdGEuY2FwdGlvbn08L2gxPjwvZGl2Pjx1bD57aW5uZXJ9PC91bD48L2Rpdj47XG4gICAgfVxuICB9XG4pO1xuXG52YXIgUlJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmRhdGEuZm9ybXMubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIHJldHVybiA8UkZvcm0ga2V5PXtmb3JtLmtleX0gZGF0YT17Zm9ybX0vPjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+e2lubmVyfTwvZGl2PjtcbiAgICB9XG4gIH1cbik7XG5cbnZhciBSU2NyZWVuID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICByZXR1cm4gPFJSb3cga2V5PXtyb3cua2V5fSBkYXRhPXtyb3d9Lz47XG4gICAgICB9KTtcbiAgICAgIHJldHVybiA8ZGl2PjxEcmF3ZXJUZXN0IC8+e2lubmVyfTwvZGl2PjtcbiAgICB9XG4gIH1cbik7XG5cblxuZnVuY3Rpb24gcmVuZGVyU2NyZWVuKGRvbUVsZW1lbnROYW1lLCBzY3JlZW5EYXRhKSB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UlNjcmVlbiBkYXRhPXtzY3JlZW5EYXRhfSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21FbGVtZW50TmFtZSkpO1xufVxuXG4gICAgXG5cbnJlbmRlclNjcmVlbignY29tcCcsIGluaXRpYWxTY3JlZW4pO1xuXG5mdW5jdGlvbiBhZGRDb250cm9sKCkge1xuICBpbml0aWFsU2NyZWVuWzBdLmZvcm1zWzBdLmNvbnRyb2xzLnB1c2goeyBrZXk6IFwiMzIwMVwiLCB0eXBlOiBcImJ1dHRvblwiLCB0ZXh0OiBcIkJlbiB5ZW5pIGVrbGVuZGltXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgYWxlcnQoJ2JlbiB5ZW5pIGVrbGVuZGltJyk7IH0gfSk7XG4gIG15RnVuY3Rpb24oKTtcbiAgcmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG4gIG15RnVuY3Rpb24oKTtcbn1cblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbmluaXRpYWxTY3JlZW5bMF0uZm9ybXNbMF0uY2FwdGlvbj1cIkJhbmEgYmFrIGthcmRlc2ltIGFrxLFsbMSxIG9sbMWfxZ/Fn8WfxZ9cIjtcbmluaXRpYWxTY3JlZW5bMF0uZm9ybXNbMV0uY29udHJvbHNbMV0udGV4dD1cImJpYmkgZ2VsaXlvciBiaWJpXCI7XG4gIG15RnVuY3Rpb24oKTtcbiAgcmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG4gICBteUZ1bmN0aW9uKCk7XG4gIGNvbnNvbGUubG9nKCd5ZW5pZGVuIHJlbmRlcicpO1xufSwgMTAwMDApO1xuXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZW1vXCIpO1xuICB2YXIgaCA9IGFkZFplcm8oZC5nZXRIb3VycygpLCAyKTtcbiAgdmFyIG0gPSBhZGRaZXJvKGQuZ2V0TWludXRlcygpLCAyKTtcbiAgdmFyIHMgPSBhZGRaZXJvKGQuZ2V0U2Vjb25kcygpLCAyKTtcbiAgdmFyIG1zID0gYWRkWmVybyhkLmdldE1pbGxpc2Vjb25kcygpLCAzKTtcbiAgY29uc29sZS5sb2coaCArIFwiOlwiICsgbSArIFwiOlwiICsgcyArIFwiOlwiICsgbXMpO1xufVxuXG5mdW5jdGlvbiBhZGRaZXJvKHgsIG4pIHtcbiAgd2hpbGUgKHgudG9TdHJpbmcoKS5sZW5ndGggPCBuKSB7XG4gICAgeCA9IFwiMFwiICsgeDtcbiAgfVxuICByZXR1cm4geDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vcnMvcmVuZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==