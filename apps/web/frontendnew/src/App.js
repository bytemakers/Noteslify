import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
