"use client";

import Button from "./components/Button";
import { ReactNode, useState } from "react";
import Column from "./components/column";
import ColumnGenerator from "./components/columnGenerator";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [nums, setNums] = useState<number[]>([])

  const generateRandomNumber = () => {
    let numArray: number[] = [];
    for (let i = 0; i < count; i++) {
      numArray.push(Math.floor(Math.random() * 1000));
    }
    return numArray;
  };



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-4xl text-red-400">Welcome to testing zone!</p>
      <p className="text-4xl text-red-400">You've clicked {counter} times!</p>
      <ColumnGenerator nums={nums} />
      <div className="flex gap-4">
        <Button onClick={() => setNums([...nums, (Math.floor(Math.random() * 1000))])} name="Add number" />
        <Button onClick={() => setNums([])} name="Reset" />
      </div>
    </main>
  );
}
