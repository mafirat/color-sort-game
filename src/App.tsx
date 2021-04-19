import React from "react";
import "./styles/site.css";
// import { Demo } from "./components/Demo";
import { Tube } from "./components/Tube";
function App() {
  // return <Demo/>
  return (
    <div>
      <div className="game-area">
        <Tube />
        <Tube />
        <Tube />
        <Tube />
      </div>
    </div>
  );
}

export default App;
