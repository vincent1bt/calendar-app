import schema from 'schema';
const entities = schema.get("entities");
import uniqueId from 'helpers/uniqueId';

export const putState = () => {
  return dispatch => {
    dispatch({
      type: 'GET_CURRENT_DATE'
    });

    dispatch({
      type: 'GET_MOVIES',
      movies: entities.get('movies')
    });

    dispatch({
      type: 'GET_REMINDERS',
      reminders: entities.get('reminders')
    });

    dispatch({
      type: 'GET_EVENTS',
      events: entities.get('events')
    });

    dispatch({
      type: 'GET_MONTHS',
      months: entities.get('months')
    });
  }
}

export const createReminder = (text, eventId, monthId) => {
  return dispatch => {
    const id = uniqueId();

    dispatch({
      type: "CREATE_REMINDER",
      text,
      id
    });

    dispatch({
      type: "ADD_REMINDER_TO_EVENT",
      eventId,
      reminderId: id
    });

    dispatch({
      type: 'ADD_EVENT_TO_MONTH',
      eventId,
      monthId
    });
  }
}

// export const getMovies = () => {
//   return {
//     type: 'GET_MOVIES',
//     movies: entities.get('movies')
//   }
// }

// export const getReminders = () => {
//   return {
//     type: 'GET_REMINDERS',
//     reminders: entities.get('reminders')
//   }
// }

// export const getEvents = () => {
//   return {
//     type: 'GET_EVENTS',
//     events: entities.get('events')
//   }
// }
//
// export const getMonths = () => {
//   return {
//     type: 'GET_MONTHS',
//     months: entities.get('months')
//   }
// }
