import { Link } from "react-router-dom";

export default function EntryCard({
  id,
  title,
  body,
  mood,
  phase,
  date,
  handleDelete,
}) {
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
        <button onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </>
  );
}
