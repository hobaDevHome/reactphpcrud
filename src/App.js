import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Gallery from "./pages/Gallery";
import SoapDetails from "./components/SoapDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details/:id" element={<SoapDetails />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashlist" element={<ListUser />} />
          <Route path="/soap/create" element={<CreateUser />} />
          <Route path="/soap/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
