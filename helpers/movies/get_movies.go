package moviesHelper

import (
  "fmt"
  "io/ioutil"
  "net/http"
)

func GetMovies() ([]byte, error) {
  page := "1"
  key := "206e0b6eb85969cd425cce8eda2edb0a"
  url := fmt.Sprintf("http://api.themoviedb.org/3/movie/upcoming?page=%s&api_key=%s", page, key)

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
