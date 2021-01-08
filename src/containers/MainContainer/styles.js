import styled from 'styled-components';

export const MainContainer = styled.div`
   border-radius: 37px 37px 37px 37px;
   background: #eb051d;
   border: 9px solid #2a282a;
   color: #fee7ea;
   max-width: 80vw;
   height: 80vh;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 10% auto 10%;
   grid-template-rows: 10% auto 15%;
   grid-template-areas: 
    "header header header "
    ". main ."
    ". footer . ";

   margin-top: 3.5%;
`
