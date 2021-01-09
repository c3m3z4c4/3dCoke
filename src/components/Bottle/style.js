import styled from 'styled-components';

export const StyledBottle = styled.div`
   color: white;
   font-family: verdana;
   font-weight: bold;
   font-size: 3em;
   margin: auto;
   perspective: 25em;
   position:relative;
   width: 11em;
   height: 11em;
  

`
export const StyledSides = styled.div`
   position: absolute;
   top: 50%;
   left: 0;
   transform-style: preserve-3d;
   animation: spin 1s linear infinite;
   top: 0;
   width: 100%;
   height: 100%;
   transform: rotateZ(90deg) rotateX(-90deg);
`
