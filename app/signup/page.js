import  '../../styles/signup_page_style.css';

const Signup = () => {
  return (
    <div class="mainContainer">
      <div class="signup-form">
        <div class="container">
          <div class="signUp-header">
            <h1>Create an Account</h1>
            <p class="signUp-p">Get started for free!</p>
          </div>
          <form>
            <div class="signUp-input">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="signUp-input">
              <i class="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="signUp-input">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div class="signUp-input">
              <i class="fa-solid fa-lock"></i>
              <input type="confirm password" placeholder="Confirm Password" />
            </div>
            <input class="signup-btn" type="submit" value="SIGN UP" />
          </form>
          <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
          </div>
          <p class="signUp-p">Already have an account <a class="signUp-link" href="#">sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;