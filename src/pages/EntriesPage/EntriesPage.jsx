import EntryCard from "../../components/EntryCard/EntryCard";
import { useState } from "react";

import { format } from "date-fns";
import Navbar from "../../components/Navbar/Navbar";

export default function EntriesPage({ entries, handleDelete }) {
  const [selectedMood, setSelectedMood] = useState(null);

  const filteredEntries = selectedMood
    ? entries.filter((entry) => entry.fields.mood === selectedMood)
    : entries;

  const handleFilter = (mood) => {
    setSelectedMood(mood);
  };

  const clearFilter = () => {
    setSelectedMood(null);
  };

  return (
    <>
      <Navbar />
      <div
        className="entry-container"
        style={{ overflowX: "auto", overflowY: "hidden" }}
      >
        {filteredEntries.map((entry) => (
          <EntryCard
            key={entry.id}
            id={entry.id}
            title={entry.fields.title}
            body={entry.fields.body}
            mood={entry.fields.mood}
            phase={entry.fields.phase}
            date={format(new Date(entry.fields.date), "dd MMMM yyyy")}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <button onClick={() => handleFilter("dreamy")}>dreamy</button>
      <button onClick={() => handleFilter("energetic")}>energetic</button>
      <button onClick={() => handleFilter("productive")}>productive</button>
      <button onClick={() => handleFilter("calm")}>calm</button>
      <button onClick={() => handleFilter("introspective")}>
        introspective
      </button>
      <button onClick={clearFilter}>reset</button>
    </>
  );
}
