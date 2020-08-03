import React from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import NavBar from './NavBar';
import Modal from './Modal';

export default class InstaProfileContainer extends React.Component {
	state = {
		showModal : false,
		image_link: null,
		arrayOfImages:[]
	}

	showModalHandler = (image_link, arrayOfImages) => {
		this.setState({
			image_link,
			arrayOfImages,
			showModal: true
		})
	}

	render() {
		return(
			<div id="insta_profile_container">
				{!this.state.showModal?
					(<div>
						<Header/>
						<ImageGallery 
							showModalHandler={this.showModalHandler}/>
						<NavBar/>
					</div>) : 
					(<div>
						<Modal 
							image_link={this.state.image_link}/>
					</div>)}
			</div>
		);
	}
}