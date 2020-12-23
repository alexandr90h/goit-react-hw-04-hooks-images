import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { useEffect, useState } from 'react';

export default function App() {
    const [keyWord, setKeyWord] = useState(null);
    const [page, setPage] = useState(1);
    const key='18956584-3ac01e2418e4c39c7eb5dacd9';
    const [images, setImages] = useState([]);
    const [imgIdModal, setImgIdModal] = useState('');
    const [newPageCords, setNewPageCords] = useState(0);
    const [loader, setLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);

    const toggleLoader = () => {
        setLoader(prev => !prev);
    }
    const toggleModal = () => {
        setShowModal(prev => !prev);
    }
    const onSubKeyWordHandApp = data => {
        setImages([]);
        setKeyWord(data);
        setPage(1);
    }
    const onSubPageNumApp = data => {
        const cords = document.documentElement.scrollHeight - 170;
        setPage(data);
        setNewPageCords(cords);
    }
    const onSubIdHendApp = data => {
        toggleLoader();
        toggleModal();
        setImgIdModal(data);
        toggleLoader();
    }
        const scrollToNextPage = () => {
            window.scrollTo({
                top: newPageCords,
                behavior: 'smooth',
            });
        }

    useEffect(() => {
        if (keyWord) {
            toggleLoader();
            fetch(`https://pixabay.com/api/?q=${keyWord}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json()).then(({ hits }) => { setImages(prev => images === [] ? hits : ([...prev, ...hits])); setButtonVisible(true) }).finally(() => {
                    toggleLoader();
                    scrollToNextPage();
                });
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyWord, page]);
    
    return (<div className="main-conteiner">
        <Searchbar onSubHand={onSubKeyWordHandApp}/>
      <ImageGallery gallery={images} onSubIdHends={ onSubIdHendApp}/>
      {loader && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
      />}
        {buttonVisible && <Button onSubPageNum={onSubPageNumApp} />}
      {showModal &&
        <Modal
        onCloseHend={toggleModal}
        imgId={imgIdModal}/>}
    </div>
    );
}