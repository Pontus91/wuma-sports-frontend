import axios from 'axios'

  const verifyToken = () => {
    const currentToken = localStorage.getItem('token')
    console.log(currentToken)
    axios.post('localhost:3001/api/verifyToken', {
      "token": currentToken,
    })
  }

export default verifyToken
/*

const config = {
      headers: {'Authorization': "bearer" + token}
    }
  
    const bodyParameters = {
      key: "value"
    }

    Axios.post('',
     bodyParameters,
     config,
     ).then((response) => {
       console.log(response)
     }).catch((error) => {
       console.log(error)
     })
  }

  */
