// Utility methods.
import utils from '../../utils'

// Fake data.
import fake from '../../fake'

// Action types.
import * as types from '../_types'

// Default.
let defaultState = utils.storage.get('checkingTableReducer')

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
function checkingTableReducer (state, action) {
  state = state || defaultState

  // Pivot on action type.
  switch (action.type) {
    case types.UPDATE_CHECKING_TABLE:
      state = Object.assign({}, state, action.payload)
  }

  // Set cache.
  utils.storage.set('checkingTableReducer', state)

  // Expose state.
  return state
}

// Export.
export default checkingTableReducer
