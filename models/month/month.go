package monthModel

type MonthsData struct {
  Months []Month `json:"months"`
}

type Month struct {
  Id int `json:"id"`
  Movies []Movie `json:"movies,omitempty"`
}

type Movie struct {
  ID               int     `json:"id"`
  Overview         string  `json:"overview"`
  PosterPath       string  `json:"poster_path"`
  ReleaseDay       string  `json:"release_day"`
  Title            string  `json:"title"`
}
