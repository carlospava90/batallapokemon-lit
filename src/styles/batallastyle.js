import {css} from 'lit-element';
export const batallastyles= css`
*{
    box-sizing:border-box;
}
#container-pokemones-seleccionados{
    border:solid;
    color:blue;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
}
#contenido-pokemones{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    border:solid;
}
.img-seleccion-batalla{
    border:solid;
    color:purple;
    width:95%;
}
#seleccion-pokemon-uno{
    border:solid;
    width:45%;

}
#seleccion-pokemon-dos{
    border:solid;
    width:50%;
}
 
`;