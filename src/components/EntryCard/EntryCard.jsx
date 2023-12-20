import { Link } from "react-router-dom";

export default function EntryCard({ id, title, body, mood, phase, date }) {
  return (
    <>
      <div className="entry-card">
        <div className="entry-title">
          <Link to={`/entries/${id}`}>
            <h2>{title}</h2>
          </Link>
        </div>
        <p>{body}</p>
        <p>{mood}</p>
        <p>{phase}</p>
        <p>{date}</p>
      </div>
    </>
  );
}
