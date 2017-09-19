import {combineReducers} from 'redux'
import task from './task'
import user from './user'
import time from './calendar'

export default combineReducers({task, user, time})
