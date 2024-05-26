import axios from 'axios'
import * as FileSystem from 'expo-file-system';

// const BACKEND_URL = 'http://0.0.0.0:3000'
const BACKEND_URL = 'http://192.168.2.12:3000' //using laptop's ip address

const getMessages = async (username) => {
  try {
    const response = await axios.get(BACKEND_URL + '/messages/' + username)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const postAudioMessage = async (audioUri, username) => {
  try {
    const { body } = await FileSystem.uploadAsync(BACKEND_URL  + '/uploadAudioFile', audioUri, {
      fieldName: 'file',
      httpMethod: 'POST',
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      parameters: {
        username: username
      }
    })
    const responseBody = JSON.parse(body)
    return responseBody
  } catch (error) {
    console.log(error)
  }
}

const postUserMessage = async (latestMessages, username) => {
  try {
    const response = await axios.post(BACKEND_URL + '/getReply', {
      username: username,
      input: latestMessages
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}


export { getMessages, postAudioMessage, postUserMessage }