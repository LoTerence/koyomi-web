'use client';

import { useEffect } from 'react';

export default function useDesktopNotification() {
  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('Browser does not support desktop notification');
      return;
    }
    if (Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }, []);
}

export const notifyMe = ({ title = 'Hello!', body = '' }) => {
  if (Notification.permission !== 'granted') return;

  const options = {
    body,
    icon: `/images/catheadlogo.svg`,
  };
  new Notification(title, options);
};
