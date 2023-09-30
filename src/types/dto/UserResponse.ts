import { TicketResponse } from "./TicketResponse";

export interface UserResponse {
  id: number;
  name: string;
  role: string;
  tickets: TicketResponse[];
}
