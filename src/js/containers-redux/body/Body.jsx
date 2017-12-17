import {connect} from 'react-redux'
import Body from "../../components/body/Body";
import {actionLoadMessages} from "../../actions/body/actionLoadMessages";
import {actionPostMessage} from "../../actions/body/actionPostMessage";
import {messagesLoadingFinished} from "../../actions/body/actionCreators";

const mapStateToProps = (state) => ({
    itemId: state.channelManagement.selectedChannel.id,
    messages: state.channelManagement.selectedChannel.messages
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadMessages: (channelId) => dispatch(actionLoadMessages(channelId)),
    onCreateMessage: (channelId, text) => dispatch(actionPostMessage(channelId, text)),
    onLoadedMessage: () => dispatch(messagesLoadingFinished())
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Body)

export {connectedComponent as BodyRedux}
