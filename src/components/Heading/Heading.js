import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.scss';

const Heading = ({ children, level, className, black, backLine }) => {
    return createElement(
        `h${level}`,
        { className: cn(s.root, className, s[`level${level}`], { [s.colorBlack]: black, [s.backline]: backLine }) },
        children
    );
};

Heading.defaultProps = {
    level: '1',
    backLine: false,
};

Heading.propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    className: PropTypes.string,
    black: PropTypes.bool,
    backLine: PropTypes.bool,
};

export default Heading;