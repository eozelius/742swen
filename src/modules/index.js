import { combineReducers } from 'redux'
import feed from './feed'
import story from './story'
import category from './category'

export default combineReducers({
  feed,
  category,
  story
})
