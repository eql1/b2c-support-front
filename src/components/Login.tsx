import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // const handleLogin = async () => {
    //     try {
                   
    //     }
    // }

    

    return(
        <div className="w-full">
            <div className="relative mx-auto w-2/5 px-16 py-10 bg-white rounded-2xl shadow-sm border border-black border-opacity-20 ">
                <div className="w-full">
                    <h1 className="font-semibold text-center text-2xl">Authorization</h1>
                    <p className="text-gray-600 text-base text-center">To use this system</p>
                </div>
                <div className="mt-2 p-5">
                    <Input onChange={(ev: any) => setEmail(ev.target.value)} value={email} type="email" id="email" text="Email"/>
                    <Input 
                        onChange={(ev: any) =>
                             setPassword(ev.target.value)
                            }
                        value={password} type="password" id="password" text="Password"/>
                    <p className="underline hover:cursor-pointer mb-5">Forgot your password?</p>
                    <div className="mt-4">
                        <Button onClick={() => {}} text="Login" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;