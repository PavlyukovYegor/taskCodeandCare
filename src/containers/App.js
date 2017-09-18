import React, { Component } from 'react'
import { connect } from 'react-redux'
import  User  from '../components/User'
import  Tasks  from '../components/Tasks'
import DevTools from './DevTool'

class App extends Component {
  render() {
    const { user, task } = this.props
    return <div>
    <User name={user.name}/>
    <Tasks tasks={task.tasks}/>
    <DevTools/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    task: state.task
  }
}

export default connect(mapStateToProps)(App)
