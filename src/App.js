import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import InventoryItem from './Pages/InventoryItems/InventoryItems';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryItem />}></Route>
        <Route path='/manage-item' element={<Register />}></Route>
        <Route path='/blogs' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
