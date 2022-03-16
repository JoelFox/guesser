import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllGuesses } from "./api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/hero";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Hero />
      <div className="App">
        <ToastContainer />
        <div className="App-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
