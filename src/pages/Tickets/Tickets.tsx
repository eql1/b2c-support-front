import { useEffect, useState } from "react";
import { archiveSelectedTickets, getUserTickets } from "../../api/ticketsApi";
import InputSearch from "../../components/InputSearch";
import TicketsList from "../../components/TicketList/TicketsList";
import { Ticket } from "../../types/Ticket";
import { VscActivateBreakpoints, VscArchive } from "react-icons/vsc";
import "./Tickets.css";
import Button from "../../components/Button/Button";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function Tickets() {
  const [selectedTickets, setSelectedTickets] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const navigate = useNavigate();

  const fetchTickets = async () => {
    console.log("tickets fetched");
    const tickets = await getUserTickets();
    setTickets(tickets);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleTicketSelect = (id: number, isSelected: boolean) => {
    setSelectedTickets((selected) => {
      if (isSelected) {
        return [...selected, id];
      } else {
        return selected.filter((ticketId) => ticketId !== id);
      }
    });
  };

  const handleSelectedArchive = async () => {
    try {
      await archiveSelectedTickets(selectedTickets);
      fetchTickets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-20 px-20 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold">Support tickets</p>
          {selectedTickets.length > 0 ? (
            <span className="text-sm text-blue-500 transition-all font-medium">
              - ({selectedTickets.length}) selected
            </span>
          ) : null}
        </div>
        {selectedTickets.length > 0 && (
          <div className="flex gap-2">
            <VscArchive
              title="Archive"
              size={25}
              className="tickets-icon"
              onClick={() => {
                handleSelectedArchive();
              }}
            />
            {/* <VscActivateBreakpoints
              title="Change status"
              size={25}
              className="tickets-icon"
            /> */}
          </div>
        )}

        <div className="items-center flex">
          <InputSearch
            placeholder="Search"
            value={search}
            onChange={(ev: any) => setSearch(ev.target.value)}
            className="shadow-md"
          />
        </div>
      </div>
      <div className="w-full mt-10">
        {tickets.length > 0 ? (
          <div className="w-full bg-white rounded-md border border-gray-50 shadow-md ">
            <TicketsList
              fetchTickets={fetchTickets}
              searchText={search}
              tickets={tickets}
              selectedTickets={selectedTickets}
              onChangeSelect={handleTicketSelect}
            />
          </div>
        ) : (
          <p className="text-center">
            No tickets found. But you can create a{" "}
            <span
              className="transition text-blue-600 underline hover:text-blue-400 cursor-pointer"
              onClick={() => navigate("/tickets/create")}
            >
              new one
            </span>
            .
          </p>
        )}
      </div>
      {tickets.length > 0 && (
        <div className="items-center flex justify-center mt-5">
          <Button
            onClick={() => navigate("/tickets/create")}
            text="New ticket"
          ></Button>
        </div>
      )}
    </div>
  );
}

export default Tickets;
