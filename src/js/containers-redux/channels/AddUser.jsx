import {connect} from "react-redux"
import {reduxForm} from 'redux-form'
import {AddUser} from "../../components/channels/AddUser"
import {loadUsers} from "../../actions/channels/loadUsers";
import {uploadChannelUsers} from "../../actions/channels/uploadChannelUsers";
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
    users: state.channelManagement.users,
    selected: ownProps.channel.id === state.channelManagement.selectedItemId
})

const mapDispatchToProps = (dispatch) => ({
    onLoadUsers: () => dispatch(loadUsers()),
    onSubmit: (channel) => dispatch(uploadChannelUsers(channel))
})

const formConfig = {
    form: "ADD_USER",
    touchOnChange: true,
    enableReinitialize: true
}

const stateEnhancer = connect(mapStateToProps,  mapDispatchToProps)
const formEnhancer = reduxForm(formConfig)
const connectedComponent = stateEnhancer(formEnhancer(AddUser))

connectedComponent.propTypes = {
    channel: PropTypes.shape({
        id: PropTypes.string.isRequired,
        usersInChannel: PropTypes.array.isRequired,
    }).isRequired
};
export { connectedComponent as AddUserRedux }