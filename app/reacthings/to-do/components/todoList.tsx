import ToDo from "./todo";
import { ITodoProps } from "../types/types";
import { SetStateAction } from "react";

interface IToDoListProps {
  todos: ITodoProps[]
}

export const ToDoList: React.FC<IToDoListProps> = ({todos}) => {
  return (<>
    <div className="w-full h-full rounded-xl border-2 border-gray-500 overflow-scroll">
    {todos.map((todo, index) =>{
      return <ToDo key={index}todo={todo}/>
    })}
        {todos.map((todo, index) =>{
      return <ToDo key={index} todo={todo}/>
    })}
  </div>
  </>
  )
}