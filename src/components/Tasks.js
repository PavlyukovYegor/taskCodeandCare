import React, {PropTypes, Component} from 'react'

export default class Tasks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startTimeIsEmpty: true,
      durationTimeIsEmpty: true,
      titleIsEmpty: true
    }
  }

  onTaskBtnClick = (e) => {
    this.props.setTask(e.target.textContent)
  }

  startTimeChange = (e) => {
    this.props.setStartTime(e.target.value)

    if (e.target.value.trim().length > 0) {
      this.setState({startTimeIsEmpty: false})
    } else {
      this.setState({startTimeIsEmpty: true})
    }
  }

  durationTimeChange = (e) => {
    this.props.setDurationTime(e.target.value)

    if (e.target.value.trim().length > 0) {
      this.setState({durationTimeIsEmpty: false})
    } else {
      this.setState({durationTimeIsEmpty: true})
    }
  }

  titleChange = (e) => {
    this.props.setTitle(e.target.value)

    if (e.target.value.trim().length > 0) {
      this.setState({titleIsEmpty: false})
    } else {
      this.setState({titleIsEmpty: true})
    }
  }

  render() {

    return <div className='input-wrapper'>
      <input onChange={:: this.startTimeChange} placeholder='Start time in minutes' ref='startTime'/>
      <input onChange={:: this.durationTimeChange} placeholder='Duration time in mimutes' ref='durationTime'/>
      <input onChange={:: this.titleChange} placeholder='Title task' ref='titleTask'/>
      <button className='submit-button' onClick={this.onSubmitClickHandler} disabled={!this.titleIsEmpty || !this.startTimeIsEmpty || !this.durationTimeIsEmpty}>
        Submit
      </button>
    </div>
  }
}

Tasks.propTypes = {
  setStartTime: PropTypes.func.isRequired,
  setDurationTime: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired
}
