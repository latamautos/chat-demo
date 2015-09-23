/**
 * Created by xavier on 9/23/15.
 */
var AppDispatcher = require('../dispatchers/thread-dispatcher');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase');

var CHANGE_THREAD_LIST = "CHANGE_THREAD_LIST";

var firebaseWasInitiallize =false;

var initializeFirebase = function(){

	var threadsRef = new Firebase('https://latamautos-chat.firebaseio.com/ecuador/threads');
	threadsRef.on
}

var ThreadStore = merge(EventEmitter.prototype, {
	emitChange:function(){
		this.emit(CHANGE_THREAD_LIST)
	},

	addChangeListener:function(callback){
		this.on(CHANGE_THREAD_LIST, callback)
	},

	removeChangeListener:function(callback){
		this.removeListener(CHANGE_THREAD_LIST, callback)
	},

	getThreadItems:function(){
		if(threadItems.length<1){

		}
		return _getThreadItems()
	},

	getCatalog:function(){
		return _catalog
	},

	dispatcherIndex:AppDispatcher.register(function(payload){
		var action = payload.action; // this is our action from handleViewAction
		switch(action.actionType){
			case AppConstants.ADD_ITEM:
				_addItem(payload.action.item);
				break;

			case AppConstants.REMOVE_ITEM:
				_removeItem(payload.action.index);
				break;

			case AppConstants.INCREASE_ITEM:
				_increaseItem(payload.action.index);
				break;

			case AppConstants.DECREASE_ITEM:
				_decreaseItem(payload.action.index);
				break;
		}
		ThreadStore.emitChange();

		return true;
	})
})

module.exports = ThreadStore;