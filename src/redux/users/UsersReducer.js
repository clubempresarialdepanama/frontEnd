 import {makeReducer} from '../../commons/ReducersHelper'
 import { SET_USER_STATUS,SET_SERVICE_VIEW } from './UsersType'


   export const initialState = {
    isLogin: false,
    serviceView: 0
  }
export const actionsMap={

    [SET_USER_STATUS]: (prevState, { isLogin }) => {
       
        return {
          ...prevState,
          isLogin
        }
      },
    [SET_SERVICE_VIEW]: (prevState, { serviceView }) => {
    
        return {
          ...prevState,
          serviceView
        }
      },

}
 export default makeReducer({initialState, actionsMap})