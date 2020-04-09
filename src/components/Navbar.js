import React, { Component } from "react";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
	
 <nav style={{height: 70,backgroundColor:'#03b6fc'}} className="menu__link navbar-dark px-sm-5">
 <h1 style = {{
				backgroundImage: 'url('+ logo +')'
			}}className="menu__logo">Epic Co.</h1>

            <div className="menu__right">
 <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">HOME</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">HEADERS</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">PAGES</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">BLOGS</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">GALLERY</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">SHORTCODES</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">SHOP</a></li>
					<li className="menu__list-item"><a className="menu__link" href="#">RESERVATIONS</a></li>
                </ul>
              
            </div>
        </nav> 

    );
  }
}



// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
