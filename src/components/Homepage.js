import React from 'react';  
import logo from "../logo.svg";

function Homepage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
  <div >
      <img src={url} style={{width: '100%',height:500}} />
      <p style = {{textAlign:'center'}}className="tc" >Welcome to spa Lab</p>
	    <div className="center">
			
      <p className="item">--------</p>
 <h1 style = {{marginTop:5,
				backgroundImage: 'url('+ logo +')'
			}}className="menu__logo">f</h1>

      <p className="item">--------</p>

        </div>

	        <p style = {{textAlign:'center',fontFamily:'cursive'}}>Experiance the Art of carying</p>

        </div>
  );
}

export default Homepage;