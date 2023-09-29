import Column from "./column";

interface columnGeneratorProps {
  nums: number[];
}


const ColumnGenerator: React.FC<columnGeneratorProps> = ({nums}): React.ReactNode  => {

  const columnArrayGenerator = (nums: number[]) => {
    return nums.sort().map((num) => (
      <Column key={num} num={num} />
    ))
  }

  return (<div className="flex flex-row">{columnArrayGenerator(nums)}</div>)
};

export default ColumnGenerator;
