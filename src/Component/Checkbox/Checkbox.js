import React from "react";
import PropTypes from "prop-types";
const Checkbox = (props) => {
  const { label, value, checked, name, onChange, disabled } = props;
  return (
      <div className="col-md-3">
        <label className="container">{label}</label>
        <input
        type = "checkbox"
        name = {name}
        checked = {checked}
        value = {value}
        disabled = {disabled}
        onChange = {onChange}
        />
        <span className="checkmark" style={{opacity : disabled ? "0.7" : ""}}></span>
      </div>
  );
};
Checkbox.propTypes = {
    label : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.bool.isRequired,
    checked : PropTypes.bool.isRequired,
    disabled : PropTypes.bool.isRequired,
    onChange : PropTypes.func.isRequired,
};
export default Checkbox;
