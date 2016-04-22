// Action types.
import * as types from '../_types'

export function updateProfileFormAction (payload) {
  return {
    type: types.UPDATE_PROFILE_FORM,
    payload: payload
  }
}
