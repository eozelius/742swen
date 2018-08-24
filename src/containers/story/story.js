import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStoryIfNeeded } from '../../modules/story'

class Story extends Component {
  componentDidMount(){
    const { dispatch } = this.props    
    const storyId = this.props.match.params.id
    dispatch(fetchStoryIfNeeded(storyId))
  }

  render(){
    const { story } = this.props
    const renderedBody  = story !== null ? story.data.attributes.body.value : 'story placeholder'
    const renderedTitle = story !== null ? story.data.attributes.title : 'title placeholder'
    return (
      <div className='story-container'>
        <h1>{renderedTitle}</h1>
        <p>{renderedBody}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log(state)
  return({
    story: state.story.story,
    isFetching: state.isFetching
  })
}

export default connect(mapStateToProps)(Story)