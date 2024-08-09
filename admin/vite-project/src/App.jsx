import React from 'react'
import Navbar from './componets/navbar/Navbar'
import Sidebar from './componets/sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/order' element={<Order />}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
