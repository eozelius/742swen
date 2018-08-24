import React from 'react'
import '../../styles/story.css'

const Story = props => (
  <div className='story-container'>
    <h1 className='title'>{props.title}</h1>

    <p className='body'>{props.body}</p>
  </div>
)

export default Story