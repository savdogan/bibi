import React from 'react';
import {render} from 'react-dom';

var BText = React.createClass(
{
    render: function () {
      return <li><input style={{ backgroundColor: 'yellow' }} type = "text" defaultValue = {this.props.feed.defaultValue} /></li>;
    }
})

module.exports = BText; 