import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/RootReducer';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';


let store = applyMiddleware(thunk)(createStore)(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
