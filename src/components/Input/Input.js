import PropTypes from 'prop-types';
import s from './Input.module.scss';

const Input = ({ type, id, isRequired, label, value, onChange, className }) => {
    return (
        <div className={className}>
            <input type={type} id={id} required={isRequired} onChange={onChange} value={value} />
            <label htmlFor={id}>{label}</label>
            <div className={s.bar}></div>
        </div>
    );
};

Input.defaultProps = {
    isRequired: true,
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;