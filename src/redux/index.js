
import {makeReducer} from '../commons/ReducersHelper'
import UsersReducer from './users/UsersReducer'
import {combineReducers} from 'redux'


export const initialState = {
   usersReducer: UsersReducer.initialState
}
const combineChildrenReducers = combineReducers({
   usersReducer:UsersReducer
})
export default makeReducer({
   actionMap:{},
   initialState,
   customReducer: combineChildrenReducers
})

 
