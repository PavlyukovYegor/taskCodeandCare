import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Tasks from '../components/Tasks'
import Calendar from '../components/Calendar'
import DevTools from './DevTool'
import * as taskActions from '../actions/TasksAction'
import '../styles/app.css'

class App extends Component {
  render() {
    const {user, task, time} = this.props
    const {setTask} = this.props.taskActions

    return <div className='app'>
      <User name={user.name}/>
      <Tasks task={task.task} setTask={setTask}/>
      <Calendar times={time.times}/>
      <DevTools/>
    </div>
  }
}

function mapStateToProps(state) {
  return {user: state.user, task: state.task, time: state.time}
}

function mapDispatchToProps(dispatch) {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
