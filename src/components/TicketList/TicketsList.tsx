import React from "react";
import { Ticket } from "../../types/Ticket";
import TicketItem from "./TicketItem/TicketItem";

interface TicketListProps {
  fetchTickets: () => Promise<void>;
  searchText: string;
  tickets: Ticket[];
  selectedTickets: number[];
  onChangeSelect: (id: number, isSelected: boolean) => void;
}

const TicketsList: React.FC<TicketListProps> = ({
  fetchTickets,
  tickets,
  selectedTickets,
  onChangeSelect,
  searchText,
}) => {
  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      {filteredTickets.map((ticket) => (
        <TicketItem
          fetchTickets={fetchTickets}
          ticket={ticket}
          isSelected={selectedTickets.includes(ticket.id)}
          onChangeSelect={onChangeSelect}
        />
      ))}
    </div>
  );
};

export default TicketsList;
