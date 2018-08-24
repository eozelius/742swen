import { combineReducers } from 'redux'
import feed from './feed'
import story from './story'

export default combineReducers({
  feed,
  story
})
