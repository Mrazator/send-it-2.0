import {connect} from 'react-redux'
import Body from "../../components/body/Body";

const mapStateToProps = (state) => ({
    itemId: state.channelManagement.selectedItemId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadMessages: (channelId) => dispatch()
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Body)

export {connectedComponent as BodyRedux}
