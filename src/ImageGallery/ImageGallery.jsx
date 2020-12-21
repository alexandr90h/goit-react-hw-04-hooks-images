import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component{
    onSubIdHend = data => {
    this.props.onSubIdHends(data);
}
    render() {
        return (
            <ul className="ImageGallery" >
                {this.props.gallery.map(obj => {
                    return (<ImageGalleryItem onSubId={this.onSubIdHend} urlImage={obj.webformatURL} altImage={obj.tags} urlLargeImage={obj.largeImageURL} idImage={obj.id} key={obj.id}/>);
                })}
            </ul>)
    }
}
export default ImageGallery;