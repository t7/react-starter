/*
  // Utilty method for navigating React routes.

  // Used like so...

  utils.navigate([
    'users',
    userId,
    'items',
    itemId
  ])

  // Which goes to...

  '#/users/123/items/456'
*/

// Dependencies.
import { isArray } from 'lodash'

// Utility methods.
import utils from '../utils'

// Helper for page navigation.
function navigate (x) {
  if (!utils.exists(x)) {
    return
  }

  if (arguments.length > 1) {
    // Convert to array.
    x = Array.prototype.slice.call(arguments)
  }

  if (isArray(x)) {
    // Convert to string.
    x = x.join('/')
  }

  x = '' + x
  x = x.replace(/#/g, '')
  x = '#/' + x
  x = x.replace(/\/+/g, '/')

  window.location.hash = x
}

// Expose function.
export default navigate
