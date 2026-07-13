import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>{name}'s Score Card</h2>
      <p>School: {school}</p>
      <p>Total: {total}</p>
      <p>Goal: {goal}</p>
      <p>Average Score: {average}</p>
    </div>
  );
}

export default CalculateScore;
