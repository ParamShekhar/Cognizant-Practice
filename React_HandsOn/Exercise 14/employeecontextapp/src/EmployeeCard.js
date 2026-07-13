import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <span>{employee.name}</span>
      <button className={theme === 'dark' ? 'btn-dark' : 'btn-light'}>View Profile</button>
    </div>
  );
}

export default EmployeeCard;
