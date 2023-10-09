import { SetStateAction, ChangeEvent } from "react";
import { IToDoProps } from "../page";

interface IToDoCardProps {
  todo: IToDoProps
  setTodos: React.Dispatch<SetStateAction<IToDoProps[]>>
  todos: IToDoProps[]
}


const ToDo: React.FC<IToDoCardProps> = ({todo, setTodos, todos}): React.ReactNode => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    setTodos(todos.map(item => item.text == todo.text ? {...todo, checked: !item.checked, pos:} : item))
  }

  return (
  <div className="flex flex-row">
    <input type="checkbox" onChange={(e) => onChange(e)}/>{todo.text}
  </div>
  );
};

export default ToDo; 