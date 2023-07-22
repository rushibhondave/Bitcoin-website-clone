import React from "react";
import { Link } from "react-router-dom";
function ErrorCompoent() {
  return (
    <div className="Error">
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="text-center">
                <div className="four_zero_four_bg"></div>
                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <p className="W1">The page you are looking for not avaible!</p>
                  <Link to={"/"} className="link_404">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorCompoent;
