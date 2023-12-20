import { Link } from "react-router-dom";

export default function EntryCard({ id, title, body, mood, phase, date }) {
  return (
    <>
      <Link to={`/entries/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
      <p>{mood}</p>
      <p>{phase}</p>
      <p>{date}</p>
    </>
  );
}
