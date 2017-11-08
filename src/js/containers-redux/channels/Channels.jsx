import { connect } from 'react-redux'
import Channels from "../../containers/channels/Channels"
import {
  addChannel,
  updateChannel,
  removeChannel
} from "../../actions/channels/actionCreators"

const mapStateToProps = (state) => ({
  list: state.app.channelList
})

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(addChannel()),
  onUpdate: item => dispatch(updateChannel(item)),
  onDelete: id => dispatch(removeChannel(id))
})

const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(Channels)

export {connectedComponent as ChannelsRedux}
