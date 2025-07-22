// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assure-toi que App.jsx est bien là

import "./index.css"; // si tu utilises Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default Main ;
