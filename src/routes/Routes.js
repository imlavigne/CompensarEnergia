import { Routes as ReactDomRoutes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Contacto from '../Pages/Contacto/Contacto'
import Products from '../Pages/Products/Products'

const Routes =()=>{
    return(
    <ReactDomRoutes>

        <Route path='/contactos' element={<Contacto/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
    </ReactDomRoutes>
)}

export default Routes