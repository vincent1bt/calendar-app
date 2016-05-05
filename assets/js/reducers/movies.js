import { Map } from 'immutable';

const movies = (state = Map(), action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return state.merge(action.movies);
    default:
      if(action.movies) {
        return state.merge(action.movies);
      }
      return state;
  }
}

export default movies;
