import React, { useState } from 'react';
import './MeaningFinder.css'; // Import the CSS file

function MeaningFinder() {
  const [name, setName] = useState('');

  const handleButtonClick = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Print the API response in the console
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  };

  return (
    <div className="container">
      <h1>Age Finder</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      <button onClick={handleButtonClick}>
        Find age
      </button>
    </div>
  );
}

export default MeaningFinder;
