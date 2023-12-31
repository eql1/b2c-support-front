interface InputProps {
  id: string;
  text: string;
  value: string;
  type: string;
  onChange: any;
  isLabelShown?: boolean;
  classname?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  text,
  value,
  type,
  onChange,
  isLabelShown,
  classname,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      {isLabelShown && (
        <label htmlFor={id} className="font-medium text-sm ">
          {text}
        </label>
      )}
      <input
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`
                  font-medium
                  text-sm
                  rounded-xl 
                  border
                  border-gray-400
                  appearance-none 
                  py-3
                  px-6
                  outline-none
                  focus:ring-4
                  ring-gray-200
                  ring-offset-0
                  hover:bg-gray-100
                  ${classname}`}
      ></input>
    </div>
  );
};

export default Input;
