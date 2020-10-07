import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import Generator from "../Generator/Generator";
import "./Display.css";
const Display = () => {
  return (
    <div className="container">
      <div className="row password-generator-conainer">
        <div className="col-md-10 password-display-input">
          <input type="text" value="fhfjshj" readonly="readonly" className="password-display-input" />
          <div className="password-description">
            <i className="fas fa-check-circle"></i>Strong Password
          </div>
        </div>
        <div className="col-md-2 handle-btn">
          <ul>
            <li>
              <CustomButton icon="far fa-copy" className="copy-btn" />
            </li>
            <li>
              <CustomButton icon="fas fa-sync-alt" className="generate-btn" />
            </li>
          </ul>
        </div>
      </div>
      <Generator />
    </div>
  );
};
export default Display;
