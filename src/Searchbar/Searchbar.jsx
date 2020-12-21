import React, { Component } from 'react';
import { BiSearch } from "react-icons/bi";

class Searchbar extends Component{
    state={
            keyWord: '',

    }
    hendleInputChanga = e => {
        this.setState({ keyWord: e.currentTarget.value })
    }
    onSubmitSearchForm = e => {
        e.preventDefault();
        this.props.onSubHand(this.state.keyWord);
        this.setState({keyWord:''})
    }
    render() {
        return(<header className="Searchbar">
  <form className="SearchForm" onSubmit={this.onSubmitSearchForm}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label"><BiSearch/></span>
    </button>
                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.keyWord}
                    onChange={this.hendleInputChanga}
    />
  </form>
</header>)
    }
}
export default Searchbar;