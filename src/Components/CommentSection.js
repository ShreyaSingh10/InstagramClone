import React from 'react';
import "./styles.css";

export default class CommentSection extends React.Component {
	state = {
		commentsList:['Wow amazing', 
		'Amazing work. Keep it up!!! What a talent!', 
		'Wow amazing',
		'Amazing work. Keep it up!!! What a talent!',
		'Wow amazing', 
		'Amazing work. Keep it up!!! What a talent!', 
		'Wow amazing',
		'Amazing work. Keep it up!!! What a talent!'
		],
		comment:''
	}

	onChangeHandler = (e) => {
		const comment = e.target.value;
	    this.setState({
	      comment
	    });
	}

	submitComment = e => {
	    e.preventDefault();
	    this.setState(prevstate => {
	      let commentsList = [...prevstate.commentsList];
	      let newcomment = prevstate.comment;
	      commentsList.push(newcomment);
	      return {
	        commentsList,
	        comment:''
	      };
	    });
	};

	render() {
		return(
			<div>
				<div id="comments_list">
				{this.state.commentsList.map((comment) => {
					return(<div className="comment">{comment}</div>)
				})}
				</div>
				<div id="post_comment">
					<form onSubmit={this.submitComment}>
						<input 
							id="input_post"
							onChange={this.onChangeHandler}
							value={this.state.comment}
						/>
						<button>Post</button>
					</form>
				</div>
			</div>
		);
	}
}