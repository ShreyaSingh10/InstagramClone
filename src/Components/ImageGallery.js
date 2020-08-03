import React from 'react';
import "./styles.css";

export default class ImageGallery extends React.Component {
	state={
		arrayOfImages:[]
	};

	componentDidMount() {
		// get images of user from api call 
		// suppose we get a JSON RESPONSE object inside that is a key 
		// called images which in an array having links to all images
		let arrayOfImages = 
		[{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"},
		{img_link:"https://www.w3schools.com/images/w3schools_green.jpg"}];
		this.setState({
			arrayOfImages
		});
	}

	handleImageClick= (image_link) => {
		this.props.showModalHandler(image_link,this.state.arrayOfImages);
	}

	render() {
		return(
			<div id="img_gallery">
				{this.state.arrayOfImages.map((image)=>{
					return(
						<img 
							src={image.img_link} 
							className="gallery_images" 
							onClick={() => this.handleImageClick(image.img_link)}>
						</img>)
				})}
			</div>
		);
	}
}