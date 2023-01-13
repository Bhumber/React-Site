import React from "react";
import { Routes } from 'react-router-dom';
import MP from "./MP/MP";

const MessagesPage = (props) => {
    return (
      <Routes>
        <Route path="/messages/*" element={<MP />} />
      </Routes>
    );
}

export default MessagesPage;

<div className={classes.messages}>
          <div className={classes.myMess}>{props.message}</div>
        </div>