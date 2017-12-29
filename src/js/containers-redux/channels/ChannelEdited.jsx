import { connect } from 'react-redux'

import { ChannelEdited } from '../../containers/channels/ChannelEdited.jsx'
import {
  channelsCancelEditingChannel
} from '../../actions/channels/actionCreators'
import { actionEditChannel } from '../../actions/channels'

const mapDispatchToProps = dispatch => ({
  onUpdate: item => dispatch(actionEditChannel(item)),
  onCancelEditing: () => dispatch(channelsCancelEditingChannel())
})

const enhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = enhancer(ChannelEdited)

export { connectedComponent as ChannelEdited }
