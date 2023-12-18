import EntryCard from "../../components/EntryCard/EntryCard";
import { useEffect, useState } from "react";

const token =
  "patKTXIqrZPZMbcrF.d8be823da8d1aeff586598a1f97f961cf33ba3de31cc4a0e03c2f7962ea0989a";

export default function EntriesPage({ entriesList }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "https://api.airtable.com/v0/appRIGgG5hdxdDksC/Table%201";
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const entriesData = await response.json();
      setEntries(entriesData.records);
    })();
  }, []);

  return (
    <>
      <h2>entries page</h2>
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          title={entry.fields.title}
          body={entry.fields.body}
          mood={entry.fields.mood}
          phase={entry.fields.phase}
          date={entry.fields.date}
        />
      ))}
    </>
  );
}
