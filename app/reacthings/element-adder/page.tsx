"use client";

import Dot from "@/app/reacthings/element-adder/components/dot";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import useHandleClick from "./hooks";
import { Docs } from "./components/docs";

export default function Page() {
  const [coord, setCoord] = useState<number[][] | []>(() => {
    const localCoord = localStorage.getItem("coord");
    return localCoord ? JSON.parse(localCoord) : [];
  });

  useEffect(() => {
    localStorage.setItem("coord", JSON.stringify(coord));
  }, [coord]);

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex flex-row justify-between items-center gap-4">
        <Typography className="text-center" variant="h4">
          ELEMENT ADDER / REMOVER
        </Typography>
        <Docs />
        <Button
          onClick={() => {
            localStorage.clear();
            setCoord([]);
          }}
          color="blue"
        >
          CLEAN PLAYGROUND!
        </Button>
      </div>
      <div
        className="shadow-2xl rounded-xl ring-2 ring-gray-500 h-full w-full p-4 mt-4"
        onClick={(e) => useHandleClick(e, setCoord, coord)}
      >
        {coord.map((coordinate, index) => (
          <Dot coordinate={coordinate} key={index} />
        ))}
      </div>
    </div>
  );
}
