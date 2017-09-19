const initialState = {
  times: [
    {
      timeLarge: '08:00',
      timeSmall: '08:30'
    }, {
      timeLarge: '09:00',
      timeSmall: '09:30'
    }, {
      timeLarge: '10:00',
      timeSmall: '10:30'

    }, {
      timeLarge: '11:00',
      timeSmall: '11:30'

    }, {
      timeLarge: '12:00',
      timeSmall: '12:30'

    }, {
      timeLarge: '13:00',
      timeSmall: '13:30'

    }, {
      timeLarge: '14:00',
      timeSmall: '14:30'

    }, {
      timeLarge: '15:00',
      timeSmall: '15:30'

    }, {
      timeLarge: '16:00',
      timeSmall: '16:30'

    }, {
      timeLarge: '17:00'
    }
  ]
};

export default function time(state = initialState) {
  return state;
}
