import React, { useState } from 'react'
import LoginForm from '../../pages';
import Signup from '../signup';
import './index.css';
const  FormHandling= () => {
    const [activeForm, setActiveForm] = useState("Login");
    const handleButtonClick = (formName) => {
        setActiveForm(formName);
      };  
  return (
    <>
    <div>
    <div className='Buttons'>
        <button
          onClick={() => handleButtonClick("Login")}
          style={{
            backgroundColor: activeForm === "Login" ? "#007BFF" : "#ccc",
            border: activeForm === "Login" ? "2px solid white" : "none",
            borderRadius: activeForm === "Login" ? "20px" : "0",
          }}
          className='LoginButton'
        >
          Login
        </button>
        <button
          onClick={() => handleButtonClick("Signup")}
          style={{
            backgroundColor: activeForm === "Signup" ? "#007BFF" : "#ccc",
            border: activeForm === "Signup" ? "2px solid white" : "none",
            borderRadius: activeForm === "Signup" ? "20px" : "0",
          }}
          className='SignButton'
        >
          Signup
        </button>
      </div>
{/*  rendreing */}
      <div style={{ marginTop: "20px" }}>
        {activeForm === "Login" && <LoginForm />}
        {activeForm === "Signup" && <Signup />}
      </div>

    </div>
    </>
  )
}

export default FormHandling;
