import React, {PropTypes, Component } from 'react'
import DisplayTask from './DisplayTask'

export default class Calendar extends Component {
  render() {
    const { times, displayTask } = this.props
    return <div className='calendar-wrapper'>
      {times.map((time) =>
      <div>
        <hr/>
        <div className='time-wrapper'>
          <p>{time.timeLarge}</p>
          <small>{time.timeSmall}</small>
        </div>
      </div>
      )}
      <DisplayTask displayTask={displayTask}/>
    </div>
  }
}

Calendar.propTypes = {
  times: PropTypes.array.isRequired,
  displayTask: PropTypes.array.isRequired
}
