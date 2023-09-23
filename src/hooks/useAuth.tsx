import axios, { AxiosResponse } from "axios";
import { UseAuthReturn } from "../types/auth";

const useAuth = (): UseAuthReturn => {
  const API_BASE_URL_AUTH = process.env.REACT_APP_API_BASE_URL_AUTH;

  const login = async (username: string, password: string) => {
    console.log(API_BASE_URL_AUTH);

    const response = await axios.post(`${API_BASE_URL_AUTH}/authenticate`, {
      username,
      password,
    });
    setToken(response);
  };

  const register = async (username: string, password: string) => {
    const response = await axios.post(`${API_BASE_URL_AUTH}/register`, {
      username,
      password,
      role: "USER",
    });
    setToken(response);
  };

  const setToken = (response: AxiosResponse) => {
    const token = response.data.token;

    if (token) {
      localStorage.setItem("token", token);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const loggedIn = () => {
    return !!localStorage.getItem("token");
  };

  return {
    loggedIn,
    login,
    register,
    logout,
  };
};

export default useAuth;
