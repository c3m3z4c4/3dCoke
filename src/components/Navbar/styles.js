import styled from 'styled-components';


export const NavbarMain = styled.div`

   grid-area: header;
   padding-left: 10px;
   padding-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    color: white;
    font-family: Helvetica;
    font-weight: 700;

`
export const NavbarTitle = styled.div`
    font-family: 'CocaCola' !important;
    margin-right: auto;
    font-size: 150%;
    padding: 20px 16px;
`
export const NavbarLogo = styled.img`
    margin-right: auto;
    max-width: 180px;

`

export const NavbarList = styled.ul`
    list-style-type: none;
    padding-top: 40px;


`
export const NavbarItem = styled.li`
    text-decoration: none;
    display: inline;
    padding: 16px 40px;
    cursor: pointer;
    vertical-align: middle;
    font-size: 80%;
`
export const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
    //transition:background 0.7s,color 0.7s,border 0.5s;
    transition:color 0.7s;
    &:hover{
        color: #2a282a;
        text-shadow: #ffffff;
    }
    &:active{
        color:#2a282a; 
        text-shadow: #eb051d;
    }
`