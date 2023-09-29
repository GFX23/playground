interface ColumnProps {
  num: number;
  key: number
}

const Column: React.FC<ColumnProps> = ({num, key}) => {


  
  return (<div key={key} style={{height: `${num}px`}} className="bg-blue-500 w-4">
    <p className="rotate-90 text-white">{num}</p>
  </div>)
};

export default Column;
