import Column from "./column";
import { useEffect, useState } from "react";
import { timeout } from "../utils/mergeSort";

interface columnGeneratorProps {
  nums: number[];
}

const ColumnGenerator: React.FC<columnGeneratorProps> = ({nums
  ,
}): React.ReactNode => {

  return (
    <div className="flex flex-row items-end h-5/6">
      {nums.map((num, index) => (
        <div
          key={index}
          style={{ height: `${num/2}px` }}
          className="bg-blue-400 w-2"
        >
          <p className="rotate-90 text-white text-xs">{num}</p>
        </div>
        )
      )}
    </div>
  );
};

export default ColumnGenerator;
