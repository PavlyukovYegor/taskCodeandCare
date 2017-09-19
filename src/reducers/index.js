import {combineReducers} from 'redux'
import task from './task'
import user from './user'
import time from './calendar'
import displayTask from './displayTask'

export default combineReducers({task, user, time, displayTask})
