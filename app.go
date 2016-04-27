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

  fs := http.StripPrefix("/static/", http.FileServer(http.Dir("static")))
  router.PathPrefix("/static/").Handler(fs)

  if port == "" {
    port = "8080"
  }
  log.Fatal(http.ListenAndServe(":" + port, router))
}
