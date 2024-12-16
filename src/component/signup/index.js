import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { signup } from "../../services/authService"; // Import the signup service
import "./index.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (formData.mobileNumber.length < 10 || formData.mobileNumber.length > 12) {
      setError("Phone number must be between 10 and 12 digits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const user = await signup(formData); // Call signup API
      alert(`Signup successful! Welcome ${user.fullName}`);
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(error.message); // Set error message from backend
    }

    setLoading(false);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
          />
        </div>

        <div className="form-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="form-input"
            autocomplete="current-password"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={() => setShowPassword(!showPassword)}
            className="password-icon"
          />
        </div>

        <div className="form-group password-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="form-input"
          />
          <FontAwesomeIcon
            icon={showConfirmPassword ? faEyeSlash : faEye}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="password-icon"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
