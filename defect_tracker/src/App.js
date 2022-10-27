import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import './App.css';
import Defects from './components/Defects';
import AddDefect from './components/AddDefect';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='add-defect' element={<AddDefect />}></Route>
        <Route path='defects' element={<Defects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
