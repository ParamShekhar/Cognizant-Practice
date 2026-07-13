import React from 'react';
import CohortDetails from './CohortDetails';
import cohortData from './CohortData';

function App() {
  return (
    <div>
      <h1>Cognizant Academy — Cohort Dashboard</h1>
      {cohortData.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
