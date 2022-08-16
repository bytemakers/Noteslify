import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<Signup />}/>
        <Route path = "/notes" element = {<Notes />}/>
      </Routes>
    </Router>
  );
}

export default App;
