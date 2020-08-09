import { connect } from 'react-redux'
import NavbarContainer from './uiContent/NavbarContainer'
import {setUserStatus, setServiceView} from '../../redux/users/UsersAction'

const mapStateToProps = (state) => {
 
    return {
        isUserLogin: state.usersReducer.isLogin,
        serviceView: state.usersReducer.serviceView
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        changeUserStatus: (isLogin) => {
            dispatch(setUserStatus(isLogin))
          },
          setServiceView: (service) => {
            dispatch(setServiceView(service))
          }
       
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)