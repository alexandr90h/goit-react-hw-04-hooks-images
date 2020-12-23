import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
export default function ImageGallery(props) {
    const onSubIdHend = data => {
    props.onSubIdHends(data);
}
return (
            <ul className="ImageGallery" >
                {props.gallery.map(obj => {
                    return (<ImageGalleryItem onSubId={onSubIdHend} urlImage={obj.webformatURL} altImage={obj.tags} urlLargeImage={obj.largeImageURL} idImage={obj.id} key={obj.id}/>);
                })}
            </ul>)
};
