import styled from 'styled-components';

const FormularioFlex = styled.div`
   display : flex;
   align-items : center;
   justify-content: center;
   height : 100vh;
   background-image : url('image/bg-1.jpg');
   position : relative;

`;
const FormularioH1 = styled.h1`
   font-size: 2rem;
   display: bloc;
   position: absolute;
   top : 4rem;
   background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
   background-size: auto auto;
   background-clip: border-box;
   background-size: 200% auto;
   color: #fff;
   background-clip: text;
   text-fill-color: transparent;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   animation: textclip 2s linear infinite;
   display: inline-block;
   font-weight : 900;
   @media(min-width: 768px){
      font-size: 4rem;
      top : 1rem;
      @keyframes textclip {
         to {
           background-position: 200% center;
         }
   
   }

`;
const Formulario = styled.form`
   padding: 2rem;
   background: #DFE8F3;
   border: 1px solid #e2e2e2;
   box-shadow :-5px -3px 19px -8px;
   height : 300px;
   width: 100%;
   margin: 0 auto 3rem auto;
   display: flex;
   flex-direction: column;
   justify-content : center;
   background: linear-gradient(to right, #0b31f2 0%,  #01ff30 100%);
   border-radius: 6px;
   border:none;
   color : #fff;
   @media(min-width: 768px){
      width: 60%;
      animation: formAimation 3s ease;
      @keyframes formAimation{
         0%{
            opacity : 0;

         }
         100%{
            opacity : 1;
         }
      }

   }
   @media(min-width: 990px){
      width: 40%;
   }
 
`;

const Label = styled.label`
   display: block;

`;
const InputTexto = styled.input`
   width: 100%;
   padding: 0.8rem 0.4rem;
   border-radius: 5px;
   border: none;
   background : #e5e5e5;
   border : 1px solid #C9D3D7; 
`;
const InputSubmit = styled.button`
   color : #fff;
   padding: 0.5rem 0.2rem;
   border-radius: 5px;
   font-weight : 900;
   background : #08BDD6;
   margin-top : 2rem;
   border: none;
   text-transform : uppercase;
   &:hover{
      background : #0595A9;
      cursor: pointer;
   }
`;
const InputError = styled.span`
   color :red;
   font-weight: 700;

`;
const Barra = styled.div`
  display: flex;
  flex-direction:column-reverse;
  align-items : center ;
  margin-top : 1rem;
  background: linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%);
  @media(min-width: 768px){
   flex-direction : row;
   justify-content : space-around;
   background: #3f3d56;
   top: -1rem;
   position: fixed;
   width: 100%;
   transition: all 0.5s linear;
   z-index: 1;
   width: 100%;
   background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
   height : 100px;
   
  }
 
`;
const BarraNav = styled.div`
  display: flex;
  flex-direction : column;
  align-items : center;
  @media(min-width: 768px){
   flex-direction : row;
   column-gap : 1rem;
  }
`;
const BotonRandom = styled.button`
  background : #4F46E5;
  color : #fff;
  padding : 0.5rem;
  border : none;
  border-radius: 9px;
  font-weight : 900;
  &:hover{
   background : #3F38BE ;
   cursor: pointer;
   
  }
  @media(min-width: 768px){
   padding : 0rem 0.5rem;
   height : 35px;
  }
`;
const BotonBusqueda = styled.button`
  background : #4f46e5;
  padding : 0.2rem 0.5rem;
  border-radius: 5px;
  border : none;
  color :#fff;
  font-weight : 900;
  text-transform : uppercase;
  &:hover{
   background : #3F38BE ;
   cursor: pointer;
  }
 
`;
const BotonReset = styled.button`
  background: red;
  color : #fff;
  border: none;
  border-radius: 2px;
  cursor : pointer;
  padding : 0.2rem;
  
`;
const BarraBusqueda = styled.div`
  display:flex;
  column-gap : 0.5rem;
  @media(min-width: 768px){
   width : 35%;
  }
  @media(min-width: 990px){
   width : 50%;
  }
`;

const Imagen = styled.image`
   display: block;
   width: 200px;
   height : 400px;
   
`;


const PantallaFlex = styled.div`
   display: flex;
   justify-content: center;
   align-items : center;
   height: 80vh;
`;
const DivFlex = styled.div`
   display: flex;
   align-items :center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;
   width: 100%;
   @media(min-width: 768px){
      width: 70%;
      margin: 0 auto;
      flex-direction: row;
   }
`;


const Targeta = styled.div`
   position: relative;
   margin: 1rem auto;
   animation: personaje 3s ease;
   @keyframes personaje{
      0%{
         opacity: 0;

      }
      100%{
         opacity: 1;
      }
   }
   @media(min-width: 768px){
       width : 300px;
   }
   cursor: pointer;

  
`;
const BotonSesion = styled.button`
   margin-top : 1rem;
   border: none;
   width : 100%;
   background: #0866df;
   padding: 0.3rem 1rem;
   color : white;
   &:hover{
      background : #0877fe;
      cursor: pointer;
   }
`;
const ParrafoError = styled.p`
   text-align: center;
   color: red;

`;

const Sombra = styled.div`

   width: 90%;
   height: 300px;
   background: rgba(0, 0, 0, 0.2 );
   border-radius: 10px;



`;
const SombraImagen = styled.img`

   height: 300px;
   border-radius: 10px;
 

   
  
`;
const TextoPersonaje = styled.h2`
   color : #fff;
   font-size: 18px;
   font-weight: bold;
`;
const Boton = styled.button`
   background :#0586D5;
   border-radius: 10px;
   display: block;
   width: 90%;
   margin: 0.5rem auto 0 auto;
   padding-block: 0.5rem;
   border: none;
   color : #fff;
   text-transform: uppercase;
   font-weight: bold;
   &:hover{
      background #071187;
   }
   @media(min-width:768px){
      width: 100%;
     
   }
`;
const BotonDelete = styled.button`
   cursor : pointer;
   background :#C62903;
   border-radius: 10px;
   padding: 0.4rem;
   border: none;
   color : #fff;
   text-transform: uppercase;
   font-weight: bold;
   &:hover{
      background:#881B00;
   }
  
`;
const Contenedor = styled.div`
   display: grid;
   align-items: center;
   margin: 1rem auto;
   gap: 2rem;
   @media (min-width: 768px){
      grid-template-columns: repeat(2, 1fr);
      margin: 9rem auto;
      gap: 1rem;
    

   }
   @media(min-width: 990px){
      grid-template-columns: repeat(3, 1fr);
   
   }
   @media(min-width: 1200px){
      grid-template-columns: repeat(3, 1fr);
      width: 80%;
   
   }

`;


const DetalleMain = styled.div`
background: linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%);
padding-top: 5rem;
background-size: cover;
height : 100vh;

`;
const CardDiv = styled.div`
   border: 1px solid #C9D3D7;
   border-radius : 10px;
   height : 400px;
   position : relative;
   @media(min-width: 768px){
      height : 400px;
   }
`;
const BotonesDiv = styled.div`
   display : flex;
   align-items :flex-end;
   justify-content: space-around;
   position: absolute;
   top : 16.5rem;
   width : 100%;
   margin-top : 6rem;
   @media(min-width: 768px){
      margin-top : 8rem;
      top : 15rem;
   }

`;

const PersonajeNombre = styled.h2`
   font-size : 1rem;
   color : #fff;

`;
const PersonajeImage = styled.img`
   height : 300px;
   border-radius: 10px;
   max-width: 350px;
   width : 300px;
   @media(min-width: 768px){
      width : 300px;

   }
   @media(min-width: 1400px){
      width : 350px;

   }
`;
const BotonLike =  styled.button`
   margin: 0 auto;
   display: flex;
   
`;

const InputPersonaje = styled.input`
   padding: 0.5rem;
   border-radius: 10px;
   border: none;
   background: #E2E2E2;
   width: 50%;
   flex: 3;
  
`;

const BotonAdd = styled.button`
   padding: 0.5rem;
   border-radius: 10px;
   border: none;
   background : #1ED1A3;
   color : #fff;
   text-transform :uppercase;
   font-weight: bold;
   margin: 0 auto;
   flex: 1;
   &:hover{
      background : #0AAB81;
      cursor: pointer;
   }
`;

const Nagevacion = styled.div`
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   align-items: center;
   @media(min-width: 768px){
      width: 60%;
      margin: 1rem auto;
      flex-direction: row;
      justify-content: space-around;

   }

`;
const BotonNavegacion = styled.button `
   width: 100px;
   border: none;
   border-radius: 7px;
   border: 1px solid #12EAA2;
   text-transform : uppercase;
   margin-bottom: 1rem;
   text-align: center;
   font-size: 0.8rem;
   &:hover{
      background: #1AEAA5;
      color : #fff;
      cursor: pointer;
   }
   @media(min-width: 768px){
      
      flex-direction: row;
      padding : 0.5rem 1rem;
   }

`;
const  BotonLogout = styled.button`
      width: 100px;
   border: none;
   border-radius: 7px;
   border: 1px solid red;
   text-transform : uppercase;
   margin-bottom: 1rem;
   text-align: center;
   font-size: 0.8rem;
   &:hover{
      background: red;
      color : #fff;
      cursor: pointer;
   }
   @media(min-width: 768px){
      
      flex-direction: row;
      padding : 0.5rem 1rem;
   }
`;
const SideBar = styled.div`
   display:flex;
   justify-content: center;
   column-gap: 0.5rem;
   margin-top : 1rem;
   @media(min-width: 768px){

   

   }
`;

const SelectDiv = styled.div`
   margin-top : 1rem;
   @media(min-width: 768px){
      display : flex;
      margin-top : 10rem;
      align-items:center;
      justify-content: center;
      margin: 10rem auto -5rem auto;
      width : 200px;
      column-gap : 1rem;
   }
`;
const Select = styled.select`
   border: 1px solid #12EAA2;
   border-radius: 4px;
   &:hover{
   
      cursor: pointer;
   }
`;
const BotonTodos = styled.button`
   border: 1px solid #2775D9;
      border-radius: 4px;
   &:hover{
      background: #2775D9;
      color : #fff;
      cursor: pointer;
   }
`;
const DetallePersonaje = styled.div `

   display:flex;
   align-items : center;
   justify-content: center;
   gap: 2rem;
   padding : 2rem;
   border: 1px solid #e2e2e2;
   border-radius: 7px;
   background :  #E7EDF5;
   flex-direction: column;
   @media(min-width: 768px){
      box-shadow :4px 7px 19px -8px;
      flex-direction: row;
      width: 50%;
      margin : 10rem auto 0 auto;
   }
`;
const DetalleImagen = styled.img`
   max-width : 400px;
   width: 250px;
   margin :  0 auto;
   border-radius: 7px;
   @media(min-width: 768px){
       width: 300px;
   }
   @media(min-width: 990px){
       width: 400px;
   }
`;
const DetalleInfo = styled.div`
   display : flex;
   flex-direction : column;
   align-items : center ;
   justify-content: center;
   max-width : 500px;
   width: 300px;
   line-height: 0.1rem;

  
`;
const DetalleParrafo = styled.p`
   max-width : 300px;
   width: 120px;
   @media(min-width: 990px){
      width: 200px;
   }
`;
const AboutContainer = styled.div`
   background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);

   background-size : cover;
   height: 90vh;
   padding: 5rem 0;
`;
const AboutInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content:center;
   width: 60%;
   margin:0 auto;

`;
const AboutGrid = styled.div`
   display: grid;
   align-items: center;
   border: 1px solid #e2e2e2;
   padding: 1rem;
   box-shadow: 4px 7px 19px -8px;
   column-gap: 2rem;
   @media(min-width: 768px){
      grid-template-columns : repeat(2, 1fr);
      animation: card 3s ease;
      @keyframes card{
         0%{
            opacity: 0;

         }
         100%{
            opacity 1;
         }
      }
   }

`;
const AboutParrafo = styled.p`
   line-height: 1.3rem;
   color : #fff;
  text-align: center;
   @media(min-width: 990px){
       line-height: 1.8rem;
   }
`;
const AboutTitulo = styled.h1`
 
  color: #fff;
  text-align: center;
`;
const AboutImage = styled.img`
  max-width: 500px;
  width: 300px;
`;
export {
   Targeta,
   Sombra,
   SombraImagen,
   Boton,
   BotonAdd,
   Contenedor,
   CardDiv,
   InputPersonaje,
   Barra,
   BarraNav,
   BotonRandom,
   DetalleMain,
   BotonBusqueda,
   BotonesDiv,
   BarraBusqueda,
   BotonReset ,
   TextoPersonaje,
   BotonDelete,
   Nagevacion,
   BotonNavegacion,
   SideBar,
   SelectDiv,
   Select,
   BotonTodos,
   DetallePersonaje,
    BotonLogout,
    Label,
    InputTexto,
   PantallaFlex,
   Formulario,
    Imagen ,
    DivFlex,
    BotonSesion,
    ParrafoError,
    AboutInfo,
   AboutGrid,
   AboutParrafo,
   AboutTitulo,
    AboutContainer,
   BotonLike,
   DetalleImagen,
    DetalleInfo ,
    DetalleParrafo,
    FormularioFlex,
    InputSubmit,
    InputError,
    FormularioH1 ,
    PersonajeNombre,
    PersonajeImage,
    AboutImage
   

};
//En el curso de react native, enseñán todo lo relacionado con asyncStorage ?