import React from 'react';

const players = [
  { name: 'Player 1', score: 45 }, { name: 'Player 2', score: 82 },
  { name: 'Player 3', score: 65 }, { name: 'Player 4', score: 30 },
  { name: 'Player 5', score: 90 }, { name: 'Player 6', score: 55 },
  { name: 'Player 7', score: 20 }, { name: 'Player 8', score: 75 },
  { name: 'Player 9', score: 40 }, { name: 'Player 10', score: 60 },
  { name: 'Player 11', score: 15 }
];

function ListofPlayers() {
  // ES6 map()
  const playerNames = players.map((p) => p.name);
  // ES6 arrow function filter
  const lowScorers = players.filter((p) => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerNames.map((name, i) => <li key={i}>{name}</li>)}</ul>
      <h3>Players scoring below 70</h3>
      <ul>{lowScorers.map((p, i) => <li key={i}>{p.name}: {p.score}</li>)}</ul>
    </div>
  );
}

export default ListofPlayers;
