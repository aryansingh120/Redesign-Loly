import React from 'react';
import { Layout } from 'antd';

import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Peoples from './Components/Peoples/Peoples';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';


const { Content } = Layout;

const App = () => {
  return (
       <Layout className='app'> 
      <Navbar/>
      <Hero/>
      <Header/>
      <Contact/>
      <Peoples/>
      <Cards/>
      <Footer/>

       
    </Layout>

  );
};

export default App;