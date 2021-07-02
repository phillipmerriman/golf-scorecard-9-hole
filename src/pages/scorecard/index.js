import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScorecardRow from "../../components/scorecardRow";

function Scorecard(props) {
  

  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <div>
      <table className="table table-bordered table-sm mx-2 my-2">
      <thead>
          <tr>
            <th scope="col">Hole</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <ScorecardRow />
      </table>
    </div>
  );
}

export default Scorecard;
