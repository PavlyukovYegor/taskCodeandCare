export function displayTaskErr(bool) {

  return {type: 'DISPLAY_HAS_ERRORS', payload: bool}
}

export function displayLoad(bool) {

  return {type: 'DISPLAY_IS_LOAD', payload: bool}
}

export function displaySuccess(displayTask) {
  return {type: 'DISPLAY_SUCCESS', payload: displayTask}
}

export function displayFetchData(url) {
  return (dispatch) => {
    dispatch(displayLoad(true))

    fetch(url, {method: 'post'})
          .then((response) => {
            if(!response.ok) {
              throw Error(response.statusText)
            }

            dispatch(displayLoad(false))

            return response
          })
          .then((response) => response.json())
          .then((displayTask) => dispatch(displaySuccess(displayTask)))
          .catch(() => dispatch(displayTaskErr(true)))
  }
}
