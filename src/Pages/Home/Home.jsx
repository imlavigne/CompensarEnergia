import React from 'react'
import { ClientesContarner, HomeContainer, ImagenSection, ImgPrincipal, SectionContainer, SectionStyled } from './HomeStyled'
import proyectos from '../../media/proyectos.png'
import servicios from '../../media/servicios.png'
import paneles from '../../media/paneles.jpeg'

const Home = () => {
    return (
        <>
            <HomeContainer>
                <ImgPrincipal>
                    {/* <img src={paneles} alt="" /> */}
                    <h2>ACA VAN FOTOS DE IMAGENES DE PANELES O PROYECTOS</h2>
                </ImgPrincipal>
                <SectionContainer>

                    <SectionStyled>
                        < ImagenSection>
                            <img src={proyectos} alt="Proyectos" />
                        </ImagenSection>
                        <h2>Proyectos</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eum vero, hic quas commodi alias odio deserunt atque nostrum delectus. Assumenda explicabo at eos quis velit earum quibusdam eligendi unde!</p>
                    </SectionStyled>
                    <SectionStyled>
                        < ImagenSection>
                            <img src={servicios} alt="Servicios" />
                        </ImagenSection>
                        <h2>Servicios</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, quibusdam. Cum vel laudantium repellendus aspernatur corporis ducimus repudiandae nulla nisi commodi tenetur itaque doloribus est accusantium, pariatur dicta nesciunt sit?</p>
                    </SectionStyled>
                </SectionContainer>
                <ClientesContarner>
                    <h2>Algunos de nuestros clientes</h2>
                    <p>FOTOS DE LAS EMPRESAS CLIENTES EN CARRUSEL</p>
                </ClientesContarner>
            </HomeContainer>
        </>
    )
}

export default Home