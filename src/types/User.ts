import { Ticket } from "./Ticket";

export interface User {
  id: number;
  name: string;
  role: string;
  tickets: Ticket[];
}
