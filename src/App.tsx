import React, { useEffect, useState } from "react";
import "./styles/site.css";
// import { Demo } from "./components/Demo";
import { Tube } from "./components/Tube";
import { IBlockItem } from "./interfaces";
import { useRef } from "react";
import { levels } from "./levels";

function App() {
  // return <Demo/>
  // lodash -> deepclone deepcopy
  const [level, setLevel] = useState<number>(0);
  const [elements, setElements] = useState<IBlockItem[]>(
    JSON.parse(JSON.stringify(levels[level].itemSet))
  );

  const moves = useRef<IBlockItem[]>([]);

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const tubeId = Number.parseInt(e.currentTarget.id.slice(-1));
    const blockId = Number.parseInt(e.dataTransfer.getData("text"));
    const block = elements.filter((e) => e.id === blockId)[0];
    const tube = elements
      .filter((b) => b.tube === tubeId)
      .sort((s, i) => s.order - i.order);
    if (
      tube.length === 0 ||
      (tube.length < 4 && tube[tube.length - 1].color === block?.color)
    ) {
      moves.current.push({ ...block });
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

  const reset = () => {
    setElements(JSON.parse(JSON.stringify(levels[level].itemSet)));
    moves.current = [];
  };
  const undo = () => {
    const lastMove = moves.current.pop();
    const nElements = elements.map((b) => {
      if (b.id === lastMove?.id) {
        return lastMove;
      }
      return b;
    });
    setElements(nElements);
  };
  let tubes = [];
  for (let i = 1; i <= levels[level].tubeCount; i++) {
    tubes.push(
      <Tube
        id={i.toString()}
        key={i}
        items={elements.filter((t) => t.tube === i)}
        dropHandler={dropHandler}
      />
    );
  }

  useEffect(() => {
    reset();
  }, [level]);

  const levelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(Number.parseInt(e.currentTarget.value));
  };
  return (
    <div className="container">
      <div className="flex-box level-area">
        <span className="title">Seviye:</span>
        <select
          className="level-dropdown"
          name="level"
          id="level"
          onChange={levelChange}
          value={level}
        >
          {levels.map((l, i) => (
            <option key={i} value={i}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="game-area">{tubes}</div>
      <div className="controls flex-box">
        <button onClick={reset}>sifirla</button>
        <button onClick={undo} disabled={moves.current.length < 1}>
          geri al
        </button>
      </div>
    </div>
  );
}

export default App;
