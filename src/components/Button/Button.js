import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({ className, children, black, onClick, type }) => {
    return (
        <button
            className={cn(s.root, className, { [s.black]: black })}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

Button.defaultProps = {
    black: false,
    type: 'button',
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    className: PropTypes.string,
    black: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;