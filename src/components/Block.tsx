import React from "react";
interface IProps {
  id: number;
}
export const Block: React.FunctionComponent<IProps> = ({ id }) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };
  return (
    <div
      id={id.toString()}
      draggable
      onDragStart={dragStart}
      className="block block-red border-white"
    ></div>
  );
};
