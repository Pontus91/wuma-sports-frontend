import axios from 'axios'
const currentToken = localStorage.getItem('token')

const headers = {
  "Authorization": `Bearer ${currentToken}`,
}

/**
 * Sends token to backend with Axios
 */
const verifyToken = () => {
  axios.post('http://localhost:3001/api/verifyToken', {
    "token": currentToken,
  })
}

export {
  verifyToken,
} 
