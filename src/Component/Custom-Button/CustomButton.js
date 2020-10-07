import React from "react";
import PropTypes from "prop-types"
const CustomButton = (props) => {
  const { icon, className, label, handleClick } = props;
  return (
    <button className={className ? className : ""}>
      {icon ? <i className={icon}></i> : ""} {label ? label : ""}
    </button>
  );
};
CustomButton.propTypes = {
    label : PropTypes.string,
    icon : PropTypes.string,
    className : PropTypes.string,
    handleClick : PropTypes.func
}
export default CustomButton;
