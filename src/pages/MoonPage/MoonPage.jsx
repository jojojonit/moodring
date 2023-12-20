import { useEffect, useState } from "react";

const token =
  "NzM0M2M2ZDEtNzNjMS00NWI2LWIzMzQtZDE0YzIwNTNjMzljOmEyZmY2MGQ5YmFmMWYyMTZlZGZlMTNhNTNkYTY3MmI1MWZhOWNjZWZhZDllZTk1ZTUzZTc2NmVkZTBiMjI4ZDkxNjM4MmNiNTllZjJmZTFmOWE2ODViM2Q2ZTYzNDFkYzJlMWFlZmMzMzVjMTJkMGNkYWI2YWQ4YjkyNjMxNTdmNzgyZDFkNTYxNmU0N2ExNzg5ZmMyYTg1M2RmNWRkNWNhZmE2ZTA2NzE5ZjY4ZmRlOWNmOGQ1YTNlNmM5OTUyYjExZGIyNjYwNjk5YjljMDYzZmNmNmQ1ZWZlYWE0NGI0";

const fetchMoonPhase = async (startDate, setPhase) => {
  const url = "https://api.astronomyapi.com/api/v2/studio/moon-phase";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      format: "svg",
      style: {
        moonStyle: "default",
        backgroundStyle: "solid",
        backgroundColor: "transparent",
        headingColor: "transparent",
        textColor: "black",
      },
      observer: {
        latitude: 6.56774,
        longitude: 79.88956,
        date: startDate,
      },
      view: {
        type: "portrait-simple",
        orientation: "south-up",
      },
    }),
  });
  const moonPhaseData = await response.json();
  setPhase(moonPhaseData.data);
};

export default function MoonPage({ startDate }) {
  const [phase, setPhase] = useState({});

  useEffect(() => {
    fetchMoonPhase(startDate, setPhase);
  }, [startDate]);

  return (
    <>
      <p>moon phase</p>
      <img
        src={phase.imageUrl}
        alt="Moon Phase"
        style={{ width: "80%", paddingLeft: "11.5%", paddingBottom: "12%" }}
      />
    </>
  );
}
