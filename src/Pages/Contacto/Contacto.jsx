import React from 'react'
import { ButtonStyled, ContactContainer, FormStyled, InputStyled, InputTextStyled, MapStyled } from './ContactoStyled'
import { Form,Formik } from 'formik'

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
   
    </ContactContainer>
    </>
  )
}

export default Contacto