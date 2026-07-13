import React from 'react';

// Style 1: if/else inside a regular function
function BookDetails({ available }) {
  if (available) {
    return <p>Book Details: "Clean Code" is available.</p>;
  } else {
    return <p>Book Details: "Clean Code" is currently unavailable.</p>;
  }
}

export default BookDetails;
