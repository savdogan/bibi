

var fooStyle = document.body.clientWidth < 600;

function resizeMyBody() {
  console.log(document.body.clientWidth);

  var localFooStyle = document.body.clientWidth < 600;

  if (fooStyle != localFooStyle) {
    fooStyle = localFooStyle;
    renderScreen('comp', screen);
    console.log("Page Rerendered");
  }
}

var fooSize = 2;

var screen = [{
  controlType: "row",
  key: "row1",
  forms: [{
    key: "form5",
    layout: "2",
    controlType: "form",
    caption: "Müşteri Bilgileri",
    state: "closed",
    controls: [{
      key: "317",
      type: "list",
      listType: "foo",
      allColumns: ["ad", "soyad", "yas", "cinsiyet"],
      list: [{ key: "23ewwej", ad: "Savas", soyad: "Dogan", yas: "12", cinsiyet: "erkek" }, { key: "23ewwe22", ad: "Ali", soyad: "Duba", yas: "13", cinsiyet: "kadın" }, { key: "23ewwef", ad: "canan", soyad: "Yasar", yas: "21", cinsiyet: "erkek" }, { key: "23ewwe5", ad: "Aysen", soyad: "ali", yas: "33", cinsiyet: "kadın" }, { key: "23ewwe2", ad: "manyak", soyad: "kardesim", yas: "44", cinsiyet: "erkek" }, { key: "23ewwe2e", ad: "Hasan", soyad: "demand", yas: "42", cinsiyet: "kadın" }, { key: "23ewwee", ad: "Deli", soyad: "Karpuz", yas: "82", cinsiyet: "erkek" }]
    }]
  }, {
    key: "form4",
    layout: "2",
    controlType: "form",
    caption: "Deneme4",
    state: "closed",
    controls: [{ key: "317", type: "text" }, { key: "318", type: "button", text: "Hadi bas canim " }, { key: "319", type: "text", defaultValue: "Canım Benim" }]
  }, {
    key: "form3",
    layout: "2",
    controlType: "form",
    caption: "Deneme3",
    state: "closed",
    controls: [{ key: "320", type: "button", text: "bana bas bana bas", onClick: function () {
        alert('naper');
      } }, { key: "321", type: "img", src: "http://s.hurriyet.com.tr/static/img/hurriyet-logo.png" }, { key: "322", type: "text" }]
  }]
}, {
  controlType: "row",
  key: "row2",
  forms: [{
    key: "form11",
    layout: "2",
    controlType: "form",
    caption: "Bu ne la şimdi",
    state: "closed",
    controls: []
  }, {
    key: "form22",
    layout: "2",
    controlType: "form",
    caption: "Deneme4",
    state: "closed",
    controls: [{ key: "3171", type: "text" }, { key: "3181", type: "button", text: "Hadi bas canim" }, { key: "3191", type: "text", defaultValue: "Canım Benim" }]
  }, {
    key: "form35",
    layout: "2",
    controlType: "form",
    caption: "Deneme3",
    state: "closed",
    controls: [{ key: "3201", type: "button", text: "bana bas bana bas" }, { key: "3211", type: "img", src: "http://s.hurriyet.com.tr/static/img/hurriyet-logo.png" }, { key: "3221", type: "text" }]
  }]
}];

// https://github.com/cgarciae/jsonfn
// Functionları yazmak için yazılır... 
// Json Strify 
// var obj = JSONfn.parse(a);
// var a = JSONfn.stringify(screen);

var EText = React.createClass({
  displayName: "EText",

  render: function () {
    return React.createElement(
      "li",
      null,
      React.createElement("input", { style: { backgroundColor: 'red' }, type: "text", defaultValue: this.props.feed.defaultValue })
    );
  }
});

var EListColumn = React.createClass({
  displayName: "EListColumn",

  render: function () {
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

  render: function () {
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

  render: function () {

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

  render: function () {

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

  render: function () {

    var allColums = this.props.feed.allColumns;

    var fooColumns = [];
    var mainColumns = [];

    for (i = 0; i < allColums.length; i++) {
      if (i > fooSize - 1) fooColumns.push(allColums[i]);else mainColumns.push(allColums[i]);
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
      "table",
      null,
      React.createElement(
        "tbody",
        null,
        inner
      )
    );
  }
});

var EButton = React.createClass({
  displayName: "EButton",

  getInitialState: function () {
    return { counter: 0 };
  },

  onDoubleClick: function () {
    var counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
  },

  render: function () {
    return React.createElement(
      "li",
      null,
      React.createElement("input", { type: "button", value: this.props.feed.text + this.state.counter, onDoubleClick: this.onDoubleClick, onClick: this.props.feed.onClick })
    );
  }
});

var EImg = React.createClass({
  displayName: "EImg",

  render: function () {
    return React.createElement(
      "li",
      null,
      React.createElement("img", { src: this.props.feed.src })
    );
  }
});

var RForm = React.createClass({
  displayName: "RForm",

  render: function () {
    var inner = this.props.data.controls.map(function (feed) {
      switch (feed.type) {
        case "text":
          return React.createElement(EText, { key: feed.key, feed: feed });
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

  render: function () {
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

  render: function () {
    var inner = this.props.data.map(function (row) {
      return React.createElement(RRow, { key: row.key, data: row });
    });
    return React.createElement(
      "div",
      null,
      inner
    );
  }
});

function renderScreen(domElementName, screenData) {
  ReactDOM.render(React.createElement(RScreen, { data: screenData }), document.getElementById(domElementName));
}

renderScreen('comp', screen);

function addControl() {
  screen[0].forms[0].controls.push({ key: "3201", type: "button", text: "Ben yeni eklendim", onClick: function () {
      alert('ben yeni eklendim');
    } });
  myFunction();
  renderScreen('comp', screen);
  myFunction();
}

setTimeout(function () {
  screen[0].forms[0].caption = "deli olma kardesimmmmmmm";
  screen[0].forms[1].controls[1].text = "deli olma kardesimmmmmmm";
  renderScreen('comp', screen);
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