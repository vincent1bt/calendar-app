package routes

import (
  "projects/calendarApp/controllers/movies"
  "projects/calendarApp/controllers/welcome"
)

type Routes []Router

var routes = Routes{
  Router{
    "Index",
    "GET",
    "/movies",
    moviesController.Index,
  },
  Router{
    "Index",
    "GET",
    "/",
    welcomeController.Index,
  },
}
