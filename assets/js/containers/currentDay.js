import { connect } from 'react-redux';
import { getDataDay } from 'helpers/getDataFromMonth';
import { createReminder } from 'actions';

import Day from 'components/Day';

const mapStateToProps = (state, ownProps) => {
  const monthId = ownProps.match.params.monthId;
  const dayId = ownProps.match.params.dayId;
  const calendar = state.app;
  const eventId = (parseInt(monthId) * 100) + parseInt(dayId);
  const results = getDataDay(calendar.events.get(eventId.toString()), calendar.movies, calendar.reminders);
  return {
    monthId: monthId,
    eventId: eventId,
    monthName: calendar.months.get(monthId.toString()).get("name"),
    dayId: dayId,
    events: results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reminderClick: (text, eventId, monthId) => {
      dispatch(createReminder(text, eventId, monthId));
    }
  }
}

const currentDay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);

export default currentDay;
