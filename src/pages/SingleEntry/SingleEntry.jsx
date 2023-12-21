import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

export default function SingleEntry({ entries }) {
  const { id } = useParams();
  console.log(entries);
  console.log("Entry ID:", id);
  const entry = entries.find((entry) => entry.id === id);
  const navigate = useNavigate();

  const handleBackToEntries = () => {
    navigate("/entries");
  };

  const formattedDate = format(new Date(entry.fields.date), "dd MMMM yyyy");

  return (
    <>
      <h1>{entry.fields.title}</h1>
      <p>date: {formattedDate}</p>
      {/* <p>date: {entry.fields.date}</p> */}
      <p>mood: {entry.fields.mood}</p>
      <p>{entry.fields.body}</p>
      <button onClick={handleBackToEntries}>back to entries</button>
    </>
  );
}
