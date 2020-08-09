import { SET_USER_STATUS, SET_SERVICE_VIEW} from './UsersType'



export const setUserStatus = (isLogin)=>{
    return{
        type: SET_USER_STATUS,
        isLogin
    }
    }
export const setServiceView = (serviceView)=>{
    return{
        type: SET_SERVICE_VIEW,
        serviceView
    }
    }