import React, { PropTypes } from 'react';

const CreateReminder = ({ onReminderClick, eventId, monthId }) => {
  let input;
  return (
    <div className="reminder-input">
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        onReminderClick(input.value, eventId, monthId)
        input.value = ''
      }}>
      Add
      </button>
    </div>
  );
}

CreateReminder.propTypes = {
  onReminderClick: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  monthId: PropTypes.string.isRequired
}

export default CreateReminder;
