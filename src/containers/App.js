import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Tasks from '../components/Tasks'
import Calendar from '../components/Calendar'
import DevTools from './DevTool'
import * as timeActions from '../actions/TasksAction'
import * as displayActions from '../actions/DisplayTaskItem'
import '../styles/app.css'

class App extends Component {
  // componentDidMount() {
  //   this.props.displayActionsFetch('http://localhost:3000/read/')
  // }

  render() {
    const {displayTask, user, time} = this.props
    const {setStartTime, setDurationTime, setTitle} = this.props.timeActions
    // const {displayTask} = this.props.displayActions

    //change title for length <= 29
    displayTask.displayTask.map((item) => {
      item.title = item.title.length > 29
        ? `${item.title.substring(0, 29)}...`
        : item.title
    })
    if (this.props.displayLoad) {
      return <h1>Loading!</h1>
    }
    console.log(displayTask)

    return <div className='app'>
      <User name={user.name}/>
      <Calendar times={time.times} displayTask={displayTask.displayTask}/>
      <Tasks setStartTime={setStartTime} setTitle={setTitle} setDurationTime={setDurationTime}/>
      <DevTools/>
    </div>
  }
}

function mapStateToProps(state) {
  return {user: state.user, displayTask: state.displayTask, time: state.time, displayLoad: state.displayLoad}
}

function mapDispatchToProps(dispatch) {
  return {
    timeActions: bindActionCreators(timeActions, dispatch),
    displayActions: bindActionCreators(displayActions, dispatch),
    displayActionsFetch: (url) => dispatch(displayActions.displayFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
