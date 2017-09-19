const initialState = {
  displayTask: [
    {
      start: 60,
      duration: 80,
      title: 'Text title long text for test long text and hieght him'
    },
    {
      start: 120,
      duration: 50,
      title: 'Text title'
    },
    {
      start: 60,
      duration: 30,
      title: 'Text title'
    },
    {
      start: 350,
      duration: 80,
      title: 'Text title'
    },

  ]
};

export default function displayTask(state = initialState) {
  return state;
}
