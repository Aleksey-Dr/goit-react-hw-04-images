import { useState } from 'react';

import PropTypes from 'prop-types';

import clsx from 'clsx';
import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleTermChange = event => setTerm(event.target.value.toLowerCase());

  const handleSubmit = event => {
    event.preventDefault();

    if (term.trim() === '') {
      alert('Empty string');
      return;
    }
    onSubmit(term);
    setTerm('');
  };

  return (
    <header className={clsx(css.searchbar)}>
      <form className={clsx(css.form)} onSubmit={handleSubmit}>
        <button type="submit" className={clsx(css.button)}>
          <span className={clsx(css['button-label'])}>
            <ImSearch size="20" />
          </span>
        </button>

        <input
          className={clsx(css.input)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={term}
          onChange={handleTermChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
