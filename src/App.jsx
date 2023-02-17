import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
