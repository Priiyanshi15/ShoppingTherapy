import React, { createContext, useContext, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./component/Layout";
import Home from './pages/Home'
import Gadgets from './pages/Gadgets'
import Fashion from './pages/Fashion'
import SingleProduct from "./component/SingleProduct";
import AddToCart from "./component/AddToCart";
import { products } from "./data_json";
import Login from "./component/auth/login/login";


const productContext = createContext();

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const ElectronicList = products.filter(
        (product) => product?.Type?.toLowerCase() == "electronics"
      );

  const FashionList = products.filter(
        (product) => product?.Type?.toLowerCase() == "fashion"
      );

  return (
    <productContext.Provider value={{cartProducts, setCartProducts}}>
       <Router>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/gadgets' element={<Gadgets/>}></Route>
        <Route path='/fashion' element={<Fashion/>}></Route>
        <Route path='/single-product/:id' element={<SingleProduct/>}></Route>
        <Route path='/AddToCart' element={<AddToCart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </Router>
    </productContext.Provider>
    
  );
};

export default App;
export {productContext}
