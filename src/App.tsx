import React, { useState } from "react";
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
  const [elements, setElements] = useState<IBlockItem[]>(itemSet);

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const tubeId = Number.parseInt(e.currentTarget.id.slice(-1));
    const blockId = Number.parseInt(e.dataTransfer.getData("text"));
    const block = elements.find((e) => e.id === blockId);
    const tube = elements
      .filter((b) => b.tube === tubeId)
      .sort((s, i) => s.order - i.order);
    if (
      tube.length === 0 ||
      (tube.length < 4 && tube[tube.length - 1].color === block?.color)
    ) {
      const nElements = elements.map((e) => {
        if (e.id === blockId) {
          e.tube = tubeId;
          e.order = tube.length + 1;
        }
        return e;
      });
      setElements(nElements);
    }
  };

  let tubes = [];
  for (let i = 1; i <= 3; i++) {
    tubes.push(
      <Tube
        id={i.toString()}
        key={i}
        items={elements.filter((t) => t.tube === i)}
        dropHandler={dropHandler}
      />
    );
  }
  return (
    <div className="container">
      <div className="game-area">{tubes}</div>
    </div>
  );
}

export default App;
