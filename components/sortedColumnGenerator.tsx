import Column from "./column";

interface columnGeneratorProps {
  nums: number[][];
}

const SortedColumnGenerator: React.FC<columnGeneratorProps> = ({
  nums,
}): React.ReactNode => {
  return (
    <div className="flex flex-row items-end h-5/6">
      {nums.map((step: number[], index) => (
        <div key={index}>
          {step.map((num: number, index) => (
            <div
              key={index}
              style={{ height: `${num / 2}px` }}
              className="bg-blue-400 w-2"
            >
              <p className="rotate-90 text-white text-xs">{num}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SortedColumnGenerator;
