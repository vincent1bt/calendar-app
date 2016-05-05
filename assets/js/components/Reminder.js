import React from 'react';

const Reminder = ({ reminder }) => {
  return (
    <div className="reminder">
        <p>{reminder.get("text")}</p>
    </div>
  );
}

export default Reminder;
