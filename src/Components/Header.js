import React from 'react';
import "./styles.css";

export default class Header extends React.Component {
	render() {
		return(
			<div id="header">
				<div id="user_handle">shreyasingh</div>
				<div id="user_details">
					<img id="user_profilepic"></img>
					<span id="user_info">
						<li>
							<span className="info_count">205</span>
							<p className="info_name">posts</p>
						</li>
						<li>
							<span className="info_count">15.3k</span> 
							<p className="info_name">followers</p>
						</li>
						<li>
							<span className="info_count">625</span>
							<p className="info_name">following</p>
						</li>
						<button id="follow_button">Follow</button>
					</span>
				</div>
				<div id="user_bio">
					<h3 id="user_name"> Shreya Singh </h3>
					<p id="user_type"> Artist</p>
					<p id="about_user"> 
						Hi this is xyz.
						I am an artist.
						I like dancing, painting and singing.
						My youtube channel - xyz
						For events contact - 9876543210
					</p>
				</div>
				<div id="reach_user">Call</div>
			</div>
		);
	}

}