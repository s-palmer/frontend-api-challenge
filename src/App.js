import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    const fetchPeeps = async () => {
      const res = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      const data = await res.json();
      console.log(data);
      return data;
    }

    fetchPeeps();
  }, [])



  return (
    <>
    <div className="App">
        <p>Hello World</p>
    </div>
    </>
    
  );
}

export default App;