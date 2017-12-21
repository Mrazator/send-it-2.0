import { connect } from 'react-redux'
import Body from '../../components/body/Body'
import { actionLoadMessages } from '../../actions/body/actionLoadMessages'
import { actionPostMessage } from '../../actions/body/actionPostMessage'
import { messagesLoadingFinished } from '../../actions/body/actionCreators'

const mapStateToProps = (state, ownProps) => ({
  channel: state.channelManagement.channels.filter(x => x.id === ownProps.channelId).first(),
  selectedChannel: state.channelManagement.selectedChannel
})

const mapDispatchToProps = dispatch => ({
  onLoadMessages: (channelId, lastN = 10) => dispatch(actionLoadMessages(channelId, lastN)),
  onCreateMessage: (channelId, text) => text && dispatch(actionPostMessage(channelId, text)),
  onLoadedMessage: () => dispatch(messagesLoadingFinished())
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Body)

export { connectedComponent as BodyRedux }
