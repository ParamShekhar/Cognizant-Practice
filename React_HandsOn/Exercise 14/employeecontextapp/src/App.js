import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';

const employees = [
  { id: 1, name: 'Ravi Kumar' },
  { id: 2, name: 'Sneha Iyer' }
];

function App() {
  const [theme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <h1>Employee Management</h1>
      <EmployeesList employees={employees} />
    </ThemeContext.Provider>
  );
}

export default App;
