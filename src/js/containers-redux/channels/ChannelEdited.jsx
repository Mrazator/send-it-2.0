import {connect} from 'react-redux'

import {ChannelEdited} from '../../containers/channels/ChannelEdited.jsx'
import {
    cancelEditingItem,
    updateChannel
} from '../../actions/channels/actionCreators'

const mapDispatchToProps = (dispatch) => ({
    onUpdate: (item) => dispatch(updateChannel(item)),
    onCancelEditing: () => dispatch(cancelEditingItem())
})

const enhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = enhancer(ChannelEdited)

export {connectedComponent as ChannelEdited}