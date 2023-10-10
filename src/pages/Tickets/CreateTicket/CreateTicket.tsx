import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button/Button";
import { createTicket, getUserTickets } from "../../../api/ticketsApi";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("submit");
    console.log(data.name, data.description);
    try {
      createTicket(data.name, data.description);
    } catch (error) {
      console.error(error);
    } finally {
      await getUserTickets();
      navigate("/tickets");
    }
  };

  return (
    <div className="w-full pt-20">
      <div
        className="relative max-w-xl mx-auto w-full lg:w-2/6 px-20 py-12 bg-white lg:rounded-2xl lg:shadow-md lg:border
     border-gray-50 "
      >
        <div className="w-full">
          <h1 className="font-semibold text-center text-2xl">
            Create a new ticket
          </h1>
        </div>
        <div className="px-0 mt-4">
          <div className="mb-4">
            <Input
              placeholder="Ticket's title"
              onChange={(ev: any) =>
                setData({ ...data, name: ev.target.value })
              }
              value={data.name}
              type="name"
              id="name"
              text="input"
              classname="mb-4"
            />
            <textarea
              className="w-full p-5 text-sm border
              border-gray-400 font-medium
              rounded-xl 
              appearance-none 
              py-3
              px-6
              outline-none
              focus:ring-4
              ring-gray-200
              ring-offset-0
              hover:bg-gray-100"
              value={data.description}
              onChange={(ev: any) =>
                setData({ ...data, description: ev.target.value })
              }
              placeholder="Description"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <Button
              text="Create"
              classname="w-full"
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
