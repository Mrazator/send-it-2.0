import { connect } from 'react-redux'

import { SavingStatus } from '../../components/channels/SavingStatus'
import { actionSaveChannels } from '../../actions/channels/actionSaveChannels'

const mapStateToProps = state => ({
  channels: state.channelManagement.channels,
  isSavingChannels: state.channelManagement.isSavingChannels
})

const mapDispatchToProps = dispatch => ({
  save: () => dispatch(actionSaveChannels())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(SavingStatus)

export { connectedComponent as SavingStatus }
