var React = require('react');
var ThreadStore = require('../stores/thread-store');


function getThreadItems(){
	return {
		threadItems: ThreadStore.getThreadItems()
	}
}

var ThreadSection = React.createClass({
	getInitialState:function(){
		return getThreadItems()
	},
	componentWillMount:function(){
		return ThreadStore.addChangeListener(this._onChange)
	},
	_onChange: function(){
		this.setState(getThreadItems)
	},

	render: function () {

		var threadItems = this.state.threadItems.map(
			function(thread){
				return <ThreadItem item={thread}></ThreadItem>
			}
		)

		return (
			<div className="thread-section">
				<div className="thread-count">
					Mensajes
				</div>
				<ul className="thread-list">
				{threadItems}
				</ul>
			</div>
			);


	}
});

module.exports = ThreadSection;
