// Dependencies.
import { isArray } from 'lodash'

// Helper for page navigation.
function navigate (x) {
  if (!x) {
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
