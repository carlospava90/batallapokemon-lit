import {css} from 'lit-element';

export const barranavegadorastyle= css`

#container-nav{
display:flex;
}
#nav-listapokemon{
	padding:0;
	margin:5px;
	display:flex;
	justify-content:space-around;
	height:100%;
	width:100%;
}

#ul-nav{
	padding:0;
	margin:0;
	list-style:none;
	display:flex;
	justify-content:center;
	
}

	
a {
		display: flex;
	    border:ridge;
    	border-radius:1em;
		padding: 10px;
		text-decoration: none;
		color: grey;
	}

`;