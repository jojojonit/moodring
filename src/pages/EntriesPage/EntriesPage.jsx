import EntryCard from "../../components/EntryCard/EntryCard";
import { useEffect, useState } from "react";
import JournalEntry from "../../components/JournalEntry/JournalEntry";

export default function EntriesPage({ entries }) {
  return (
    <>
      <h2>entries page</h2>

      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          title={entry.fields.title}
          body={entry.fields.body}
          mood={entry.fields.mood}
          phase={entry.fields.phase}
          date={entry.fields.date}
        />
      ))}
    </>
  );
}
