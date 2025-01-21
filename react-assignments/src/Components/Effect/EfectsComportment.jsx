import React, { useState, useEffect } from 'react';

const GameOfThronesCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameOfThronesCharacters;
