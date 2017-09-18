import React, {PropTypes, Component} from 'react'

export default class Tasks extends Component {
  onTaskBtnClick(e) {
    this.props.setTask(e.target.textContent)
  }

  render() {
    const { task } = this.props
    return <div>
    <p>
      <button onClick={::this.onTaskBtnClick}>titling</button>
      <button onClick={::this.onTaskBtnClick}>test</button>
      <button onClick={::this.onTaskBtnClick}>task</button>
    </p>
      <h2>You have: {task} </h2>
    </div>
  }
}

Tasks.propTypes = {
  task: PropTypes.string.isRequired,
  setTask: PropTypes.func.isRequired
}
