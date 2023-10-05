import { NavLink } from "react-router-dom";
import {
  VscHome,
  VscInbox,
  VscQuestion,
  VscSettingsGear,
} from "react-icons/vsc";
import "./Header.css";

const Header = () => {
  return (
    <nav className="float-left h-[100vh] w-1/6 py-10 px-5 bg-white border-r border-r-gray-50 shadow-md">
      <div className="logo"></div>
      <div className="flex flex-col gap-8 uppercase font-bold text-sm ">
        <div className="nav-item">
          <NavLink className="nav-link" to="/">
            <VscHome size={30} className="icon" />
            <span className="nav-text">Home</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to="/tickets">
            <VscInbox size={30} className="icon" />
            <span className="nav-text">Tickets</span>
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to="/help">
            <VscQuestion size={30} className="icon" />
            <span className="nav-text">Help</span>
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink className="nav-link" to="/settings">
            <VscSettingsGear size={30} className="icon" />
            <span className="nav-text">Settings</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
