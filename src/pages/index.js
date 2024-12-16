import React, { useState } from "react";
import TextInput from "../component/textInput"; // Import the reusable TextInput component
import { login } from "../services/authService"; // Import the login service
import "./index.css";
import axios from 'axios';
const API_URL = 'http://localhost:4000/api/auth'; // Update this URL based on your backend

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e, setState) => setState(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("User Data being sent to backend:", { email, password });
  
  
    const validationErrors = {};
  
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      validationErrors.email = "Invalid email address";
    }
  
    if (!password) {
      validationErrors.password = "Password is required";
    }
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make API request to the backend
        console.log('log 1')
        const response = await axios.post(`${API_URL}/login`, { email, password });
        console.log('log 2',response)
        console.log("Response from login API:", response.data);
        // You can redirect or do other actions upon successful login
      } catch (error) {
        console.error("Error logging in:", error.response?.data || error.message);
        if (error.response && error.response.data) {
          alert(error.response.data.msg || 'An error occurred.'); // Display the backend error message
        } else {
          alert('An unknown error occurred.');
        }
      }
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <TextInput
        type="email"
        value={email}
        onChange={(e) => handleChange(e, setEmail)}
        placeholder="Email"
        error={errors.email}
      />
      
      <TextInput
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => handleChange(e, setPassword)}
        placeholder="Password"
        error={errors.password}
        togglePassword={togglePasswordVisibility}
        showPassword={showPassword}
      />

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? "Logging in..." : "Submit"}
      </button>
    </form>
  );
};

export default LoginForm;
