import { connect } from 'react-redux'
import { Message } from '../../components/body/Message'
import { actionDeleteMessage, actionVoteMessage } from '../../actions/body'

const mapStateToProps = state => ({
  loggedInUserEmail: state.shared.email
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteMessage: () => dispatch(actionDeleteMessage(ownProps.selectedChannelId, ownProps.item.id)),
  onVoteMessage: () => dispatch(actionVoteMessage(ownProps.selectedChannelId, ownProps.item))
})


const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Message)

export { connectedComponent as MessageRedux }
