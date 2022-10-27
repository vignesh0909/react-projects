import ProductDetails from './components/ProductDetails'
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import PurchasedItems from './components/PurchasedItems';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm />}></Route>
            <Route path='/purchasedItems' element={<PurchasedItems />}></Route>
            <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
