var DB = require('json!../../data.json');

export default function reducer(state={
  fetching: false,
  fetched: false,
  profile: {},
  error: null
}, action) {
  switch(action.type) {
    /*
     * Get Profile
     */
    case "FETCH_PROFILE_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_PROFILE_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_PROFILE_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        profile: DB.profile
      };
      break;
    }
  }
  return state;
}
