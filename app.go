package main

import (
  "log"
  "os"
  "net/http"
  "projects/calendarApp/routes"
)

func main() {
  router := routes.NewRouter()
  port := os.Getenv("PORT")

  if port == "" {
    port = "8080"
  }
  log.Fatal(http.ListenAndServe(":" + port, router))
}
