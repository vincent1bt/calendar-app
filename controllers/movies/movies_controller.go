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
  if err != nil {
    panic(err.Error())
  }

  if err := json.NewEncoder(w).Encode(movies); err != nil {
    panic(err)
  }
  // w.Write(res)
}
