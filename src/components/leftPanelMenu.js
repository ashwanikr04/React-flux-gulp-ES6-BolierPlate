"use strict";

var React = require('react');
var DetailPanel = require('./detailPanel');
var _ = require('lodash');

class LeftPanelMenu extends React.Component{
   render() {
      return <div>
                <h4>Hello World from Child Component!</h4>
                <p>This is my first React Child Component. Removed checking change</p>
                <div>{this.props.Name}</div>
             </div>
      }
}

module.exports = LeftPanelMenu;
