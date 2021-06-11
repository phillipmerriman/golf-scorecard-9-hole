import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../components/button";

function PlayerCount() {
  return (
    <div>
      <p>How Many Players?</p>
      <select class="form-control">
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
      <div>
        <Button text="Submit" />
      </div>
    </div>
  );
}

export default PlayerCount;
