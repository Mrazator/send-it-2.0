import {connect} from 'react-redux'

import {Channel} from '../../components/channels/Channel'
import {
    startEditingItem,
    selectChannel, addingUser, cancelAddingUser
} from '../../actions/channels/actionCreators'
import {deleteChannel} from "../../actions/channels/deleteChannel";

const mapStateToProps = (state, ownProps) => ({
    isAddingUser: state.channelManagement.isAddingUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteChannel(ownProps.item.id)),
    onStartEditing: () => dispatch(startEditingItem(ownProps.item.id)),
    onSelect: () => dispatch(selectChannel(ownProps.item.id)),
    onAddUser: () => dispatch(addingUser()),
    onAddUserCancel: () => dispatch(cancelAddingUser())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Channel);

export {connectedComponent as Channel};