import { combineReducers } from 'redux';
import currentDate from 'reducers/currentDate';
import months from 'reducers/months';
import events from 'reducers/events';
import reminders from 'reducers/reminders';
import movies from 'reducers/movies';

const reducers = combineReducers({
  currentDate,
  months,
  events,
  movies,
  reminders
});

export default reducers;
