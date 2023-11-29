import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
import { Route, Router, Routes } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Completed from "./components/Completed/Completed";
import Pending from "./components/Pending/Pending";
import Trash from "./components/Trash/Trash";

function App() {
  return (
    <div id="main-div">
      <div id="inner-card">
        <div id="main-title">
          <Header />
          <div id="main-container">
            <Routes>
              <Route path="/" element={<Cards />} />
              <Route path="/add" element={<Add />} />
              <Route path="/complete" element={<Completed/>}/>
              <Route path="/pending" element={<Pending/>}/>
              <Route path="/trash" element={<Trash/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
