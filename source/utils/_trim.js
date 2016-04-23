// Utility methods.
import utils from '../utils'

// Clean up strings.
function trim (value) {
  if (!utils.exists(value)) {
    return
  }

  value = '' + value
  value = value.trim()
  value = value.replace(/\s+/g, ' ')

  return value
}

// Expose function.
export default trim
