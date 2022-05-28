import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import InventoryItem from './Pages/InventoryItem/InventoryItem';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItem from './Pages/AddItem/AddItem';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import MyItem from './Pages/MyItem/MyItem';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryItem></InventoryItem>}></Route>
        <Route path='/manage-items' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>
        <Route path='/inventory-items' element={<InventoryItems />}></Route>
        <Route path='/blogs' element={<Blog />}></Route>
        <Route path='/additem' element={<AddItem />}></Route>
        <Route path='/my-item' element={<MyItem />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
