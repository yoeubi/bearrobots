import { MouseEvent, PropsWithChildren, useState } from "react";

const Draggable = ({ children }: PropsWithChildren) => {
  const [dragState, setDragState] = useState({
    drag: false,
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setDragState({
      drag: true,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };
  const onMouseUp = () => {
    setDragState({
      drag: false,
      x: 0,
      y: 0,
    });
  };
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (dragState.drag) {
      setPosition({
        x: e.clientX - dragState.x,
        y: e.clientY - dragState.y,
      });
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {children}
    </div>
  );
};

export default Draggable;
