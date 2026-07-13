import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function sayHello() {
  console.log('Hello, this is a static message.');
}

function sayWelcome(message) {
  console.log(message);
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    sayHello();
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const handlePress = (event) => {
    console.log('I was clicked', event.type);
  };

  return (
    <div>
      <h1>Event Examples App</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <button onClick={handlePress}>Synthetic Event Button</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
