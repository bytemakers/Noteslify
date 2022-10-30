import React, { useEffect, useState } from 'react'
import './Signup.css'
import authImg from'../../assets/authentication.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
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


    const register = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        // API Call
        const response = await fetch('http://localhost:8181/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ username: username, email: email, password: password })
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
    <div className="l-form">
        <div className="shape1"></div>
        <div className="shape2"></div>

        <div className="form">
            <img src={authImg} alt="" className="form__img"/>

            <form className="form__content" id="signup-form" onSubmit={register}>
                <h1 className="form__title">Register</h1>

                <div className="form__div form__div-one">
                    <div className="form__icon">
                        <i className='fa-regular fa-envelope'></i>
                    </div>

                    <div className="form__div-input">
                        <label htmlFor="" className="form__label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form__input" id="email" name="email" aria-describedby="emailHelp"/>
                    </div>
                </div>

                <div className="form__div form__div-one">
                    <div className="form__icon">
                        <i className='fa-regular fa-circle-user'></i>
                    </div>

                    <div className="form__div-input">
                        <label htmlFor="" className="form__label">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form__input" id="username" name="username" minLength="6" maxLength="30" aria-describedby="emailHelp"/>
                    </div>
                </div>

                <div className="form__div">
                    <div className="form__icon">
                        <i className='fa-solid fa-lock' ></i>
                    </div>

                    <div className="form__div-input">
                        <label  htmlFor="" className="form__label">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={isShown ? "text" : "password"} name="password" minLength="6" maxLength="24" className="form__input" id="password"/><br/>
                        <span style={{top: "10% !important", marginLeft:'100%',  fontSize:'18px', fontWeight:'bold'}}><i className={isShown ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} onClick={togglePassword}></i></span>
                    </div>
                    
                </div>
                <br></br>
                {!isLoading && <button type="submit" className="form__button">Register</button>}
                {isLoading && <button type="submit" className="form__button" style={{backgroundColor: '#15203a', cursor: 'not-allowed'}} disabled={true}><span className="loader"></span></button>}

                <div style={{marginBottom: '25px',textAlign:'center'}}>
                    Already have an account ? <Link to={'/login'}>Login here</Link>
                </div>

            </form>
        </div>
        <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </div>
    </>
  )
}

export default Signup