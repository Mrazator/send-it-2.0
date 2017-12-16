import {connect} from 'react-redux'
import Body from "../../components/body/Body";
import {loadMessages} from "../../actions/body/loadMessages";

const mapStateToProps = (state) => ({
    itemId: state.channelManagement.selectedItemId,
    messages: state.channelManagement.selectedChannel.messages
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadMessages: (channelId) => dispatch(loadMessages(channelId))
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Body)

export {connectedComponent as BodyRedux}
