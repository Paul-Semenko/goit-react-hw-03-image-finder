import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../ImageGalleryItem/GalleryItem.module.css';


export default  class ImageGalleryItem extends Component {
    
    render() {
        return this.props.imgArr.map((elem) => (
            <li className={style.ImageGalleryItem} key={elem.id}>
                <img
                    src={elem.webformatURL}
                    alt={elem.tags}
                    onClick={this.props.onImageClick}
                    className={style.ImageGalleryItem_image} />
            </li>
        ));
    }
}

ImageGalleryItem.propTypes = {
    imgArr: PropTypes.array,
    onImageClick: PropTypes.func,
}
