/*
  // Utilty method for generating React routes.

  // Used like so...

  const url = utils.path([
    'users',
    userId,
    'item',
    itemId
  ])

  // Which yields...

  '#/users/123/item/456'
*/

// Dependencies.
import { isArray } from 'lodash'

// Helper to generate "#" URL.
function path (x) {
  if (!x) {
    // Remove cache buster.
    return window.location.hash.split('?')[0]
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

  return x
}

// Expose function.
export default path
