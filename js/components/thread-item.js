var React = require('react');
var UserStore = require('../stores/user-store');


var ThreadItem = React.createClass({
	getInitialState: function () {
		return this.getThreadInfo(this.props.item);
	},

	getThreadInfo: function (thread) {

		console.log("creator");
		console.log(thread.creator);
		var userId = UserStore.getUserId();
		var relationString = thread.creator["id"] == userId ? " respondio por " : " pregunto por ";
		var interlocutor = thread.creator["id"] == userId ? thread.recipient.name : thread.creator.name;

		return {
			image: thread.listing.avatar,
			title: interlocutor + relationString,
			last_message_created_at: thread.messages[thread.messages.length-1]["created_at"],
			last_message: thread.messages[thread.messages.length-1]["text"],
			read: true,
			not_read_messages_count: 0,
			messages_count: 0,
			listing_summary: thread.listing.brand + " " + thread.listing.model + " " + thread.listing.year
		}
	},


	getLastMessage: function (item) {
		console.log("pidiendo el last message");
	},

	render: function () {

		return (
			<li class="thread-list-item active" >
				<img className="thread-avatar" src={this.state.image} ></img>
				<div className="thread-title" >{this.state.title}</div>
				<div className="thread-title" >{this.state.listing_summary}</div>
				<div  >{this.state.last_message}</div>
				<div  >{this.state.last_message_created_at}</div>
				<div  >{this.state.messages_count}</div>
				<div  >{this.state.not_read_messages_count}</div>
			</li>
			);


	}
});

module.exports = ThreadItem;
