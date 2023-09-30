import axios from "axios";
import { UserResponse } from "../types/dto/UserResponse";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getUserInfo = async () => {
  try {
    const response = await axios.get<UserResponse>(`${BASE_URL}/users/info`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response.headers["Authorization"]);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("error of getting user info");
    throw error;
  }
};

export default getUserInfo;
