import React from 'react'
import '../styles/headlineFilter.css'
import iconColor from '../helpers/iconColor';

const HeadlineFilter = (props) => {
  let renderedHeadlineFilters = ''

  if(props.categories.length > 0){
    const width = 100 / props.categories.length

    renderedHeadlineFilters = props.categories.map((cat, index) => {
      const color = iconColor(cat)
      return (
        <div style={{ backgroundColor: color, color: color, width: `${width}%`}} onClick={() => props.onClick(cat)} key={index}>.</div>
      )
    })
  }

  return (
    <div className='headline-filter-container'>
      <div className='reset-filter' onClick={() => props.onClick('default') } value='default'>
        <p>reset filter</p>
      </div>
      <div className='headline-categories-container'>
        {renderedHeadlineFilters}
      </div>
    </div>
  )
}

export default HeadlineFilter