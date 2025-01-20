import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CountryContextProvider } from "./context/CountryContext.jsx";
import { BrowserRouter } from "react-router";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <DarkModeProvider>
        <CountryContextProvider>
          <App />
        </CountryContextProvider>
      </DarkModeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
