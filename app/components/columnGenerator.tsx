import Column from "./column";

interface columnGeneratorProps {
  nums: number[];
}

const ColumnGenerator: React.FC<columnGeneratorProps> = ({
  nums,
}): React.ReactNode => {
  const columnArrayGenerator = (numbers: number[]) => {
    return numbers.map((num, index) => <Column index={index} num={num} />);
  };

  return (
    <div className="flex flex-row items-end h-5/6">
      {columnArrayGenerator(nums)}
    </div>
  );
};

export default ColumnGenerator;
