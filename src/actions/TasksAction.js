export function setStartTime(startTime) {

  return {
    type: 'SET_TIME',
    payload: startTime
  }
}

export function setDurationTime(durationTime) {

  return {
    type: 'SET_DURATION_TIME',
    payload: durationTime
  }
}

export function setTitle(title) {

  return {
    type: 'SET_TITLE',
    payload: title
  }
}
