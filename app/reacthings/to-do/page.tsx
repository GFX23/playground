"use client";

import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Docs } from "./components/docs";
import { CreateToDo } from "./components/createTodo";
import { ToDoList } from "./components/todoList";
import { ITodoProps } from "./types/types";

export default function Page() {
const [todos, setTodos] = useState<ITodoProps[]>(() => {
  const localCoord = localStorage.getItem("coord");
  return localCoord ? JSON.parse(localCoord) : [];
})

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex flex-row justify-between items-center gap-4">
        <Typography className="text-center" variant="h4">
          TO-DO LIST
        </Typography>
        <Docs />
        <Button color="blue">CLEAN PLAYGROUND!</Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 shadow-2xl rounded-xl ring-2 ring-gray-500 h-full w-full p-4 mt-4">
        <CreateToDo todos={todos} setTodos={setTodos} />
        <ToDoList todos={todos}/>

      </div>
    </div>
  );
}
