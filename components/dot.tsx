import CSS from "csstype"

interface DotProps {
  coordinate: number[]
}


const Dot: React.FC<DotProps> = ({ coordinate}): React.ReactNode => {
  const style: CSS.Properties = {
    position: "absolute",
    top: `${coordinate[1]}px`,
    left: `${coordinate[0]}px`,
    transform: "translate(-5px, -5px)",
    height: "20px",
    width: "20px",
  }
  return (
  <div style={style} className="clickme bg-purple-500 rounded-full ring-4 ring-yellow-500" />
  );
};

export default Dot;