import axios from 'axios'
const currentToken = localStorage.getItem('token')

const headers = {
  "Bearer": currentToken,
}

/**
 * Sends token to backend with Axios
 */
const verifyToken = () => {
  axios.post('http://localhost:3001/api/verifyToken', {
    "token": currentToken,
  })
}

/**
 * Gets user from our mongo database using Axios
 */
const getUser = () => {
  console.log(headers);

  axios.get('http://localhost:3001/api/userDetails', { headers });
}

export {
  verifyToken,
  getUser
} 
