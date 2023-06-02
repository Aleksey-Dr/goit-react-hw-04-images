import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onOpen }) => {

    
    return (
        <li className={clsx(css["gallery-item"])} onClick={() => onOpen(largeImageURL)}>
            <img src={webformatURL} alt="item galery" />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;