import { ITodoProps } from "../types/types";

interface IToDoCardProps {
  todo: ITodoProps;
}

const ToDo: React.FC<IToDoCardProps> = ({
  todo
}): React.ReactNode => {
  return (
    <button
    className="block p-4 w-full bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div className="text-xl text-start mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
      {todo.title}
    </div>
    <h5 className="font-normal text-start text-gray-700 dark:text-gray-400">
      {todo.text}
    </h5>
    <div className="flex fex-row justify-between mt-4 items-center">
      <div className="flex flex-row gap-4 items-center">
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          Status:{" "}
        </p>
        {todo.state === "HIGH" && (
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            High
          </span>
        )}
        {todo.state === "NORMAL" && (
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
            Normal
          </span>
        )}
        {todo.state === "LOW" && (
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            Low
          </span>
        )}
      </div>
      <p className="font-normal text-sm text-gray-700">
        Created: {todo.date}
      </p>
    </div>
  </button>
  );
};

export default ToDo;
