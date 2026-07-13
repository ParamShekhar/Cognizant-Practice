import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <li>
        {this.props.itemname} - ₹{this.props.price}
      </li>
    );
  }
}

export default Cart;
