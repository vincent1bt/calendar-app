import { assert } from 'chai';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store';
import uniqueId from 'helpers/uniqueId';
import expect from 'expect'

import * as actions from 'actions';
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  // it('put state', () => {
  //   const expectedActions = [
  //     { type: 'GET_CURRENT_DATE' },
  //     { type: 'GET_MOVIES' },
  //     { type: 'GET_EVENTS' },
  //     { type: 'GET_MONTHS' }
  //   ];
  //
  //   const store = mockStore({});
  //
  //   return store.dispatch(actions.putState())
  //       .then(() => {
  //         expect(store.getActions()).toEqual(expectedActions);
  //       })
  // });

  it('create Reminder', () => {
    const text = "Ir al cine";
    const id = uniqueId();
    const expectReminder = {
      type: "CREATE_REMINDER",
      text,
      id
    }
    expect(actions.addReminder(text, id)).toEqual(expectReminder);
  });

  it('add Reminder To Events', () => {
    const eventId = "111";
    const reminderId = uniqueId();
    const expectEvent = {
      type: "ADD_REMINDER_TO_EVENT",
      eventId,
      reminderId: reminderId
    }
    expect(actions.addReminderToEvent(eventId, reminderId)).toEqual(expectEvent);
  });
});
