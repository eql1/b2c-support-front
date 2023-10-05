import axios from "axios";
import { TicketResponse } from "../types/dto/TicketResponse";
import setAuthToken from "../utils/axiosConfig";
// import process from "process";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "http://localhost:8080/api/v1";

setAuthToken(localStorage.getItem("token"));

const getUserTickets = async (): Promise<TicketResponse[]> => {
  try {
    const response = await axios.get<TicketResponse[]>(
      `${BASE_URL}/tickets/user`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getUserTickets;
