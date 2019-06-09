export const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const updateUser = data => ({
  type: ACTION_UPDATE_USER,
  data
});

export const doUpdateUser = (data) => ({
  type: UPDATE_USER,
  data
})