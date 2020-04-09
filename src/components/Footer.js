import React from 'react';  
import logo from "../logo.svg";

function Footer() {
	  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';

  return (
<div style={{height:'100%',backgroundColor:'#346eeb'}}>
    
 <p style = {{textAlign:'center'}}className="tc" >Special Gift & Cards</p>
	    <div className="center">
		
      <p className="item">--------</p>
 <h1 style = {{marginTop:5,
				backgroundImage: 'url('+ logo +')'
			}}className="menu__logo">f</h1>

      <p className="item">--------</p>

        </div>

	        <p style = {{textAlign:'center',fontFamily:'cursive'}}>Easy to give Delicious to enjoy</p>
	   
	   <div className="center">
   <div style={{backgroundColor:'#f0f1f2',
height:250,width:200,marginBottom:20,padding:10}}>
      <p className="center">$40000</p>
      <img className="item" src={url} style={{width: 180,height:90}} />
      <p className="center">Orchid</p>
                  <button style={{backgroundColor:'#346eeb',marginLeft:60}}onClick={()=> this.namechange()}>Select</button>

        </div>
		
		<div style={{backgroundColor:'#f0f1f2',
height:250,width:200,marginBottom:20,marginLeft:20,padding:10}}>
      <p className="center">$40000</p>
      <img className="item" src={url} style={{width: 180,height:90}} />
      <p className="center">Orchid</p>
                  <button style={{backgroundColor:'#346eeb',marginLeft:60}}onClick={()=> this.namechange()}>Select</button>

        </div>
		<div style={{backgroundColor:'#f0f1f2',
height:250,width:200,marginBottom:20,marginLeft:20,padding:10}}>
      <p className="center">$40000</p>
      <img className="item" src={url} style={{width: 180,height:90}} />
      <p className="center">Orchid</p>
                  <button style={{backgroundColor:'#346eeb',marginLeft:60}}onClick={()=> this.namechange()}>Select</button>

        </div>
		<div style={{backgroundColor:'#f0f1f2',
height:250,width:200,marginBottom:20,marginLeft:20,padding:10}}>
      <p className="center">$40000</p>
      <img className="item" src={url} style={{width: 180,height:90}} />
      <p className="center">Orchid</p>
                  <button style={{backgroundColor:'#346eeb',marginLeft:60}}onClick={()=> this.namechange()}>Select</button>

        </div>
        </div>


        </div>
  );

}

export default Footer;