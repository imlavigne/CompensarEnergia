import React from 'react'
import { FooterContainer, FooterContainerStyled, LogoContainer, LogoCreator, LogoInfo, LogoInsta } from './FooterStyle'
import { HiOutlineMail } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainerStyled>
        <FooterContainer>
      <LogoContainer>
        
                <a href="compensarenergia@gmail.com">
                <LogoInfo>
                <HiOutlineMail /> <p>compensarenergia@gmail.com</p>
                </LogoInfo>
                </a>
               
                <LogoInfo>
                <BsFillTelephoneFill />
                <a href="https://api.whatsapp.com/send?phone=542342472604&text=Hola, requiero información sobre sus servicios. " class="whatsapp">

                <FaWhatsapp /></a>
                <p> 02342472604</p>
                </LogoInfo>
                <LogoInfo>
                <BsFillTelephoneFill />
            <a href="https://api.whatsapp.com/send?phone=541157410595&text=Hola, requiero información sobre sus servicios. " class="whatsapp">

            <FaWhatsapp /></a>
            <p>01157410595</p>
            </LogoInfo>
            </LogoContainer>
            
            <LogoContainer>
              <LogoInsta>
                <p>Seguinos en:</p>
                <a href="https://www.instagram.com/compensarenergia/">
                <FiInstagram />
                </a>
                </LogoInsta>
                </LogoContainer>
                <LogoContainer>
           
            <LogoInfo>
            <a href='https://maps.app.goo.gl/5ppzgccQdNCYnKpW9'>
            <FaMapMarkerAlt /> </a><p> Coronel del Busto 1355 ,Bragado </p>
            </LogoInfo>
            </LogoContainer>
            </FooterContainer>
            <LogoCreator>
            <p>Hecho por Ignacio Lavigne</p>
            <a href='https://www.linkedin.com/in/ignacio-matias-lavigne/'>
            <FaLinkedin />
            </a>
            </LogoCreator>
      </FooterContainerStyled>
    </>
  )
}

export default Footer
