package routes

import (
    "net/http"
    "github.com/gorilla/mux"
    "projects/calendarApp/logger"
)
//funcion que crea rutas y las regresa en un array
func NewRouter() *mux.Router {
  //se crea un nuevo router del paquete de gorilla/mux
  router := mux.NewRouter().StrictSlash(true)

  for _, route := range routes {
    //recoremos las rutas que nosotros hemos creado
    var handler http.Handler //declaramos una variable de tipo http.Handler
    handler = route.HandlerFunc //le asignamos el valor de route.HandlerFunc que es del mismo tipo
    handler = logger.Logger(handler, route.Name) //se la pasamos a la funcion Logger

    //creamos una nueva ruta con los datos de nuestras rutas
    router.
      Methods(route.Method).
      Path(route.Pattern).
      Name(route.Name).
      Handler(handler)
  }
  return router
}
