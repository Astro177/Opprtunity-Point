import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <div className='md:min-h-[calc(100vh-461px)]'> 
        <Outlet/>
        </div>
      <Footer/>
    </>
  );
};

export default App;