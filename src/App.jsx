import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';


function App() {
  return (
    <Router>      
      {/* Routes */}
      <div> {/* Added padding top to prevent navbar overlap */}
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
