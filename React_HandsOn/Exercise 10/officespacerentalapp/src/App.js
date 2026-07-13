import React from 'react';

const office = { name: 'Cognizant Tower', rent: 75000, address: 'Bangalore, India' };

const officeList = [
  { name: 'Tech Park A', rent: 45000, address: 'Chennai, India' },
  { name: 'Tech Park B', rent: 62000, address: 'Hyderabad, India' },
  { name: 'Tech Park C', rent: 58000, address: 'Pune, India' }
];

function App() {
  const heading = <h1>Office Space Rentals</h1>;
  const imageAttr = <img src="https://via.placeholder.com/150" alt="Office Space" width="150" />;

  return (
    <div>
      {heading}
      {imageAttr}

      <h2>{office.name}</h2>
      <p>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>

      <h3>Available Spaces</h3>
      <ul>
        {officeList.map((item, i) => (
          <li key={i} style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
            {item.name} — ₹{item.rent} — {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
