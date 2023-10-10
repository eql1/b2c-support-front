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
    <div className="w-full fixed backdrop-blur-sm py-5 px-5  border-r border-r-gray-50 shadow-md">
      <nav>
        <div className="logo"></div>
        <div className="flex justify-center gap-8 uppercase font-bold text-sm ">
          <div className="nav-item">
            <NavLink className="nav-link" to="/">
              <VscHome size={20} className="icon" />
              <span className="nav-text">Home</span>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/tickets">
              <VscInbox size={20} className="icon" />
              <span className="nav-text">Tickets</span>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/help">
              <VscQuestion size={20} className="icon" />
              <span className="nav-text">Help</span>
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink className="nav-link" to="/settings">
              <VscSettingsGear size={20} className="icon" />
              <span className="nav-text">Settings</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
