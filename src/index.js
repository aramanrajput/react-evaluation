import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppContextProvider from "./Context/AppContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 
    <BrowserRouter>
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
   
    
 
);
