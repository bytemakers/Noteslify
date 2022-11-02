import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Notes from './components/Notes/Notes';
import Folders from './components/Folders/Folders';
import OpenFolder from './components/Folders/OpenFolder';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Setauthtoken from './components/Setauthtoken';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Home from './components/LandingPage/Pages/Home'
import Contact from './components/LandingPage/Pages/Contact'

// new landing page
import NHome from './components/NewLandingPage/Pages/Home'
import NContact from './components/NewLandingPage/Pages/Contact'
import RecycleBin from './components/RecycleBin/RecycleBin';
import Account from './components/Account/Account';
import ErrorPage from './components/Error/ErrorPage';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Deleteaccount from './components/DeleteAccount/Deleteaccount';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 3000
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Notes />} />
        <Route exact path="/folders" element={<Folders />} />
        <Route path="/folders/:folderid" element={<OpenFolder />} />
        <Route path="/setauthtoken/:authtoken" element={<Setauthtoken />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:email/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/NContact" element={<NContact />} />
        <Route path="/NHome" element={<NHome />} />
        <Route path="/bin" element={<RecycleBin />} />
        <Route path="/myaccount" element={<Account />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/deleteacocunt/:email/:token' element={<Deleteaccount />} />
      </Routes>
    </Router>
  );
}

export default App;
