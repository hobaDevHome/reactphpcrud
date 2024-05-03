import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from "./components/ListUser";

import EditUser from "./components/EditUser";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Gallery from "./pages/Gallery";
import SoapDetails from "./components/SoapDetails";
import AddSoap from "./components/AddSoap";
import EditSoap from "./components/EditSoap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details/:id" element={<SoapDetails />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashlist" element={<ListUser />} />
          <Route path="/soap/create" element={<AddSoap />} />
          <Route path="/soap/:id/edit" element={<EditSoap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
