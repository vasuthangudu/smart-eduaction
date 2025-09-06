import './App.css';
import Home from './Student/home';
import About from './Student/about'; // Capitalized import
import Contact from './Student/contact';
import Courses from './Student/courses';
import Teachers from './Student/teachers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/teachers' element={<Teachers />} />
      </Routes>
    </Router>
  );
}

export default App;
