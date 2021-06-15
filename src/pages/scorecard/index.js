import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Scorecard() {
  let [totalScore1, setTotalScore1] = useState(0);

  function addToTotal1(e) {
    let holeScore = parseInt(e.holeScore);
    let total = parseInt(totalScore1);

    setTotalScore1(total + holeScore);
    console.log(e);
  }

  let [totalScore2, setTotalScore2] = useState(0);

  function addToTotal2(e) {
    setTotalScore2(totalScore2 = parseInt(totalScore2) + parseInt(e.holeScore));
  }

  let [totalScore3, setTotalScore3] = useState(0);

  function addToTotal3(e) {
    setTotalScore3(totalScore3 = parseInt(totalScore3) + parseInt(e.holeScore));
  }

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
        <tbody>
          <tr>
            <th scope="row">Name 1</th>
            <td>
              <input type="text" id="name1hole1" onChange={e => setTotalScore1(e.target.value)}></input>
            </td>
            <td>
              <input type="text" id="name1hole2" onChange={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole3" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name1hole4" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name1hole5" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name1hole6" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name1hole7" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name1hole8" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name1hole9" onChange={(e) => addToTotal1({ ...totalScore1, holeScore: e.target.value })}></input>
            </td>
            <td>
              <span>{totalScore1}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Name 2</th>
            <td>
              <input type="text" id="name2hole1" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole2" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole3" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole4" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole5" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole6" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole7" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole8" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name2hole9" onChange={(e) => addToTotal2({ ...totalScore2, holeScore: e.target.value })}></input>
            </td>
            <td>
              <span>{totalScore2}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Name 3</th>
            <td>
              <input type="text" id="name3hole1" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole2" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole3" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole4" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole5" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole6" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole7" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole8" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <input type="text" id="name3hole9" onChange={(e) => addToTotal3({ ...totalScore3, holeScore: e.target.value })}></input>
            </td>
            <td>
              <span>{totalScore3}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scorecard;
