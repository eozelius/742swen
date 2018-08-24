import { mock_story } from '../mock_data/mock_story'

// ACTIONS ////
export const RECEIVE_STORY = 'RECEIVE_STORY'
export const REQUEST_STORY = 'REQUEST_STORY'

function requestStory(){
  return {
    type: REQUEST_STORY
  }
}

function receiveStory(mock_story) {  
  return {
    type: RECEIVE_STORY,
    story: mock_story
  }
}

function fetchStory(id){
  return dispatch => {
    dispatch(requestStory(id))
    const story = JSON.parse(mock_story)
    return dispatch(receiveStory(story))
  }
}

function shouldFetchStory(state, id){
  const { story, isFetching } = state.story
    
  if(story === null){
    return true
  } else if(isFetching){
    return false
  } else if(story.id === id ){
    // todo: return false when removing mock_stories.
    // return false
    return true
  } else {
    return true
  }
}

export function fetchStoryIfNeeded(id){
  return (dispatch, getState) => {
    if(shouldFetchStory(getState(), id)){
      return dispatch(fetchStory(id))
    }
  }
}
// End ACTIONS ////


// REDUCERS ////
const defaultStoryState = {
  isFetching: false,
  story: null
}

function story(state = defaultStoryState, action){
  switch(action.type) {
    case REQUEST_STORY:
      return Object.assign({}, state, {
        story: action.story,
        isFetching: true
      })

    case RECEIVE_STORY:
      return Object.assign({}, state, {
        story: action.story,
        isFetching: false
      })
      
    default:
      return state
  }
}
export default story
// End REDUCERS ////
