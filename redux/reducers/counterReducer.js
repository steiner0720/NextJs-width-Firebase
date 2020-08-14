import { counterAction } from '../actions/counterActions'

const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterAction.COUNTING: {
      return { ...state, count: action.payload, }
    }
    default:
      return state
  }
}

export default counterReducer
