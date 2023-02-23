import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import TopNav from "./components/Navbar/TopNav";
import Notes from "./pages/Notes/Notes";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      {/* top nav */}
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
