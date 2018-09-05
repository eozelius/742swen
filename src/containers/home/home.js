import React, { Component } from 'react'
import Feed from '../feed/feed'
import CategoryFilter from '../../components/categoryFilter'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      categoryFilter: []
    }
  }

  updateCategories = (cats, addToFilter) => {
    if(addToFilter){
      this.setState({
        categoryFilter: [...new Set(this.state.categoryFilter.concat(...cats))] // Merge and unique
      })
    } else {
      this.setState({
        categoryFilter: this.state.categoryFilter.filter((c) => !cats.includes(c)) // Remove just cats
      })
    }
  }

  render(){    
    return (
      <div className='home-container'>
        <CategoryFilter updateCategory={this.updateCategories} />
        <Feed categoryFilter={this.state.categoryFilter} />
      </div>
    )
  }
}

export default Home