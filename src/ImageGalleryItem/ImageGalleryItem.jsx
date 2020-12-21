import { Component } from "react";
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component{
  onClickImg = e => {
    // console.log(e.currentTarget.dataset.url);
    this.props.onSubId(e.currentTarget.dataset.id)
  }
  render() {
    return (
      <li className="ImageGalleryItem" >
        <img
          src={this.props.urlImage}
          alt={this.props.altImage}
          data-id={this.props.idImage}
          className="ImageGalleryItem-image"
          onClick={this.onClickImg}
        />
      </li>)
  }
}
ImageGalleryItem.propTypes = {
  urlImage: PropTypes.string,
  altImage: PropTypes.string,
  idImage:PropTypes.number,
}
export default ImageGalleryItem;
