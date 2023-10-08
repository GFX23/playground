import CSS from "csstype"

interface DotProps {
  coordinate: number[]
}


const Dot: React.FC<DotProps> = ({ coordinate}): React.ReactNode => {
  const style: CSS.Properties = {
    position: "absolute",
    top: `${coordinate[1]-10}px`,
    left: `${coordinate[0]-10}px`,
    height: "20px",
    width: "20px",
  }
  return (
  <div style={style} className="clickme bg-blue-300 rounded-full ring-4 ring-opacity-75 ring-indigo-900 hover:animate-pulse " />
  );
};

export default Dot; 