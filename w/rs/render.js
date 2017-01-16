//require("!style!css!./../st/site.css");
import React from 'react';
import {render} from 'react-dom';


var BText =  require("./controls/BText");
var initialScreen = require("./mockData/initialScreen");

import { Button } from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';

class DrawerTest extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render () {
    return (
      <div>
        <Button label='Show Drawer' raised accent onClick={this.handleToggle} />
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h5>This is your Drawer </h5>
          <p>Canım buraya stedigini ekle</p>
        </Drawer>
      </div>
    );
  }
}


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

      for (var k = 0; k < allColums.length; k++) {
        if (k > fooSize - 1)
          fooColumns.push(allColums[k]);
        else
          mainColumns.push(allColums[k]);
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
      return<div><table><tbody>{inner}</tbody></table></div>;
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
console.log (typeof( this.props.feed.onClick));
      return <div data-naper='10'  aria-hidden={true}><li><input type = "button" value = {this.props.feed.text + this.state.counter} onDoubleClick ={this.onDoubleClick}  onClick={this.props.feed.onClick} /></li></div>;
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
          case "text": return <BText key={feed.key} feed={feed}/>;
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
      return <div><DrawerTest />{inner}</div>;
    }
  }
);


function renderScreen(domElementName, screenData) {
  render(
    <RScreen data={screenData} />,
    document.getElementById(domElementName));
}

    

renderScreen('comp', initialScreen);

function addControl() {
  initialScreen[0].forms[0].controls.push({ key: "3201", type: "button", text: "Ben yeni eklendim", onClick: function () { alert('ben yeni eklendim'); } });
  myFunction();
  renderScreen('comp', initialScreen);
  myFunction();
}

setTimeout(function() {
initialScreen[0].forms[0].caption="Bana bak kardesim akıllı ollşşşşş";
initialScreen[0].forms[1].controls[1].text="bibi geliyor bibi";
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
