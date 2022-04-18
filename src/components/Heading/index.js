import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.css';

const Heading = ({ children, level, className, black }) => {
    return createElement(`h${level}`, { className: cn(s.root, className, s[`level${level}`], { [s.colorBlack]: black }) }, children);
};

Heading.defaultProps = {
    level: '1',
};

Heading.propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    className: PropTypes.string,
    black: PropTypes.bool
};

export default Heading;