'use client';
import React, { useState } from 'react';
import '../../styles/signup_page_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'


const Signup = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',

  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
  };

  /** 
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        // Request successful
        const data = await response.json();
        console.log('Response data:', data);

        // Redirect to the login page
        window.location.href = '/login'; // Replace '/login' with the actual login page URL
      } else {
        // Request failed
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  */

  return (
    <div className="mainContainer"> 
      <div className="signup-form">
        <div className="container">
          <div className="signUp-header">
            <h1>Create an Account</h1>
            <p className="signUp-p">Get started for free!</p>
          </div>
          <form onSubmit={handleSubmit}> 
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faUser} /></i>
              <input name="username" type="text" placeholder="Username" onChange={handleChange}/>
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faEnvelope} /></i>
              <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faLock} /></i>
              <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faKey} /></i>
              <input name="confirm_password" type="password" placeholder="Confirm Password" onChange={handleChange}/>
            </div>
            <input className="signup-btn" type="submit" value="SIGN UP" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
