import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const token =
  "patKTXIqrZPZMbcrF.d8be823da8d1aeff586598a1f97f961cf33ba3de31cc4a0e03c2f7962ea0989a";

export default function EditPage({ entries }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const entry = entries.find((entry) => entry.id === id);
  const [updatedEntry, setUpdatedEntry] = useState({
    title: entry.fields.title,
    body: entry.fields.body,
  });

  const [formSubmit, setFormSubmit] = useState(false);

  const handleTitleChange = (event) => {
    setUpdatedEntry({ ...updatedEntry, title: event.target.value });
  };

  const handleBodyChange = (event) => {
    setUpdatedEntry({ ...updatedEntry, body: event.target.value });
  };

  const updateEntry = async () => {
    const url = `https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201/${id}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fields: updatedEntry,
        }),
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error updating entry:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateEntry();
      navigate("/entries");
    } catch (error) {
      console.error("error updating", error);
    }
  };

  return (
    <>
      <h1>edit page</h1>
      <form onSubmit={handleSubmit}>
        <label>title:</label>
        <input
          name="title"
          value={updatedEntry.title}
          onChange={handleTitleChange}
        />

        <label>body</label>
        <textarea
          name="body"
          value={updatedEntry.body}
          onChange={handleBodyChange}
        />

        <button>update</button>
      </form>
    </>
  );
}
