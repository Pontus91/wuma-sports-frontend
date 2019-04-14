export const ACTION_UPDATE_TESTONE = 'ACTION_UPDATE_TESTONE'
export const UPDATE_TESTONE = 'UPDATE_TESTONE'

export const updateTestone = data => ({
  type: ACTION_UPDATE_TESTONE,
  data
});

export const doUpdateTestone = (data) => ({
  type: UPDATE_TESTONE,
  data
})