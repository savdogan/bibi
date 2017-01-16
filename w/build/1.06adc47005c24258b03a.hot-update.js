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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ycy9yZW5kZXIuanM/NzRlZCJdLCJuYW1lcyI6WyJCVGV4dCIsInJlcXVpcmUiLCJpbml0aWFsU2NyZWVuIiwiRHJhd2VyVGVzdCIsInN0YXRlIiwiYWN0aXZlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImZvb1N0eWxlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJyZXNpemVNeUJvZHkiLCJjb25zb2xlIiwibG9nIiwibG9jYWxGb29TdHlsZSIsInJlbmRlclNjcmVlbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb29TaXplIiwiRUxpc3RDb2x1bW4iLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInZhbHVlIiwicHJvcHMiLCJyb3dEYXRhIiwiY29sTmFtZSIsIkVMaXN0Rm9vQ29sdW1uIiwiRUxpc3RSb3ciLCJjb2xJbmRleCIsImlubmVyIiwiYWxsQ29sdW1ucyIsIm1hcCIsImNvbCIsInJvd0tleSIsImtleSIsIkVMaXN0Rm9vUm93IiwiRUxpc3QiLCJhbGxDb2x1bXMiLCJmZWVkIiwiZm9vQ29sdW1ucyIsIm1haW5Db2x1bW5zIiwiayIsImxlbmd0aCIsInB1c2giLCJsaXN0Iiwicm93IiwiRUJ1dHRvbiIsImdldEluaXRpYWxTdGF0ZSIsImNvdW50ZXIiLCJvbkRvdWJsZUNsaWNrIiwidGV4dCIsIm9uQ2xpY2siLCJFSW1nIiwic3JjIiwiUkZvcm0iLCJkYXRhIiwiY29udHJvbHMiLCJ0eXBlIiwiY2FwdGlvbiIsIlJSb3ciLCJmb3JtcyIsImZvcm0iLCJSU2NyZWVuIiwiZG9tRWxlbWVudE5hbWUiLCJzY3JlZW5EYXRhIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsImFkZENvbnRyb2wiLCJhbGVydCIsIm15RnVuY3Rpb24iLCJzZXRUaW1lb3V0IiwiZCIsIkRhdGUiLCJ4IiwiaCIsImFkZFplcm8iLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVz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QUVXLGVBQUYsRUFBUixFQUE2QixDQUE3QixDQUFUO0FBQ0F0RSxXQUFRQyxHQUFSLENBQVk2RCxJQUFJLEdBQUosR0FBVUcsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQXBCLEdBQXdCLEdBQXhCLEdBQThCRSxFQUExQztBQUNEOztBQUVELFVBQVNOLE9BQVQsQ0FBaUJGLENBQWpCLEVBQW9CVSxDQUFwQixFQUF1QjtBQUNyQixVQUFPVixFQUFFVyxRQUFGLEdBQWExQyxNQUFiLEdBQXNCeUMsQ0FBN0IsRUFBZ0M7QUFDOUJWLFNBQUksTUFBTUEsQ0FBVjtBQUNEO0FBQ0QsVUFBT0EsQ0FBUDtBQUNELEUiLCJmaWxlIjoiMS4wNmFkYzQ3MDA1YzI0MjU4YjAzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZXF1aXJlKFwiIXN0eWxlIWNzcyEuLy4uL3N0L3NpdGUuY3NzXCIpO1xudmFyIEJUZXh0ID0gIHJlcXVpcmUoXCIuL2NvbnRyb2xzL0JUZXh0XCIpO1xudmFyIGluaXRpYWxTY3JlZW4gPSByZXF1aXJlKFwiLi9tb2NrRGF0YS9pbml0aWFsU2NyZWVuXCIpO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24nO1xuaW1wb3J0IERyYXdlciBmcm9tICdyZWFjdC10b29sYm94L2xpYi9kcmF3ZXInO1xuXG5jbGFzcyBEcmF3ZXJUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZX0pO1xuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9J1Nob3cgRHJhd2VyJyByYWlzZWQgYWNjZW50IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPlxuICAgICAgICA8RHJhd2VyIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9IG9uT3ZlcmxheUNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0+XG4gICAgICAgICAgPGg1PlRoaXMgaXMgeW91ciBEcmF3ZXIgPC9oNT5cbiAgICAgICAgICA8cD5DYW7EsW0gYnVyYXlhIHN0ZWRpZ2luaSBla2xlPC9wPlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbnZhciBmb29TdHlsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA2MDA7XG5cbmZ1bmN0aW9uIHJlc2l6ZU15Qm9keSgpIHtcbiAgY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XG5cbiAgdmFyIGxvY2FsRm9vU3R5bGUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgNjAwO1xuXG4gIGlmIChmb29TdHlsZSAhPSBsb2NhbEZvb1N0eWxlKSB7XG4gICAgZm9vU3R5bGUgPSBsb2NhbEZvb1N0eWxlO1xuICAgIHJlbmRlclNjcmVlbignY29tcCcsIGluaXRpYWxTY3JlZW4pO1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSBSZXJlbmRlcmVkXCIpO1xuICB9XG59XG5cbi8vQnVyYXnEsSBvemVsIG9sYXJhayBiaXIgeWVyZSBrb3ltYWsgZ2VyZWtlYmlsaXJkIGR1cnVtYSBnb3JlLiBcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZU15Qm9keSk7XG5cblxuXG52YXIgZm9vU2l6ZSA9IDI7XG5cblxuXG5cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NnYXJjaWFlL2pzb25mblxuLy8gRnVuY3Rpb25sYXLEsSB5YXptYWsgacOnaW4geWF6xLFsxLFyLi4uIFxuLy8gSnNvbiBTdHJpZnkgXG4vLyB2YXIgb2JqID0gSlNPTmZuLnBhcnNlKGEpO1xuLy8gdmFyIGEgPSBKU09OZm4uc3RyaW5naWZ5KGluaXRpYWxTY3JlZW4pO1xuXG5cbnZhciBFTGlzdENvbHVtbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnJvd0RhdGFbdGhpcy5wcm9wcy5jb2xOYW1lXTtcbiAgICAgIHJldHVybiA8dGQ+e3ZhbHVlfTwvdGQ+XG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdEZvb0NvbHVtbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb3BzLnJvd0RhdGFbdGhpcy5wcm9wcy5jb2xOYW1lXTtcbiAgICAgIHJldHVybiA8dGQ+e3ZhbHVlfTwvdGQ+XG4gICAgfVxuICB9XG4pXG5cblxuXG5cbnZhciBFTGlzdFJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciByb3dEYXRhID0gdGhpcy5wcm9wcy5yb3dEYXRhO1xuICAgICAgdmFyIGNvbEluZGV4ID0gMDsvL0ZvciByZWFjdCBrZXkgb2YgQ29sdW1ucyBcblxuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5hbGxDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHZhciByb3dLZXkgPSByb3dEYXRhLmtleSArICdAJyArIGNvbEluZGV4Kys7XG4gICAgICAgIHJldHVybiA8RUxpc3RDb2x1bW4ga2V5ID0ge3Jvd0tleX0gY29sTmFtZT17Y29sfSByb3dEYXRhPXtyb3dEYXRhfSAgLz5cbiAgICAgIH0pXG4gICAgICByZXR1cm4gPHRyPntpbm5lcn08L3RyPjtcblxuICAgIH1cbiAgfVxuKVxuXG52YXIgRUxpc3RGb29Sb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgcm93RGF0YSA9IHRoaXMucHJvcHMucm93RGF0YTtcbiAgICAgXG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgcmV0dXJuIDx0ciBrZXkgPSB7cm93RGF0YS5rZXkgKyBjb2x9PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWUgPSBcIm1laG1ldFwiPntjb2x9PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lID0gXCJhaG1ldFwiPlxuICAgICAgICAgICAge3Jvd0RhdGFbY29sXX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgfSlcbiAgICAgIHJldHVybiA8dHIgPjx0ZCBjbGFzc05hbWU9XCJkaXNcIiBjb2xTcGFuID1cIjJcIj48dGFibGU+PHRib2R5Pntpbm5lcn08L3Rib2R5PjwvdGFibGU+PC90ZD48L3RyPjtcblxuICAgIH1cbiAgfVxuKVxuXG52YXIgRUxpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgYWxsQ29sdW1zID0gdGhpcy5wcm9wcy5mZWVkLmFsbENvbHVtbnM7XG5cbiAgICAgIHZhciBmb29Db2x1bW5zID0gW107XG4gICAgICB2YXIgbWFpbkNvbHVtbnMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBhbGxDb2x1bXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgaWYgKGsgPiBmb29TaXplIC0gMSlcbiAgICAgICAgICBmb29Db2x1bW5zLnB1c2goYWxsQ29sdW1zW2tdKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1haW5Db2x1bW5zLnB1c2goYWxsQ29sdW1zW2tdKTtcbiAgICAgIH1cblxuICAgICAgLy92YXIgZm9vVGFibGUgPSB0aGlzLnByb3BzLmZlZWQubGlzdFR5cGUgPT09ICdmb28nO1xuICAgICAgdmFyIGlubmVyID0gW107XG5cbiAgICAgIGlmIChmb29TdHlsZSkge1xuICAgICAgICB0aGlzLnByb3BzLmZlZWQubGlzdC5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIGlubmVyLnB1c2goPEVMaXN0Um93IGtleT17cm93LmtleX0gcm93RGF0YT17cm93fSBhbGxDb2x1bW5zPXttYWluQ29sdW1uc30vPik7XG4gICAgICAgICAgaW5uZXIucHVzaCg8RUxpc3RGb29Sb3cga2V5PXtyb3cua2V5ICsgJ19mb28nfSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e2Zvb0NvbHVtbnN9Lz4pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlubmVyID0gdGhpcy5wcm9wcy5mZWVkLmxpc3QubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gPEVMaXN0Um93IGtleT17cm93LmtleX0gcm93RGF0YT17cm93fSBhbGxDb2x1bW5zPXthbGxDb2x1bXN9Lz47XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuPGRpdj48dGFibGU+PHRib2R5Pntpbm5lcn08L3Rib2R5PjwvdGFibGU+PC9kaXY+O1xuICAgIH1cbiAgfSlcblxudmFyIEVCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgY291bnRlcjogMCB9XG5cbiAgICB9LFxuXG4gICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvdW50ZXIgPSB0aGlzLnN0YXRlLmNvdW50ZXI7XG4gICAgICBjb3VudGVyKys7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcjogY291bnRlciB9KVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiA8ZGl2IGRhdGEtbmFwZXI9JzEwJyAgYXJpYS1oaWRkZW49e3RydWV9PjxsaT48aW5wdXQgdHlwZSA9IFwiYnV0dG9uXCIgdmFsdWUgPSB7dGhpcy5wcm9wcy5mZWVkLnRleHQgKyB0aGlzLnN0YXRlLmNvdW50ZXJ9IG9uRG91YmxlQ2xpY2sgPXt0aGlzLm9uRG91YmxlQ2xpY2t9ICBvbkNsaWNrPXt0aGlzLnByb3BzLmZlZWQub25DbGlja30gLz48L2xpPjwvZGl2PjtcbiAgICB9XG4gIH0pICAgICBcblxudmFyIEVJbWcgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDxsaT48aW1nIHNyYz17dGhpcy5wcm9wcy5mZWVkLnNyY30vPjwvbGk+O1xuICAgIH1cbiAgfSkgXG5cbnZhciBSRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmRhdGEuY29udHJvbHMubWFwKGZ1bmN0aW9uIChmZWVkKSB7XG4gICAgICAgIHN3aXRjaCAoZmVlZC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcInRleHRcIjogcmV0dXJuIDxCVGV4dCBrZXk9e2ZlZWQua2V5fSBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJpbWdcIjogcmV0dXJuIDxFSW1nIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJidXR0b25cIjogcmV0dXJuIDxFQnV0dG9uIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJsaXN0XCI6IHJldHVybiA8RUxpc3Qga2V5PXtmZWVkLmtleX0gIGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDxkaXY+QnVsYWTEsW08L2Rpdj47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PGRpdj48aDE+e3RoaXMucHJvcHMuZGF0YS5jYXB0aW9ufTwvaDE+PC9kaXY+PHVsPntpbm5lcn08L3VsPjwvZGl2PjtcbiAgICB9XG4gIH1cbik7XG5cbnZhciBSUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuZGF0YS5mb3Jtcy5tYXAoZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgcmV0dXJuIDxSRm9ybSBrZXk9e2Zvcm0ua2V5fSBkYXRhPXtmb3JtfS8+O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPGRpdj57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxudmFyIFJTY3JlZW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiA8UlJvdyBrZXk9e3Jvdy5rZXl9IGRhdGE9e3Jvd30vPjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PERyYXdlclRlc3QgLz57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxuXG5mdW5jdGlvbiByZW5kZXJTY3JlZW4oZG9tRWxlbWVudE5hbWUsIHNjcmVlbkRhdGEpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxSU2NyZWVuIGRhdGE9e3NjcmVlbkRhdGF9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUVsZW1lbnROYW1lKSk7XG59XG5cbiAgICBcblxucmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG5cbmZ1bmN0aW9uIGFkZENvbnRyb2woKSB7XG4gIGluaXRpYWxTY3JlZW5bMF0uZm9ybXNbMF0uY29udHJvbHMucHVzaCh7IGtleTogXCIzMjAxXCIsIHR5cGU6IFwiYnV0dG9uXCIsIHRleHQ6IFwiQmVuIHllbmkgZWtsZW5kaW1cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyBhbGVydCgnYmVuIHllbmkgZWtsZW5kaW0nKTsgfSB9KTtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgbXlGdW5jdGlvbigpO1xufVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1swXS5jYXB0aW9uPVwiQmFuYSBiYWsga2FyZGVzaW0gYWvEsWxsxLEgb2xsxZ/Fn8WfxZ/Fn1wiO1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1sxXS5jb250cm9sc1sxXS50ZXh0PVwiYmliaSBnZWxpeW9yIGJpYmlcIjtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgIG15RnVuY3Rpb24oKTtcbiAgY29uc29sZS5sb2coJ3llbmlkZW4gcmVuZGVyJyk7XG59LCAxMDAwMCk7XG5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gIHZhciBoID0gYWRkWmVybyhkLmdldEhvdXJzKCksIDIpO1xuICB2YXIgbSA9IGFkZFplcm8oZC5nZXRNaW51dGVzKCksIDIpO1xuICB2YXIgcyA9IGFkZFplcm8oZC5nZXRTZWNvbmRzKCksIDIpO1xuICB2YXIgbXMgPSBhZGRaZXJvKGQuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xuICBjb25zb2xlLmxvZyhoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzICsgXCI6XCIgKyBtcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFplcm8oeCwgbikge1xuICB3aGlsZSAoeC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHtcbiAgICB4ID0gXCIwXCIgKyB4O1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ycy9yZW5kZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9