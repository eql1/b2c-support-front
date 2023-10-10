import React, { useState } from "react";
import { VscActivateBreakpoints, VscArchive } from "react-icons/vsc";
import { archiveTicket, changeTicketStatus } from "../../../api/ticketsApi";
import { Ticket } from "../../../types/Ticket";
import "./TicketItem.css";
import ReactModal from "react-modal";
import "../../Modal/Modal.css";
import {
  TicketStatus,
  getStatusToString,
  statusClassnames,
} from "../../../types/enum/TicketStatus";
import Button from "../../Button/Button";

interface TicketItemProps {
  ticket: Ticket;
  isSelected: boolean;
  onChangeSelect: (id: number, isSelected: boolean) => void;
  fetchTickets: () => Promise<void>;
}

const TicketItem: React.FC<TicketItemProps> = ({
  ticket,
  isSelected,
  onChangeSelect,
  fetchTickets,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>();

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const handleAction = async (action: string, id: number, status?: string) => {
    console.log("action handled " + action);
    if (action === "delete") {
      await archiveTicket(id);
    } else if (action === "changeStatus" && status) {
      await changeTicketStatus(id, status);
    }
    await fetchTickets();
  };

  return (
    <div
      className="ticket-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div key={ticket.id} className="w-full flex items-center">
        <input
          type="checkbox"
          className="cursor-pointer w-4 h-4 border-gray-100 text-blue-600 bg-gray-100 rounded text-sm"
          checked={isSelected}
          onChange={(ev: any) => onChangeSelect(ticket.id, ev.target.checked)}
        />

        <div className="ml-2 flex items-center w-full">
          <div className="w-[10%]">User</div>
          <div className="w-[60%] flex ">
            <div className="shrink flex-grow truncate">
              <p className="font-bold inline">{ticket.name}</p>
              <span className="inline"> - {ticket.description}</span>
            </div>
          </div>
          <div className="ml-10 w-[10%]">
            <div
              className={`${
                statusClassnames[getStatusToString(ticket.status)]
              } w-full rounded-lg`}
            >
              <p className="text-xs font-medium text-center">
                {getStatusToString(ticket.status)}
              </p>
            </div>
          </div>
          {isHovered && (
            <div className="w-[10%] flex justify-end gap-2 ml-auto">
              <VscActivateBreakpoints
                title="Change status"
                size={25}
                className="tickets-icon"
                onClick={() => {
                  toggleModal();
                }}
              />

              <VscArchive
                title="Delete"
                size={25}
                className="tickets-icon"
                onClick={() => {
                  handleAction("delete", ticket.id);
                }}
              />
            </div>
          )}
          <ReactModal
            ariaHideApp={false}
            isOpen={modalActive}
            onRequestClose={toggleModal}
            className="modal"
            overlayClassName="modal-overlay"
          >
            <div className="p-10">
              {Object.values(TicketStatus).map((status) => (
                <div className="flex items-center mb-4">
                  <input
                    id={status}
                    type="radio"
                    value={status}
                    onChange={(ev: any) => setSelectedStatus(ev.target.value)}
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={status}
                    className="ml-2 text-sm font-medium text-gray-900 w-full"
                  >
                    <div
                      className={`${
                        statusClassnames[getStatusToString(status)]
                      } w-full rounded-lg`}
                    >
                      <p className="text-xs font-medium text-center">
                        {getStatusToString(status)}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
              <Button
                onClick={() => {
                  handleAction("changeStatus", ticket.id, selectedStatus);
                  console.log(ticket.id);
                  console.log(ticket.status);

                  toggleModal();
                }}
                text="Apply"
                classname=""
              />
            </div>
          </ReactModal>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
