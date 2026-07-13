import React from 'react';

// Style 3: logical && operator (element variable)
function CourseDetails({ enrolled }) {
  let message;
  if (enrolled) {
    message = <p>Course Details: You are enrolled in "React Fundamentals".</p>;
  }

  return (
    <div>
      {enrolled && <p>Course Details: You are enrolled in "React Fundamentals".</p>}
      {!enrolled && <p>Course Details: You are not enrolled yet.</p>}
    </div>
  );
}

export default CourseDetails;
