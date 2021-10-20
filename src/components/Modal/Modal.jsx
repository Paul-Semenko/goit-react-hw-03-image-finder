import { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../Modal/Modal.module.css';


export default class Modal extends Component{
    componentDidMount() {
        window.addEventListener("keydown", this.handleEsc);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleEsc);
    }

    handleEsc = (e) => {
        if (e.code === "Escape") {
            this.props.toggleModal();
        }
    };

    handleClose = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal();
        }
    };


    render() {
        return (<div className={style.Overlay} onClick={this.handleClose}>
            <div className={style.Modal}>
                <img
                    src={this.props.largeImg.largeImageURL}
                    alt={this.props.tags} />
            </div>
        </div>);
        


    }
}

Modal.propTypes = {
    toggleModal: PropTypes.func,
    largeImg: PropTypes.object,
}