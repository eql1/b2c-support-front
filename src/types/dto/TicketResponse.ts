import { TicketStatus } from "../enum/TicketStatus";

export interface TicketResponse {
  id: number;
  name: string;
  description: string;
  status: TicketStatus;
}
