import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home');
    }
  };

  return (
    <div className="app-container">
    <div className="login-container">
      <form onSubmit={handleLogin}>
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
        <button className="login-button" type="submit">Login</button>
        <div className='button-container'>        
        <button className='register-button' type="button" onClick={() => navigate('/register')}>Register</button>
        <button className='forgot-button' type="button" onClick={() => navigate('/forgotpassword')}>Forgotten Password?</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;