"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _panelData= [];

var panelDataStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllPanelData: function() {
		return _panelData;
	},

	getPanelDatabyId: function(Id){
		return _.find(_panelData, {Id: Id})
	},
});


Dispatcher.register(function(action) {
	switch(action.actionType) {		
		case ActionTypes.INITIALIZE:
			_panelData = action.initialData.panelData;
			panelDataStore.emitChange();
			break;

		case ActionTypes.UPDATE_PANELDATA:
			var existingData = _.find(_panelData, {Id: action.panelData.Id});
			var existingDataIndex = _.indexOf(_panelData, existingData); 
			_panelData[existingDataIndex].Name = action.panelData.data;
			panelDataStore.emitChange();
			break;	

		case ActionTypes.GET_PANELDATA:

		default:			
	}
});

module.exports = panelDataStore;