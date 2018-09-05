import React, { Component } from 'react'
import '../styles/headlineFilter.css'
import { connect } from 'react-redux'
import { fetchCategoriesIfNeeded } from '../modules/category'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CategoryFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: true,
    }
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  updateCategories = (e) => {
    const categories = e.target.value.split(',').map((c) => parseInt(c, 10))
    const checked = e.target.checked
    this.props.updateCategory(categories, checked)
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchCategoriesIfNeeded())
  }

  render(){
    let catOptions = 'category Nav placeholder'

    if(this.props.categories){
      if(this.props.categories.length > 0){  
        catOptions = this.props.categories.map((cat, index) => {
          return (
            <div key={index}>
              <input type='checkbox' value={cat.categories} onClick={this.updateCategories} />
              <label>{cat.title}</label>
            </div>
          )
        })
      }
    }

    return (
      <div className='headline-filter-container'>
        <div className='headline-categories-container'>
          <Button outline color="info" onClick={this.toggleCollapse}>Categories</Button>
          
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                {catOptions}
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return ({ categories: state.category.categories })
}

export default connect(mapStateToProps)(CategoryFilter)