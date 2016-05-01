import { fromJS } from 'immutable';

const reminders = (state = {}, action) => {
  switch (action.type) {
    case 'GET_REMINDERS':
      return action.reminders;
    case 'CREATE_REMINDER':
      return createReminder(state, action);
    default:
      if(action.reminders) {
        return action.reminders;
      }
      return state;
  }
}

function createReminder(state, action) {
  const id = action.id;
  const newReminder = {};
  newReminder[id] = {
    id: id.toString(),
    text: action.text
  }
  return state.set(id.toString(), fromJS(newReminder[id]));
}

export default reminders;
