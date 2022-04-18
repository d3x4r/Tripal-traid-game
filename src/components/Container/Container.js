import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Container.module.scss'

const Container = ({ className, children }) => {
    return (
        <div className={cn(s.root, className)}>
            {children}
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Container;