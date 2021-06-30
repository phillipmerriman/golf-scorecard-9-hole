import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Scorecard() {
  const [totalScore1, setTotalScore1] = useState(0);

  const [totalScore2, setTotalScore2] = useState(0);

  const [totalScore3, setTotalScore3] = useState(0);

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
              <input type="text" id="name1hole1" onBlur={e => setTotalScore1(e.target.value)}></input>
            </td>
            <td>
              <input type="text" id="name1hole2" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole3" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole4" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole5" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole6" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole7" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole8" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name1hole9" onBlur={e => setTotalScore1(parseInt(totalScore1) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <span>{totalScore1}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Name 2</th>
            <td>
              <input type="text" id="name2hole1" onBlur={e => setTotalScore2(e.target.value)}></input>
            </td>
            <td>
              <input type="text" id="name2hole2" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole3" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole4" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole5" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole6" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole7" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole8" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name2hole9" onBlur={e => setTotalScore2(parseInt(totalScore2) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <span>{totalScore2}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Name 3</th>
            <td>
              <input type="text" id="name3hole1" onBlur={e => setTotalScore3(e.target.value)}></input>
            </td>
            <td>
              <input type="text" id="name3hole2" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole3" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole4" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole5" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole6" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole7" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole8" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
            </td>
            <td>
              <input type="text" id="name3hole9" onBlur={e => setTotalScore3(parseInt(totalScore3) + parseInt(e.target.value))}></input>
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
