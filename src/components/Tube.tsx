import React from "react";
import { IBlockItem } from "../interfaces";
import { Block } from "./Block";
interface IProps {
  items: IBlockItem[];
}
export const Tube: React.FunctionComponent<IProps> = ({ items }) => {
  const blocks = items.map((i) => <Block key={i.id} blockData={i} />);
  return <div className="tube">{blocks}</div>;
};
