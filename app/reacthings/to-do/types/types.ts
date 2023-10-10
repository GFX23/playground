import { SetStateAction } from "react";

export interface ITodoProps {
  id: number;
  title: string;
  text: string;
  date: string;
  user: string;
  state: string
}

export interface ICreateTodoProps {
  todos: ITodoProps[];
  setTodos: React.Dispatch<SetStateAction<ITodoProps[]>>
}
