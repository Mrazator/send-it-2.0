import { connect } from 'react-redux'
import { actionLoadMessages } from '../../actions/body/actionLoadMessages'
import { actionPostMessage } from '../../actions/body/actionPostMessage'
import { messagesLoadingFinished } from '../../actions/body/actionCreators'
import { Message } from '../../components/body/Message'

const mapStateToProps = state => ({
  loggedInUserEmail: state.shared.email
})

// const mapDispatchToProps = dispatch => ({
//   // onLoadMessages: channelId => dispatch(actionLoadMessages(channelId)),
//   // onCreateMessage: (channelId, text) => text && dispatch(actionPostMessage(channelId, text)),
//   // onLoadedMessage: () => dispatch(messagesLoadingFinished())
// })


const enhancer = connect(mapStateToProps, null)
const connectedComponent = enhancer(Message)

export { connectedComponent as MessageRedux }
