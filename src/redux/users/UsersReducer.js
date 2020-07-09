 import {makeReducer} from '../../commons/ReducersHelper'
 import {ISLOGIN} from './UsersType'


   export const initialState = {
      isLogin:false
  }
export const actionsMap={
    [ISLOGIN]:(prevState,{isLogin})=>{
        return {
            ...prevState,
            isLogin
        }
    }
}
 

 export default makeReducer({initialState, actionsMap})