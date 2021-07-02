import React, { useState } from "react";

function ScorecardRow() {
  const [totalScore, setTotalScore] = useState(0);

  return (
    <>
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>
            <input
              type="text"
              id="name1hole1"
              onBlur={(e) => setTotalScore(e.target.value)}
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole2"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole3"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole4"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole5"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole6"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole7"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole8"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <input
              type="text"
              id="name1hole9"
              onBlur={(e) =>
                setTotalScore(parseInt(totalScore) + parseInt(e.target.value))
              }
            ></input>
          </td>
          <td>
            <span>{totalScore}</span>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default ScorecardRow;
