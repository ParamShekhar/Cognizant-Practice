import React from 'react';

const oddTeam = ['Player A', 'Player C', 'Player E'];
const evenTeam = ['Player B', 'Player D', 'Player F'];

const T20players = ['Rohit', 'Virat', 'Bumrah'];
const RanjiTrophyPlayers = ['Cheteshwar', 'Ajinkya', 'Mayank'];

function IndianPlayers() {
  // ES6 destructuring
  const [firstOdd, ...restOdd] = oddTeam;
  const [firstEven, ...restEven] = evenTeam;

  // ES6 spread/merge
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Player (first): {firstOdd}, Rest: {restOdd.join(', ')}</h2>
      <h2>Even Team Player (first): {firstEven}, Rest: {restEven.join(', ')}</h2>
      <h3>Merged T20 + Ranji Trophy Players</h3>
      <ul>{allPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
}

export default IndianPlayers;
