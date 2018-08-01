import { events } from '../constants'

initialState = {
  count: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case events.add:
      return state + 1
    default:
      return state
  }
}
