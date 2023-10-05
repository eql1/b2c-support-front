import axios from "axios";
import { UserResponse } from "../types/dto/UserResponse";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL; doesnt work FIX
const BASE_URL = "http://localhost:8080/api/v1";

const getUserInfo = async (): Promise<UserResponse> => {
  try {
    const response = await axios.get<UserResponse>(`${BASE_URL}/users/info`);
    return response.data;
  } catch (error) {
    console.error("error of getting user info:", error);
    throw error;
  }
};

export default getUserInfo;
