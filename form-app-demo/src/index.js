import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Employees from './Employees';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ContactUs from './ContactUs';
import About from './About';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Login from './LoginForm';
import RefLogin from './RefLoginForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='home' element={<Home />} />
        <Route path='about-us' element={<About />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='employees' element={<Employees />} />
        <Route path='login' element={<RefLogin />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
