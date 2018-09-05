import Api from '../api/Api'

// ACTIONS ////
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(categories) {
  // console.log('receive categories => ' + categories)
  
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories,
    receivedAt: Date.now()
  }
}

function fetchCategories() {
  const categories = Api.fetchCategories() || []
  return dispatch => {
    dispatch(requestCategories())
    return dispatch(receiveCategories(categories))
  }
}

function shouldFetchCategories(state) {
  const { categories } = state
  if (!categories || categories.length === 0) {
    return true
  } else {
    return false
  }
}

export function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories())
    }
  }
}
// End ACTIONS ////

// REDUCERS ////
const defaultCategoriesState = {
  categories: []
}

function categories(state = defaultCategoriesState, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, {})
    case RECEIVE_CATEGORIES: 
      return Object.assign({}, state, {
        categories: action.categories,
        lastUpdated: action.receivedAt || Date.now()
      })
    default:
      return state
  }
}
export default categories
// End REDUCERS ////