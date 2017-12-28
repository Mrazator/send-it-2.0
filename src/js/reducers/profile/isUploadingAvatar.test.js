import { isUploadingAvatar } from './isUploadingAvatar'
import {
  profileFailUploadingProfileAvatar, profileStartUploadingProfileAvatar,
  profileUpdateProfileAvatar
} from '../../actions/profile/actionCreators'
import { uuid } from '../../utils/uuid'

describe('isUploadingAvatar reducer', () => {
  test('avatar uploading started', () => {
    const state = isUploadingAvatar(undefined, profileStartUploadingProfileAvatar())
    expect(state).toBeTruthy()
  })

  test('update avatar', () => {
    const state = isUploadingAvatar(true, profileUpdateProfileAvatar())
    expect(state).toBeFalsy()
  })

  test('avatar uploading failed', () => {
    const id = uuid()
    const state = isUploadingAvatar(true, profileFailUploadingProfileAvatar(id)('error message', { }))
    expect(state).toBeFalsy()
  })
})
