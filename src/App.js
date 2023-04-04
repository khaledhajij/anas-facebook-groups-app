import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import Table from "./Components/Table";
import './Styling/index.css'
import Panel from "./Components/Panel";
function App() {
  return (
    <div className="App">
      <Table/>
      <Panel/>
    </div>
  );
}

export default App;
