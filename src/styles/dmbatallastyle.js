import {css} from 'lit-element';

export const dmbatallastyle= css`
*{
    box-sizing:border-box;
}
img{
  width:150px;
  height:150px;
}
 h1{
    font-family:Impact;
    text-align:center;
 }
 #container{
  border:ridge;
 }
 #container-contenido{
  align-content:center;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  border-bottom:1px solid black;
  padding:1em;
 }

#container-pokemones{
  display:flex;
  flex-direction:column;
   border:solid gray;
   border-radius:1em; 
   height:100%;
   width:48%
}
#container-listapokemon{
  display:flex;
  color:green;
  flex-direction:column;
}

#container-batallas{
  display:flex;
  flex-direction:column;
  border-radius:1em; 
  height:100%;
  width:45%
}

@media (max-width: 800px) {
  #container-pokemones {
    width: 100%;
  }
  #container-batallas {
    margin:1em;
    width: 100%;
  }
}

`;