import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/index";
import NewOld from "./pages/new-old-select";
import PlayerCount from "./pages/player-count";
import Scorecard from "./pages/scorecard";

function App() {
  const [newGame, setNewGame] = React.useState(false);

  return (
    <div className="bg-success">
      <Header />
      <div className="row">
        <div className="row">
          <div className="col-md-5"></div>
        </div>
        {newGame ? (
          <PlayerCount setNewGame={setNewGame} />
        ) : (
          <NewOld setNewGame={setNewGame} />
        )}
        {/* <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-3">
            <PlayerCount />
          </div>
        </div>
        <Scorecard /> */}
      </div>
    </div>
  );
}

export default App;
