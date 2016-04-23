package routes

import (
  "net/http"
)

type Router struct {
  Name string
  Method string
  Pattern string
  HandlerFunc http.HandlerFunc
}
