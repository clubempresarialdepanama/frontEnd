import {ISLOGIN} from './UsersType'

export const isLogin = (state)=>{
return{
    type: ISLOGIN,
    ... state
}
}