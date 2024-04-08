import React from 'react'
import { ButtonStyled, ContactContainer, ContactoInfoStyled, ContactoItemStyled, ContactoStyled, FormStyled, InputStyled, InputTextStyled, MapStyled } from './ContactoStyled'
import { Form, Formik } from 'formik'

import * as Yup from 'yup'
import { ImgPrincipal } from '../Home/HomeStyled'
import callcenter from '../../media/callcenter.jpg'


const initialValues = {
  nombre: '',
  telefono: '',
  email: '',
  mensaje: ''
}


const Contacto = () => {
  return (
    <>


      <ImgPrincipal>
        <img src={callcenter} alt="" />

      </ImgPrincipal>

      <ContactContainer>
        <h2>Contactos</h2>
        <ContactoStyled>

          <ContactoInfoStyled>
            <p>Por cualquier duda o para pedir un presupuesto contactenos </p>
            <ContactoItemStyled>
              <p>Mail :</p>
              <a href="compensarenergia@gmail.com">
              <p1>compensarenergia@gmail.com</p1>
              </a>
            </ContactoItemStyled>
            {/* <ContactoItemStyled>
              <p>Telefono :</p>
             
              <p1>02342472604 / 01157410595</p1>
              
            </ContactoItemStyled> */}
            <ContactoItemStyled>
              <p>Telefono/Whatssapp :</p>
            
              <a href="https://api.whatsapp.com/send?phone=542342472604&text=Hola, requiero información sobre sus servicios. " class="whatsapp">
              <p1>02342472604 /</p1></a>
              <a href="https://api.whatsapp.com/send?phone=541157410595&text=Hola, requiero información sobre sus servicios. " class="whatsapp">
              <p1>01157410595</p1>
              </a>
            </ContactoItemStyled>

            <ContactoItemStyled>
              <p>Direccion:
            
             <a href='https://maps.app.goo.gl/5ppzgccQdNCYnKpW9'>
             <p1> Coronel del Busto 1355 ,Bragado, Pcia de Buenos Aires </p1>
             </a>
             </p>
            </ContactoItemStyled>
            


          </ContactoInfoStyled>

          <Formik
            initialValues={initialValues}

            onSubmit={(values) => console.log(JSON.stringify(values))}>
            <Form>
              <FormStyled>
                <InputStyled
                  name='nombre'
                  //  label='Nombre'
                  type='text'
                  placeholder='Ingrese su nombre'

                >
                </InputStyled>
                <InputStyled
                  name='telefono'
                  // label='Nombre'
                  type='number'
                  placeholder='Ingrese su numero de telefono'

                >
                </InputStyled>
                <InputStyled
                  name='email'
                  // label='Nombre'
                  type='text'
                  placeholder='Ingrese su correo electronico'

                >
                </InputStyled>
                <InputTextStyled
                  name='mensaje'
                  // label='Nombre'
                  type='text'
                  placeholder='Ingrese su consulta'

                >
                </InputTextStyled>
                <ButtonStyled type='submit'>
                  Enviar
                </ButtonStyled>
              </FormStyled>
            </Form>

          </Formik>
        </ContactoStyled>
      </ContactContainer>
    </>
  )
}

export default Contacto