import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NewOld(props) {
  return (
    <div className="justify-content-center">
      <div>
        <button
          class="btn btn-info my-1 mx-1"
          onClick={() => props.setNewGame(true)}
        >
          New Game
        </button>
      </div>
      <div>
        <button
          class="btn btn-info my-1 mx-1"
          onClick={() => console.log("Old Games Clicked!!!!!!")}
        >
          Old Games
        </button>
      </div>
    </div>
  );
}

export default NewOld;
