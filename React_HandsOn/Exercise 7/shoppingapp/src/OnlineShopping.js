import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { itemname: 'Laptop', price: 55000 },
      { itemname: 'Headphones', price: 2000 },
      { itemname: 'Keyboard', price: 1500 },
      { itemname: 'Monitor', price: 8000 },
      { itemname: 'Mouse', price: 500 }
    ];
  }

  render() {
    return (
      <div>
        <h2>Online Shopping Cart</h2>
        <ul>
          {this.items.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))}
        </ul>
      </div>
    );
  }
}

export default OnlineShopping;
