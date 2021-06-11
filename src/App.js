import "./App.css";
import Header from "./components/header/index";
import NewOld from "./pages/new-old-select";
import PlayerCount from "./pages/player-count";
import Scorecard from "./pages/scorecard";

function App() {
  return (
    <div>
      <Header />
      <NewOld />
      <PlayerCount />
      <Scorecard />
    </div>
  );
}

export default App;
