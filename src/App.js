import { useState, useEffect } from "react";
import Peeps from "./components/Peeps";
import Header from "./components/Header";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import "./App.css";

TimeAgo.addDefaultLocale(en)

function App() {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    const getPeeps = async () => {
      const peepsFromServer = await fetchPeeps();
      setPeeps(peepsFromServer);
    }

    getPeeps();
  }, []);

  // Fetch Peeps from API

  const fetchPeeps = async () => {
    const res = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <>
      <div className="container">
        <Header />
        <Peeps peeps={peeps}/>
      </div>
    </>
  );
}

export default App;
