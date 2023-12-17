import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import JournalPage from "./pages/JournalPage/JournalPage";
import EntriesPage from "./pages/EntriesPage/EntriesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/entries" element={<EntriesPage />} />
      </Routes>
    </>
  );
}

export default App;
