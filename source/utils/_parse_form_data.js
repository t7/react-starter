/*
  Parses all inputs in a `<form>`,
  and returns a formatted object.
*/

// Utility methods.
import utils from '../utils'

function parseFormData (form) {
  // Get the key/values.
  const str = 'input, select, textarea, [contenteditable="true"]'
  const list = form.querySelectorAll(str)

  // Build in a loop.
  const data = []

  // Loop through.
  Array.prototype.map.call(list, function (el) {
    // Check if it's disabled.
    const isDisabled = el.disabled || el.hasAttribute('disabled')

    // Exit if disabled.
    if (isDisabled) {
      return
    }

    const name = el.getAttribute('name')
    const type = el.type
    const isTextdiv = el.getAttribute('contenteditable')

    // Set in conditional.
    var value

    // If it's a <Textdiv>, treat differently.
    if (isTextdiv) {
      value = utils.convertToText(el.innerHTML)

      let placeholder = el.getAttribute('placeholder')

      if (value === placeholder) {
        value = ''
      }

    // Else, typical form element.
    } else {
      value = el.value
    }

    const item = {
      name: name,
      value: value
    }

    // Pass `checked`?
    if (type === 'radio' || type === 'checkbox') {
      item.checked = el.checked
    }

    // Add to data.
    data.push(item)
  })

  // Send back object.
  return data
}

// Expose function.
export default parseFormData
