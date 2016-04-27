import moment from "moment";

function getDate() {
  const dateObject = {
    now: {
      day: moment().format("DD"),
      month: moment().format("MM")
    },
    days: [],
    firstDay: []
  }

  for (var i = 0; i < 12; i++) {
    dateObject.days[i] = moment().month(i).daysInMonth();
    dateObject.firstDay[i] = moment().month(i).date(1);
  }
  return dateObject;
}

export default getDate;
