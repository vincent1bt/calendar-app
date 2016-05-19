package moviesController_test

import (
  "testing"
  "net/http"
  "net/http/httptest"
  "projects/calendarApp/routes"
  "fmt"
)

func TestMoviesController(t *testing.T) {
  router := routes.NewRouter()
  server := httptest.NewServer(router)
  defer server.Close()
  resp, err := http.Get("/movies")
  if err != nil {
    fmt.Print(err.Error())
    t.Error("Error in the handler")
  }
  fmt.Print(resp)
}
