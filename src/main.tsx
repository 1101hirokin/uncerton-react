import React from "react";
import ReactDOM from "react-dom/client";
import SampleApp from "./SampleApp.tsx";
import { Uncerton } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Uncerton>
      <SampleApp />
    </Uncerton>
  </React.StrictMode>
);
