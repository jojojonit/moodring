import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import JournalPage from "./pages/JournalPage/JournalPage";
import EntriesPage from "./pages/EntriesPage/EntriesPage";
import { useEffect, useState } from "react";
import MoonPage from "./pages/MoonPage/MoonPage";
import SingleEntry from "./pages/SingleEntry/SingleEntry";
import EntryCard from "./components/EntryCard/EntryCard";

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
    setEntries([entry, ...entries]);
  };

  const handleDelete = async (id) => {
    const url = `https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error("Failed to delete entry. Status:", response.status);
      const errorData = await response.json();
      console.error("Error details:", errorData);
      return;
    }

    const jsonData = await response.json();
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/journal"
          element={<JournalPage handleNewEntry={addEntry} />}
        />
        <Route
          path="/entries"
          element={
            <EntriesPage entries={entries} handleDelete={handleDelete} />
          }
        />
        <Route path="/moon" element={<MoonPage />} />
        <Route path="entries/:id" element={<SingleEntry />} />
      </Routes>
    </>
  );
}

export default App;
