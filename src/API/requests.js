import axios from 'axios'

  /**
   * Sends token to backend with Axios
   */
  const verifyToken = () => {
    const currentToken = localStorage.getItem('token')
    console.log(currentToken)
    axios.post('http://localhost:3001/api/verifyToken', {
      "token": currentToken,
    })
  }

export default verifyToken
