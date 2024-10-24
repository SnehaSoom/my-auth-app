import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import './Register.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
 

  const handleRegister = (e) => {
    e.preventDefault();    
      alert("Email is sent");
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
               <button className="register-submit-button" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;

