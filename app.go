package main

import (
  "log"
  "net/http"
  "projects/calendarApp/routes"
)

func main() {
  router := routes.NewRouter()
  log.Fatal(http.ListenAndServe(":8080", router))
}
