export const counterAction = {
  COUNTING: 'COUNTING',
}

export const counting = ({ dispatch, count }) => {
  dispatch({
    type: counterAction.COUNTING,
    payload: count,
  })
}
