package moviesHelper_test

import (
  "testing"
  "encoding/json"
  "projects/calendarApp/helpers/movies"
  "projects/calendarApp/models/movie"
)

func TestGetMovies(t *testing.T) {
  res, err := moviesHelper.GetMovies()
  if err != nil {
    t.Error("Error GetMovies")
  }
  var movies movieModel.Data
  err = json.Unmarshal(res, &movies)

  if err != nil {
    t.Error("Erron parsing json")
  }
}
