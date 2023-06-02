import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../imageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
    return (
        <ul className={clsx(css["image-gallery"])}>
            {items.map(item =>
                <ImageGalleryItem
                    key={item.id}
                    webformatURL={item.webformatURL}
                    largeImageURL={item.largeImageURL}
                    onOpen={openModal}
                />)}
        </ul>
    );
};

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;