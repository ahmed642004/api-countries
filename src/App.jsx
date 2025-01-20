import { Route, Routes } from "react-router";
import "./App.css";
import AppLayout from "./assets/ui/AppLayout";

import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/:alpha2Code" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;
