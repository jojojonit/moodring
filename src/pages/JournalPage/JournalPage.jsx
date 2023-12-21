import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import MoonPage from "../MoonPage/MoonPage";
import Navbar from "../../components/Navbar/Navbar";

const token =
  "patKTXIqrZPZMbcrF.d8be823da8d1aeff586598a1f97f961cf33ba3de31cc4a0e03c2f7962ea0989a";

export default function JournalPage({ handleNewEntry }) {
  const [input, setInput] = useState({
    title: "",
    body: "",
    mood: "",
    date: new Date(),
  });
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleTitleChange = (event) => {
    setInput({ ...input, title: event.target.value });
  };
  const handleBodyChange = (event) => {
    // console.log(event.target.value);
    setInput({ ...input, body: event.target.value });
  };
  const handleMoodChange = (event) => {
    // const selectedMood = parseInt(event.target.value, 10);
    setInput({ ...input, mood: event.target.value });
  };
  const handleDateChange = (date) => {
    setInput({ ...input, date });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedDate = format(input.date, "dd MMMM yyyy");
    const data = {
      fields: {
        body: input.body,
        mood: input.mood,
        title: input.title,
        date: formattedDate,
      },
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
    setInput({
      title: "",
      body: "",
      mood: "",
      date: new Date(),
    });
    navigate("/entries", { replace: true });
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        {/* <h2 style={{ paddingLeft: "2%" }}>so, how are you feeling?</h2> */}
        <form onSubmit={handleSubmit}>
          <div className="form-left">
            <label>Title:</label>
            <input
              id="title"
              name="title"
              type="title"
              placeholder="title"
              onChange={handleTitleChange}
              value={input.title}
            />

            <label>Body:</label>
            <textarea
              id="body"
              name="body"
              placeholder="start writing..."
              onChange={handleBodyChange}
              value={input.body}
              rows={10}
              cols={50}
            />
          </div>

          <div className="form-right">
            <label>Mood:</label>
            <select
              id="mood"
              name="mood"
              onChange={handleMoodChange}
              value={input.mood}
            >
              <option value="" disabled>
                how are you feeling?
              </option>
              <option value="dreamy">dreamy</option>
              <option value="energetic">energetic</option>
              <option value="inspired">inspired</option>
              <option value="calm">calm</option>
              <option value="introspective">introspective</option>
            </select>

            <DatePicker
              selected={input.date}
              // onSelect={handleDateSelect}
              onChange={handleDateChange}
              dateFormat="dd MMMM yyyy"
            />

            <MoonPage startDate={input.date} />
            <button>submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
