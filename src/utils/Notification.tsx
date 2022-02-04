import React, { useState, useEffect } from "react";
import { NotificationWrapper } from "../stylesheets/Notification.styles";
import errorIcon from "../assets/images/error.svg"

interface NotificationProps {
  message?: string | null | unknown,
  error?: boolean,
}

const Notification: React.FC<NotificationProps> = ({ message = 'Network Error! Re-connecting...', error }) => {
  const [top, setTop] = useState(-110);

  useEffect(() => {
    setTop(0);

    const timeout = setTimeout(() => {
      setTop(-110);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <NotificationWrapper top={top} error={error}>
      {error && <img src={errorIcon} width="16px" alt="cloud error" />} {message}
    </NotificationWrapper>
  );
}

export default Notification;