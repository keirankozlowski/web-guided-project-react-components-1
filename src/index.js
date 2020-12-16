import React from "react";
import { render } from "react-dom";

function App() {
  return (
    <div className="container">
      <h1>Welcome to React, Web PT 24!</h1>
    </div>
  );
}

render(
  <App />,
  document.querySelector("#root")
);
