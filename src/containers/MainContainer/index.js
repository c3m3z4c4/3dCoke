import React from 'react';
import Navbar from '../../components/Navbar'
import Bottle from '../../components/Bottle'
import Footer from '../../components/Footer'
import { MainContainer } from './styles';

 const index = () => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <Bottle/>
      <Footer/>
    </MainContainer>
  )
 }
export default index;

