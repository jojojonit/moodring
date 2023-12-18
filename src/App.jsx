import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import JournalPage from "./pages/JournalPage/JournalPage";
import EntriesPage from "./pages/EntriesPage/EntriesPage";
import { useEffect, useState } from "react";

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
      setEntries(entriesData.records);
    })();
  }, []);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
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
      </Routes>
    </>
  );
}

export default App;
