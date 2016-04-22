// Utility methods.
import utils from '../../utils'

// Fake data.
import fake from '../../fake'

// Action types.
import * as types from '../_types'

// Get cache..
var defaultState = utils.storage.get('savingsTableReducer')

// Default.
if (!defaultState) {
  defaultState = {
    columns: fake.dataTableCols(),
    data: fake.dataTableRows(70, 9000),
    pageCurrent: 0,
    pageSize: 15,
    sortDirection: null,
    sortIndex: null
  }
}

// Define reducer.
function savingsTableReducer (state, action) {
  state = state || defaultState

  // Pivot on action type.
  switch (action.type) {
    case types.UPDATE_SAVINGS_TABLE:
      state = Object.assign({}, state, action.payload)
  }

  // Set cache.
  utils.storage.set('savingsTableReducer', state)

  // Expose state.
  return state
}

// Export.
export default savingsTableReducer
