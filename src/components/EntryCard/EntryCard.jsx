import { Link } from "react-router-dom";

// const moodColors = {
//   dreamy: "#FFC6D9",
//   energetic: "#FFFB83",
//   inspired: "#D2FF5F",
//   calm: "#AEF1EF",
//   introspective: "#F8B9FF",
// };

const moodColors = {
  dreamy: "#ffc6d97f",
  energetic: "#fffb8380",
  inspired: "#d2ff5f7f",
  calm: "#aef1ef7f",
  introspective: "#f8b9ff7f",
};

export default function EntryCard({
  id,
  title,
  body,
  mood,
  phase,
  date,
  handleDelete,
}) {
  const cardStyle = {
    backgroundImage: `radial-gradient(${moodColors[mood]}, transparent)`,
  };
  return (
    <>
      <div className="entry-card" style={cardStyle}>
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
