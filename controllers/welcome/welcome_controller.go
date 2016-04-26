package welcomeController

import (
  "html/template"
  "net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
  t, _ := template.ParseFiles("views/welcome/index.html")
  t.Execute(w, nil)
}
