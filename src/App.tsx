import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';
import Tickets from './components/Tickets';

// todo: read about redux or context api, its docs, to store jwt there 
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [])

  return (
      <div className='App'>
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login isAuthenticated={isAuthenticated}/>}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route element={<PrivateRoutes isAuthenticated={isAuthenticated}/>}> 
              <Route element={<Tickets />} path='/tickets' />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
