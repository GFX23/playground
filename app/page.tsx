"use client";

import Button from "./components/Button";
import { useState } from "react";
import ColumnGenerator from "./components/columnGenerator";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [nums, setNums] = useState<number[]>([])

  const generateUniqueRandomNumber = (): number => {
    let randomNumber: number = (Math.floor(Math.random() * 1000))
    while (nums.includes(randomNumber)) {
      randomNumber = (Math.floor(Math.random() * 1000))
    }
    return randomNumber
  }

  const generateRandomNumberArray = (): void => {
    return setNums([...Array(200)].map(() =>Math.round(Math.random() * 1000)))
  }

  console.log(nums)


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <p className="text-4xl text-red-400">Welcome to sorting zone!</p>
      <ColumnGenerator nums={nums} />
      <div className="flex gap-4">
        <Button onClick={() => setNums([...nums, generateUniqueRandomNumber() ])} name="Add number" />
        <Button onClick={() => generateRandomNumberArray()} name="Reset" />
      </div>
    </main>
  );
}
