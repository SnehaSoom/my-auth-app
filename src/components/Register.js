import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import './Register.css';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate('/');
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="app-container">
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-input-container">
        <span style={{position:"relative"}}>
        <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span>
        </span>
        </div>
        <div className="password-input-container">
        <span style={{position:"relative"}}>
        <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
                        required
          />
          <span 
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <i className={`fa ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span>
        </span>
        </div>
        {/* <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
         <span 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span> */}
        <button className="register-submit-button" type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Register;