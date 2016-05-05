import { getData } from 'helpers/getDate';
import uniqueId from 'helpers/uniqueId';
import request from 'superagent';

export const putState = () => {
  return dispatch => {
    dispatch({
      type: 'GET_CURRENT_DATE'
    });

    request.get("/movies").end((err, res) => {
      const entities = getData(res.body.months);
      dispatch({
        type: 'GET_MOVIES',
        movies: entities.movies
      });

      dispatch({
        type: 'GET_EVENTS',
        events: entities.events
      });

      dispatch({
        type: 'GET_MONTHS',
        months: entities.months
      });
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
