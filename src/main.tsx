import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./store";
=======
>>>>>>> main
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
=======
    <App />
>>>>>>> main
  </StrictMode>
);
