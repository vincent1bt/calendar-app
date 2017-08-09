import reducer from 'reducers';
import * as actions from 'actions';

import { fromJS, Map } from 'immutable';

describe('mainReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {
          "currentDate": {},
          "events": Map(),
          "months": Map(),
          "movies": Map(),
          "reminders": Map()
        }
    );
  });

  it('should react to an action with the type CREATE_REMINDER', () => {
    const text = "Ir al doctor";
    const reminderId = "5";

    expect(reducer(undefined, actions.addReminder(text, reminderId))).toEqual({
      "currentDate": {},
      "events": Map(),
      "months": Map(),
      "movies": Map(),
      "reminders": Map().set(reminderId, fromJS({ id: reminderId, text: text }))
    });
  });

  it('should react to an action with the type GET_MOVIES', () => {
    const movies = {
      "5": {
        title: "new world",
        id: "5"
      },
      "4": {
        title: "old world",
        id: "4"
      }
    }

    expect(reducer(undefined, actions.getMovies(movies))).toEqual({
      "currentDate": {},
      "events": Map(),
      "months": Map(),
      "movies": Map().merge(movies),
      "reminders": Map()
    });
  });

  const months = {
    "1": {
      events: [],
      firstDay: "Sunday",
      id: 1,
      name: "January",
      numberOfDays: 31
    },
    "2": {
      events: [],
      firstDay: "Sunday",
      id: 2,
      name: "January",
      numberOfDays: 31
    },
    "3": {
      events: [],
      firstDay: "Sunday",
      id: 3,
      name: "January",
      numberOfDays: 31
    },
    "4": {
      events: [],
      firstDay: "Sunday",
      id: 4,
      name: "January",
      numberOfDays: 31
    },
    "5": {
      events: [],
      firstDay: "Sunday",
      id: 5,
      name: "January",
      numberOfDays: 31
    },
    "6": {
      events: [],
      firstDay: "Sunday",
      id: 6,
      name: "January",
      numberOfDays: 31
    },
    "7": {
      events: [],
      firstDay: "Sunday",
      id: 7,
      name: "January",
      numberOfDays: 31
    },
    "8": {
      events: [],
      firstDay: "Sunday",
      id: 8,
      name: "January",
      numberOfDays: 31
    },
    "9": {
      events: [],
      firstDay: "Sunday",
      id: 9,
      name: "January",
      numberOfDays: 31
    },
    "10": {
      events: [],
      firstDay: "Sunday",
      id: 10,
      name: "January",
      numberOfDays: 31
    },
    "11": {
      events: [],
      firstDay: "Sunday",
      id: 11,
      name: "January",
      numberOfDays: 31
    },
    "12": {
      events: [],
      firstDay: "Sunday",
      id: 1,
      name: "January",
      numberOfDays: 31
    }
  }

  it('should react to an action with the type GET_MONTHS', () => {
    expect(reducer(undefined, actions.getMonths(months))).toEqual({
      "currentDate": {},
      "events": Map(),
      "months": Map().merge(months),
      "movies": Map(),
      "reminders": Map()
    });
  });

  it('should react to an action with the type ADD_EVENT_TO_MONTH', () => {
    const eventId = "4";
    const monthId = "11";

    const newEvent = {};
    newEvent[eventId] = {
      id: eventId,
      movies: [],
      reminders: []
    }

    const initialState = {
      "currentDate": {},
      "events": Map(),
      "months": Map().merge(months),
      "movies": Map(),
      "reminders": Map()
    }

    expect(reducer(initialState, actions.addEventToMonth(eventId, monthId))).toEqual({
      "currentDate": {},
      "events": Map(),
      "months": Map().merge(months).updateIn([monthId, "events"], events => events.push(eventId)),
      "movies": Map(),
      "reminders": Map()
    });
  });

  const events = {
    "45": {
      id: 45,
      movies: [],
      reminders: []
    },
    "67": {
      id: 67,
      movies: [],
      reminders: []
    }
  }

  it('should react to an action with the type GET_EVENTS', () => {
    expect(reducer(undefined, actions.getEvents(events))).toEqual({
      "currentDate": {},
      "events": Map().merge(events),
      "months": Map(),
      "movies": Map(),
      "reminders": Map()
    });
  });

  it('should react to an action with the type addReminderToEvent', () => {
    const initialState = {
      "currentDate": {},
      "events": Map().merge(events),
      "months": Map(),
      "movies": Map(),
      "reminders": Map()
    }

    const eventId = "45";
    const reminderId = "78";

    expect(reducer(initialState, actions.addReminderToEvent(eventId, reminderId))).toEqual({
      "currentDate": {},
      "events": Map().merge(events).updateIn([eventId, "reminders"], reminders => reminders.push(reminderId)),
      "months": Map(),
      "movies": Map(),
      "reminders": Map()
    });
  });
});
