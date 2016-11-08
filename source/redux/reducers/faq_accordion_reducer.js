// Utility methods.
import utils from '../../utils'

// Action types.
import * as types from '../_types'

// Default.
let defaultState = utils.storage.get('faqAccordionReducer')

// Default.
if (!defaultState) {
  defaultState = {}
}

// Define reducer.
function faqAccordionReducer (state, action) {
  state = state || defaultState

  // Pivot on action type.
  switch (action.type) {
    case types.UPDATE_FAQ_ACCORDION:
      state = Object.assign({}, state, action.payload)
  }

  // Set cache.
  utils.storage.set('faqAccordionReducer', state)

  // Expose state.
  return state
}

// Export.
export default faqAccordionReducer
