interface ColumnProps {
  num: number;
  index: number
}

const Column: React.FC<ColumnProps> = ({num, index}) => {


  
  return (<div key={index} style={{height: `${num}px`}} className="bg-blue-400 w-2">
    <p className="rotate-90 text-white text-xs">{num}</p>
  </div>)
};

export default Column;
