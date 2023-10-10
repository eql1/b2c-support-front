import axios from "axios";
import { Ticket } from "../types/Ticket";
import setAuthToken from "../utils/axiosConfig";

const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/tickets";

setAuthToken(localStorage.getItem("token"));

const getUserTickets = async (): Promise<Ticket[]> => {
  try {
    const response = await axios.get<Ticket[]>(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const archiveTicket = async (id: number): Promise<Ticket> => {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}/archive`);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const archiveSelectedTickets = async (items: number[]): Promise<Ticket[]> => {
  try {
    const response = await axios.patch(`${BASE_URL}/archive`, items);
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const changeTicketStatus = async (id: number, status: string) => {
  try {
    await axios.patch(`${BASE_URL}/${id}/status?status=${status}`);
  } catch (error) {
    console.error(error);
  }
};

const createTicket = async (name: string, description: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, {
      name: name,
      description: description,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export {
  changeTicketStatus,
  archiveTicket,
  archiveSelectedTickets,
  getUserTickets,
  createTicket,
};
