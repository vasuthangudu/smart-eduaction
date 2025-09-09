import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Courses from './pages/courses';
import Teachers from './pages/teachers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/teachers' element={<Teachers />} />
      </Routes>
    </Router>
  );
}

export default App;