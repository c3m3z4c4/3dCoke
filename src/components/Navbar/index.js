import React from 'react'
import { NavbarMain, NavbarTitle, NavbarLogo, NavbarList, NavbarItem, Link } from './styles'
import Logo from './img/logoCoke.png'

const NavBar = () => (
    <NavbarMain>
        <NavbarTitle>
            <NavbarLogo src={ Logo }></NavbarLogo>
        </NavbarTitle>
        <NavbarList>
            <NavbarItem><Link href="/">OUR BRANDS</Link></NavbarItem>
            <NavbarItem><Link href="/">SHOP</Link></NavbarItem>
            <NavbarItem><Link href="/">GIVE</Link></NavbarItem>        
            <NavbarItem><Link href="/">REWARDS</Link></NavbarItem>        
            <NavbarItem><Link href="/">COCA-COLA&trade; CINNAMON</Link></NavbarItem>  
        </NavbarList>
      
    </NavbarMain>
);

export default NavBar
