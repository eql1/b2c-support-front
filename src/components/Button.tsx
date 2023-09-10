interface ButtonProps {
    onClick: () => void;
    text: string;
}

function Button({ onClick, text }: ButtonProps) {
    return (
        <div className="w-full flex justify-center">
            <button onClick={onClick} className="font-semibold text-center rounded-full w-3/4 justify-center h-12 bg-black text-white hover:bg-gray-600 transition">
                {text}
            </button>
        </div>
        
    );
}

export default Button;

