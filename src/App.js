import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Contacto from "./Pages/Contacto/Contacto";
import Home from "./Pages/Home/Home";
import { BsWhatsapp } from "react-icons/bs";
import { WhatssapLogoStyled } from "./AppStyle";
import Routes from "./routes/Routes";



function App() {
  return (
    <div>
     < Navbar/>
     <WhatssapLogoStyled>
     
     <a href="https://api.whatsapp.com/send?phone=541157410595&text=Hola, requiero información sobre sus servicios. " class="whatsapp">
      <BsWhatsapp/>
      </a>

     </WhatssapLogoStyled>
     {/* <Home/> */}
     <Routes/>
     {/* <Contacto/> */}
     <Footer/>
    </div>
  );
}

export default App;
