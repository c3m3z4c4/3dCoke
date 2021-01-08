import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 100px);
  transform: perspective(1000px) rotateY(-45deg);
  width: 200px;
  height: 300px;
  transform-style: preserve-3d;
`
export const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: animate 5s linear infinite;
`
export const SpinnerElement = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #f1f1f1, #bbb, #f1f1f1);
  border-radius: 20px;
  &:nth-child(1) {
    transform: rotateX(0deg);
  }
  &:nth-child(2) {
  transform: rotateX(45deg);
  }
  &:nth-child(3) {
  transform: rotateX(-45deg);
  }
  &:nth-child(4) {
    transform: rotateX(90deg);
  }
  @keyframes animate{
    0%{
      transform: perspective(1000px) rotateX(0deg);
    }
    
    100%{
      transform: perspective(1000px) rotateX(359deg);
    }
  }
`




