import { fromJS, Map } from 'immutable';

const events = (state = Map(), action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return state.merge(action.events);
    case 'ADD_REMINDER_TO_EVENT':
      return addReminder(state, action);
    default:
      if(action.events) {
        return state.merge(action.events);
      }
      return state;
  }
}

function addReminder(state, action) {
  const stringId = action.eventId.toString();
  if(state.get(stringId)) {
    return state.updateIn([stringId, "reminders"], (reminders) => {
      return reminders.push(action.reminderId);
    });
  } else {
    const newEvent = {};
    newEvent[action.eventId] = {
      id: action.eventId,
      movies: [],
      reminders: [action.reminderId]
    }
    return state.set(stringId, fromJS(newEvent[action.eventId]));
  }
}

export default events;
