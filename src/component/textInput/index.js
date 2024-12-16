import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 
import "./index.css"; 

const TextInput = ({ type, value, onChange, placeholder, error, togglePassword, showPassword,name }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        className={`input-field ${error ? "error" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {togglePassword && (
        <span className="password-toggle" onClick={togglePassword}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      )}
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default TextInput;
