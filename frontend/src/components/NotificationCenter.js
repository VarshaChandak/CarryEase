// src/components/NotificationCenter.js
import React, { useState, useEffect } from 'react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications (this can be from an API or static data)
    const fetchedNotifications = [
      { id: 1, message: 'Your booking has been confirmed!' },
      { id: 2, message: 'Your porter is on the way!' },
      { id: 3, message: 'Payment successful!' },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Notification Center</h2>
      <div className="list-group">
        {notifications.map((notification) => (
          <a key={notification.id} href="#" className="list-group-item list-group-item-action">
            {notification.message}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;
