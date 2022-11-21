import {css} from 'lit-element';
export const batallastyles= css`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
img{
    width:150px;
    height:150px;
}
#container-pokemones-seleccionados{
    border:ridge;
    padding:5px;
    display:flex;
  
    flex-direction:column;
    justify-content:center;
    
}
#contenido-pokemones{
    display:flex;
    flex-direction:row;
    justify-content:space-around; 
    width:100%;
    height:70%;

}

#seleccion-pokemon-uno{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:1em;
    width:48%;
    height:100%;

}
#container-img-seleccion-batalla-pokemon1{
    display:flex;
    margin:5px;
    justify-content:center;
    border:ridge;
    width:65%;
    height:60%;
}
#container-p-seleccion-pokemon1{
    width:60%;
}

#img-seleccion-batalla-pokemon1{
    height:100%; 
    width:100%
}
#p-seleccion-pokemon1{
    text-align:center;
    width:100%;
}
#seleccion-pokemon-dos{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* border:ridge; */
    border-radius:1em;
    width:48%;
    height:100%;
}
#container-img-seleccion-batalla-pokemon2{
    display:flex;
    margin:5px;
    justify-content:center;
    border:ridge;
    width:65%;
    height:60%;
}
#container-p-seleccion-pokemon2{
    width:60%;
}

#img-seleccion-batalla-pokemon2{
    height:100%; 
    width:100%
}
#p-seleccion-pokemon2{
    text-align:center;
    width:100%;
}

#container-boton-batalla{
    padding:1em;
    display:flex;
    justify-content:center;
    height:20%;
    width:100%
}

#boton-batalla-empezar{
    width:95%
}
`;