import { Map } from 'immutable';

const months = (state = Map(), action) => {
  switch (action.type) {
    case 'GET_MONTHS':
      return state.merge(action.months);
    case 'ADD_EVENT_TO_MONTH':
      return addEvent(state, action);
    default:
      if(action.months) {
        return state.merge(action.months);
      }
      return state;
  }
}

function addEvent(state, action) {
  const monthString = action.monthId.toString();
  if(state.get(monthString).get("events").includes(action.eventId)) {
    return state;
  } else {
    return state.updateIn([monthString, "events"], (events) => {
      return events.push(action.eventId);
    });
  }
}

export default months;
