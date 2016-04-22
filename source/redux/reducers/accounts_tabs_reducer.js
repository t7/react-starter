// Utility methods.
import utils from '../../utils'

// Action types.
import * as types from '../_types'

// Default.
var defaultState = utils.storage.get('accountsTabsReducer')

// Default.
if (!defaultState) {
  defaultState = {
    selected: 0
  }
}

// Define reducer.
function accountsTabsReducer (state, action) {
  state = state || defaultState

  // Pivot on action type.
  switch (action.type) {
    case types.UPDATE_ACCOUNTS_TABS:
      state = Object.assign({}, state, action.payload)
  }

  // Set cache.
  utils.storage.set('accountsTabsReducer', state)

  // Expose state.
  return state
}

// Export.
export default accountsTabsReducer
