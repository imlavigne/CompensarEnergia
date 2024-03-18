import styled from "styled-components";


export const HomeContainer=styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-content:center;
/* height:100vh; */
margin:1rem;
/* padding:2rem; */
/* background-color:red; */
`;
export const ImgPrincipal=styled.div`

`;
export const SectionContainer=styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-between;
`;
export const SectionStyled = styled.div`
display:flex;
flex-direction:column;
align-items:center;
/* justify-content:center; */
/* background-color:red; */
width:300px;
height:400px;
margin:1rem;
padding:0.5rem;
color:var(--azul);

`;
export const ImagenSection = styled.div`
 align-items: center;
   justify-content:center;
   /* background-color:red; */
   height:130px;

   img{
    width :200px ;
   }
`;

export const ClientesContarner=styled.div`
color: var(--azul);
`;