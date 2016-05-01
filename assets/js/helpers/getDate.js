import moment from "moment";

export function getDate() {
  const dateObject = {
    now: {
      day: moment().format("D"),
      month: moment().format("MM")
    },
    days: [],
    firstDay: []
  }

  for (var i = 0; i < 12; i++) {
    dateObject.days[i] = moment().month(i).daysInMonth();
    dateObject.firstDay[i] = moment().month(i).date(1).format("dddd");
  }
  return dateObject;
}

export function getCurrentDate() {
  return {
    day: moment().format("D"),
    month: moment().format("MM"),
    year: moment().format("YYYY"),
    dayId: moment().format("D"),
    monthId: moment().format("MM")
  }
}
