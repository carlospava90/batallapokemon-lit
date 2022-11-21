import {css} from 'lit-element';

export const nuevabatallastyles=css`
#contenido-seleccion{
   display:flex;
   flex-direction:column;
   /* color:red; */
   border:ridge;
   height:50%;
   width:100%

}
#container-batalla-ganador{

   height:80%;
   width:100%;

}
#container-titulo{
   display:flex;
   justify-content:center;
   height:20%;
}
#container-ganador-img-p{
   display:flex;
  justify-content:space-around;
   height:80%;
}
#container-img-ganador{
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   border:ridge;
   border-radius:1em;
   width:70%;
}
#img-ganador{
width:100%;
}
#container-p-ganador{
   display:flex;
   align-items:center;
   /* justify-items:center; */
}
#p-ganador{
   text-align:center;
}
#container-boton-batalla-nueva{
   padding:1em;
   display:flex;
   justify-content:center;
   height:20%;
   width:95%;
}
#boton-batalla-nueva{
   
   width:95%;
}
`;