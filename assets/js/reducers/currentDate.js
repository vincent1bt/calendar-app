import { getCurrentDate } from 'helpers/getDate';

const currentDate = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CURRENT_DATE':
      return getCurrentDate();
    default:
      return state
  }
}

export default currentDate;
