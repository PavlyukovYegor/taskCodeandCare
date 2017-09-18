const initialState = {
  task: 'title'
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case 'SET_TASK':
      return { ...state, task: action.payload }

    default:
      return state
  }
}
