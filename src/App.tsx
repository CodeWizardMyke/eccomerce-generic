import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Provider from './context/Provider';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Provider>
      <Header/>
      <Cart />
      <Outlet/>
      <Footer/>
    </Provider>
  );
};

export default App;
