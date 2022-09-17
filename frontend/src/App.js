import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Notes from './components/Notes/Notes';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Setauthtoken from './components/Setauthtoken';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Home from './components/LandingPage/Pages/Home';
import Contact from './components/LandingPage/Pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<Signup />}/>
        <Route path = "/notes" element = {<Notes />}/>
        <Route path = "/setauthtoken/:authtoken" element = {<Setauthtoken />}/>
        <Route path = "/forgotpassword" element = {<ForgotPassword />}/>
        <Route path = "/resetpassword/:email/:token" element = {<ResetPassword />}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/" element = {<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
