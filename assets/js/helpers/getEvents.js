import React from 'react';

import Movie from 'components/Movie';
import Reminder from 'components/Reminder';

function getEvents(events) {
  let movies = [];
  let reminders = [];

  if (events === null) {
    movies = (<p className="no-events">No Movies</p>);
    reminders = (<p className="no-events">No Reminders</p>);
  } else {
    events.movies.map((movie) => {
      movies.push((<Movie key={movie.get("id")} movie={movie} />));
    });

    events.reminders.map((reminder) => {
      reminders.push((<Reminder key={reminder.get("id")} reminder={reminder} />));
    });
  }
  return {
    movies: movies,
    reminders: reminders
  }
}

export default getEvents;
