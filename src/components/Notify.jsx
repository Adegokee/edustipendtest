import React, {useState} from 'react'

const Notify = () => {

    const [notification, setNotification] = useState('');

    const handleShowNotification = () => {
        // Simulate displaying a notification
        setNotification('This is a notification!');
        // Clear the notification after 3 seconds
        setTimeout(() => {
          setNotification('');
        }, 3000);
      };
    
  return (
    <div>
       <h2>Notification Component</h2>
      <button onClick={handleShowNotification}>Show Notification</button>
      {notification && <div className="notification">{notification}</div>}
    </div>
  )
}

export default Notify
