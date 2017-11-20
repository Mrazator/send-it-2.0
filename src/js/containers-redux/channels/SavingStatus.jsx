import {connect} from 'react-redux'

import {SavingStatus} from '../../components/channels/SavingStatus'
import {saveChannels} from '../../actions/channels/saveChannels'

const mapStateToProps = (state) => ({
    channels: state.channelManagement.channels,
    isSaving: state.channelManagement.isSaving,
})

const mapDispatchToProps = (dispatch) => ({
    save: () => dispatch(saveChannels())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(SavingStatus)

export {connectedComponent as SavingStatus}