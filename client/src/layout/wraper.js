import styled from "styled-components";

const Wraper = styled.div`
   height: 100%;
   width: 100%;
   background: linear-gradient(180deg, #04fafd, 5%, #119dff, 50%, #030423);
   position: absolute;

 
`;
const WraperDiv = styled.div`
   height: 60px;
   width: 60px;
   border: 2px solid rgba(255, 255, 255, 0.7);
   border-radius: 50px;
   position: absolute;
   top: 10%;
   left: 10%;
   animation: 4s linear infinite;
   &:nth-child(1) {
      top: 20%;
      left: 20%;
      animation: animate 8s linear infinite;
    }
   &nth-child(2) {
      top: 60%;
      left: 80%;
      animation: animate 10s linear infinite;
   }
   &:nth-child(3) {
      top: 40%;
      left: 40%;
      animation: animate 3s linear infinite;
   }
   &:nth-child(4) {
      top: 66%;
      left: 30%;
      animation: animate 7s linear infinite;
    }
    &:nth-child(5) {
      top: 90%;
      left: 10%;
      animation: animate 9s linear infinite;
    }
    &:nth-child(6) {
      top: 30%;
      left: 60%;
      animation: animate 5s linear infinite;
    }
    &:nth-child(7) {
      top: 70%;
      left: 20%;
      animation: animate 8s linear infinite;
    }
    &:nth-child(8) {
      top: 75%;
      left: 60%;
      animation: animate 10s linear infinite;
    }
    &:nth-child(9) {
      top: 50%;
      left: 50%;
      animation: animate 6s linear infinite;
    }
    &:nth-child(10) {
      top: 45%;
      left: 20%;
      animation: animate 10s linear infinite;
    }
    &:nth-child(11) {
      top: 10%;
      left: 90%;
      animation: animate 9s linear infinite;
    }
    &:nth-child(12) {
      top: 20%;
      left: 70%;
      animation: animate 7s linear infinite;
    }
    &:nth-child(13) {
      top: 20%;
      left: 20%;
      animation: animate 8s linear infinite;
    }
    &:nth-child(14) {
      top: 60%;
      left: 5%;
      animation: animate 6s linear infinite;
    }
    &:nth-child(15) {
      top: 90%;
      left: 80%;
      animation: animate 9s linear infinite;
    }
    @keyframes animate {
      0% {
        transform: scale(0) translateY(0) rotate(70deg);
      }
      100% {
        transform: scale(1.3) translateY(-100px) rotate(360deg);
      }
`;
const WraperDot = styled.span`

`;
export {
    Wraper,
    WraperDiv,
    WraperDot
}
