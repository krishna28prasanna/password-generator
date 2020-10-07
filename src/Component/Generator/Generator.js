import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import CustomButton from "../Custom-Button/CustomButton";
import Slider from "../Slider/Slider";
const checkboxList = [
    { id : 0,name : "uppercase",label : "Uppercase",checked:true},
    { id : 1,name : "lowercase",label : "Lowercase",checked:true},
    { id : 2,name : "symbols",label : "Symbols",checked:true},
    { id : 3,name : "numbers",label : "Numbers",checked:true}
]
const Generator = () => {
    const [rangeVal,setRangeVal] = useState(12)
    const [checkbox, setCheckBox] = useState({
        uppercase: true,
        lowercase: true,
        symbols: true,
        numbers: true
    });
    const [kp,setKp] = useState("")
    const handleChangeSlider = (e) => {
        setRangeVal(e.target.value)
    }
    const onChangeCheckbox = e =>{
        const {name,checked} = e.target
        checkboxList.map(checkbox =>{
            if(checkbox.name == name){
                checkbox.checked = checked
                setCheckBox({[name]: checkbox.checked})
            }
            return ""
        })
        console.log(checkboxList)
    }
  return (
    <div className="password-settings">
      <h3>Use inputs to create a strong password</h3>
      <div className="row">
        <div className="col-md-12">
            <Slider 
            step = {1}
            min = {1}
            max ={60}
            value = {parseInt(rangeVal)}
            onChangeValue = {handleChangeSlider}
            />
        </div>
      </div>
      <div className="row">
          {checkboxList.map(checkbox =>{
              return <Checkbox key={checkbox.id}
              name = {checkbox.name}
              label = {checkbox.label}
              checked = {checkbox.checked}
              value = {checkbox.checked}
              onChange = {onChangeCheckbox}
              disabled = {false}
              />
          })}
            
      </div>
      <div className="row">
        <CustomButton className="btn password-btn" label="Copy Btn" />
      </div>
    </div>
  );
};
export default Generator;
