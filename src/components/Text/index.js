import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Text.module.css';

const Text = ({ element, children, className, strong, italic, disabled }) => {
    const elementProps = {
        className: cn(className, s.root, {
            [s.root]: true,
            [s.strong]: strong,
            [s.italic]: italic,
            [s.disabled]: disabled,
            [className]: className,
        }),
    };
    return React.createElement(element, elementProps, children);
};

Text.defaultProps = {
    element: 'div',
};

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']),
    children: PropTypes.node,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Text;