export type Ticket = {
  id: number;
  name: string;
  description: string;
  status: "OPEN" | "IN PROGRESS" | "CLOSED";
};
