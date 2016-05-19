import { getData } from 'helpers/getDate';
import uniqueId from 'helpers/uniqueId';
import fetch from 'isomorphic-fetch'

export const putState = () => {
  return dispatch => {
    dispatch(getCurrentDate());
    return fetch(`http://${window.location.host}/movies`)
      .then((res) => res.json())
      .then((json) => {
        const entities = getData(json.months);

        dispatch(getMovies(entities.movies));
        dispatch(getEvents(entities.events));
        dispatch(getMonths(entities.months));
    });
  }
}

export const createReminder = (text, eventId, monthId) => {
  return dispatch => {
    const id = uniqueId();
    dispatch(addReminder(text, id));
    dispatch(addReminderToEvent(eventId, id));
    dispatch(addEventToMonth(eventId, monthId));
  }
}

const getCurrentDate = () => {
  return {
    type: 'GET_CURRENT_DATE'
  }
}

const getMovies = (movies) => {
  return {
    type: 'GET_MOVIES',
    movies: movies
  }
}

const getEvents = (events) => {
  return {
    type: 'GET_EVENTS',
    events: events
  }
}

const getMonths = (months) => {
  return {
    type: 'GET_MONTHS',
    months: months
  }
}

export const addReminder = (text, id) => {
  return {
    type: "CREATE_REMINDER",
    text,
    id
  }
}

export const addReminderToEvent = (eventId, reminderId) => {
  return {
    type: "ADD_REMINDER_TO_EVENT",
    eventId,
    reminderId: reminderId
  }
}

export const addEventToMonth = (eventId, monthId) => {
  return {
    type: 'ADD_EVENT_TO_MONTH',
    eventId,
    monthId
  }
}
