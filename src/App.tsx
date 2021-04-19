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
    tube: 1,
  },
  {
    id: 2,
    color: "blue",
    order: 2,
    tube: 1,
  },
  {
    id: 3,
    color: "red",
    order: 1,
    tube: 1,
  },
  {
    id: 4,
    color: "red",
    order: 4,
    tube: 1,
  },
  {
    id: 5,
    color: "red",
    order: 3,
    tube: 2,
  },
  {
    id: 6,
    color: "red",
    order: 2,
    tube: 2,
  },
  {
    id: 7,
    color: "blue",
    order: 1,
    tube: 2,
  },
  {
    id: 8,
    color: "blue",
    order: 4,
    tube: 2,
  },
];
function App() {
  // return <Demo/>
  let tubes = [];
  for (let i = 1; i <= 3; i++) {
    tubes.push(<Tube key={i} items={itemSet.filter((t) => t.tube === i)} />);
  }
  return (
    <div className="container">
      <div className="game-area">{tubes}</div>
    </div>
  );
}

export default App;
