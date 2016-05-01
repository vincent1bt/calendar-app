import { connect } from 'react-redux';
import { getDataMonth } from 'helpers/getDataFromMonth';
import Month from 'components/Month';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.monthId;
  const month = state.app.months.get(id.toString())
  return {
    name: month.get("name"),
    year: state.app.currentDate.year,
    arrayLi: getDataMonth(month, id)
  };
}

const currentMonth = connect(
  mapStateToProps
)(Month);

export default currentMonth;
