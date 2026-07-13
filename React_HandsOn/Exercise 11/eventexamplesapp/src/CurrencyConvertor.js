import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState(0);
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    setEuro((rupees / 90).toFixed(2)); // approximate INR -> EUR rate
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;
