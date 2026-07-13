import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const refNumber = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint submitted for ${employeeName}. Reference Number: ${refNumber}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee Name:
        <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
      </label>
      <br />
      <label>
        Complaint:
        <textarea value={complaint} onChange={(e) => setComplaint(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintRegister;
