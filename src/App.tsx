import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header/>
        <Outlet/>
      <Footer/>
    </Provider>
  );
};

export default App;
