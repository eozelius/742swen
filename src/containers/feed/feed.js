import React from 'react'
import { connect } from 'react-redux'
import Headline from '../../components/headline'
import HeadlineFilter from '../../components/headlineFilter'
import { fetchHeadlinesIfNeeded } from '../../modules/feed'
import { fetchStoryIfNeeded }     from '../../modules/story'

class Feed extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filter: 'default'
    }
  }
  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchHeadlinesIfNeeded())
    dispatch(fetchStoryIfNeeded())
  }

  filteredHeadlines = (headlines) => {
    if(this.state.filter === 'default'){ return headlines }
    if(headlines === undefined){ return [] }
    return headlines.filter((headline) => headline.category_tid === this.state.filter )
  }

  updateCategory = (category) => {
    this.setState({
      filter: category
    })    
  }

  render(){
    let categories = new Set()
    const filteredHeadlines = this.filteredHeadlines(this.props.headlines)
    const headlinesList = filteredHeadlines.map((post, i) => {
      post.category_tid.split(',').forEach((cat) => {
        categories.add(cat)
      })
      
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
        <HeadlineFilter categories={Array.from(categories).sort()} onClick={this.updateCategory} />
        {headlinesList}
      </div>        
    )
  }
}

function mapStateToProps(state){
  return ({
    headlines: state.feed.headlines,
    isFetching: false,
    // story: state.story.story
  })
}

export default connect(mapStateToProps)(Feed)