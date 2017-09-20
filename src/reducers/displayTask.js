const initialState = {
  displayTask: [
    {
      start: 0,
      duration: 80,
      title: 'Text title long text for test long text and hieght him'
    },
    {
      start: 0,
      duration: 80,
      title: 'Text title long text for test long text and hieght him'
    },
    {
      start: 0,
      duration: 80,
      title: 'Text title long text for test long text and hieght him'
    },
    {
      start: 0,
      duration: 80,
      title: 'Text title long text for test long text and hieght him'
    }
  ]
};

export default function displayTask(state = initialState, action) {
  switch (action.type) {
    case 'DISPLAY_HAS_ERRORS':
      return {
        ...state,
        bool: action.payload
      }
    case 'DISPLAY_IS_LOAD':
      return {
        ...state,
        bool: action.payload
      }
    case 'DISPLAY_SUCCESS':
      return {
        ...state,
        displayTask: action.payload
      }
    default:
      return state
  }
}
