import { fromJS, Map } from 'immutable';

const reminders = (state = Map(), action) => {
  switch (action.type) {
    case 'CREATE_REMINDER':
      return createReminder(state, action);
    default:
      if(action.reminders) {
        return state.merge(action.reminders);
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
