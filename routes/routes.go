package routes

import (
  "projects/calendarApp/controllers/movies"
)

type Routes []Router

var routes = Routes{
  Router{
    "Index",
    "GET",
    "/movies",
    moviesController.Index,
  },
}
