import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MainPage from "./Components/MainPage";
import DuplicateMainPage from "./Components/DuplicateMainPage";

function App() {
  return (
    <div className="App">
      <h1>Ramyanil`s Gallery</h1>
      <DuplicateMainPage />
    </div>
  );
}

export default App;
