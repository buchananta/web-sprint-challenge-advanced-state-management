import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';


export const getSmurfs = () => (dispatch) => {
  dispatch({type: FETCH_SMURFS_START})
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(e => {
      console.error(e)
      dispatch({type: FETCH_SMURFS_FAIL, payload: e})
    })

}

export const postSmurf = (smurf) => (dispatch) => {
  console.log('POSTING....');
  axios.post(
    'http://localhost:3333/smurfs',
    smurf
  )
    .then(res => {
      console.log(res.data)
      dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(e => {
      console.error(e)
      dispatch({type: POST_SMURF_FAIL});
    })
}