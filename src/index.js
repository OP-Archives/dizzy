import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";
import "simplebar-react/dist/simplebar.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);