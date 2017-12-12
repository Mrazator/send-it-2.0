import {connect} from 'react-redux'

import {ChannelEdited} from '../../containers/channels/ChannelEdited.jsx'
import {
    cancelEditingItem
} from '../../actions/channels/actionCreators'
import {editChannel} from "../../actions/channels/updateChannel";

const mapDispatchToProps = (dispatch) => ({
    onUpdate: (item) => dispatch(editChannel(item)),
    onCancelEditing: () => dispatch(cancelEditingItem())
})

const enhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = enhancer(ChannelEdited)

export {connectedComponent as ChannelEdited}