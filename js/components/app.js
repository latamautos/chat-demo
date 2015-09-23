/**
 * Created by xavier on 9/22/15.
 */
var React = require('react');
var ThreadSection = require('./thread-section.js');

var App = React.createClass({

	render: function () {
		return (
			<div className="chat-container">
				<ThreadSection> </ThreadSection>
			</div>
			)
	}
});

module.exports = App;
