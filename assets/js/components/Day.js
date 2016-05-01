import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
        <p>Movies</p>
        <p>{movie.get("title")}</p>
        <p>{movie.get("overview")}</p>
        <img src={`http://image.tmdb.org/t/p/w500${movie.get("image_path")}`} alt=""/>
    </div>
  );
}

const Reminder = ({ reminder }) => {
  return (
    <div>
        <p>Reminders</p>
        <p>{reminder.get("text")}</p>
    </div>
  );
}

const Day = ({ monthName, dayId, events }) => {
  console.log(events);
  let movies;
  let reminders;

  if (events === null) {
    movies = (<p>No hay peliculas</p>);
    reminders = (<p>No hay recordatorios</p>);
  } else {
    events.movies.map((movie) => {
        movies = (<Movie key={movie.get("id")} movie={movie} />);
    });
    
    events.reminders.map((reminder) => {
      reminders = (<Reminder key={reminder.get("id")} reminder={reminder} />);
    });
  }

  return (
    <div>
      Dia {dayId}, {monthName}
      {movies}
      {reminders}
    </div>
  )
}

export default Day;
