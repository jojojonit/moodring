import { useState } from "react";

const initialForm = {
  title: "title",
  entry: "entry",
  mood: 5,
};

export default function JournalEntry({ addToJournal }) {
  const [data, setData] = useState(initialForm);

  const handleTitleChange = (event) => {
    setData({ ...data, title: event.target.value });
  };
  const handleEntryChange = (event) => {
    console.log(event.target.value);
    setData({ ...data, entry: event.target.value });
  };
  const handleMoodChange = (event) => {
    setData({ ...data, mood: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submitData = Object.fromEntries(formData);
    addToJournal(submitData);
  };
  const handleAdd = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            id="title"
            name="title"
            onChange={handleTitleChange}
            value={data.title}
          />

          <br />
          <br />

          <textarea
            id="entry"
            name="entry"
            onChange={handleEntryChange}
            value={data.entry}
            rows={10}
            cols={50}
          />
          <br />
          <select
            id="mood"
            name="mood"
            onChange={handleMoodChange}
            value={data.mood}
            size={5}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <br />
          <button onClick={handleAdd}>submit</button>
        </fieldset>
      </form>
    </>
  );
}
