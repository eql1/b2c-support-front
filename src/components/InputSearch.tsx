import { VscSearch } from "react-icons/vsc";

interface InputProps {
  onChange: any;
  value: string;
  placeholder: string;
  className: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  className,
}) => {
  return (
    <div className="relative">
      <VscSearch size={20} className="absolute top-3 left-4" fill="#808080" />
      <input
        onChange={onChange}
        type="text"
        id="search"
        value={value}
        placeholder={placeholder}
        className={`
                    ${className}
                  font-medium
                  text-sm
                  rounded-xl 
                  border
                  border-gray-50
                  appearance-none 
                  py-3
                  pl-12
                  px-6
                  outline-none
                  focus:ring-4
                  ring-gray-200
                  ring-offset-0
                  <hover:bg-gray-100></hover:bg-gray-100>`}
      ></input>
    </div>
  );
};

export default Input;
