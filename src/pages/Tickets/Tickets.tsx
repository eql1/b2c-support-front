import { BsPlus } from "react-icons/bs";
import Button from "../../components/Button";
import { useState } from "react";
import Input from "../../components/Input";
import InputSearch from "../../components/InputSearch";

function Tickets() {
  const [search, setSearch] = useState("");

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
    </div>
  );
}

export default Tickets;
