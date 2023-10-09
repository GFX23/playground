"use client";

import Dot from "@/app/reacthings/element-adder/components/dot";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Docs } from "./components/docs";
import ToDo from "./components/todo";

export interface IToDoProps {
  text: string, 
  pos: string,
  checked: boolean
}

export default function Page() {
const [todos, setTodos] = useState<IToDoProps[]>([
  {text: "todo1", pos: "left", checked: false},
  {text: "todo2", pos: "left", checked: false},
  {text: "todo3", pos: "left", checked: false},
  {text: "todo4", pos: "left", checked: false}
])

console.log(todos)

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex flex-row justify-between items-center gap-4">
        <Typography className="text-center" variant="h4">
          TO-DO LIST
        </Typography>
        <Docs />
        <Button>CLEAN PLAYGROUND!</Button>
      </div>
      <div className="flex items-center justify-center gap-10 shadow-2xl rounded-xl ring-2 ring-gray-500 h-full w-full p-4 mt-4">
        <div className="w-80 h-96 rounded-xl ring-2 ring-gray-500">
          LEFT 
          {todos.map(todo =>{
            if (todo.pos == "left") return <ToDo todo={todo} setTodos={setTodos} todos={todos} />
          })}
        </div>
        <div className="flex flex-col gap-10">
        <Button>MOVE LEFT</Button>
        <Button>MOVE RIGHT</Button>
        </div>
        <div className="w-80 h-96 rounded-xl ring-2 ring-gray-500">
          RIGHT
          {todos.map(todo =>{
            if (todo.pos == "right") return <ToDo todo={todo} setTodos={setTodos} todos={todos} />
          })}
        </div>
      </div>
    </div>
  );
}
