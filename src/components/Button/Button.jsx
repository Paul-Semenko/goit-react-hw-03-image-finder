import { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../Button/Button.module.css';

export default class Button extends Component {
 handleClick = () => {
    return this.props.onClick(1);
  };

    render() {
        return (
            <button
                className={style.Button}
                        type="button"
                        onClick={this.handleClick}
                        >
                        Load more
                    </button>
        )
    }
};

Button.propTypes = {
    onClick: PropTypes.func,
}