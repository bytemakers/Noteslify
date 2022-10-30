import React, { useEffect, useState } from 'react'
import './Login.css'
import authImg from'../../assets/authentication.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isShown, setIsSHown] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
      if (sessionStorage.getItem('auth-token')) {
        navigate('/notes');
      }
      else {
        /*===== FOCUS =====*/
        const inputs = document.querySelectorAll(".form__input")

        /*=== To call function===*/
        inputs.forEach(input=>{
            input.addEventListener("focus",addfocus)
            input.addEventListener("blur",remfocus)
        })
      }
      // eslint-disable-next-line
    }, [])
    




    /*=== Add focus ===*/
    function addfocus(){
        let parent = this.parentNode.parentNode
        parent.classList.add("focus")
    }

    /*=== Remove focus ===*/
    function remfocus(){
        let parent = this.parentNode.parentNode
        if(this.value === ""){
            parent.classList.remove("focus")
        }
    }

    


    const login = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        // API Call
        const response = await fetch('http://localhost:8181/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ username: username, password: password })
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            // Redirect to home page
            navigate('/notes');
        }
        else {
            if (json.errors) {
                for (const error of json.errors) {
                    toast.error(error.msg);
                }
            }
            else {
                toast.error(json.error);
            }
        }
        setIsLoading(false);
    }
// Added Password toggle handler
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
  return (
    <>
    <Helmet>
        <title>Noteslify | Login</title>
        <meta name="description" content="Noteslify. Login to your Dashboard and access your files from here." />
    </Helmet>
    <div className="l-form">
        <div className="shape1"></div>
        <div className="shape2"></div>

        <div className="form">
            <img src={authImg} alt="" className="form__img"/>

            <form className="form__content" id="login-form" onSubmit={login}>
                <h1 className="form__title">Welcome</h1>

                <div className="form__div form__div-one">
                    <div className="form__icon">
                        <i className='fa-regular fa-circle-user'></i>
                    </div>

                    <div className="form__div-input">
                        <label htmlFor="" className="form__label">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" className="form__input" id="username" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className="form__div">
                    <div className="form__icon">
                        <i className='fa-solid fa-lock' ></i>
                    </div>
                    <div className="form__div-input">
                        <label htmlFor="" className="form__label">Password</label>
                        <input type={isShown ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" minLength="6" maxLength="24"
                className="form__input" id="password"/>
                 <span style={{marginLeft:'100%',  fontSize:'18px', fontWeight:'bold'}}><i className={isShown ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={togglePassword}></i></span>
                    </div>
                </div>
                <Link to="/forgotpassword" className="form__forgot">Forgot Password?</Link>
                {!isLoading && <button type="submit" className="form__button">Login</button>}
                {isLoading && <button type="submit" className="form__button" style={{backgroundColor: '#15203a', cursor: 'not-allowed'}} disabled={true}><span className="loader"></span></button>}

                <div style={{marginBottom: '25px',textAlign:'center'}}>
                    Don't have an account ? <Link to={'/signup'}>Sign up here</Link>
                </div>

            </form>
        </div>
        <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </div>
    </>
  )
}

export default Login