import React, { useEffect, useState } from 'react'
import './ResetPassword.css';
import { Link, useNavigate, useParams } from 'react-router-dom';


const ResetPassword = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const { email, token } = useParams();
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  useEffect(() => {

    const checkToken = async () => {
      const response = await fetch('http://localhost:8181/api/auth/checktoken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ email, token })
      });
      const json = await response.json();
      if (json.success) {
        setIsValidToken(true);
      }
      else if (json.expired) {
        alert(json.expired);
      }
      else {
        alert('Some Error Occurred!');
      }
    }
    checkToken();
  }, [])
  

  const changePassword = async (e) => {
    e.preventDefault();

      const response = await fetch('http://localhost:8181/api/auth/changepassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ email, password, token })
      });
      const json = await response.json();
      if (json.success) {
        alert('Your Password has been successfully changed!!');
        navigate('/login');
      }
      else if (json.expired) {
        alert(json.expired);
      }
      else {
        alert('Some Error Occurred!');
      }
    
  }

  return (
    <div>
      {isValidToken && <div className="form-wrapper">
        <h1>Set New Password</h1>
        <br></br>
        <p>Your Email Address: <strong>{email}</strong></p>
        <br></br>
        <form onSubmit={changePassword}>
          <div className="form-item">
            <label for="password"></label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required="required" placeholder="Enter Your New Password"></input>
          </div>
          <div className="button-panel">
            <input type="submit" className="button" title="Sign In" value="Change Password"></input>
          </div>
        </form>
        <div className="form-footer">
          <p>Remember Your Password? <Link to="/login">Login</Link></p>
        </div>
      </div>}
  </div>
  )
}

export default ResetPassword