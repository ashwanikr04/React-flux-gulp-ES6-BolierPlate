"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var PanelData = require('../api/panelData');
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var InitializeActions = {	

	getAllPanelData: function() {
		return _clone(PanelData); 
	},

	initApp: function() {
		console.log(this.getAllPanelData());
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				panelData: this.getAllPanelData().panelData
			}
		});
	}
};

module.exports = InitializeActions;