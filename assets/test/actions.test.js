import * as actions from 'actions';

describe('actions', () => {
  describe('addEventToMonth', () => {

    it('should have a type of ADD_EVENT_TO_MONTH', () => {
      expect(actions.addEventToMonth().type).toEqual('ADD_EVENT_TO_MONTH');
    });

    it('should pass the eventId and monthId', () => {
      const eventId = 5;
      const monthId = 12;
      expect(actions.addEventToMonth(eventId, monthId).eventId).toEqual(eventId);
    })

  });
});
