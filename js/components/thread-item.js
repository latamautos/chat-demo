var React = require('react');


var ThreadItem = React.createClass({
	getInitialState: function () {
		return {
			thread_title: this.getThreadTitle(this.props.item),
			last_message_created_at: this.getLastMessageCreatedAt(this.props.item),
			last_message: this.getLastMessage(this.props.item)
		};
	},

	getThreadTitle: function (item) {
		console.log("pidiendo el thread title");
	},

	getLastMessageCreatedAt: function (item) {
		console.log("pidiendo el last message created at");
	},

	getLastMessage: function (item) {
		console.log("pidiendo el last message");
	},

	render: function () {

		return (
			<li class="thread-list-item active" >
				<h5 class="thread-name" >{this.state.thread_title}</h5>
				<div class="thread-time" >{this.state.last_message_created_at}</div>
				<div class="thread-last-message" >{this.state.last_message}</div>
			</li>
			);


	}
});

module.exports = ThreadItem;
