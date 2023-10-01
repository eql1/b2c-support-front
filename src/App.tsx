import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Tickets from "./pages/Tickets/Tickets";
import { useEffect } from "react";
import setAuthToken from "./utils/axiosConfig";

// todo: read about redux or context api, its docs, to store jwt there
function App() {
  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />}></Route>

          {/* protected routes */}
          <Route
            element={
              <ProtectedRoutes isAuthAllowed={false} navigate="/profile" />
            }
          >
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes isAuthAllowed={true} />}>
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
