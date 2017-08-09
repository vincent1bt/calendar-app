import { connect } from 'react-redux';
import { getDataMonth } from 'helpers/getDataFromMonth';
import Month from 'components/Month';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.monthId;
  let month;
  let name = "";
  let arrayLi = [];

  if(id === undefined) {
    const date = state.app.currentDate;
    if(state.app.months.isEmpty()) {
      arrayLi = null
    } else {
      id = parseInt(date.monthId);
      month = state.app.months.get(id.toString());
      name =  month.get("name");
      arrayLi = getDataMonth(month, id);
    }
  } else {
    month = state.app.months.get(id.toString());
    name =  month.get("name");
    arrayLi = getDataMonth(month, id)
  }

  return {
    name: name,
    year: state.app.currentDate.year,
    list: arrayLi
  };
}

const currentMonth = connect(
  mapStateToProps
)(Month);

export default currentMonth;
