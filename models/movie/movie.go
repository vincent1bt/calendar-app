package movieModel

// Field is ignored by this package.
// Field int `json:"-"`

type Data struct {
	Dates struct {
		Maximum string `json:"-"`
		Minimum string `json:"-"`
	} `json:"-"`
	Page    int `json:"-"`
	Results []struct {
		Adult            bool    `json:"-"`
		BackdropPath     string  `json:"backdrop_path"`
		GenreIds         []int   `json:"-"`
		ID               int     `json:"id"`
		OriginalLanguage string  `json:"-"`
		OriginalTitle    string  `json:"original_title"`
		Overview         string  `json:"overview"`
		Popularity       float64 `json:"-"`
		PosterPath       string  `json:"poster_path"`
		ReleaseDate      string  `json:"release_date"`
		Title            string  `json:"title"`
		Video            bool    `json:"-"`
		VoteAverage      float64 `json:"-"`
		VoteCount        int     `json:"-"`
	} `json:"results"`
	TotalPages   int `json:"-"`
	TotalResults int `json:"-"`
}


//
//
// type Data struct {
// 	Dates struct {
// 		Maximum string `json:"maximum"`
// 		Minimum string `json:"minimum"`
// 	} `json:"dates"`
// 	Page    int `json:"page"`
// 	Movies []struct {
// 		Adult            bool    `json:"adult"`
// 		BackdropPath     string  `json:"backdrop_path"`
// 		GenreIds         []int   `json:"genre_ids"`
// 		ID               int     `json:"id"`
// 		OriginalLanguage string  `json:"original_language"`
// 		OriginalTitle    string  `json:"original_title"`
// 		Overview         string  `json:"overview"`
// 		Popularity       float64 `json:"popularity"`
// 		PosterPath       string  `json:"poster_path"`
// 		ReleaseDate      string  `json:"release_date"`
// 		Title            string  `json:"title"`
// 		Video            bool    `json:"video"`
// 		VoteAverage      float64 `json:"vote_average"`
// 		VoteCount        int     `json:"vote_count"`
// 	} `json:"results"`
// 	TotalPages   int `json:"total_pages"`
// 	TotalResults int `json:"total_results"`
// }
