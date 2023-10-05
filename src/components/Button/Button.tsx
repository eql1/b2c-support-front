interface ButtonProps {
  onClick: () => void;
  text: string;
  classname?: string;
}

function Button({ onClick, text, classname }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-semibold text-sm bg-blue-700 text-center px-6 h-12 text-white 
        hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition ${classname}`}
    >
      {text}
    </button>
  );
}

export default Button;
