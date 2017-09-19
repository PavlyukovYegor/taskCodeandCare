import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Tasks from '../components/Tasks'
import Calendar from '../components/Calendar'
import DevTools from './DevTool'
import * as timeActions from '../actions/TasksAction'
import '../styles/app.css'

class App extends Component {
  render() {
    const {user, time, displayTask} = this.props
    const {setStartTime, setDurationTime, setTitle} = this.props.timeActions

    //change title for length <= 29
    displayTask.displayTask.map((item) => {
      item.title = item.title.length > 29
        ? `${item.title.substring(0, 29)}...`
        : item.title
    })

    return <div className='app'>
      <User name={user.name}/>
      <Calendar times={time.times} displayTask={displayTask.displayTask}/>
      <Tasks setStartTime={setStartTime} setTitle={setTitle} setDurationTime={setDurationTime}/>
      <DevTools/>
    </div>
  }
}

function mapStateToProps(state) {
  return {user: state.user, time: state.time, displayTask: state.displayTask}
}

function mapDispatchToProps(dispatch) {
  return {
    timeActions: bindActionCreators(timeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
