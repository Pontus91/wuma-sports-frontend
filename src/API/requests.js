import axios from 'axios'
const currentToken = localStorage.getItem('token')

const headers = {
  Bearer: currentToken,
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
    axios.get('http://localhost:3001/api/userDetails', null, {
      headers
  })
}

export {
  verifyToken,
  getUser
} 
