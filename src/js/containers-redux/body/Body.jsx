import {connect} from 'react-redux'
import Body from "../../components/body/Body";


const mapStateToProps = (state) => ({
    itemId: state.selectedItemId,
})


const enhancer = connect(mapStateToProps, null)
const connectedComponent = enhancer(Body)

export {connectedComponent as BodyRedux}
