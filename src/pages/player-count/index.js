import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PlayerCount(props) {
  const [playerCount, setPlayerCount] = useState(2);

  return (
    <div className="justify-content-center">
      <p className="my-1 mx-1">How Many Players?</p>
      <select class="form-control my-1 mx-1" id="player-count">
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <div>
        <button
          class="btn btn-info my-1 mx-1"
          onClick={() =>
            setPlayerCount(parseInt(document.querySelector("#player-count").value))
          }
        >
          Submit
        </button>
        <button
          class="btn btn-info my-1 mx-1"
          onClick={() => props.setNewGame(false)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PlayerCount;
