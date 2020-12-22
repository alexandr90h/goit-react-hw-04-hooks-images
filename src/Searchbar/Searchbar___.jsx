import { createContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
export default function Searchbar() {
    const qwe = createContext();
    const [keyWord, setKeyWord] = useState('');
    const [image, setImage] = useState([]);
    
    const hendleInputChanga = e => {
        setKeyWord(e.currentTarget.value);
    }
    const  onSubmitSearchForm = e => {
        e.preventDefault();
        props.onSubHand(keyWord);
        setKeyWord('');

        fetch(`https://pixabay.com/api/?q=${keyWord}&page=1&key=18956584-3ac01e2418e4c39c7eb5dacd9&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json()).then(({ hits }) => {
                setImage(prev => prev.concat(hits));
            });
        props.img(image);
    }
    return (<header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmitSearchForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label"><BiSearch /></span>
          </button>
          <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={keyWord}
            onChange={hendleInputChanga}
          />
        </form>
      </header>)
};
