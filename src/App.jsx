import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import JournalPage from "./pages/JournalPage/JournalPage";
import EntriesPage from "./pages/EntriesPage/EntriesPage";
import { useEffect, useState } from "react";
import MoonPage from "./pages/MoonPage/MoonPage";

function App() {
  const [entries, setEntries] = useState([]);

  const token =
    "patKTXIqrZPZMbcrF.d8be823da8d1aeff586598a1f97f961cf33ba3de31cc4a0e03c2f7962ea0989a";

  useEffect(() => {
    (async function () {
      const url = "https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201";
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const entriesData = await response.json();
      const sortEntries = entriesData.records.sort((a, b) => {
        const dateA = new Date(a.fields.date);
        const dateB = new Date(b.fields.date);
        return dateB - dateA;
      });

      setEntries(sortEntries);
    })();
  }, []);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/journal"
          element={<JournalPage handleNewEntry={addEntry} />}
        />
        <Route path="/entries" element={<EntriesPage entries={entries} />} />
        <Route path="/moon" element={<MoonPage />} />
      </Routes>
    </>
  );
}

export default App;
