import "./App.css";
import { Grid } from "./components/grid";

const NUM_CELLS = 144;

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header role="banner">
        <h1>Multiplication App</h1>
      </header>
      <main role="main">
        <Grid numCells={NUM_CELLS} />
      </main>
    </div>
  );
};

export default App;
