// import React from 'react'
// import axios from 'axios'
// import WeatherDetail from './detail'
// import WeatherWidget from './widget'

// class Weather extends React.component {
//   async getWeather(city) {
//     const params = {
//       q: `select * from geo.places(1) where text='${city}'`,
//       format: 'json',
//       diagnostics: true,
//     }
//     const res = axios.get('https://query.yahooapis.com/v1/public/yql', { params })

//     console.log(res)
//   }
//   render() {
//     return [
//       <WeatherDetail key='wd' />,
//       <WeatherWidget key='ww' />,
//     ]
//   }
// }

// export default Weather
