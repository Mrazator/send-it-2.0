import {connect} from 'react-redux'

import {Channel} from '../../components/channels/Channel'
import {
    removeChannel,
    startEditingItem,
    selectChannel
} from '../../actions/channels/actionCreators'


const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(removeChannel(ownProps.item.id)),
    onStartEditing: () => dispatch(startEditingItem(ownProps.item.id)),
    onSelect: () => dispatch(selectChannel(ownProps.item.id))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(Channel);

export {connectedComponent as Channel};