import { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = event => {
        (event.code === 'Escape') &&
            this.props.onClose();
    };

    handleBackdropClick = event => {
        console.log(this.props.largeImage);
        (event.currentTarget === event.target) &&
            this.props.onClose();
    };

    render() {
        return createPortal(
            <div className={clsx(css.overlay)} onClick={this.handleBackdropClick}>
                <div className={clsx(css.modal)}>
                    <img src={this.props.largeImage} alt="item galery" />
                </div>
            </div>,
            modalRoot
        );
    };
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
};

export default Modal;