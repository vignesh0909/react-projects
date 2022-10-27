import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ViewTraining from './components/ViewTraining';

function App() {
  return <Router>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
      <a className="navbar-brand" href="/" style={{ fontWeight: 'bold' }}>ProtectedRoute</a>
      <div className="collapse navbar-collapse" >
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link" exact activeClassName="active">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link" activeClassName="active" >About Us</NavLink>
          <NavLink to="/view" className="nav-item nav-link">View Trainings</NavLink>
          <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
        </div>
      </div>
    </nav>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
      {/* <ProtectedRoute path='/view' element={<ViewTraining />} /> */}
      <Route path="/view" element={<ProtectedRoute Component={ViewTraining} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
}
export default App;
