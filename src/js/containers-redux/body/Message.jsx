import { connect } from 'react-redux'
import { Message } from '../../components/body/Message'
import { actionVoteMessage } from '../../actions/body/actionVoteMessage'
import { actionDeleteMessage } from '../../actions/body/actionDeleteMessage'

const mapStateToProps = state => ({
  loggedInUserEmail: state.shared.email
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteMessage: () => dispatch(actionDeleteMessage(ownProps.selectedChannelId, ownProps.item.id)),
  onVoteMessage: (channelId, messageId) => () => dispatch(() => actionVoteMessage(channelId, messageId))
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Message)

export { connectedComponent as MessageRedux }
