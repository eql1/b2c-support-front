import { useEffect, useState } from "react";
import getUserTickets from "../../api/ticketsApi";
import Button from "../../components/Button/Button";
import InputSearch from "../../components/InputSearch/InputSearch";

function Tickets() {
  const [search, setSearch] = useState("");
  const [listTickets, setListTickets] = useState<JSX.Element[] | undefined>();

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getUserTickets();
      console.log(tickets);

      if (tickets) {
        const listTickets = tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.name}</td>
            <td>{ticket.description}</td>
            <td>{ticket.status}</td>
          </tr>
        ));
        setListTickets(listTickets);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <div className="flex items-center border ">
        <div className="w-full px-10 p-4 ">
          <div className="w-full flex justify-between">
            <div className="">
              <Button
                classname="px-12"
                onClick={() => {}}
                text="New ticket"
              ></Button>
            </div>
            <div>
              <InputSearch
                placeholder="Search requester"
                value={search}
                onChange={(ev: any) => setSearch(ev.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{listTickets}</tbody>
      </table>
    </div>
  );
}

export default Tickets;
