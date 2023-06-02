import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, largeImage }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = event => {
        (event.code === 'Escape') &&
            onClose();
    };

    const handleBackdropClick = event => {
        (event.currentTarget === event.target) &&
            onClose();
    };

    
        return createPortal(
            <div className={clsx(css.overlay)} onClick={handleBackdropClick}>
                <div className={clsx(css.modal)}>
                    <img src={largeImage} alt="item galery" />
                </div>
            </div>,
            modalRoot
        );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
};

export default Modal;