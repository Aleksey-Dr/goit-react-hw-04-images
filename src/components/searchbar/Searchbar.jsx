import { Component } from 'react';

import PropTypes from 'prop-types';

import clsx from 'clsx';
import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    term: '',
  };

  handleTermChange = event => {
    this.setState({
      term: event.target.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.term.trim() === '') {
      alert('Empty string');
      return;
    }
    this.props.onSubmit(this.state.term);
    this.setState({
      term: '',
    });
  };

  render() {
    return (
      <header className={clsx(css.searchbar)}>
        <form className={clsx(css.form)} onSubmit={this.handleSubmit}>
          <button type="submit" className={clsx(css.button)}>
            <span className={clsx(css["button-label"])}>
              <ImSearch size="20" />
            </span>
          </button>

          <input
            className={clsx(css.input)}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.term}
            onChange={this.handleTermChange}
          />
        </form>
      </header>
    );
  };
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
