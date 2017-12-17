import {connect} from 'react-redux'

import {Channel} from '../../components/channels/Channel'
import {
    channelsStartEditingChannel,
    channelsSelectChannel, channelsAddingUser, channelsAddingUserCancel
} from '../../actions/channels/actionCreators'
import {actionDeleteChannel} from "../../actions/channels/actionDeleteChannel";

const mapStateToProps = (state, ownProps) => ({
    isAddingUser: state.channelManagement.isAddingUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(actionDeleteChannel(ownProps.item.id)),
    onStartEditing: () => dispatch(channelsStartEditingChannel(ownProps.item.id)),
    onSelect: () => dispatch(channelsSelectChannel(ownProps.item.id)),
    onAddUser: () => dispatch(channelsAddingUser()),
    onAddUserCancel: () => dispatch(channelsAddingUserCancel())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Channel);

export {connectedComponent as Channel};