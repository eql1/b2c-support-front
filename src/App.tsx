import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/Login/Login";
import Tickets from "./pages/Tickets/Tickets";
import Profile from "./pages/Profile/Profile";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}></Route>

        <Route
          element={
            <ProtectedRoutes isAuthAllowed={false} navigate="/profile" />
          }
        >
          <Route path="/login" element={<Login />}></Route>
        </Route>
        <Route element={<ProtectedRoutes isAuthAllowed={true} />}>
          <Route path="/tickets" element={<Tickets />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
