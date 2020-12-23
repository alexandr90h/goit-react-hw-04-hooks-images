import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function Modal() {
    const key = '18956584-3ac01e2418e4c39c7eb5dacd9';
    const [imgUrl, setImgUrl] = useState();
    const [visible,setVisible]=useState(true)

    handlerKeyDown = ({ code }) => {
    if (code === 'Escape') {
      props.onCloseHend()
    }
  };
    onClose = e => {
        if (e.currentTarget === e.target) {
            props.onCloseHend()
        }
    }
    useEffect(()=> {
        window.addEventListener('keydown', handlerKeyDown);
        
    })
return (<div className="Overlay" onClick={onClose}>
            <div className="Modal">
                {visible&&<Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
                    width={100}
      />}
                <img src={imgUrl} alt=""/>
            </div>
        </div>)
};
