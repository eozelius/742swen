import React from 'react'
import '../styles/categoryIcon.css'
import iconColor from '../helpers/iconColor'

const CategoryIcon = (props) => {
  const color = iconColor(props.category_tid)  

  return (
    <span className='category-icon' style={{ backgroundColor: color }}></span>
  )
}

export default CategoryIcon