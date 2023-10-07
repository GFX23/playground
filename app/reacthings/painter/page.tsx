"use client"

import Dot from "@/components/dot"
import { MouseEvent, useEffect, useState } from "react"
import { Button } from "@material-tailwind/react";


export default function Page() {
  const [coord, setCoord] = useState<number[][]>([])

  useEffect(() => {
    const xy = localStorage.getItem("coord")
    if (xy) {
      setCoord(JSON.parse(xy))
    }
  },[])

const handleClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  console.log(e)

  if (target.className.startsWith("clickme")) {
    setCoord(coord.filter(c => c[0] !== target.offsetLeft && c[1] !== target.offsetTop))
  } else {
    setCoord([...coord, [e.pageX, e.pageY]])
    localStorage.setItem("coord", JSON.stringify(coord))
  }
}
  return(<div className="flex flex-col w-full h-full p-4 border-4 border-pink-300">
    <div className="flex flex-row justify-center items-center gap-4 p-4"> 
    <Button onClick={() => {localStorage.clear(); setCoord([])}} color="blue">CLEAN</Button>
    <Button color="blue">REDO</Button>
    </div>
  <div className="border-4 border-red-500 h-full w-full p-4 mt-4" onClick={(e) => handleClick(e)}>
    {coord.map((coordinate, index) => <Dot coordinate={coordinate} key={index} />)}
  </div>
  </div>)
}