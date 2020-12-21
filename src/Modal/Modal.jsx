import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';


class Modal extends Component{
    state = {
        key: '18956584-3ac01e2418e4c39c7eb5dacd9',
        imgUrl:'',
        visible:true,
    }
    componentDidMount() {
         window.addEventListener('keydown', this.handlerKeyDown);
         fetch(`https://pixabay.com/api/?id=${this.props.imgId}&key=${this.state.key}`)
            .then(res => res.json()).then(({hits})=>{this.setState({imgUrl:hits[0].largeImageURL})}).finally(()=>this.setState({visible:false}));
  }
    componentDidUpdate() { 
        
    }
             
  componentWillUnmount() {
      window.removeEventListener('keydown', this.handlerKeyDown);
    }
     handlerKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onCloseHend()
    }
  };
    onClose = e => {
        if (e.currentTarget === e.target) {
            this.props.onCloseHend()
        }
    }
    render() {
        return (<div className="Overlay" onClick={this.onClose}>
            <div className="Modal">
                {this.state.visible&&<Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
                    width={100}
      />}
                <img src={this.state.imgUrl} alt=""/>
            </div>
        </div>)
    }
}
Modal.propTypes = {
  imgUrl: PropTypes.string,
  imgId: PropTypes.string,
}

export default Modal;