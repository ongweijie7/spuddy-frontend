import axios from 'axios'
import * as FileSystem from 'expo-file-system';

// const BACKEND_URL = 'http://0.0.0.0:3000'
const BACKEND_URL = 'http://192.168.2.12:3000' //using laptop's ip address

const getUser = async (email) => {
  try {
    const response = await axios.get(BACKEND_URL + '/user/' + email)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const createUser = async (username, learningLanguage, nativeLanguage) => {
  try {
    const body = {
      username: username,
      nativeLanguage: nativeLanguage,
      learningLanguage: learningLanguage
    }
    const response = await axios.post(BACKEND_URL + '/user', body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}


export { getUser, createUser }