export default function EntryCard({ id, title, body, mood, phase, date }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{mood}</p>
      <p>{phase}</p>
      <p>{date}</p>
    </>
  );
}
