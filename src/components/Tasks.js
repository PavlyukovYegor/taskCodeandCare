import React, { PropTypes, Component } from 'react'

export default class Tasks extends Component {
  render() {
    const { tasks } = this.props
    return <div>
    <h2>You have {tasks.length} tasks</h2>
    </div>
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}
