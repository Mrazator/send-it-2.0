import { LOCATION_CHANGE } from 'connected-react-router'
import Immutable from 'immutable'

import { errors } from './errors'
import { failAuthentication, sharedDismissError } from '../../actions/shared/actionCreators'
import { uuid } from '../../utils/uuid'

describe('errors reducer', () => {
  test('failed', () => {
    // needs DI
    const id = uuid()
    const state = errors(Immutable.OrderedMap(), failAuthentication(id)('error message', { }))
    expect(state.first().id).toEqual(id)
  })

  test('dismiss error', () => {
    const map = Immutable.OrderedMap()
    map.set(1, 'value')
    const state = errors(map, sharedDismissError(1))
    expect(state).toEqual(Immutable.OrderedMap())
  })

  test('location change', () => {
    const state = errors(Immutable.OrderedMap(), { type: LOCATION_CHANGE })
    expect(state).toEqual(Immutable.OrderedMap())
  })
})
