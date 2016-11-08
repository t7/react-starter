// Utility methods.
import utils from '../../utils'

// Action types.
import * as types from '../_types'

// Get cache..
let defaultState = utils.storage.get('profileFormReducer')

// Default.
if (!defaultState) {
  defaultState = {
    data: [
      {
        name: 'inputFirstName',
        value: 'Jonathan'
      },
      {
        name: 'inputMiddleInitial',
        value: 'W'
      },
      {
        name: 'inputLastName',
        value: 'Rogersonian'
      },
      {
        name: 'inputBirthDate',
        value: '02/10/1990'
      },
      {
        name: 'inputSsn',
        value: '007-50-1337'
      },
      {
        name: 'inputEmail',
        value: 'jwr@example.com'
      },
      {
        name: 'inputPhone',
        value: '555-867-5309'
      },
      {
        name: 'inputAddress1',
        value: '1234 Fifth Street'
      },
      {
        name: 'inputAddress2',
        value: 'Apartment B'
      },
      {
        name: 'inputCity',
        value: 'Beverly Hills'
      },
      {
        name: 'inputState',
        value: 'CA'
      },
      {
        name: 'inputZip',
        value: '90210'
      },
      {
        name: 'inputAllergies',
        value: 'No food allergies, but I am deathly allergic to cats.'
      },
      {
        name: 'inputCombatTraining',
        value: 'yes',
        checked: true
      },
      {
        name: 'inputCombatTraining',
        value: 'no',
        checked: false
      },
      {
        name: 'inputLicenseToKill',
        value: 'yes',
        checked: true
      },
      {
        name: 'inputLicenseToKill',
        value: 'no',
        checked: false
      },
      {
        name: 'inputFarewell',
        value: 'Tell the commander that it *was* me who set fire to his car. Sorry! :)'
      },
      {
        name: 'inputAgreeToTerms',
        value: 'I agree to these terms.',
        checked: false
      }
    ]
  }
}

// Define reducer.
function profileFormReducer (state, action) {
  state = state || defaultState

  // Pivot on action type.
  switch (action.type) {
    case types.UPDATE_PROFILE_FORM:
      state = Object.assign({}, state, action.payload)
  }

  // Set cache.
  utils.storage.set('profileFormReducer', state)

  // Expose state.
  return state
}

// Export.
export default profileFormReducer
