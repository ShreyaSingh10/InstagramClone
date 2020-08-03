import React from 'react';
import CommentSection from './CommentSection';
import "./styles.css";

export default class Modal extends React.Component {
	state = {
		likesCounter: 0
	}

	increaseLikes = () => {
		this.setState({
			likesCounter:  this.state.likesCounter + 1
		})
	}

	render() {
		return(
			<div id="modal_container">
				<img id="full_image"
					onClick={this.increaseLikes}
					src={this.props.image_link}>
				</img>
				<div 
					id="likes_counter"
					onClick={this.increaseLikes}> 
					Likes {this.state.likesCounter}
				</div>
				<CommentSection/>
			</div>
		);
	}
}