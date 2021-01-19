/* The following line can be included in your src/index.js or App.js file*/
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./App.css";
import { InboxScreen } from "./components/InboxScreen";

function App() {
  return (
    <div className="App">
      <InboxScreen />
    </div>
  );
}

export default App;
