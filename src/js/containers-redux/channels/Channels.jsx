import { connect } from 'react-redux'
import Channels from "../../containers/channels/Channels"
import {
  addChannel,
  updateChannel,
  removeChannel,
  cancelEditingItem,
  startEditingItem
} from "../../actions/channels/actionCreators"

const mapStateToProps = (state) => ({
  list: state.app.channelList,
  editedItemId: state.app.editedItemId
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(addChannel()),
  onUpdate: item => dispatch(updateChannel(item)),
  onDelete: id => dispatch(removeChannel(id)),
  onStartEditing: id => dispatch(startEditingItem(id)),
  onCancelEditing: () => dispatch(cancelEditingItem())
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
