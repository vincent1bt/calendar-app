const movies = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.movies;
    default:
      if(action.movies) {
        return action.movies;
      }
      return state;
  }
}

export default movies;
