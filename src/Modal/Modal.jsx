import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import ApiId from "../Services/ApiId";

export default function Modal(props) {
    const [imgUrl, setImgUrl] = useState();
    const [visible,setVisible]=useState(true)

   const handlerKeyDown = ({ code }) => {
    if (code === 'Escape') {
      props.onCloseHend()
    }
  };
   const onClose = e => {
        if (e.currentTarget === e.target) {
            props.onCloseHend()
        }
    }
    useEffect(()=> {
        window.addEventListener('keydown', handlerKeyDown);
        ApiId(props.imgId).then(({hits})=>{setImgUrl(hits[0].largeImageURL)}).finally(()=>setVisible(false));
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
Modal.propTypes = {
    imaId: PropTypes.string,
    onCloseHend: PropTypes.func,
}