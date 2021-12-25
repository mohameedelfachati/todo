import "./App.css";
import AddTodoCm from "./app/AddTodoCm";
import Poste from "./app/Poste/Poste";
import Header from "./header/Header";
import Sidebare from "./sidebare/Sidebare";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_content">
        <Sidebare />
        <div className="inner_app_content">
          <AddTodoCm />
          <Poste />
        </div>
      </div>
    </div>
  );
}

export default App;
