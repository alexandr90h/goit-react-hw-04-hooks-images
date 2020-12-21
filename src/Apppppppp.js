import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { useState } from 'react';

export default function App() {
    const [keyWord, setKeyWord] = useState('');
    const [page, setPage] = useState(1);
    const [key, setKey] = useState('18956584-3ac01e2418e4c39c7eb5dacd9');
    const [images, setImages] = useState([]);
    const [imgIdModal, setImgIdModal] = useState('');
    const [newPageCords, setNewPageCords] = useState(0);
    const [loader, setLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
}
const toggleLoader=()=> {
    setLoader(prev => !prev);
}
const toggleModal = () => {
    setShowModal(prev => !prev);
}
const onSubKeyWordHandApp = (data) => {
    setKeyWord(data);
    setPage(1);
    setImages([]);
}