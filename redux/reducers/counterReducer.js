import { counterAction } from '../actions/counterActions'

const initialState = {
  count: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case counterAction.COUNTING: {
      return {
        ...state,
        count: action.payload,
      }
    }
    default:
      return state
  }
}
