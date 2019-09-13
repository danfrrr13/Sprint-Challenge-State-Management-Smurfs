import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_FAILURE,
    ADDING_SMURF_START,
    ADDING_SMURF_SUCCESS,
    ADDING_SMURF_FAILURE
} from '../actions/';

const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    error: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [ ...state.smurfs, ...action.payload ]
            };
        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADDING_SMURF_START:
            return {
                ...state,
                isAdding: true
            };
        case ADDING_SMURF_SUCCESS:
            return {
                ...state,
                isAdding: false,
                smurfs: [ ...action.payload ]
            };
        case ADDING_SMURF_FAILURE:
            return {
                ...state,
                isAdding: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default reducer;