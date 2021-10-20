import { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PixabayFetch from '../services/Pixabay';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import style from '../ImageGallery/ImageGallery.module.css';



const newPixabayFetch = new PixabayFetch();
 
 export default  class ImageGallery extends Component{
    state = {
        imgArr: [],
        status: "idle",
        showModal: false,
        largeImg: null,
        page: 1,

    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchValue !== this.props.searchValue) {
            this.setState({ status: 'pending' });
            newPixabayFetch.resetPage();
          newPixabayFetch._searchQuery = this.props.searchValue;
            newPixabayFetch.searchImg()
                .then((data) => {
                    if (data.hits.length > 0) {
                        this.setState({
                            imgArr:data.hits,
                            page: newPixabayFetch.page,
                            status:'success',
                        });
                    } else {
                        this.setState({ status: 'error' });
                    }
            
          })
                .catch((error) => {
                    console.log(error);
                this.setState({ status: 'error' });
            });
          
    }
    }
     handleClick = () => {
    newPixabayFetch.page = 1;
    newPixabayFetch.searchImg()
      .then((data) => {
        this.setState((prev) => ({
          imgArr: [...prev.imgArr, ...data.hits],
          page: newPixabayFetch.page,
          status: 'success',
        }));
        this.props.scroll();
      })
      .catch((error) => {
          this.setState({ status: 'error' });
      });
    };
     
    
    toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
    };
    
    onImageClick = (e) => {
    e.preventDefault();
    let src = e.target.src;
    this.setState({
      largeImg: this.state.imgArr.find((el) => el.webformatURL === src),
    });
    this.toggleModal();
     };
     

    render() {
        const { imgArr, showModal, status, largeImg } = this.state;
        if (status === "idle") {
            return <h2 className={style.title}>Please, start typing your query!</h2>
            
           
    }
        if (status === "pending") {
            return ( 
                <Loader
                    className={style.Loader}
                    type="Bars"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    timeout={9000} 
                />
                
            );
        }
        if (status === "success") {
            return (
                <>
                    <ul className={style.ImageGallery}>
                        <ImageGalleryItem
                            imgArr={imgArr}
                            onImageClick={this.onImageClick}
                        />
                    </ul>
                    <Button
                        onClick={this.handleClick}
                    ></Button>
                    {showModal && (
                        <Modal
                            toggleModal={this.toggleModal}
                            largeImg={largeImg}></Modal>
                    )}
                </>
            );
    }
        if (status === "error") {
             
            return <h2 className={style.Error_title}>Oh no, there are nothing to show you!</h2>
    }
    }
    
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string,
  scroll: PropTypes.func,
};

