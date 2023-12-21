import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleEntry({ entries }) {
  const { id } = useParams();
  const entry = entries.find((entry) => entry.id === id);
  const navigate = useNavigate();

  const handleBackToEntries = () => {
    navigate("/entries");
  };

  return (
    <>
      <h1>{entry.fields.title}</h1>
      <p>date: {entry.fields.date}</p>
      <p>mood: {entry.fields.mood}</p>
      <p>{entry.fields.body}</p>
      <button onClick={handleBackToEntries}>back to entries</button>
    </>
  );
}
