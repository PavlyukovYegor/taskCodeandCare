import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Tasks from '../components/Tasks'
import DevTools from './DevTool'
import * as taskActions from '../actions/TasksAction'

class App extends Component {
  render() {
    const {user, task} = this.props
    const { setTask } = this.props.taskActions

    return <div>
      <User name={user.name}/>
      <Tasks task={task.task} setTask={setTask}/>
      <DevTools/>
    </div>
  }
}

function mapStateToProps(state) {
  return {user: state.user, task: state.task}
}

function mapDispatchToProps(dispatch) {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
