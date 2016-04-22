// Utility methods.
import utils from '../../utils'

// Action types.
import * as types from '../_types'

// Get cache..
var defaultState = utils.storage.get('profileFormReducer')

// Default.
if (!defaultState) {
  defaultState = {
    data: [
      {
        name: 'input_first_name',
        value: 'Jonathan'
      },
      {
        name: 'input_middle_initial',
        value: 'W'
      },
      {
        name: 'input_last_name',
        value: 'Rogersonian'
      },
      {
        name: 'input_birth_date',
        value: '02/10/1990'
      },
      {
        name: 'input_ssn',
        value: '007-50-1337'
      },
      {
        name: 'input_email',
        value: 'jwr@example.com'
      },
      {
        name: 'input_phone',
        value: '555-867-5309'
      },
      {
        name: 'input_address_1',
        value: '1234 Fifth Street'
      },
      {
        name: 'input_address_2',
        value: 'Apartment B'
      },
      {
        name: 'input_city',
        value: 'Beverly Hills'
      },
      {
        name: 'input_state',
        value: 'CA'
      },
      {
        name: 'input_zip',
        value: '90210'
      },
      {
        name: 'input_allergies',
        value: 'No food allergies, but I am deathly allergic to cats.'
      },
      {
        name: 'input_combat_training',
        value: 'yes',
        checked: true
      },
      {
        name: 'input_combat_training',
        value: 'no',
        checked: false
      },
      {
        name: 'input_license_to_kill',
        value: 'yes',
        checked: true
      },
      {
        name: 'input_license_to_kill',
        value: 'no',
        checked: false
      },
      {
        name: 'input_farewell',
        value: 'Tell the commander that it *was* me who set fire to his car. Sorry! :)'
      },
      {
        name: 'input_agree_to_terms',
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
