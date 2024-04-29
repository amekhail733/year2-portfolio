import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx'
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './css/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Nav />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/projects" Component={Projects} />
          </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
);
