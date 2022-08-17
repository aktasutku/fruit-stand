import React from "react";
import "./app.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Produce from "./components/Produce"

const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Produce/>
    </div>
  );
};

export default App;
