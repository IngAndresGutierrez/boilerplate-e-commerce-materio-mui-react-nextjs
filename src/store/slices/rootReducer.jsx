/* import external modules */
import { combineReducers } from 'redux'

/* import internal modules */
import user from './userSlice'

const rootReducer = combineReducers({
  user
})

export default rootReducer
