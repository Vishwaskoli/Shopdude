import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetailed from './pages/ProductDetailed'
import CategoryDetail from './pages/CategoryDetail'


export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Navbar isLogin={isLogin} onLogin={() => setIsLogin(true)} onLogout={() => setIsLogin(false)}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/detailedpage/:id" element={<ProductDetailed/>}/>
          <Route path="/category/:slug" element={<CategoryDetail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

