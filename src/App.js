import Grid from "./components/grid";
import ResetButton from "./components/resetButton";
import PlayerTurn from "./components/playerTurn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PlayerTurn />
      <Grid />
      <ResetButton />
    </div>
  );
}

export default App;
