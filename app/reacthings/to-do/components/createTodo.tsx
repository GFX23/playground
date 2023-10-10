import { Input, Select, Option, Button } from "@material-tailwind/react";
import { useState } from "react";
import { ITodoProps, ICreateTodoProps } from "../types/types";


export const CreateToDo: React.FC<ICreateTodoProps> =({todos,setTodos}) => {
  const [todo, setTodo] = useState<ITodoProps>({
    id: 0,
    title: "",
    text: "",
    date: "" ,
    user: "",
    state: "",
  })

  const handleChange = (e: string | undefined, key: string) =>{
      setTodo({...todo, [key]: e })
  }

  const handleAddTodo = () => {
    setTodos([...todos, {...todo, date: new Date().toString().substring(0,25)}])
  }

  return (
    <div className="flex w-full flex-row gap-6">
      <Input onChange={e => handleChange(e.target.value, "title")}color="blue" label="Title" />
      <Input onChange={e => handleChange(e.target.value, "text")} color="blue" label="Description" />
      <Select onChange={e => handleChange(e, "state")} size="md" label="Priority">
        <Option value="LOW">LOW</Option>
        <Option value="NORMAL">NORMAL</Option>
        <Option value="HIGH">HIGH</Option>
      </Select>
      <Input onChange={e => handleChange(e.target.value, "user")} color="blue" label="Your name" />
      <Button onClick={() => handleAddTodo()} color="blue">ADD</Button>
    </div>
  );
}