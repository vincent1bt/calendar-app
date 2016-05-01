import { connect } from 'react-redux';
import { getDataDay } from 'helpers/getDataFromMonth';

import Day from 'components/Day';

const mapStateToProps = (state, ownProps) => {
  const monthId = ownProps.params.monthId;
  const dayId = ownProps.params.dayId;
  const calendar = state.app;
  const eventId = (parseInt(monthId) * 100) + parseInt(dayId);
  const results = getDataDay(calendar.events.get(eventId.toString()), calendar.movies, calendar.reminders);
  return {
    monthName: calendar.months.get(monthId.toString()).get("name"),
    dayId: dayId,
    events: results
  }
}

const currentDay = connect(
  mapStateToProps
)(Day);

export default currentDay;
