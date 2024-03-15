import React from 'react'
import logo from '../media/logo.png'
import { LogoImg, NavbarContainerStyled, NavbarSeccion, NavberItem } from './NavbarStyle'

const Navbar = () => {
    return (
        <>
            <NavbarContainerStyled>
                <LogoImg>
                    <img src={logo} />
                </LogoImg>
                <NavbarSeccion>
                   <NavberItem> <h2>Home</h2>  </NavberItem> 
                   <NavberItem> <h2>Productos</h2></NavberItem>
                   <NavberItem> <h2>Contacto</h2></NavberItem>
                    
                </NavbarSeccion>
            </NavbarContainerStyled>
        </>
    )
}

export default Navbar