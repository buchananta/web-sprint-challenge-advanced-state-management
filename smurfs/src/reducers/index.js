
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
} from '../actions';


const initialState = {
  smurfs: [],
  fetching: true,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {...state, fetching: true}
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetching: false,
        smurfs: action.payload,
      }
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
}