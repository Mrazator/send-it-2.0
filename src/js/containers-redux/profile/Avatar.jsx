import { connect } from 'react-redux'
import { Avatar as AvatarComponent } from '../../components/profile/Avatar.jsx'
import { AvatarLoader } from '../../components/profile/AvatarLoader.jsx'
import { withOverlay } from '../../components/shared/withOverlay.jsx'
import { actionUploadUserAvatar } from '../../actions/profile/actionUploadUserAvatar'

const mapStateToProps = state => ({
  isUploading: state.profile.isUploadingAvatar,
  uri: state.profile.avatarUri
})

const mapDispatchToProps = dispatch => ({
  onUpload: files => dispatch(actionUploadUserAvatar(files[0]))
})

const AvatarWithOverlay = withOverlay(AvatarComponent, AvatarLoader)
const enhancer = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = enhancer(AvatarWithOverlay)

export { connectedComponent as Avatar }
