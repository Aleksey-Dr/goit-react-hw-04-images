import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className={clsx(css.button)}>Load more</button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;