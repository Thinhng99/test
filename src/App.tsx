import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Router from "./routers";

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
