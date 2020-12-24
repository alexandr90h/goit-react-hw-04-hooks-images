import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import PropTypes from 'prop-types';

export default function Searchbar(props) {
    const [keyWord, setKeyWord] = useState('');
    
    const hendleInputChanga = e => {
        setKeyWord(e.currentTarget.value);
    }
    const  onSubmitSearchForm = e => {
        e.preventDefault();
        props.onSubHand(keyWord);
        setKeyWord('');
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
Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};