import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages';
// import Overview from './pages/overview';
import Predict from './pages/predict';
import Overview from './pages/overview';
import Contact from './pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
