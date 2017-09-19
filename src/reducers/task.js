const initialState = {
  startTime: '',
  durationTime: '',
  title: ''
};

export default function task(state = initialState, action) {
  switch (action.type) {
  case 'SET_TIME':
      return { ...state, startTime: action.payload }
  case 'SET_DURATION_TIME':
      return { ...state, durationTime: action.payload }
  case 'SET_TITLE':
      return { ...state, title: action.payload }

    default:
      return state
  }
}
