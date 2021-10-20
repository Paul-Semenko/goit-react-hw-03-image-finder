import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from './components/ImageGallery/ImageGallery';
import style from './App.module.css';





    class App extends Component {
      state = {
        searchValue: '',
        
      }
      
      handleSearchFormSubmit = (data)=> {
        this.setState({ searchValue:data });
        
      };
       
      onPageScroll() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
  }


      render() {
        const { searchValue } = this.state;
        const {handleSearchFormSubmit, onPageScroll} = this;
        return (
          
          <div className={style.App}>
            <Searchbar onSubmit={handleSearchFormSubmit} />
            <ImageGallery
              searchValue={searchValue}
               scroll={onPageScroll}
            />
            <ToastContainer autoClose={3000}
          
            />
          </div>
        );

      }
    }

    
  


export default App;