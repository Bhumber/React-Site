import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavMenu from "./Components/NavMenu/NavMenu";


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

