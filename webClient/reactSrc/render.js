

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

var screen = [
  {
    controlType: "row",
    key: "row1",
    forms: [
      {
        key: "form1",
        layout: "2",
        controlType: "form",
        caption: "Müşteri Bilgileri",
        state: "closed",
        controls: [
          {
            key: "317",
            type: "list",
            listType: "foo",
            allColumns: ["ad", "soyad", "yas", "cinsiyet"],
            list: [
              { key: "23ewwej", ad: "Savas", soyad: "Dogan", yas: "12", cinsiyet: "erkek" },
              { key: "23ewwe22", ad: "Ali", soyad: "Duba", yas: "13", cinsiyet: "kadın" },
              { key: "23ewwef", ad: "canan", soyad: "Yasar", yas: "21", cinsiyet: "erkek" },
              { key: "23ewwe5", ad: "Aysen", soyad: "ali", yas: "33", cinsiyet: "kadın" },
              { key: "23ewwe2", ad: "manyak", soyad: "kardesim", yas: "44", cinsiyet: "erkek" },
              { key: "23ewwe2e", ad: "Hasan", soyad: "demand", yas: "42", cinsiyet: "kadın" },
              { key: "23ewwee", ad: "Deli", soyad: "Karpuz", yas: "82", cinsiyet: "erkek" }
            ]
          },
        ]
      },
      {
        key: "form2",
        layout: "2",
        controlType: "form",
        caption: "Deneme4",
        state: "closed",
        controls: [
          { key: "317", type: "text" },
          { key: "318", type: "button", text: "Hadi bas canim" },
          { key: "319", type: "text", defaultValue: "Canım Benim" }
        ]
      },
      {
        key: "form3",
        layout: "2",
        controlType: "form",
        caption: "Deneme3",
        state: "closed",
        controls: [
          { key: "320", type: "button", text: "bana bas bana bas", onClick: function () { alert('naper'); } },
          { key: "321", type: "img", src: "http://s.hurriyet.com.tr/static/img/hurriyet-logo.png" },
          { key: "322", type: "text" }
        ]
      }
    ]
  },
  {
    controlType: "row",
    key: "row2",
    forms: [
      {
        key: "form11",
        layout: "2",
        controlType: "form",
        caption: "Bu ne la şimdi",
        state: "closed",
        controls: []
      },
      {
        key: "form22",
        layout: "2",
        controlType: "form",
        caption: "Deneme4",
        state: "closed",
        controls: [
          { key: "3171", type: "text" },
          { key: "3181", type: "button", text: "Hadi bas canim" },
          { key: "3191", type: "text", defaultValue: "Canım Benim" }
        ]
      },
      {
        key: "form35",
        layout: "2",
        controlType: "form",
        caption: "Deneme3",
        state: "closed",
        controls: [
          { key: "3201", type: "button", text: "bana bas bana bas" },
          { key: "3211", type: "img", src: "http://s.hurriyet.com.tr/static/img/hurriyet-logo.png" },
          { key: "3221", type: "text" }
        ]
      }
    ]
  }
]

// https://github.com/cgarciae/jsonfn
// Functionları yazmak için yazılır... 
// Json Strify 
// var obj = JSONfn.parse(a);
// var a = JSONfn.stringify(screen);

var EText = React.createClass(
  {
    render: function () {
      return <li><input style={{ backgroundColor: 'red' }} type = "text" defaultValue = {this.props.feed.defaultValue} /></li>;
    }
  })

var EListColumn = React.createClass(
  {
    render: function () {
      var value = this.props.rowData[this.props.colName];
      return <td>{value}</td>
    }
  }
)

var EListFooColumn = React.createClass(
  {
    render: function () {
      var value = this.props.rowData[this.props.colName];
      return <td>{value}</td>
    }
  }
)




var EListRow = React.createClass(
  {
    render: function () {

      var rowData = this.props.rowData;
      var colIndex = 0;//For react key of Columns 

      var inner = this.props.allColumns.map(function (col) {
        var rowKey = rowData.key + '@' + colIndex++;
        return <EListColumn key = {rowKey} colName={col} rowData={rowData}  />
      })
      return <tr>{inner}</tr>;

    }
  }
)

var EListFooRow = React.createClass(
  {
    render: function () {

      var rowData = this.props.rowData;
     
      var inner = this.props.allColumns.map(function (col) {
        return <tr key = {rowData.key + col}>
          <td className = "mehmet">{col}</td>
          <td className = "ahmet">
            {rowData[col]}</td>
        </tr>
      })
      return <tr ><td className="dis" colSpan ="2"><table><tbody>{inner}</tbody></table></td></tr>;

    }
  }
)

var EList = React.createClass(
  {
    render: function () {

      var allColums = this.props.feed.allColumns;

      var fooColumns = [];
      var mainColumns = [];

      for (i = 0; i < allColums.length; i++) {
        if (i > fooSize - 1)
          fooColumns.push(allColums[i]);
        else
          mainColumns.push(allColums[i]);
      }

      //var fooTable = this.props.feed.listType === 'foo';
      var inner = [];

      if (fooStyle) {
        this.props.feed.list.map(function (row) {
          inner.push(<EListRow key={row.key} rowData={row} allColumns={mainColumns}/>);
          inner.push(<EListFooRow key={row.key + '_foo'} rowData={row} allColumns={fooColumns}/>);
        })
      }
      else {
        inner = this.props.feed.list.map(function (row) {
          return <EListRow key={row.key} rowData={row} allColumns={allColums}/>;
        });
      }
      return <table><tbody>{inner}</tbody></table>;
    }
  })

var EButton = React.createClass(
  {
    getInitialState: function () {
      return { counter: 0 }

    },

    onDoubleClick: function () {
      var counter = this.state.counter;
      counter++;
      this.setState({ counter: counter })
    },

    render: function () {
      return <li><input type = "button" value = {this.props.feed.text + this.state.counter} onDoubleClick ={this.onDoubleClick}  onClick={this.props.feed.onClick} /></li>;
    }
  })

var EImg = React.createClass(
  {
    render: function () {
      return <li><img src={this.props.feed.src}/></li>;
    }
  })

var RForm = React.createClass(
  {
    render: function () {
      var inner = this.props.data.controls.map(function (feed) {
        switch (feed.type) {
          case "text": return <EText key={feed.key} feed={feed}/>;
          case "img": return <EImg key={feed.key}  feed={feed}/>;
          case "button": return <EButton key={feed.key}  feed={feed}/>;
          case "list": return <EList key={feed.key}  feed={feed}/>;
          default: return <div>Buladım</div>;
        }
      });
      return <div><div><h1>{this.props.data.caption}</h1></div><ul>{inner}</ul></div>;
    }
  }
);

var RRow = React.createClass(
  {
    render: function () {
      var inner = this.props.data.forms.map(function (form) {
        return <RForm key={form.key} data={form}/>;
      });
      return <div>{inner}</div>;
    }
  }
);

var RScreen = React.createClass(
  {
    render: function () {
      var inner = this.props.data.map(function (row) {
        return <RRow key={row.key} data={row}/>;
      });
      return <div>{inner}</div>;
    }
  }
);


function renderScreen(domElementName, screenData) {
  ReactDOM.render(
    <RScreen data={screenData} />,
    document.getElementById(domElementName));
}



renderScreen('comp', screen);

function addControl() {
  screen[0].forms[0].controls.push({ key: "3201", type: "button", text: "Ben yeni eklendim", onClick: function () { alert('ben yeni eklendim'); } });
  myFunction();
  renderScreen('comp', screen);
  myFunction();
}

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
