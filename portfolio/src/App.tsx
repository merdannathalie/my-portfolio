import "./App.css";
import NavBar from "./components/Navbar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";
import Work from "./views/Work.tsx";
import Contact from "./views/Contact.tsx";
import Footnote from "./components/Footnote.tsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footnote />
    </Router>
  );
}

export default App;
