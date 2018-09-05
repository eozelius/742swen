import axios from 'axios'
import { mock_filter_groups } from '../mock_data/mock_filter_groups'
import { mock_headlines } from '../mock_data/mock_headlines'


export default class Api {
  static fetchHeadlines(){
    // const params = {
    //   headers: { 
    //     'Authorization': 'Basic ZXRoYW46b3plbGl1cw=='
    //   }
    // }

    // axios.get('https://preview.247newssource.com/jsonapi/node/story', params)
    //   .then((response) => {
    //     console.log("request successful")
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log("request error")
    //     console.log(error)
    //   })
    const headlines = JSON.parse(mock_headlines)
    return headlines
  }

  static fetchToken() {
    console.log('fetching token')

    console.log(sessionStorage.getItem('CSRFToken'))
    
    if (sessionStorage.getItem('CSRFToken') == null) {
      console.log("sending token request")
      const params = {
        headers: { 
          'Authorization': 'Basic ZXRoYW46b3plbGl1cw=='
        }
      }

      axios.get('https://preview.247newssource.com/rest/session/token', params)
        .then((response) => {
          console.log('Token Get success')
          console.log(response)

        })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
    }
  }

  static fetchCategories() {
    // const params = {
    //   headers: {
    //     'Authorization': 'Basic ZXRoYW46b3plbGl1cw=='
    //   }
    // }

    // axios.get('https://preview.247newssource.com/api/filter-groups?_format=json', params)
    //   .then((response) => {
    //     console.log('success')
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log('error')
    //     console.log(error)
    //   })

    const filterGroups = JSON.parse(mock_filter_groups)
    return filterGroups
  }
}