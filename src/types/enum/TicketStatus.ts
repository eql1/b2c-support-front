export enum TicketStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  CLOSED = "CLOSED",
}

export function getStatusToString(status: TicketStatus): string {
  switch (status) {
    case TicketStatus.CLOSED:
      return "CLOSED";
    case TicketStatus.IN_PROGRESS:
      return "IN PROGRESS";
    case TicketStatus.OPEN:
      return "OPEN";
    default:
      throw new Error("Unknown status " + status);
  }
}

export const statusClassnames: { [key: string]: string } = {
  OPEN: "bg-green-400",
  CLOSED: "bg-red-400",
  "IN PROGRESS": "bg-blue-300",
};
