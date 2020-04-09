import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage'
import WelcomeText from './components/WelcomeText'
import Footer from './components/Footer'


class App extends Component {
  render() {
	   const fruitListarray =[
                {
                id:1,
                img:'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ',
                work:'Apple',
            },
            {
              id:1,
              img:'https://www.hindimeaning.com/wp-content/uploads/2012/12/carrots-vegetables.jpg',
              work:'Carrot',
          },
          {
              id:1,
              img:'https://www.organicfacts.net/wp-content/uploads/2013/05/Vegetables4.jpg',
              name:'fruits',
              work:'fruit',
          },
          
          ]
		  
    return (
      <React.Fragment>
        <Navbar />
		<Homepage />
		<WelcomeText />
  		<Footer />

      </React.Fragment>
    );
  }
}


export default App;
