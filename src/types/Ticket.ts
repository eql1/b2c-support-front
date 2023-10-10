import { TicketStatus } from "./enum/TicketStatus";

export interface Ticket {
  id: number;
  name: string;
  description: string;
  status: TicketStatus;
  isArchived: boolean;
}
