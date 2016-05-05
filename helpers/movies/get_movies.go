package moviesHelper

import (
  "fmt"
  "io/ioutil"
  "net/http"
  "os"
)

func GetMovies() ([]byte, error) {
  page := "1"
  key := os.Getenv("THEMOVIEDB_KEY")

  url := fmt.Sprintf("http://api.themoviedb.org/3/movie/upcoming?page=%s&api_key=%s", page, key)
  //url := "http://127.0.0.1:8000/movies"

  req, err := http.NewRequest("GET", url, nil)
  req.Header.Add("Accept", "application/json")
  if err != nil {
    panic(err.Error())
    return nil, err
  }

  client := &http.Client{}
  res, err := client.Do(req)
  if err != nil {
    panic(err.Error())
    return nil, err
  }

  //defer, espera a que la ejecucion se complete para seguir con el programa
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    panic(err.Error())
    return nil, err
  }

  return body, nil
}
