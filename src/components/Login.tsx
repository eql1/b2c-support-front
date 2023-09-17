import axios, { AxiosResponse, isAxiosError } from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { ErrorResponse, Navigate, useNavigate } from "react-router-dom";

interface LoginProps {
    isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = ({isAuthenticated}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistration, setIsRegistration] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
    
    useEffect(() => {
        if(isAuthenticated) {
            navigate("/tickets");
        }
    }, [isAuthenticated, navigate]);
    
    const handleSubmit = async () => {
        try {
            let response: AxiosResponse;
            if(isRegistration) {
                response = await axios.post('http://localhost:8080/api/v1/auth/register', {username, password, role: "User"})
            } else {
                response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {username, password});
                // todo: add global variable in app env properties for backend, get here
                
                const token = response.data.token;
                localStorage.setItem('token', token);
                // todo: check if token is expired
            }
        navigate("/");

        } catch (error) {
            if(isAxiosError(error)) {
                if(!error.response) {
                    setErrorMessage("Server error");
                } else if (error.response.status === 400 || error.response.status === 401) {
                    setErrorMessage("Incorrect email or password")
                } else if (error.response.status === 409) {
                    setErrorMessage("Username already exists")
                }
                setIsErrorMessageVisible(true);
            }
        }
    }
    
    return(
        <div className="w-full mt-20">
            <div className="relative max-w-xl mx-auto w-full lg:w-2/6 px-14 py-8 bg-white lg:rounded-2xl lg:shadow-sm lg:border border-black border-opacity-20 ">
                <div className="w-full">
                    <h1 className="font-semibold text-center text-2xl">{isRegistration ? 'Registration' : 'Login'}</h1>
                    <p className="text-gray-600 text-base text-center">To use this system</p>
                </div>
                {isErrorMessageVisible && 
                    <div className="border-l-4 border-red-300 mt-4 rounded-lg bg-gray-300 py-2 px-5">
                        <h1 className="text-base">Authorisation failed</h1>
                        <p className="text-sm">{errorMessage}</p>

                    </div>
                }
                <div className="px-0 mt-4">
                    <Input onChange={(ev: any) => setUsername(ev.target.value)} value={username} type="username" id="username" text="Email"/>
                    <Input 
                        onChange={(ev: any) => 
                             setPassword(ev.target.value)
                            }
                        value={password} type="password" id="password" text="Password"/>

                    <p onClick={() => { 
                            setIsRegistration(!isRegistration);
                            setIsErrorMessageVisible(false);
                            setUsername("");
                            setPassword("");
                        }
                    } className="underline hover:cursor-pointer mb-5">{isRegistration ? 'Already have an account?' : `Don't have an account?`}</p>
                    <div className="mt-4">
                        <Button onClick={() => {handleSubmit()}} text={isRegistration ? 'Register' : 'Login'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;