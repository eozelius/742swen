import React, { Component } from 'react'
import '../styles/headline.css'
import { Link } from 'react-router-dom'
import CategoryIcon from '../components/categoryIcon' 

class Headline extends Component {
  render(){
    return (
      <div className='headline-container' >
        <Link to={`/story/${this.props.nid || ''}`} >
          <p className="mb-0">
            {this.props.title}
            <span className='time'>{this.props.time} </span>
            <CategoryIcon category_tid={this.props.category_tid} />
          </p>
        </Link>
      </div>
    )
  }
}

export default Headline