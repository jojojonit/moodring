import EntryCard from "../../components/EntryCard/EntryCard";
import { useEffect, useState } from "react";
import JournalEntry from "../../components/JournalEntry/JournalEntry";
import Navbar from "../../components/Navbar/Navbar";

export default function EntriesPage({ entries, handleDelete }) {
  return (
    <>
      <Navbar />
      <div className="entry-container">
        {entries.map((entry) => (
          <EntryCard
            key={entry.id}
            id={entry.id}
            title={entry.fields.title}
            body={entry.fields.body}
            mood={entry.fields.mood}
            phase={entry.fields.phase}
            date={entry.fields.date}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
