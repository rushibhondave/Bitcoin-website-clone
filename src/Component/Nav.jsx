import React from "react";
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <>
      <header>
        <nav>
          <div className="cotainer">
            <ul>
              <div className="selectedLink">
                <div className="side left" />
                <div className="side right" />
                <div className="outside left" />
                <div className="outside right" />
                <div className="dot" />
              </div>
            
              <li className="home">
                <Link to={"/"} className="Link">Home</Link>
              </li>
              <Link className="home">|</Link>
              <li>
                <Link to={"/AllCoin"} className="Link">Coins</Link>
              </li>
              |
              <li>
              <Link to={"/ExchangeCoin"} className="Link">Exchange</Link>
              </li>
              |
              <li>
                <Link to={"/Subcoin"} className="Link Subcoins">Subcoins</Link>
              </li>
              |
              <li className="joinme">
                <Link to={"/Connect"}className="Link">Join</Link>
              </li>
            </ul>
          </div>
        </nav>

        
      </header>
    </>
  );
}

export default Nav;
