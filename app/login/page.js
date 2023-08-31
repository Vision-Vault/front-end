"use client";
import { useState } from 'react';
import axios from 'axios';
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const API_BASE_URL = 'https://new-backend-alpha.vercel.app';
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api-auth/login/`, {
        username:"",
        password:"",
      });

      // Handle the response from the Django API
      if (response.data.success) {
        // Redirect the user or perform any other action
        console.log('Login successful');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start the journey with us</p>
            <button className="ghost">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;