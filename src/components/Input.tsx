interface InputProps {
    id: string;
    text: string;
    value: string;
    type: string;
    onChange: any;
}

const Input: React.FC<InputProps> = ({ id, text, value, type, onChange }) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="font-medium text-sm mb-1">{text}</label>
            <input onChange={onChange} type={type} id={id} value={value} className="
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
        </div>
    );
}


export default Input;