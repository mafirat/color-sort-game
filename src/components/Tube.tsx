import React from "react";
import { IBlockItem } from "../interfaces";
import { Block } from "./Block";
interface IProps {
  id: string;
  items: IBlockItem[];
  dropHandler: (e: React.DragEvent<HTMLDivElement>) => void;
}
export const Tube: React.FunctionComponent<IProps> = ({
  items,
  id,
  dropHandler,
}) => {
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const blocks = items.map((i) => <Block key={i.id} blockData={i} />);
  return (
    <div id={`tube${id}`} className="tube" onDragOver={allowDrop} onDrop={dropHandler}>
      {blocks}
    </div>
  );
};
