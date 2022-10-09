import React, { useState } from 'react'
import './ForgotPassword.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch('http://localhost:8181/api/auth/forgotpassword', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }, body: JSON.stringify({ email })
    });
    const json = await response.json();
    if (json.success) {
      toast.success("Link for resetting the password for your account has been sent to your registered email address!");
    }
    else {
      toast.error(json.error);
    }
    setIsLoading(false);
  }
  return (
    <div>
      <Helmet>
        <title>Noteslify | Forgot Password</title>
        <meta name="description" content="Noteslify. Reset Your Password From Here." />
      </Helmet>
      <div class="form-wrapper">
        <h1>Forgot Password?</h1>
        <br></br>
        <p>Please enter your registered email to receive your forgot Password Link</p>
        <br></br>
        <form onSubmit={forgotPassword}>
          <div className="form-item">
            <label for="email"></label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required="required" placeholder="Email Address"></input>
          </div>
          <div className="button-panel">
            {!isLoading && <input type="submit" class="button" title="Sign In" value="Send Email"></input>}
            {isLoading && <button style={{backgroundColor: '#15203a', cursor: 'not-allowed'}} disabled={true} class="button" value=""><span class="loader"></span></button>}
          </div>
        </form>
        <div className="form-footer">
          <p>Remember Your Password? <Link to="/login">Login</Link></p>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
  </div>
  )
}

export default ForgotPassword