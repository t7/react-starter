// Action types.
import * as types from '../_types'

export function updateSavingsTableAction (payload) {
  return {
    type: types.UPDATE_SAVINGS_TABLE,
    payload: payload
  }
}
