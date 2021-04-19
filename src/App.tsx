import React from "react";
import "./styles/site.css";
// import { Demo } from "./components/Demo";
import { Tube } from "./components/Tube";
import { IBlockItem } from "./interfaces";
const itemSet: IBlockItem[] = [
  {
    id: 1,
    color: "blue",
    order: 3,
  },
  {
    id: 2,
    color: "blue",
    order: 2,
  },
  {
    id: 3,
    color: "red",
    order: 1,
  },
  {
    id: 4,
    color: "red",
    order: 4,
  },
];
function App() {
  // return <Demo/>
  return (
    <div className="container">
      <div className="game-area">
        <Tube items={itemSet} />
      </div>
    </div>
  );
}

export default App;
