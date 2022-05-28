import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blog';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
