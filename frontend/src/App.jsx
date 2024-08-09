import React, { useState } from 'react'
import Navbar from './componets/navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Cart from './pages/cartpage/Cart'
import Place from './pages/placeorderpage/Place'
import Footer from './componets/footer/Footer'
import AppDownload from './componets/appdownload/AppDownload'
import SignUp from './componets/popup/SignUp'
import Verify from './pages/verify/Verify'
import MyOrder from './pages/myorder/MyOrder'
const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<SignUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar  showLogin={showLogin} setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='cart' element={<Cart/>}/>
        <Route path='/place' element={<Place/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorders" element={<MyOrder/>}/>
      </Routes>
      <AppDownload/>
      <Footer/>
    </div>
    </>
  )
}

export default App

