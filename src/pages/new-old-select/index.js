import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../components/button/index";

function NewOld(props) {
  return (
    <div className="justify-content-center">
      <div>
        <button class="btn btn-info my-1 mx-1" onClick={() => props.setNewGame(true)}>New Game</button>
      </div>
      <div>
        <button class="btn btn-info my-1 mx-1" onClick={() => props.setNewGame(false)}>Old Games</button>
      </div>
    </div>
  );
}

export default NewOld;
