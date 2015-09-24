/**
 * Created by xavier on 9/23/15.
 */
var AppDispatcher = require('../dispatchers/thread-dispatcher');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;


var UserStore = assign(new EventEmitter(), {
	getUserId: function () {
		return 1
	}
});

module.exports = UserStore;