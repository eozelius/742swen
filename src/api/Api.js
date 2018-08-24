import axios from 'axios'

export default class Api {
  static fetchHeadlines = () => {
    console.log("Api () => fetching stories")

    const params = {
      headers: { 
        'Authorization': '<KEY>'
      }
    }


    axios.get('<URL>', params)
      .then((response) => {
        console.log("request successful")
        console.log(response)
      })
      .catch((error) => {
        console.log("request error")
        console.log(error)
      })
  }
}