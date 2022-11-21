import {css} from 'lit-element';

export const dmbatallastyle= css`
*{
    box-sizing:border-box;
}

 h1{
    font-family:Impact;
    text-align:center;
 }
 #container{
  align-content:center;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  border-bottom:1px solid black;
  padding:1em;
 }

#container-pokemones{
   border:1px solid gray;
   border-radius:1em; 
   height:100%;
   /* height:600px; */
   width:45%
}
#container-batallas{
  display:flex;
  /* flex-wrap:wrap; */
  flex-direction:column;
  /* border:solid; */
  border-radius:1em; 
  height:100%;
  width:45%
}
/* #container-batallafront{
}
#container-nuevabatallafront{
} */
@media (max-width: 600px) {
  #container-pokemones {
    width: 100%;
  }
  #container-batallas {
    margin:1em;
    width: 100%;
  }
}
`;