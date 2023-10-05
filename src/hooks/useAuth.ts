import axios, { AxiosResponse } from "axios";
import { UseAuthReturn } from "../types/auth";
import setAuthToken from "../utils/axiosConfig";

const useAuth = (): UseAuthReturn => {
  // const API_BASE_URL_AUTH = process.env.REACT_APP_API_BASE_URL_AUTH;
  const API_BASE_URL_AUTH = "http://localhost:8080/api/v1/auth";

  const login = async (username: string, password: string) => {
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
    setAuthToken(token);
    if (token) {
      localStorage.setItem("token", token);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
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
