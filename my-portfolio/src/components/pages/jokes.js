import React, { useState, useEffect } from 'react';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setJoke(data.value);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h2>Chuck Norris Joke</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default ChuckNorrisJoke;
