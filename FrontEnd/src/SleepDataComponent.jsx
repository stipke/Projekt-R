import React, { useState, useEffect } from 'react';

const SleepDataComponent = () => {
  const [sleepData, setSleepData] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true); // For tracking loading state

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:8080/api/sleep')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the full response to inspect its structure
        setSleepData(data.sleepData || []); // Assume sleepData is inside the object, or return empty array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching sleep data:', error);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while data is being fetched
  }

  if (!sleepData) {
    return <div>No data available</div>;  // Show message if no data is available
  }

  return (
    <div>
      <h1>Sleep Data</h1>
      <ul>
        {console.log(sleepData)}  {/* Check the value and type of sleepData */}
        {Array.isArray(sleepData) && sleepData.length > 0 ? (
          sleepData.map((entry, index) => (
            <li key={index}>
              <p>Timestamp: {entry.timestamp}</p>
              <p>Event: {entry.event}</p>
              <p>Duration: {entry.duration ? entry.duration : "Not available"}</p>
            </li>
          ))
        ) : (
          <div>No valid sleep data available</div> // In case it's not an array or it's empty
        )}
      </ul>
    </div>
  );
  

};

export default SleepDataComponent;
