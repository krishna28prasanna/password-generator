import React,{useState,useRef} from "react";
import PropTypes from "prop-types"
const Slider = (props) => {
    const {step,min,max,value,onChangeValue} = props
  return (
    <div className="slider-container">
      <div className="slider">
        <input className="range-slider" type="range" 
        step = {step}
        min = {min}
        max ={max}
        value = {value}
        onChange={onChangeValue}
        />
        <span className="range-slider-value">{value}</span>
      </div>
    </div>
  );
};
Slider.propTypes = {
    step : PropTypes.number.isRequired,
    min : PropTypes.number.isRequired,
    max : PropTypes.number.isRequired,
    value : PropTypes.number.isRequired,
    onChangeValue : PropTypes.func.isRequired
}
export default Slider;
