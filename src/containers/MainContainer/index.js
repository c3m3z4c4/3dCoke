import React from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { MainContainer } from './styles';

 const index = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <Hero/>
      <Footer/>
    </MainContainer>
  )
 }
export default index;

