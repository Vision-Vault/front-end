'use client';
import React, { useState } from 'react';
import '../../styles/signup_page_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faLock, faEnvelope, faUser, faImage } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    profile_picture: '',
    bio: '',
    email: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);


  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    console.log("value:",value)
    console.log()
    if (name === 'password' || name === 'confirm_password') {
      setPasswordMatch(
        name === 'confirm_password' ? value === state.password : state.password === value
      );
    }
  };
/** 
  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
  };
*/

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch('https://new-backend-alpha.vercel.app/api/v1/accounts/', {
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
        // window.location.href = '/login'; // Replace '/login' with the actual login page URL
      } else {
        // Request failed
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

    console.log("passwordMatch:",passwordMatch)
    console.log("type:",typeof(passwordMatch))

    const handleProfilePictureChange = event => {
      const file = event.target.files[0]; 
      setState({ ...state, profile_picture: file });
    };

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
              <input name="username" type="text" placeholder="Username" onChange={handleChange} required/>
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faEnvelope} /></i>
              <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faImage} /></i>
              <input
                type="file"
                accept="image/*"
                name="profile_picture"
                onChange={handleProfilePictureChange}
              />
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faUser} /></i>
              <textarea
                name="bio"
                placeholder="Bio"
                onChange={handleChange}
                rows={4}
              />
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faLock} /></i>
              <input name="password" type="password" placeholder="Password" onChange={handleChange} required/>
            </div>
            <div className="signUp-input">
              <i className="fa-solid"><FontAwesomeIcon icon={faKey} /></i>
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                className={passwordMatch ? "password-match" : "password-mismatch" }
                required
                />
            </div>
            <input className="signup-btn" type="submit" value="SIGN UP" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
