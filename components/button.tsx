interface ButtonProps {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
    >
      <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white">{name}</span>
    </button>
  );
};

export default Button;
