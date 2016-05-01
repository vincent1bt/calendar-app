import { Link } from 'react-router';
import React from 'react';

export function getDataMonth(month, monthId) {
  let arrayLi = [];
  let days = 0;

  const eventsDays = month.get("events").map((event) => {
    return event - (monthId * 100);
  });

  switch (month.get("firstDay")) {
    case "Monday":
      days = 0;
      break;
    case "Tuesday":
      days = 1;
      break;
    case "Wednesday":
      days = 2;
      break;
    case "Thursday":
      days = 3;
      break;
    case "Friday":
      days = 4;
      break;
    case "Saturday":
      days = 5;
      break;
    case "Sunday":
      days = 6;
      break;
  }

  for(let i = 0; i < days; i++) {
    let newTd = (
      <li key={i + 100}></li>
    );
    arrayLi.push(newTd);
  }

  const totalDays = parseInt(month.get("numberOfDays"));

  for(let i = 0; i < totalDays; i++) {
    let dayTd = (
      <li key={i}>
        {eventsDays.includes(i + 1) ? <div className="circleEvent"></div> : "" }
        <p>{i + 1}</p>
        <Link to={`/month/${month.get("id")}/day/${i+1}`} className="linkDay"></Link>
      </li>
    );
    arrayLi.push(dayTd);
  }
  return arrayLi;
}

export function getDataDay(event, moviesState, remindersState) {
  if (event === undefined) {
    return null;
  } else {
    const movies = event.get("movies").map((movieId) => {
       return moviesState.get(movieId.toString());
    });

    const reminders = event.get("reminders").map((reminderId) => {
       return remindersState.get(reminderId.toString());
    });
    return {
      reminders: reminders,
      movies: movies
    }
  }
}
