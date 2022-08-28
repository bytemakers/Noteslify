import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => (
  <div>
    <div class="form-wrapper">
      <h1>Forgot Password?</h1>
      <br></br>
      <p>Please enter your registered email to receive your forgot Password Link</p>
      <br></br>
      <form>
        <div className="form-item">
          <label for="email"></label>
          <input type="email" name="email" required="required" placeholder="Email Address"></input>
        </div>
        <div className="button-panel">
          <input type="submit" class="button" title="Sign In" value="Send Email"></input>
        </div>
      </form>
      <div className="form-footer">
        <p>Remember Your Password? <a href="/login">Login</a></p>
      </div>
    </div>
  </div>
);

export default ForgotPassword;
