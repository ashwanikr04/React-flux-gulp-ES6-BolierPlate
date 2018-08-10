"use strict";

var React = require('react');
var LeftPanelMenu = require('./leftPanelMenu');
//var panelDataActions = require('../actions/panelDataActions');
//var panelDataStore = require('../store/panelDataStore');

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {Name : "Ashwani from State"}
	}
   render() {
      return <div>
                <h1>Hello World!</h1>
                <p>This is my first React Component.</p>
                <LeftPanelMenu Name={this.state.Name}/>
             </div>
      }
}


module.exports = Home;