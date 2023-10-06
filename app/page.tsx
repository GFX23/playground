"use client";

import Button from "./components/button";
import { useState } from "react";
import ColumnGenerator from "./components/columnGenerator";
import { mergeSort, timeout } from "./utils/mergeSort";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [nums, setNums] = useState<number[]>([]);
  const [sortedNums, setSortedNums] = useState<number[]>([]);

  const generateUniqueRandomNumber = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    while (nums.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 1000);
    }
    return randomNumber;
  };

  const sort = async (nums: number[]): Promise<void> => {
    await mergeSort(nums, setSortedNums, sortedNums);
    console.log("merge finished")
  };

  const createColumns = async (num: number): Promise<void> => {
    let counter = 0;
    while (counter <= num) {
      await timeout(10)
      setNums((prev) => [...prev, Math.round(Math.random() * 1000)]);
      counter++;
      }
    }

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <p className="text-4xl text-red-400">Welcome to sorting zone!</p>
      <ColumnGenerator nums={nums} />
      <ColumnGenerator nums={sortedNums} />
      <div className="flex gap-4">
        <Button onClick={() => createColumns(20)} name="Create column" />
        <Button onClick={() => sort(nums)} name="Sort them!" />
      </div>
    </main>
    </>
  );
}
