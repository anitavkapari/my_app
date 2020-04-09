import React from 'react';  
import Homepage from './Homepage'

function WelcomeText() {
	  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';

  return (
  <div>
  <div className="center">
      <img className="item" src={url} style={{width: 30,height:30}} />
	        <img className="item" src={url} style={{width: 30,height:30,marginLeft:100}} />

      <img className="item" src={url} style={{width: 30,height:30,marginLeft:100}} />
      <img className="item" src={url} style={{width: 30,height:30,marginLeft:100}} />

        </div>
		
		<div className="center">
      <p >Welcome</p>
      <p style = {{marginLeft:60}}>Welcome</p>
      <p style = {{marginLeft:60}}>Welcome</p>
      <p style = {{marginLeft:60}}>Welcome</p>

        </div>
<div style={{backgroundColor:'#346eeb'}}>

        </div>

        </div>
  );
}

export default WelcomeText;