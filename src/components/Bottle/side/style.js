import styled from 'styled-components';

export const StyledSide = styled.div`
   position: absolute;
   top: 50%;
   left: 80%;
   transform-style: preserve-3d;
   display: flex;
  
   &:nth-child(1){
    transform: translateY(-50%) rotateX(0deg);
     }
   &:nth-child(2){
    transform: translateY(-50%) rotateX(36deg);
     }
   &:nth-child(3){
    transform: translateY(-50%) rotateX(72deg);
     }
   &:nth-child(4){
    transform: translateY(-50%) rotateX(108deg);
     }
   &:nth-child(5){
    transform: translateY(-50%) rotateX(144deg);
     }
   &:nth-child(6){
    transform: translateY(-50%) rotateX(180deg);
     }
   &:nth-child(7){
    transform: translateY(-50%) rotateX(216deg);
     }
   &:nth-child(8){
    transform: translateY(-50%) rotateX(252deg);
     }
   &:nth-child(9){
    transform: translateY(-50%) rotateX(288deg);
     }
   &:nth-child(10){
    transform: translateY(-50%) rotateX(324deg);
     }
   & span{
     backface-visibility: hidden;
     display: inline-block;
     width: 1ch;
   }
   & span:nth-child(1){
     transform: translateZ(2ch) rotateY(0deg) scaleY(1);
   }
   & span:nth-child(2){
     transform: translateZ(2ch) rotateY(0deg) scaleY(1);
   }
   & span:nth-child(3){
     transform: translateZ(2.25ch) rotateY(-30deg) scaleY(1);
   }
   & span:nth-child(4){
     transform: translateZ(2.75ch) rotateY(-30deg) scaleY(1.3);
   }
   & span:nth-child(5){
     transform: translateZ(3.25ch) rotateY(-30deg) scaleY(1.5);
   }
   & span:nth-child(6){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(7){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(8){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(9){
     transform: translateZ(3.3ch) rotateY(15deg) scaleY(1.5);
   }
   & span:nth-child(10){
     transform: translateZ(3ch) rotateY(15deg) scaleY(1.4);
   }
   & span:nth-child(11){
     transform: translateZ(2.8ch) rotateY(0deg) scaleY(1.3);
   }
   & span:nth-child(12){
     transform: translateZ(2.8ch) rotateY(0deg) scaleY(1.3);
   }
   & span:nth-child(13){
     transform: translateZ(3ch) rotateY(-15deg) scaleY(1.4);
   }
   & span:nth-child(14){
     transform: translateZ(3.3ch) rotateY(-15deg) scaleY(1.5);
   }
   & span:nth-child(15){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(16){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(17){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(18){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }
   & span:nth-child(19){
     transform: translateZ(3.5ch) rotateY(0deg) scaleY(1.75);
   }

   @keyframes spin{
     from{
       transform: rotateZ(0) rotateX(-90deg);
     }
      to{
       transform: rotateZ(0) rotateX(-54deg);
     }
   }
`