import React, { useState, useEffect }  from 'react';
import ShowList from './ShowList';
import './App.css'

export default function App() {
  const [showsData, setShowsData] = useState([]); 

  useEffect(() => {
      fetch('http://localhost:4000/rest/shows')
      .then(response => response.json())
      .then(dataShows => setShowsData(dataShows))
      }, [])

  console.log("showData:", showsData)

  return (
    <div>
      <ShowList shows={showsData}/>
    </div>
  );
}
