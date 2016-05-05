import React, { PropTypes } from 'react';
import CreateReminder from 'components/CreateReminder';
import getEvents from 'helpers/getEvents';

const Day = ({ monthName, monthId, eventId, dayId, events, reminderClick }) => {
  const event = getEvents(events);
  return (
    <div>
      <section className="titles-day">
        <h2>Day {dayId}, {monthName}</h2>
      </section>
      <section className="movies">
        <h2 className="movies-title">Movies</h2>
        {event.movies}
      </section>
      <section className="reminders">
        <h2 className="reminders-title">Reminders</h2>
        {event.reminders}
        <CreateReminder onReminderClick={reminderClick} eventId={eventId} monthId={monthId} />
      </section>
    </div>
  )
}

Day.propTypes =  {
  monthName: PropTypes.string.isRequired,
  monthId: PropTypes.string.isRequired,
  eventId: PropTypes.number.isRequired,
  dayId: PropTypes.string.isRequired,
  events: PropTypes.object,
  reminderClick: PropTypes.func.isRequired
}
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// };

export default Day;
