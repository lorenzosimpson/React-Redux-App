import axios from 'axios';
// api request goes here 


//action types - set the variable equal to the string
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchBreweries = () => dispatch => {
    dispatch({ type: START_FETCHING })

    axios
    .get(`https://api.openbrewerydb.org/breweries`)
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}))
}