import React, { useContext, useEffect, useState } from 'react'
import './Account.css'
import Sidenav from '../Sidenav/Sidenav'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Switch from 'react-js-switch';
import GlobalContext from '../../context/GlobalContext';

const Account = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [progress, setProgress] = useState(0);
    const {theme , setTheme} = useContext(GlobalContext);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    setTheme(theme === "light" ? "dark" : "light");
  };
  

  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Sidenav />
    <section className="home">
      <div className='head'>
      <div className="text">My Account</div>
       <div>
        <label>
            <Switch value={isSwitchOn} onChange={switch_onChange_handle}  
            backgroundColor= {{on: 'var(--primary-color)', off:'white'}} 
            borderColor = {{ on: 'var(--primary-color)', off: 'white' }}/>
        </label>
       </div>
       </div>


      <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </section>

    </>
  )
}

export default Account