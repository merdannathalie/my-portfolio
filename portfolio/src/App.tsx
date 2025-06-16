import "./App.css";
import NavBar from "./components/Navbar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About.tsx";
import Work from "./views/Work.tsx";
import Contact from "./views/Contact.tsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
