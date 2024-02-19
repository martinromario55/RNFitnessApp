import axios from 'axios'
import { rapidApiKey } from '../constants'

const baseUrl = 'https://gym-fit.p.rapidapi.com'

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com',
      },
    }
    const response = await axios.request(options)
    return response.data
  } catch (error) {}
}

export const fetchExercisesByBodypart = async bodyPart => {
  let data = await apiCall(baseUrl + `/${bodyPart}`)
  return data
}
