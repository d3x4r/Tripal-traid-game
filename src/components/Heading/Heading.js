import { createElement } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Heading.module.scss';
import { ReactComponent as IconLink } from './assets/link.svg';

const Heading = ({ children, level, className, black, backLine, isAnchor }) => {
    const anchorName = `${children.split(' ').join('_')}`

    return createElement(
        `h${level}`,
        { className: cn(s.root, className, s[`level${level}`], { [s.colorBlack]: black, [s.backline]: backLine }) },
        (
            <>
                {children}
                {isAnchor ?
                    <Link className={s.anchor} id={anchorName} to={{ hash: anchorName }} >
                        <IconLink />
                    </Link> : null
                }
            </>
        )
    );
};

Heading.defaultProps = {
    level: '1',
    backLine: false,
    isAnchor: false,
};

Heading.propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    className: PropTypes.string,
    black: PropTypes.bool,
    backLine: PropTypes.bool,
    isAnchor: PropTypes.bool,
};

export default Heading;