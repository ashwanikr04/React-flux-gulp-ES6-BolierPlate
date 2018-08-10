"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var PanelDataActions = {

	updatePanelData: function(Id,data) {
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_PANELDATA,			
			panelData: {Id: Id, data : data}
		});
	}
};

module.exports = PanelDataActions;