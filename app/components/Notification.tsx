"use Client";
import React, { useEffect } from "react";

interface NotificationProps {
  message: string;
  type: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 60000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed mx-auto md:mx-64 top-40 text-center justify-end transform -translate-y-20 transition-transform ease-in-out duration-300 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white px-4 py-2 shadow-lg rounded`}
    >
      {message}
    </div>
  );
};

export default Notification;
