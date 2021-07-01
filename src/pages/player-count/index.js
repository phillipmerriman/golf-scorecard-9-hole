import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PlayerCount(props) {
  return (
    <div className="justify-content-center">
      <p className="my-1 mx-1">How Many Players?</p>
      <select class="form-control my-1 mx-1">
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
          onClick={() => console.log("Submit Clicked!!!!!!!!!!!!!!")}
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
