import React from "react";
import Wallet from "../Img/Wallet-women.svg";
import { Link } from "react-router-dom";

function Walet() {
  return (
    <>
      <div className="walletheader">
        <h1 className="heading">Choose your Bitcoin wallet.....!</h1>
      </div>

      <section className="CardPhoto">
        <img src={Wallet} alt="" className="card_Women" />
        <div className="Card_Info1">
          <h3 className="word">Let's help you find a bitcoin wallet.</h3>{" "}
        
        </div>

        <div className="Card_Info2">
          <Link to={"/homee"}>
            <button className="Button1">Next</button>
           
          </Link>

        </div>
      </section>
    </>
  );
}

export default Walet;
