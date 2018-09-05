import Api from '../api/Api'

// ACTIONS ////
export const REQUEST_HEADLINES = 'REQUEST_HEADLINES'
export const RECEIVE_HEADLINES = 'RECEIVE_HEADLINES'

function requestHeadlines() {
  return {
    type: REQUEST_HEADLINES
  }
}

function receiveHeadlines(headlines) {
  return {
    type: RECEIVE_HEADLINES,
    headlines: headlines,
    receivedAt: Date.now()
  }
}

function fetchHeadlines() {
  Api.fetchHeadlines()
  
  return dispatch => {
    dispatch(requestHeadlines())
    const headlines = Api.fetchHeadlines() || []
    return dispatch(receiveHeadlines(headlines))
  }
}

function shouldFetchHeadlines(state) {
  const { headlines, isFetching } = state
  if (!headlines || headlines.length === 0) {
    return true
  } else if (isFetching) {
    return false
  } else {
    return false
  }
}

export function fetchHeadlinesIfNeeded(filter) {
  return (dispatch, getState) => {
    if (shouldFetchHeadlines(getState(), filter)) {
      return dispatch(fetchHeadlines(filter))
    }
  }
}
// End ACTIONS ////


// REDUCERS ////
const defaultHeadlinesState = {
  isFetching: false,
  headlines: []
}

function headlines(state = defaultHeadlinesState, action) {
  switch (action.type) {
    case REQUEST_HEADLINES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_HEADLINES: 
      return Object.assign({}, state, {
        isFetching: false,
        headlines: action.headlines,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
export default headlines
// End REDUCERS ////