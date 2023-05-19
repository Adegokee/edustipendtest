import React, { useState } from 'react';



const Notification = () => {
    const [feedback, setFeedback] = useState('');

    const handleInputChange = (e) => {
        setFeedback(e.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        setFeedback('');
      };

  return (
    <div>
       <h2>Feedback Component</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your feedback"
          value={feedback}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Notification
