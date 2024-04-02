import React from 'react'
import logo from '../media/logo.png'
import { LogoImg, NavbarContainerStyled, NavbarSeccion, NavberItem } from './NavbarStyle'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <NavbarContainerStyled>
                <LogoImg>
                    <img src={logo} />
                </LogoImg>
                <NavbarSeccion>
                    <Link to='/home'>
                   <NavberItem> <h2>Home</h2>  </NavberItem> 
                   </Link>
                  <Link to='/products'>
                   <NavberItem> <h2>Productos</h2></NavberItem>
                   </Link>
                  <Link to='/contactos'>
                   <NavberItem> <h2>Contacto</h2></NavberItem>
                   </Link>
                </NavbarSeccion>
            </NavbarContainerStyled>
        </>
    )
}

export default Navbar