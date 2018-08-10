"use strict";

var React = require('react');


var DetailPanel = React.createClass({
getInitialState: function() {
        return {
        	itemId: this.props.itemId,
            itemName: this.props.itemName,
            itemDescription: this.props.itemDescription,
            onChangeInputbox: this.props.onChangeInputbox,  
            panelData: this.props.panelData          
        };
    },

    onChangeInputbox1: function(event){    	
    	this.props.onChangeInputbox(event.target.value);    	    	
    },

    render: function() { 
    	console.log("I'm in Details");
    	console.log(this.props.panelData);
    	let data = this.props.itemName;
        return (
        	<div className="container">
		        	<div className="row">	
		        		<div className="col-md-6 col-lg-6">
		        		<h3>Object content</h3> 
							<input 
								className="input-lg" 
								type="text" 
								onChange={this.onChangeInputbox1} 
								placeholder="Hello World" 
								value={this.props.panelData!=null? this.props.panelData.Name: ""} />	
						</div>						
						<div className="col-md-6 col-lg-6">
						<h3>Object Details</h3> 
							<div className="jumbotron"><h5>{this.props.panelData!=null? this.props.panelData.Description: ""}</h5></div>
						</div>
					</div>				
			</div>
        );
    }
});

module.exports = DetailPanel;