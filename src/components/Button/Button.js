import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({ className, children, black, onClick }) => {
    return (
        <button
            className={cn(s.root, className, { [s.black]: black })}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
};

Button.defaultProps = {
    black: false,
};

Button.propTypes = {
    className: PropTypes.string,
    black: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;