/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img
            src="https://i.pinimg.com/474x/e7/d1/ea/e7d1eaf746a2e1094815e36afe960513.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          GOLF SCORECARD
        </a>
      </nav>
    </div>
  );
}

export default Header;
