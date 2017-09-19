import React, { Component } from 'react'

export default class DisplayTask extends Component {
  render() {
    const { displayTask } = this.props
    return <div>
    {displayTask.map((item) =>
      <div className='task-wrapper' style={{top: item.start, height: item.duration}}>
      <p>{item.title}</p>
      </div>
    )}
    </div>
  }
}
