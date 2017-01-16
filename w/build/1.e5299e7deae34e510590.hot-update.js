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
	
	console.log(initialScreen);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ycy9yZW5kZXIuanM/NzRlZCJdLCJuYW1lcyI6WyJCVGV4dCIsInJlcXVpcmUiLCJpbml0aWFsU2NyZWVuIiwiY29uc29sZSIsImxvZyIsIkRyYXdlclRlc3QiLCJzdGF0ZSIsImFjdGl2ZSIsImhhbmRsZVRvZ2dsZSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJmb29TdHlsZSIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwicmVzaXplTXlCb2R5IiwibG9jYWxGb29TdHlsZSIsInJlbmRlclNjcmVlbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb29TaXplIiwiRUxpc3RDb2x1bW4iLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInZhbHVlIiwicHJvcHMiLCJyb3dEYXRhIiwiY29sTmFtZSIsIkVMaXN0Rm9vQ29sdW1uIiwiRUxpc3RSb3ciLCJjb2xJbmRleCIsImlubmVyIiwiYWxsQ29sdW1ucyIsIm1hcCIsImNvbCIsInJvd0tleSIsImtleSIsIkVMaXN0Rm9vUm93IiwiRUxpc3QiLCJhbGxDb2x1bXMiLCJmZWVkIiwiZm9vQ29sdW1ucyIsIm1haW5Db2x1bW5zIiwiayIsImxlbmd0aCIsInB1c2giLCJsaXN0Iiwicm93IiwiRUJ1dHRvbiIsImdldEluaXRpYWxTdGF0ZSIsImNvdW50ZXIiLCJvbkRvdWJsZUNsaWNrIiwib25DbGljayIsInRleHQiLCJFSW1nIiwic3JjIiwiUkZvcm0iLCJkYXRhIiwiY29udHJvbHMiLCJ0eXBlIiwiY2FwdGlvbiIsIlJSb3ciLCJmb3JtcyIsImZvcm0iLCJSU2NyZWVuIiwiZG9tRWxlbWVudE5hbWUiLCJzY3JlZW5EYXRhIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsImFkZENvbnRyb2wiLCJhbGVydCIsIm15RnVuY3Rpb24iLCJzZXRUaW1lb3V0IiwiZCIsIkRhdGUiLCJ4IiwiaCIsImFkZFplcm8iLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVz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QUF4QixDQUFSO0FBQ0EsT0FBSUMsSUFBSUosUUFBUUosRUFBRVMsVUFBRixFQUFSLEVBQXdCLENBQXhCLENBQVI7QUFDQSxPQUFJQyxLQUFLTixRQUFRSixFQUFFVyxlQUFGLEVBQVIsRUFBNkIsQ0FBN0IsQ0FBVDtBQUNBbEYsV0FBUUMsR0FBUixDQUFZeUUsSUFBSSxHQUFKLEdBQVVHLENBQVYsR0FBYyxHQUFkLEdBQW9CRSxDQUFwQixHQUF3QixHQUF4QixHQUE4QkUsRUFBMUM7QUFDRDs7QUFFRCxVQUFTTixPQUFULENBQWlCRixDQUFqQixFQUFvQlUsQ0FBcEIsRUFBdUI7QUFDckIsVUFBT1YsRUFBRVcsUUFBRixHQUFhMUMsTUFBYixHQUFzQnlDLENBQTdCLEVBQWdDO0FBQzlCVixTQUFJLE1BQU1BLENBQVY7QUFDRDtBQUNELFVBQU9BLENBQVA7QUFDRCxFIiwiZmlsZSI6IjEuZTUyOTllN2RlYWUzNGU1MTA1OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcmVxdWlyZShcIiFzdHlsZSFjc3MhLi8uLi9zdC9zaXRlLmNzc1wiKTtcbnZhciBCVGV4dCA9ICByZXF1aXJlKFwiLi9jb250cm9scy9CVGV4dFwiKTtcbnZhciBpbml0aWFsU2NyZWVuID0gcmVxdWlyZShcIi4vbW9ja0RhdGEvaW5pdGlhbFNjcmVlblwiKTtcblxuY29uc29sZS5sb2coaW5pdGlhbFNjcmVlbik7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2J1dHRvbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL2RyYXdlcic7XG5cbmNsYXNzIERyYXdlclRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlfSk7XG4gIH07XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD0nU2hvdyBEcmF3ZXInIHJhaXNlZCBhY2NlbnQgb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9IC8+XG4gICAgICAgIDxEcmF3ZXIgYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX0gb25PdmVybGF5Q2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cbiAgICAgICAgICA8aDU+VGhpcyBpcyB5b3VyIERyYXdlciA8L2g1PlxuICAgICAgICAgIDxwPkNhbsSxbSBidXJheWEgc3RlZGlnaW5pIGVrbGU8L3A+XG4gICAgICAgIDwvRHJhd2VyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxudmFyIGZvb1N0eWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDYwMDtcblxuZnVuY3Rpb24gcmVzaXplTXlCb2R5KCkge1xuICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcblxuICB2YXIgbG9jYWxGb29TdHlsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA2MDA7XG5cbiAgaWYgKGZvb1N0eWxlICE9IGxvY2FsRm9vU3R5bGUpIHtcbiAgICBmb29TdHlsZSA9IGxvY2FsRm9vU3R5bGU7XG4gICAgcmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG4gICAgY29uc29sZS5sb2coXCJQYWdlIFJlcmVuZGVyZWRcIik7XG4gIH1cbn1cblxuLy9CdXJhecSxIG96ZWwgb2xhcmFrIGJpciB5ZXJlIGtveW1hayBnZXJla2ViaWxpcmQgZHVydW1hIGdvcmUuIFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplTXlCb2R5KTtcblxuXG5cbnZhciBmb29TaXplID0gMjtcblxuXG5cblxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2dhcmNpYWUvanNvbmZuXG4vLyBGdW5jdGlvbmxhcsSxIHlhem1hayBpw6dpbiB5YXrEsWzEsXIuLi4gXG4vLyBKc29uIFN0cmlmeSBcbi8vIHZhciBvYmogPSBKU09OZm4ucGFyc2UoYSk7XG4vLyB2YXIgYSA9IEpTT05mbi5zdHJpbmdpZnkoaW5pdGlhbFNjcmVlbik7XG5cblxudmFyIEVMaXN0Q29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93RGF0YVt0aGlzLnByb3BzLmNvbE5hbWVdO1xuICAgICAgcmV0dXJuIDx0ZD57dmFsdWV9PC90ZD5cbiAgICB9XG4gIH1cbilcblxudmFyIEVMaXN0Rm9vQ29sdW1uID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMucm93RGF0YVt0aGlzLnByb3BzLmNvbE5hbWVdO1xuICAgICAgcmV0dXJuIDx0ZD57dmFsdWV9PC90ZD5cbiAgICB9XG4gIH1cbilcblxuXG5cblxudmFyIEVMaXN0Um93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHJvd0RhdGEgPSB0aGlzLnByb3BzLnJvd0RhdGE7XG4gICAgICB2YXIgY29sSW5kZXggPSAwOy8vRm9yIHJlYWN0IGtleSBvZiBDb2x1bW5zIFxuXG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmFsbENvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgdmFyIHJvd0tleSA9IHJvd0RhdGEua2V5ICsgJ0AnICsgY29sSW5kZXgrKztcbiAgICAgICAgcmV0dXJuIDxFTGlzdENvbHVtbiBrZXkgPSB7cm93S2V5fSBjb2xOYW1lPXtjb2x9IHJvd0RhdGE9e3Jvd0RhdGF9ICAvPlxuICAgICAgfSlcbiAgICAgIHJldHVybiA8dHI+e2lubmVyfTwvdHI+O1xuXG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdEZvb1JvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciByb3dEYXRhID0gdGhpcy5wcm9wcy5yb3dEYXRhO1xuICAgICBcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gPHRyIGtleSA9IHtyb3dEYXRhLmtleSArIGNvbH0+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZSA9IFwibWVobWV0XCI+e2NvbH08L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWUgPSBcImFobWV0XCI+XG4gICAgICAgICAgICB7cm93RGF0YVtjb2xdfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICB9KVxuICAgICAgcmV0dXJuIDx0ciA+PHRkIGNsYXNzTmFtZT1cImRpc1wiIGNvbFNwYW4gPVwiMlwiPjx0YWJsZT48dGJvZHk+e2lubmVyfTwvdGJvZHk+PC90YWJsZT48L3RkPjwvdHI+O1xuXG4gICAgfVxuICB9XG4pXG5cbnZhciBFTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBhbGxDb2x1bXMgPSB0aGlzLnByb3BzLmZlZWQuYWxsQ29sdW1ucztcblxuICAgICAgdmFyIGZvb0NvbHVtbnMgPSBbXTtcbiAgICAgIHZhciBtYWluQ29sdW1ucyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGFsbENvbHVtcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBpZiAoayA+IGZvb1NpemUgLSAxKVxuICAgICAgICAgIGZvb0NvbHVtbnMucHVzaChhbGxDb2x1bXNba10pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbWFpbkNvbHVtbnMucHVzaChhbGxDb2x1bXNba10pO1xuICAgICAgfVxuXG4gICAgICAvL3ZhciBmb29UYWJsZSA9IHRoaXMucHJvcHMuZmVlZC5saXN0VHlwZSA9PT0gJ2Zvbyc7XG4gICAgICB2YXIgaW5uZXIgPSBbXTtcblxuICAgICAgaWYgKGZvb1N0eWxlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmVlZC5saXN0Lm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgaW5uZXIucHVzaCg8RUxpc3RSb3cga2V5PXtyb3cua2V5fSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e21haW5Db2x1bW5zfS8+KTtcbiAgICAgICAgICBpbm5lci5wdXNoKDxFTGlzdEZvb1JvdyBrZXk9e3Jvdy5rZXkgKyAnX2Zvbyd9IHJvd0RhdGE9e3Jvd30gYWxsQ29sdW1ucz17Zm9vQ29sdW1uc30vPik7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaW5uZXIgPSB0aGlzLnByb3BzLmZlZWQubGlzdC5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiA8RUxpc3RSb3cga2V5PXtyb3cua2V5fSByb3dEYXRhPXtyb3d9IGFsbENvbHVtbnM9e2FsbENvbHVtc30vPjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm48ZGl2Pjx0YWJsZT48dGJvZHk+e2lubmVyfTwvdGJvZHk+PC90YWJsZT48L2Rpdj47XG4gICAgfVxuICB9KVxuXG52YXIgRUJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBjb3VudGVyOiAwIH1cblxuICAgIH0sXG5cbiAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY291bnRlciA9IHRoaXMuc3RhdGUuY291bnRlcjtcbiAgICAgIGNvdW50ZXIrKztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiBjb3VudGVyIH0pXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuY29uc29sZS5sb2cgKHR5cGVvZiggdGhpcy5wcm9wcy5mZWVkLm9uQ2xpY2spKTtcbiAgICAgIHJldHVybiA8ZGl2IGRhdGEtbmFwZXI9JzEwJyAgYXJpYS1oaWRkZW49e3RydWV9PjxsaT48aW5wdXQgdHlwZSA9IFwiYnV0dG9uXCIgdmFsdWUgPSB7dGhpcy5wcm9wcy5mZWVkLnRleHQgKyB0aGlzLnN0YXRlLmNvdW50ZXJ9IG9uRG91YmxlQ2xpY2sgPXt0aGlzLm9uRG91YmxlQ2xpY2t9ICBvbkNsaWNrPXt0aGlzLnByb3BzLmZlZWQub25DbGlja30gLz48L2xpPjwvZGl2PjtcbiAgICB9XG4gIH0pICAgICBcblxudmFyIEVJbWcgPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIDxsaT48aW1nIHNyYz17dGhpcy5wcm9wcy5mZWVkLnNyY30vPjwvbGk+O1xuICAgIH1cbiAgfSkgXG5cbnZhciBSRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKFxuICB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXIgPSB0aGlzLnByb3BzLmRhdGEuY29udHJvbHMubWFwKGZ1bmN0aW9uIChmZWVkKSB7XG4gICAgICAgIHN3aXRjaCAoZmVlZC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcInRleHRcIjogcmV0dXJuIDxCVGV4dCBrZXk9e2ZlZWQua2V5fSBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJpbWdcIjogcmV0dXJuIDxFSW1nIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJidXR0b25cIjogcmV0dXJuIDxFQnV0dG9uIGtleT17ZmVlZC5rZXl9ICBmZWVkPXtmZWVkfS8+O1xuICAgICAgICAgIGNhc2UgXCJsaXN0XCI6IHJldHVybiA8RUxpc3Qga2V5PXtmZWVkLmtleX0gIGZlZWQ9e2ZlZWR9Lz47XG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDxkaXY+QnVsYWTEsW08L2Rpdj47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PGRpdj48aDE+e3RoaXMucHJvcHMuZGF0YS5jYXB0aW9ufTwvaDE+PC9kaXY+PHVsPntpbm5lcn08L3VsPjwvZGl2PjtcbiAgICB9XG4gIH1cbik7XG5cbnZhciBSUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3MoXG4gIHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lciA9IHRoaXMucHJvcHMuZGF0YS5mb3Jtcy5tYXAoZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgcmV0dXJuIDxSRm9ybSBrZXk9e2Zvcm0ua2V5fSBkYXRhPXtmb3JtfS8+O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gPGRpdj57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxudmFyIFJTY3JlZW4gPSBSZWFjdC5jcmVhdGVDbGFzcyhcbiAge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlubmVyID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiA8UlJvdyBrZXk9e3Jvdy5rZXl9IGRhdGE9e3Jvd30vPjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxkaXY+PERyYXdlclRlc3QgLz57aW5uZXJ9PC9kaXY+O1xuICAgIH1cbiAgfVxuKTtcblxuXG5mdW5jdGlvbiByZW5kZXJTY3JlZW4oZG9tRWxlbWVudE5hbWUsIHNjcmVlbkRhdGEpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxSU2NyZWVuIGRhdGE9e3NjcmVlbkRhdGF9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUVsZW1lbnROYW1lKSk7XG59XG5cbiAgICBcblxucmVuZGVyU2NyZWVuKCdjb21wJywgaW5pdGlhbFNjcmVlbik7XG5cbmZ1bmN0aW9uIGFkZENvbnRyb2woKSB7XG4gIGluaXRpYWxTY3JlZW5bMF0uZm9ybXNbMF0uY29udHJvbHMucHVzaCh7IGtleTogXCIzMjAxXCIsIHR5cGU6IFwiYnV0dG9uXCIsIHRleHQ6IFwiQmVuIHllbmkgZWtsZW5kaW1cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyBhbGVydCgnYmVuIHllbmkgZWtsZW5kaW0nKTsgfSB9KTtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgbXlGdW5jdGlvbigpO1xufVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1swXS5jYXB0aW9uPVwiQmFuYSBiYWsga2FyZGVzaW0gYWvEsWxsxLEgb2xsxZ/Fn8WfxZ/Fn1wiO1xuaW5pdGlhbFNjcmVlblswXS5mb3Jtc1sxXS5jb250cm9sc1sxXS50ZXh0PVwiYmliaSBnZWxpeW9yIGJpYmlcIjtcbiAgbXlGdW5jdGlvbigpO1xuICByZW5kZXJTY3JlZW4oJ2NvbXAnLCBpbml0aWFsU2NyZWVuKTtcbiAgIG15RnVuY3Rpb24oKTtcbiAgY29uc29sZS5sb2coJ3llbmlkZW4gcmVuZGVyJyk7XG59LCAxMDAwMCk7XG5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG4gIHZhciBoID0gYWRkWmVybyhkLmdldEhvdXJzKCksIDIpO1xuICB2YXIgbSA9IGFkZFplcm8oZC5nZXRNaW51dGVzKCksIDIpO1xuICB2YXIgcyA9IGFkZFplcm8oZC5nZXRTZWNvbmRzKCksIDIpO1xuICB2YXIgbXMgPSBhZGRaZXJvKGQuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xuICBjb25zb2xlLmxvZyhoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzICsgXCI6XCIgKyBtcyk7XG59XG5cbmZ1bmN0aW9uIGFkZFplcm8oeCwgbikge1xuICB3aGlsZSAoeC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHtcbiAgICB4ID0gXCIwXCIgKyB4O1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ycy9yZW5kZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9