import axios from "axios"

const API_KEY = "f2f04e9635d1e8ac89eecca136b80fe6";
const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}`

export const  weatherapp = async (query) => {
  const { data } = await axios.get(URL,{
    params: {
        q: query,
        units: "metric",
        APPID:API_KEY
    }
  })
  return data;
}

 