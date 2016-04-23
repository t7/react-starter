// Utility methods.
import utils from '../utils'

// Convert text, when "content editable" is focused.
function convertContentFocus (e) {
  const el = e.target

  // Get placeholder.
  var placeholder = el.getAttribute('placeholder')
  placeholder = utils.trim(placeholder)
  placeholder = placeholder.replace(/\s+/g, ' ')

  // Get value.
  var value = el.innerHTML
  value = utils.trim(value)
  value = value.replace(/\s+/g, ' ')

  // Is the value the placeholder?
  if (value === placeholder) {
    el.innerHTML = ''
  }
}

// Expose function.
export default convertContentFocus
