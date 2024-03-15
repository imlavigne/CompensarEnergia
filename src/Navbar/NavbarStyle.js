import styled from "styled-components";

export const NavbarContainerStyled =styled.div`
 background-color:var(--azul);
  font-size: 1.5rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items:center;

  position: sticky;
  width:100%;
  top:0px;
  z-index: 10;
  /* padding: 2rem; */
  max-width:100vw;
  @media (max-width: 1000px) {
    width:100vw;
    /* background-color:red; */
    padding:0rem;
    height:100px;
 
  }
  
`;

export const LogoImg= styled.div`
    /* margin-top: 2px;  */
   
   align-items: center;
   justify-content:center;

   img{
    width :250px ;
   }

   @media (max-width: 1000px) {
    margin:1rem;
 
  }
   

 `;

 export const NavbarSeccion =styled.div`
 color:var(--verde);
 font-family:sans-serif;
 color:white;
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:end;
 gap:1rem;
 /* background-color:red; */
 font-size:13px;
 margin:2rem;


 
`;
export const NavberItem=styled.div`
 cursor: pointer;
 transition: .4s ease all;
 
 &:hover{
     transform:scale(1.3);
     color:var(--verde);
 };
`
