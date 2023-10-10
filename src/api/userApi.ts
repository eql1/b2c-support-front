import axios from "axios";
import { User } from "../types/User";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL; doesnt work FIX
const BASE_URL = "http://localhost:8080/api/v1";

const getUserInfo = async (): Promise<User> => {
  try {
    const response = await axios.get<User>(`${BASE_URL}/users/info`);
    return response.data;
  } catch (error) {
    console.error("error of getting user info:", error);
    throw error;
  }
};

export default getUserInfo;
