import {css} from 'lit-element';
export const batallastyles= css`
*{
    box-sizing:border-box;
}
#container-pokemones-seleccionados{
    /* border:ridge; */
    border-radius:1em;
    /* color:blue; */
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    
}
#contenido-pokemones{
    /* padding:1em; */
    /* margin:1em; */
    display:flex;
    flex-direction:row;
    justify-content:space-around; 

    width:100%;
    height:80%;
    /* flex-wrap:wrap; */
    /* border:solid; */
    /* color:yellow; */
}

#seleccion-pokemon-uno{
    display:flex;
    flex-direction:column;
    justify-content:center;
    /* padding:1em; */
    border:ridge;
    width:45%;

}
#container-img-seleccion-batalla-pokemon1{
    border:ridge;
    display:flex;
    justify-content:center;
    width:100%;
    height:80%;
}
#container-p-seleccion-pokemon1{
    /* border:solid; */
    height:20%;
}

#img-seleccion-batalla-pokemon1{
    /* height:100px; */

    height:100%; 
    width:100%
}
#p-seleccion-pokemon1{
    /* border:solid; */
    width:80%;
    height:20%;
}
#seleccion-pokemon-dos{
    display:flex;
    flex-direction:column;
    justify-content:center;
    border:ridge;
    width:45%;
}
#container-img-seleccion-batalla-pokemon2{
    border:ridge;
    display:flex;
    justify-content:center;
    width:100%;
    height:80%;
}
#container-p-seleccion-pokemon2{
    /* padding:1em; */
    /* border:solid; */
    height:20%;
}

#img-seleccion-batalla-pokemon2{
    /* border:solid; */
    height:100%;
    width:100%
}
#p-seleccion-pokemon2{
    /* border:solid; */
    width:80%;
    height:100%;
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