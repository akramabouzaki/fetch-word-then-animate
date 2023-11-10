import React, { useEffect, useState } from "react";
import List from "./List";

export default function App() {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState("Loading...");

  async function fetchData() {
    const STATUSOK = 200;
    const ERRORMESSAGE = "Error Fetching Flag";
    const wordLength = Math.round(Math.random() * 10 + 2);
    const APIURL =
      "https://random-word-api.herokuapp.com/word?length=" + wordLength;
    const response = await fetch(APIURL);

    if (response.status === STATUSOK) {
      let data = await response.text();
      data = data.replace("[\"", "");
      data = data.replace("\"]", "");
      setFlag(data);
      setLoading("");
    } else {
      setLoading(ERRORMESSAGE);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <h1>{loading}</h1>
      <button onClick={(e) => fetchData()}>Fetch Random Word</button>
      <List listItems={flag}></List>
    </div>
  );
}
