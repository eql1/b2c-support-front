interface InputProps {
  onChange: any;
  value: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={onChange}
      type="text"
      id="search"
      value={value}
      placeholder={placeholder}
      className="
                  font-medium
                  text-sm
                  rounded-xl 
                  border
                  border-gray-700
                  appearance-none 
                  py-3
                  px-6
                  outline-none
                  focus:ring-4
                  ring-gray-200
                  ring-offset-0
                  hover:bg-gray-100"
    ></input>
  );
};

export default Input;
