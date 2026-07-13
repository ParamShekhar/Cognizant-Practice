import React from 'react';

// Style 2: ternary operator
function BlogDetails({ published }) {
  return <p>Blog Details: {published ? 'This post is published.' : 'This post is a draft.'}</p>;
}

export default BlogDetails;
