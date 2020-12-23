import PropTypes from 'prop-types';

export default function ImageGalleryItem({urlImage,altImage,idImage,onSubId}) {
 const onClickImg = e => {
  onSubId(e.currentTarget.dataset.id)
  }
  return (
      <li className="ImageGalleryItem" >
        <img
          src={urlImage}
          alt={altImage}
          data-id={idImage}
          className="ImageGalleryItem-image"
          onClick={onClickImg}
        />
      </li>)
};


ImageGalleryItem.propTypes = {
  urlImage: PropTypes.string,
  altImage: PropTypes.string,
  idImage:PropTypes.number,
}
