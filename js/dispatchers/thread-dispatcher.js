/**
 * Created by xavier on 9/23/15.
 */
var Dispatcher = require('flux').Dispatcher;
var merge  = require('react/lib/merge');

var ThreadDispatcher = merge(Dispatcher.prototype, {
	handleViewAction: function(action){
		this.dispatch({
			source: 'VIEW_ACTION',
			action:action
		})
	}
})

module.exports = ThreadDispatcher;