## 247 News Lite Version
This project is a mobile-friendly free version of [247News](http://247newssource.com).  While this project uses the same Drupal backend API to fetch news stories, this is completely separate React app.

This project was created with [create-react-app](https://github.com/facebookincubator/create-react-app).  This project uses Redux for to store and fetch news stories.

## setup
To get up and running, clone the project and run `npm start`.

## Network requests (not implemented)
 - On Page Load 
    - `/api/user/profile?_format=json`
    - `/api/filter-groups?_format=json`
    - `/api/latest-headlines?_format=json`
    - `/api/categories?_format=json`
    

## API endpoints reference
  - All => id: 796491
  - All (No sports) => 796496