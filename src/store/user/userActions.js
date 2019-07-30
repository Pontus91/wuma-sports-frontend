export const GET_USER = 'GET_USER'
export const USER_REQUEST = 'USER_REQUEST'
export const USER_FAILURE = 'USER_FAILURE'

export const loadUser = data => ({
  type: USER_REQUEST,
  data
})
