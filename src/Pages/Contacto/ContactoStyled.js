import styled from "styled-components";

export const ContactContainer=styled.div`
display: flex;
flex-direction: column;
color:black;
align-items:center;
justify-content:center;
/* background-color:red; */
`;
export const ContactoStyled = styled.div `
display:flex;
/* cambiar este flex direction para colocar la info y el form uno a lado del otro */
flex-direction:row; 
color:black;
align-items:center;
justify-content:center;
/* background-color:blue; */
`;

export const ContactoInfoStyled = styled.div`
display:flex;
flex-direction:column;
align-items:baseline;
justify-content:space-around;
/* background-color:red; */
height:100%;
padding:0px;
margin:0 auto;
gap:1rem;
`;
export const ContactoItemStyled = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin:auto;
font-family: "Bebas Neue", sans-serif;
/* background-color:blue; */
font-size:15px;
padding:0;
height:20px;
p1{
    color:var(--azul);
}

`;


export const FormStyled = styled.form `
  display: flex;    
  flex-direction: column;
  gap:1rem;
  width:500px;
  /* background-color:red; */
  margin:2rem;
  `;

export const InputTextStyled=styled.input ` 
width : 100%;
height:50px;
border-radius:5px;


`;
export const InputStyled=styled.input`
width:100%;
height:25px;
border-radius:5px;

`;
export const ButtonStyled =styled.button`
border-radius:5px;
width:100px;
`;

export const MapStyled=styled.div`
`;