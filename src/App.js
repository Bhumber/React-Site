import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavMenu from "./Components/NavMenu/NavMenu";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavMenu />
        <div className="AppContent">
          <Routes>
            <Route path="/profile/*" element={<Profile state={props.state.profile} />}/>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogs} />} />
            <Route path="/news/*" element={<News />}/>
            <Route path="/music/*" element={<Music />}/>
            <Route path="/settings/*" element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};



export default App;

