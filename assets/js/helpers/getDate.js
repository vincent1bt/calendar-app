import moment from "moment";
import normalizer from 'schema';
import uniqueId from 'helpers/uniqueId';

export function getData(moviesArray) {
  let dateObject = {
    "months": []
  };

  for(var i = 1; i < 13; i++) {
    const movies = moviesArray[i - 1].movies;
    let events = [];

    if(movies === undefined) {
      events = [];
    } else {
      events = movies.map((movie) => {
        const eventId = parseInt(movie.release_day) + (i * 100);
        return {
          "id": eventId,
          "movies": [movie],
          "reminders": []
        }
      });
    }

    const monthObject = {
      "id": i,
      "name": moment().month(i - 1).format("MMMM"),
      "numberOfDays": moment().month(i - 1).daysInMonth(),
      "firstDay": moment().month(i - 1).date(1).format("dddd"),
      "events": events
    }
    dateObject.months.push(monthObject);
  }
  const normalize = normalizer(dateObject);
  return normalize.entities;
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
