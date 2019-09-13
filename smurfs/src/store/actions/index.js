import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const ADDING_SMURF_START = 'ADDING_SMURF_START';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';

export const getSmurfs = () => async dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    try {
        const response = await axios.get('http://localhost:3333/smurfs');
        console.log('response: ', response);
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data });
    } catch (err) {
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
        console.log(err);
    }
};

export const addSmurf = newSmurf => async dispatch => {
    dispatch({ type: ADDING_SMURF_START });
    try {
        const response = await axios.post('http://localhost:3333/smurfs', newSmurf);
        dispatch({ type: ADDING_SMURF_SUCCESS, payload: response.data });
    } catch (err) {
        dispatch({ type: ADDING_SMURF_FAILURE, payload: err });
        console.log(err);
    };
};