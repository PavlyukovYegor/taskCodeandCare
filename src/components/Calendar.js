import React, {PropTypes, Component } from 'react'

export default class Calendar extends Component {
  render() {
    const { times } = this.props
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
    </div>
  }
}

Calendar.propTypes = {
  times: PropTypes.array.isRequired
}
