import styled from "styled-components";

export const FooterContainerStyled = styled.div`
background-color: rgb(81,81,81);
color:white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;
padding: 1rem;
p{
    font-size:15px;
  }

`;
export const FooterContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:100%;

`;
export const LogoContainer = styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
  font-size: 15px;
 `;

export const LogoInfo= styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 gap: 0.75rem;
 font-size:20px;
 p{
    font-size:13px;
 }
 
 `;
export const LogoInsta=styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 font-size:25px;
 `;

export const LogoCreator = styled.div`
display:flex;
flex-direction:row;
gap:0.5rem;
align-items:center;
justify-content:center;
margin-bottom:0.1px;
  font-size: 15px;
p{
    font-size:12px;
  }
 `;