import { useState, useEffect } from 'react';

import Notiflix from 'notiflix';

import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import Button from './button';
import Loader from './loader';
import Modal from './modal';

import { fetchImages } from '../services/pixabay-api';

import clsx from 'clsx';
import css from './App.module.css'

export const App = () => {
  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {

    Notiflix.Notify.init({
      width: '300px',
      timeout: 4000,
      fontSize: '16px',
      warning: {
        textColor: '#3f51b5',
      }
    });

    if (term !== '') {
      try {
        setIsLoading(true);
        fetchImages(term, pageNum)
          .then(galery => {
            if (galery.length === 0) {
              Notiflix.Notify.warning('Nothing found for your request');
              setIsLoading(false);
            } else {
              setImages(prevState => [...prevState, ...galery]);
              setIsLoading(false);
              console.log(galery);
            }
          });
      }
      catch (err) {
        setError(true);
        setIsLoading(false);
        Notiflix.Notify.failure('Oops... Something went wrong please try again!');
        console.log(error);
      };
    }
  }, [term, pageNum, error]);

  const handleSearcbarSubmit = term => {
    setTerm(term);
    setImages([]);
    setPageNum(1);
  };

  const toggleModal = (largeImage) => {
    setShowModal(!showModal);
    setLargeImage(largeImage);
  };

  const onLoadMore = () =>
    setPageNum(pageNum + 1);

    return (
      <div className={clsx(css.app)}>
        <Searchbar onSubmit={handleSearcbarSubmit} />

        <ImageGallery
          items={images}
          openModal={toggleModal}
        />
        
        {isLoading &&
          <Loader />}
        
        {!isLoading && images.length > 11 &&
          <Button onClick={onLoadMore} />}

        {showModal && <Modal onClose={toggleModal} largeImage={largeImage} />}
      </div>
    );
};
