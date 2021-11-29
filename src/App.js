import { useState, useEffect } from "react";
import Peeps from "./components/Peeps";
import Header from "./components/Header";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en-GB.json'
import "./App.css";
import AddPeep from "./components/AddPeep";

TimeAgo.addDefaultLocale(en);

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
    return data;
  };

  // const addPeep = async (peep) => {
  //   const res = await fetch("")
  // }

  return (
    <>
      <div className="container">
        <Header />
        <AddPeep />
        <Peeps peeps={peeps}/>
      </div>
    </>
  );
}

export default App;
