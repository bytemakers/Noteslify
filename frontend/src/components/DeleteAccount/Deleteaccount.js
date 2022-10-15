import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Deleteaccount = () => {
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { token, email } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

    }, []);
    
    
    const deletePermanently = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:8181/api/auth/permanentlydelete/${token}/${email}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ password: password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.removeItem('auth-token');
            toast.success(json.success);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
        else {
            toast.error(json.error);
        }
    }
  return (
    <>
    {/* <form onSubmit={deletePermanently}>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button>Delete Permanently</button>
    </form>
        <ToastContainer
          toastStyle={{ backgroundColor: "#202d40", color: "white" }}
    /> */}

    <div>
      <Helmet>
        <title>Noteslify | Delete Account</title>
        <meta name="description" content="Noteslify. Reset Your Password From Here." />
      </Helmet>
      <div className="form-wrapper">
        <h1>Delete User?</h1>
        <br></br>
        <p>Please confirm your password to delete your account permanently</p>
        <br></br>
        <form onSubmit={deletePermanently}>
          <div className="form-item">
            <label for="password"></label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required="required" placeholder="Confirm Password"></input>
          </div>
          <div className="button-panel">
            {!isLoading && <input type="submit" className="button" title="Sign In" value="Delete User"></input>}
            {isLoading && <button style={{backgroundColor: '#15203a', cursor: 'not-allowed'}} disabled={true} className="button" value=""><span className="loader"></span></button>}
          </div>
        </form>
        <div className="form-footer">
          <p>Remember Your Password? <Link to="/login">Login</Link></p>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </div>
    
    </>
  )
}

export default Deleteaccount