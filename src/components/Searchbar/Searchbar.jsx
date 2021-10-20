// import { ImSearch } from 'react-icons/im';
import React from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from "react";
import style from '../Searchbar/search.module.css';




export default class Searchbar extends Component{
    state = {
    searchValue:'',
}
    
    handleInputChange = event => {
        this.setState({
            searchValue: event.currentTarget.value
        });
    };
    
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchValue.trim() === '') {
            toast.error('enter something to start searching');
            return;
        }
        this.props.onSubmit(this.state.searchValue);

        this.setState({searchValue: '' });
    }
    
    render() {
        const {handleSubmit,handleInputChange } = this;
        return (
            <header className={style.Searchbar}>
                <form className={style.SearchForm}
                    onSubmit={handleSubmit}>
                    <button type="submit" className={style.SearchFormbutton}>
                        <span className={style.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={style.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchValue}
                        onChange={handleInputChange}
                    />
                </form>
            </header>
            
        );
        }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}





