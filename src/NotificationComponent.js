import React, { useState } from 'react';
import './NotificationComponent.css';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New update available!' },
    { id: 2, message: 'You have 3 new messages.' },
  ]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>✖️</button>
        </div>
      ))}
    </div>
  );
};

export default NotificationComponent;
