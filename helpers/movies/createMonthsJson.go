package moviesHelper

import (
  "projects/calendarApp/models/movie"
  "projects/calendarApp/models/month"
  "time"
  "strconv"
)

func createMonthsObject() (monthModel.MonthsData){
  data := monthModel.MonthsData{}
  for i := 1;  i < 13; i++ {
    month := monthModel.Month{
       Id: i,
       Movies: []monthModel.Movie{},
    }
    data.Months = append(data.Months, month)
  }
  return data
}

func CreateMonthsJson(movies movieModel.Data) (monthModel.MonthsData){
  months := createMonthsObject()
  for _, value := range movies.Results {
    t, _ := time.Parse("2006-01-02", value.ReleaseDate)
    monthFormat := t.Format("01")
    day := t.Format("02")
    monthNumber, _ := strconv.Atoi(monthFormat)
    month := &months.Months[monthNumber - 1]
    newMovie := monthModel.Movie{
      ID: value.ID,
      Overview: value.Overview,
      PosterPath: value.PosterPath,
      ReleaseDay: day,
      Title: value.Title,
    }
    month.Movies = append(month.Movies, newMovie)
  }
  return months
}
