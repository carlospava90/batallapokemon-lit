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
  border-bottom:1px solid black
 }

#container-pokemones{
   border:solid; 
   color:red;
  width:45%
}
#container-batallas{
  border:solid;
  color:green;
  width:45%
}

`;