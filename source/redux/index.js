// Dependencies.
import { combineReducers } from 'redux'

// Child reducers.
import accountsTabsReducer from './reducers/accounts_tabs_reducer'
import checkingTableReducer from './reducers/checking_table_reducer'
import faqAccordionReducer from './reducers/faq_accordion_reducer'
import profileFormReducer from './reducers/profile_form_reducer'
import savingsTableReducer from './reducers/savings_table_reducer'

// Bundle into root.
const rootReducer = combineReducers({
  accountsTabsReducer,
  checkingTableReducer,
  faqAccordionReducer,
  profileFormReducer,
  savingsTableReducer
})

// Export.
export default rootReducer
