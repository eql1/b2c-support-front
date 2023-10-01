import axios from "axios";
import { TicketResponse } from "../types/dto/TicketResponse";
import setAuthToken from "../utils/axiosConfig";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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
