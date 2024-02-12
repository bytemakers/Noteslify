// Importing necessary components and hooks from react-router-dom for navigation and routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing individual page components to be used in routing
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Notes from "./pages/Notes/Notes";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

// Importing the TopNav component which will be displayed across all pages
import TopNav from "./components/Navbar/TopNav";

// Defining the main App component
function App() {
  return (
    // Utilizing the BrowserRouter (alias Router) for enabling navigation between components
    <Router>
      {/* top nav */}
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component for use in the index.js file
export default App;
