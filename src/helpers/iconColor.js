const iconColor = (category_tid) => {
    switch(category_tid) {
      case '45': 
        return '#007bff' // Blue
      case '47': 
        return '#6610f2' // Indigo
      case '48': 
        return '#6f42c1' // purple
      case '49': 
        return '#e83e8c' // pink
      case '50':
        return '#dc3545' // red
      case '51':
        return '#fd7e14' // orange
      case '52':
        return '#ffc107' // yellow
      case '58':
        return '#28a745' // green
      case '60':
        return '#20c997' // teal
      case '63': 
        return '#17a2b8' // cyan
      case '64': 
        return '#6c757d' // gray
      case '81':
        return '#343a40' // dark-gray
      default:
        return '#fff' // white
    }
  }

export default iconColor