import React, { Component } from 'react'
import { connect } from 'react-redux'
import Headline from '../../components/headline'
import { fetchHeadlinesIfNeeded } from '../../modules/feed'

class Feed extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchHeadlinesIfNeeded())
  }

  filteredHeadlines = (headlines) => {
    console.log(this.props.categoryFilter)

    if(headlines === undefined){ return [] }
    if(this.props.categoryFilter.length === 0){ 
      console.log("default filter")
      return headlines
    }
    return headlines.filter((headline) => this.props.categoryFilter.includes(parseInt(headline.category_tid, 10)))
  }

  render(){
    const filteredHeadlines = this.filteredHeadlines(this.props.headlines).map((post, i) => {
      return(
        <Headline key={i}
          nid={post.nid}
          title={post.title}
          date={post.date}
          time={post.time}
          priority_tid={post.priority_tid}
          category_tid={post.category_tid}
          uuid={post.uuid} />
      )
    })  

    return (
      <div className='headlines-container'>
        {filteredHeadlines}
      </div>        
    )
  }
}

function mapStateToProps(state){
  return ({ headlines: state.feed.headlines })
}

export default connect(mapStateToProps)(Feed)