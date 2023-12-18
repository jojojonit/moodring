import { useState } from "react";

const token =
  "patKTXIqrZPZMbcrF.d8be823da8d1aeff586598a1f97f961cf33ba3de31cc4a0e03c2f7962ea0989a";

export default function JournalPage({ handleNewEntry }) {
  const [input, setInput] = useState({
    title: "",
    body: "",
    mood: "",
    // phase: "",
    date: "",
  });

  const handleTitleChange = (event) => {
    setInput({ ...input, title: event.target.value });
  };
  const handleBodyChange = (event) => {
    console.log(event.target.value);
    setInput({ ...input, body: event.target.value });
  };
  const handleMoodChange = (event) => {
    const selectedMood = parseInt(event.target.value, 10);
    setInput({ ...input, mood: selectedMood });
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      records: [
        {
          fields: {
            body: input.body,
            mood: input.mood,
            title: input.title,
          },
        },
      ],
    };
    const url = "https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Failed to create entry. Status: ${response.status}`);
      const errorData = await response.json();
      console.error("Error details:", errorData);
      return;
    }

    const jsonData = await response.json();
    handleNewEntry(jsonData);
    // Clear the form after successful submission
    setInput({
      title: "",
      body: "",
      mood: "",
      // Uncomment and add other fields if needed
      // phase: "",
      // date: "",
    });
  };
  //     createNewEntry();
  //   };

  return (
    <>
      <h2>so, how are you feeling?</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            id="title"
            name="title"
            onChange={handleTitleChange}
            value={input.title}
          />

          <br />
          <br />

          <textarea
            id="body"
            name="body"
            onChange={handleBodyChange}
            value={input.body}
            rows={10}
            cols={50}
          />
          <br />
          <select
            id="mood"
            name="mood"
            onChange={handleMoodChange}
            value={input.mood}
            size={5}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </>
  );
}
