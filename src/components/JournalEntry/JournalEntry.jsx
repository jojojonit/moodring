import { useState } from "react";

const token =
  "patKTXIqrZPZMbcrF.d8be823da8d1aeff586598a1f97f961cf33ba3de31cc4a0e03c2f7962ea0989a";

export default function JournalEntry({ createEntry }) {
  const [data, setData] = useState({
    title: "",
    body: "",
    mood: "",
    phase: "",
    date: "",
  });

  const handleTitleChange = (event) => {
    setData({ ...data, title: event.target.value });
  };
  const handleBodyChange = (event) => {
    console.log(event.target.value);
    setData({ ...data, body: event.target.value });
  };
  const handleMoodChange = (event) => {
    setData({ ...data, mood: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const createEntry = async () => {
      const url = "https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      addEntry(jsonData);
    };
    createEntry();
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const data = Object.fromEntries(formData);
  //     const url = "https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201";
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const jsonData = await response.json();
  //     setData({ ...data, ...jsonData });
  //     createEntry(jsonData);
  //   };

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
            id="body"
            name="body"
            onChange={handleBodyChange}
            value={data.body}
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
          <button type="submit">submit</button>
        </fieldset>
      </form>
    </>
  );
}
