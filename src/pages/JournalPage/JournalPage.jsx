import { useState } from "react";
import JournalEntry from "../../components/JournalEntry/JournalEntry";

export default function JournalPage() {
  const handleAdd = () => {};
  return (
    <>
      <h2>so, how are you feeling?</h2>
      <JournalEntry addToJournal={handleAdd} />
    </>
  );
}
