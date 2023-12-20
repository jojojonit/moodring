export default function SingleEntry() {
  return (
    <>
      <h1>{title}</h1>
      <p>
        <strong>date:</strong>
        {date}
      </p>
      <p>
        <strong>mood:</strong>
        {mood}
      </p>
      <p>{body}</p>
    </>
  );
}
