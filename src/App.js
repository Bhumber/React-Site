import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profine";
import NavMenu from "./Components/NavMenu";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Profile />
    </div>
  );
};



export default App;

