import { SetStateAction, MouseEvent } from "react";

const useHandleClick = (
  e: MouseEvent,
  setCoord: React.Dispatch<SetStateAction<number[][]>>,
  coord: number[][]) => {
  
  const target = e.target as HTMLElement;
  console.log(e);

    if (target.className.startsWith("clickme")) {
      setCoord((prev) =>
        prev.filter(
          (c) =>
            JSON.stringify(c) !==
            JSON.stringify([target.offsetLeft + 10, target.offsetTop + 10])
        )
      );
    } else {
      setCoord((prev) => [...prev, [e.pageX, e.pageY]]);
    }
};

export default useHandleClick;
