package moviesController

import (
  "encoding/json"
  "net/http"
  "projects/calendarApp/helpers/movies"
  "projects/calendarApp/models/movie"
)

func Index(w http.ResponseWriter, r *http.Request) {
  res, err := moviesHelper.GetMovies()
  if err != nil {
    panic(err.Error())
  }

  var movies movieModel.Data
  err = json.Unmarshal(res, &movies)

  months := moviesHelper.CreateMonthsJson(movies)

  if err != nil {
    panic(err.Error())
  }
  
  w.Header().Set("Content-Type", "application/json; charset=UTF-8")
  w.WriteHeader(http.StatusOK)

  if err := json.NewEncoder(w).Encode(months); err != nil {
    panic(err)
  }
  // w.Write(res)
}
