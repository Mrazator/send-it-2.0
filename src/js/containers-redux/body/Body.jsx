import {connect} from 'react-redux'
import Body from "../../components/body/Body";
import {loadMessages} from "../../actions/body/loadMessages";
import {createMessage} from "../../actions/body/createMessage";
import {loadingEnded} from "../../actions/body/actionCreators";

const mapStateToProps = (state) => ({
    itemId: state.channelManagement.selectedItemId,
    messages: state.channelManagement.selectedChannel.Messages
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoadMessages: (channelId) => dispatch(loadMessages(channelId)),
    onCreateMessage: (channelId, text) => dispatch(createMessage(channelId, text)),
    onLoadedMessage: () => dispatch(loadingEnded())
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Body)

export {connectedComponent as BodyRedux}
