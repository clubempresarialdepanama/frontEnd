import { connect} from 'react-redux'
import MainContent from './uiContent/MainContent'
 const mapStateToProps = (state)=>{
     return{
//    example: this.state.example
     }

 }
 const mapDispatchToProps=(dispatch) =>{
     return{
        //  exampleMethodOne = (val)=>{
        //      dispatch(anyActionExample(val))
        //  }
     }
 }

export default connect ( mapStateToProps, mapDispatchToProps)(MainContent)