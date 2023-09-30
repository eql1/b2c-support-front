import { VscHome, VscAccount, VscListFlat } from "react-icons/vsc";

import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    // <div className="w-full h-16 flex justify-between items-center py-2 px-10 shadow-sm border border-gray-300">
    <div className="float-left h-full w-[5%] border-r ">
      <nav
        id="sidebar"
        className="flex flex-col border-gray-300 items-center gap-8 py-6"
      >
        <NavLink to="/home">
          <div className="p-3 w-full rounded-full">
            <VscHome size={30} className="icon" />
          </div>
        </NavLink>

        <NavLink to="/tickets">
          <div className="p-3 w-full rounded-full">
            <VscListFlat size={30} fill="#808080" className="icon" />
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="p-3 w-full rounded-full">
            <VscAccount size={30} fill="#808080" className="icon" />
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
