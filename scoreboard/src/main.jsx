import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ScoreContextProvider from "./components/contexts/ScoreContext.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <ScoreContextProvider>
    <App />
  </ScoreContextProvider>
);
