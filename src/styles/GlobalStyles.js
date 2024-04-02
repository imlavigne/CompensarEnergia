import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

    :root {
    --verde: rgb(214,236,10);
    /* --verde:  #186781; */
    --azul: rgb(3,81,255);
    --fondo: rgb(244,244,244);
    /* --fondo: white; */

  } 

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
     background: var(--fondo);
    
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    max-width:100%;
    }

    a {
    text-decoration: none;
    color:white;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

    

`;
