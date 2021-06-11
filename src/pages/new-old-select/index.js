import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../components/button/index";

function NewOld() {
  return (
    <div className="justify-content-center">
      <div>
        <Button text="New Game" />
      </div>
      <div>
        <Button text="Old Games" />
      </div>
    </div>
  );
}

export default NewOld;
