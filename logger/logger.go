package logger

import (
  "log"
  "net/http"
  "time"
)

func Logger(inner http.Handler, name string) http.Handler {
  //regresa una funcion de tipo http.Handler
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    start := time.Now()
    //por revisar
    inner.ServeHTTP(w, r)
    //imprime el estado de la pagina cuando se le hace una peticion
    log.Printf("%s\t%s\t%s\t%s", r.Method, r.RequestURI, name, time.Since(start))
  })
}
