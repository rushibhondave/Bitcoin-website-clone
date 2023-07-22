import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faLaptopCode,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import Mining from "../Img/Hidden mining-bro.svg";
import Bitcoin from '../Img/Bitcoin-cuate.svg'
import Touch from "../Img/Touch.svg";
import { Link } from "react-router-dom";

function HomePage() {
  function Click() {
    alert("Thannks for Filling");
    
  }

  return (
    <>
      {/* ***************************  Intro ******************************** */}
      <main id="Home">
        <p className="Head">
          Bitcoin is an innovative payment <br /> network and a new kind of
          money.
        </p>
        <div className="Box">
          <Link to={"/ExchangeCoin"}>
            <button className="Box1">Get started with Bitcoin</button> &nbsp;
          </Link>
          <Link to={"/Walet"}>
            <button className="Box2">Choose the Wallet</button> &nbsp;
          </Link>
          <Link to={"/ExchangeCoin"}>
            <button className="Box3">Buy Bitcoin</button>
          </Link>
        </div>
        <div className="Playbutton">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="fa-bounce"
            size="2xl"
          />
          <button className="Playbutton1">
            <a href="https://youtu.be/Gc2en3nHxA4" target="_blank">
              What is Bitcoin ?
            </a>
          </button>
        </div>
      </main>
      {/* ***************************  IMG ******************************** */}
      <section >
        <div className="Img">
          <h3 className="h3">Get a quick overview for</h3>

          <div className="Cards">
            <div className="Card1">
              <FontAwesomeIcon
                icon={faUser}
                className="fa-bounce"
                size={"2xl"}
              />
              <div className="right1">
                <h5>Individuals</h5>
                <button className="learn">
                  <Link to="https://developer.bitcoin.org/">Learn more</Link>
                </button>
              </div>
            </div>

            <div className="Card2">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="fa-bounce"
                size="2xl"
              />{" "}
              <div className="right1">
                <h5>Businesses</h5>
                <button className="learn">
                  {" "}
                  <Link to="https://developer.bitcoin.org/">Learn more</Link>
                </button>
              </div>
            </div>

            <div className="Card3">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="fa-bounce"
                size="2xl"
              />{" "}
              <div className="right1">
                <h5>Developers</h5>
                <button className="learn">
                  {" "}
                  <Link to="https://developer.bitcoin.org/">Learn more</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***************************  About ******************************** */}
      <section>
        <div className="explain">
          <h2 className="h22">Get started with Bitcoin</h2>
           <div className="node"></div>
          <div className="Mining1">
            <img src={Mining} alt="" className="Mining " />
          </div>
          <div className="Text">
            <h4 className="aboutpara">
              Bitcoin uses peer-to-peer technology to operate with no central
              authority or banks; <br />
              managing transactions and the issuing of bitcoins is carried out
              collectively by the network. <br />
              <b className="Javafullstack">
                Bitcoin is open-source; its design is public, nobody owns or
                controls Bitcoin and everyone can take part
              </b>
              . <br /> Through many of its unique properties, Bitcoin allows
              exciting uses that could not be covered by any previous payment
              system.
            </h4>
          </div>
        </div>
      </section>

      {/*  get start button  */}
      <div className="startbutton">
        <Link to={"/ExchangeCoin"}>
          <button className="startbutton1">Get started with Bitcoin</button>
        </Link>
      </div>

      {/*  get start button  */}

      <footer>
        <div className="img11">
          <img src={Touch} alt="" className="img1" />
        </div>
        <div className="login-box">
          <form>
            <div className="user-box">
              <input type="text" name="" required />
              <label>First Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Last Name</label>
            </div>
            <div className="user-box">
              <input type="email" name="" required />
              <label>Email</label>
            </div>
            <center onClick={Click}>
              <Link> Connect me</Link>
              <span />
            </center>
          </form>
        </div>
        <div className="connect">
          <Link to={"/Connect"}>
            <button className="connect1">Connect with me</button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
