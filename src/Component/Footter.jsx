import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import facebook from "../Img/facebook.svg";
import github from "../Img/github.svg";
import linkedin from "../Img/linkedin.svg";


function Footter() {
  return (
    <>
      <div className="Mainfooter">
        <div className="footer-content">
          <h3>@Rushi_Bhondave</h3>
          <p>
            HI! I am a{" "}
            <b className="Javafullstack ">Java full-stack developer. </b> I'm an
            aesthetic junkie with an obsession for details who believes in the
            power of simplicity. and I'm here to encourage you to keep going for
            your ambition.
          </p>
          <ul className="socials">
            <li>
              <Link to="https://www.facebook.com/rushikesh.bhondave.9">
                <img  src={facebook}  className="logo fb" alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/rushibhondave">
                <img src={github} alt=""  className="logo git"/>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/rushikesh-bhondave">
                <img src={linkedin} alt="" className="logo linkk"  />
              </Link>
            </li>

          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © <span id="year" /> 2023
            <Link to="">@Rushi_Bhondave</Link>{" "}
          </p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <Link to={""}>Home</Link>
              </li>
              <li>
                <Link to={"/Connect"} className="Link">
                  Join me{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footter;
