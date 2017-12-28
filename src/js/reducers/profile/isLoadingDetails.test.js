import { isLoadingDetails } from './isLoadingDetails'
import { profileStartFetchingProfileDetails, profileUpdateProfileDetails } from '../../actions/profile/actionCreators'

describe('isLoading started reducer', () => {
  test('profile fetching started', () => {
    const state = isLoadingDetails(false, profileStartFetchingProfileDetails())
    expect(state).toBeTruthy()
  })
  test('profile update details', () => {
    const state = isLoadingDetails(true, profileUpdateProfileDetails('', {}))
    expect(state).toBeFalsy()
  })
})
